import { AssetType } from "../@types/asset";

class Render {
  canvas: HTMLCanvasElement;
  ctx: any;
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");

    this.canvas.height = 1000;
    this.canvas.width = 1000;
  }

  public canvasToImage = (asset: AssetType[]) => {
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    for (let index = 0; index < asset.length; index++) {
      const item = asset[index];

      if (item.type == "text") {
        this.renderText(item);
      } else if (item.type == "textarea") {
        this.renderTextArea(item);
      }
    }

    const image = this.canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");

    const link = document.createElement("a");

    link.download = `icg_${Math.random()}.png`;

    link.href = image;

    link.click();
    //window.location.href = image;
  };

  private renderText = (item: AssetType) => {
    this.ctx.fillStyle = "#ffffff";
    this.ctx.font = `${item.font.weight} ${item.font.size}px Pretendard`;
    this.ctx.fillText(
      item.value,
      item.location.x,
      item.location.y + item.font.size / 1.5
    );
  };

  private renderTextArea = (item: AssetType) => {
    const splitedValue = item.value.split("\n");
    const lineHeight = 40;
    for (let index = 0; index < splitedValue.length; index++) {
      const atomValue = splitedValue[index];
      let x = item.location.x;
      let y =
        item.location.y +
        (item.font.size / 1.5) * (index + 1) +
        lineHeight * index;

      this.ctx.fillStyle = "#ffffff";
      this.ctx.font = `${item.font.weight} ${item.font.size}px Pretendard`;
      this.ctx.fillText(atomValue, x, y);
    }
  };
}

export { Render };
