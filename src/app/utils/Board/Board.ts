import { Tile } from '../Tile/Tile';


export class Board {

  tiles : Tile[] = [];

  /**
   * Constructor del tablero
   */
  constructor() {
    for(let i : number = 0; i < 68; i++){
      this.tiles.push(new Tile());
    }
  }

  /**
   * Método que aumenta la ocupación de una casilla
   * @param whichTile Indica la casilla
   */
  public increasePopulationofTile(whichTile : number){
    this.tiles[whichTile].increasseOccupation();
  }

  /**
   * Método que decrementa la ocupación de una casilla
   * @param whichTile Indicia la casilla
   */
  public decreasePopulationofTile(whichTile : number){
    this.tiles[whichTile].decreaseOccupation();
  }
}
