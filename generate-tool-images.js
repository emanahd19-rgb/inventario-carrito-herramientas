const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const { execFileSync } = require("node:child_process");

const projectRoot = __dirname;
const source = fs.readFileSync(path.join(projectRoot, "app.js"), "utf8");
const dataOnly = `${source.split("const app =")[0]}
globalThis.__catalogData = { drawers };`;
const context = {};
vm.runInNewContext(dataOnly, context);

const outputDirectory = path.join(projectRoot, "images", "tools");
fs.mkdirSync(outputDirectory, { recursive: true });

function dimensions(file) {
  const value = execFileSync("identify", ["-format", "%w %h", file], {
    encoding: "utf8"
  }).trim();
  return value.split(/\s+/).map(Number);
}

function cropTool(sourceFile, outputFile, item) {
  const [imageWidth, imageHeight] = dimensions(sourceFile);
  const isVertical = item.hitH > item.hitW * 2;
  const isHorizontal = item.hitW > item.hitH * 2;
  const widthPercent = Math.max(
    5,
    Math.min(88, item.hitW * (isVertical ? 2 : 1.2))
  );
  const heightPercent = Math.max(
    5,
    Math.min(88, item.hitH * (isHorizontal ? 2 : 1.45))
  );
  const cropWidth = Math.max(40, Math.round(imageWidth * widthPercent / 100));
  const cropHeight = Math.max(40, Math.round(imageHeight * heightPercent / 100));
  const centerX = imageWidth * item.x / 100;
  const centerY = imageHeight * item.y / 100;
  const cropX = Math.max(0, Math.min(imageWidth - cropWidth, Math.round(centerX - cropWidth / 2)));
  const cropY = Math.max(0, Math.min(imageHeight - cropHeight, Math.round(centerY - cropHeight / 2)));

  execFileSync("convert", [
    sourceFile,
    "-crop", `${cropWidth}x${cropHeight}+${cropX}+${cropY}`,
    "+repage",
    "-resize", "720x400",
    "-background", "#f7f7f7",
    "-gravity", "center",
    "-extent", "800x480",
    "-quality", "88",
    outputFile
  ]);
}

for (const drawer of context.__catalogData.drawers) {
  if (!drawer.tools.length) continue;
  const sourceFile = path.resolve(projectRoot, drawer.image.replace("./", ""));
  drawer.tools.forEach((item, index) => {
    const name = `cajon-${drawer.id}-${String(index + 1).padStart(2, "0")}.webp`;
    cropTool(sourceFile, path.join(outputDirectory, name), item);
  });

  if (drawer.detailTools?.length) {
    const detailSource = path.resolve(projectRoot, drawer.detailImage.replace("./", ""));
    drawer.detailTools.forEach((item, index) => {
      const name = `cajon-8-detalle-${String(index + 1).padStart(2, "0")}.webp`;
      cropTool(detailSource, path.join(outputDirectory, name), item);
    });
  }
}

console.log("Tool images generated.");
