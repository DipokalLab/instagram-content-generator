import { AssetType } from "../@types/asset";

const render = {
  canvasToImage: (asset: AssetType[]) => {
    const canvas = document.createElement("canvas");
    const ctx: any = canvas.getContext("2d");
    canvas.height = 1000;
    canvas.width = 1000;

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let index = 0; index < asset.length; index++) {
      const item = asset[index];
      ctx.fillStyle = "#ffffff";
      ctx.font = `${item.font.weight} ${item.font.size}px Pretendard`;
      ctx.fillText(
        item.value,
        item.location.x,
        item.location.y + item.font.size / 1.5
      );
    }

    const image = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    window.location.href = image;
  },
};

export { render };
