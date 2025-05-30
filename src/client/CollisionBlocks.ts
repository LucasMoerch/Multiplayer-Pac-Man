import { collisions } from "./Collisionstext";
import { bgCtx } from "./Canvas";
class Boundaries {
  public width: number = 32;
  public height: number = 32;
  constructor(
    public x: number,
    public y: number,
  ) {}

  draw() {
    bgCtx.fillStyle = "red";
    bgCtx.fillRect(this.x, this.y, this.width, this.height);
  }
}
//sådan her opretter du en ny collision block, parametrene er hvilke x og y koordinat blokken skal sættes på,
// så skal du bare huske at kalde testboundaries.draw(); hvis du gerne ville kunne se den på skærmen

// What is in the CollisionBlock object

// Console logging to confirm the positions of the collision blocks, delete at a later stage.
const boundaryArray: Boundaries[] = [];
for (let i = 0, j = -1; i < collisions.length; i++) {
  if (i % 52 === 0) {
    j++;
  }
  if (collisions[i] === 0) {
    continue;
    // Doesn't insert anything if the value in the file is '0'
  } else if (collisions[i] === 1) {
    const boundaries = new Boundaries(32 * (i % 52), 32 * j);
    boundaryArray.push(boundaries);
    //   boundaries.draw();
  } else {
    console.log("Error in file reading");
  }
}
export { Boundaries, boundaryArray };
