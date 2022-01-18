export class Dice {

  private face : number;

  /**
   * Constructor del dado
   */
  constructor() {
    this.face = 0;
  }

  /**
   * Método que simula el lanzamiento de un dado de 6 caras
   */
  public throwDice () : void{
    this.face = Math.floor(Math.random() * 6 + 1)
  }

  /**
   * Getter of face
   * @returns cara que ha salido en el dado
   */
  public getFace() : number{
    return this.face;
  }

  /**
   * Setter of face
   * @param cara que se va a settear al dado
   */
  public setFace(cara) : void {
    this.face = cara;
  }
}
