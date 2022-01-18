import { Tile } from '../Tile/Tile';


export class OcaBoard {

  tiles : Tile[] = [];
  private static safeTiles = [4,13,17,21,30,34,38,47,51,55,64,68];


  /**
   * Constructor del tablero
   */
  constructor() {
    for(let i : number = 0; i < 63; i++){
        if(OcaBoard.safeTiles.includes(i)){
          this.tiles.push(new Tile(true));
        }
          this.tiles.push(new Tile(false));
      }
  }
}
