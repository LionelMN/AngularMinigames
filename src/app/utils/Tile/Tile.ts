export class Tile {

  private static safeTiles = [4,13,17,21,30,34,38,47,51,55,64,68];

  private static number : number = 0;
  private tileNumber : number;
  private occupation : number;
  private safe : boolean;

  constructor() {
    Tile.number ++;
    this.tileNumber = this.getStaticNumber();
    this.occupation = 0;
    this.safe = false;
    this.setSafe();
  }

  private getStaticNumber() : number {
    return Tile.number;
  }

  private getSafeTiles() : number[]{
    return Tile.safeTiles;
  }

  public getTileNumber() : number{
    return this.tileNumber;
  }

  public getOccupation() : number{
    return this.occupation;
  }

  public increasseOccupation() : void{
    this.occupation++;
  }

  public decreaseOccupation() : void{
    this.occupation--;
  }

  public getSafe() : boolean{
    return this.safe;
  }

  private setSafe() : void{
    if(this.getSafeTiles().includes(this.tileNumber)){
      this.safe = true;
    }
  }

}
