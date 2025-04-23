export const canvas: HTMLCanvasElement = document.getElementById(
  "gameCanvas",
) as HTMLCanvasElement;
const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;
//Jeg kan simpelhent ikke få det til at fungere at den henter baggrunden hvis baggrunden befinder sig i  game-assets
export const backgroundImage = new Image();
backgroundImage.src = "game-assets/Background.png";
console.log(backgroundImage);
backgroundImage.onload = () => {
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    console.log(backgroundImage)
  };

export const redbull = new Image();
redbull.src = "../game-assets/Redbull.png";
console.log(redbull);
redbull.onload = () => {
    console.log(redbull)
  };

