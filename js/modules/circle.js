import Hamada from "./shape.js";

export class Circle extends Hamada {
  constructor(r) {
    super(r);
  }
  toString() {
    let parimeter = Math.round(2 * Math.PI * this.x);
    let area = Math.round(Math.PI * this.x ** 2);
    console.log(`Circle Area = ${area} cm`);
    console.log(`Circle Perimeter = ${parimeter} cm`);
  }
}
