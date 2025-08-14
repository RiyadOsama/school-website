import Hamada from "./shape.js";

export class Rectangle extends Hamada {
  constructor(w, h) {
    super(w, h);
  }
  toString() {
    let parimeter = this.x * 2 + this.y * 2;
    let area = this.x * this.y;
    console.log(`Rectangle Area = ${area} cm`);
    console.log(`Rectangle Perimeter = ${parimeter} cm`);
  }
}
