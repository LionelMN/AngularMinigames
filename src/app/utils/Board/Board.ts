import { Tile } from '../Tile/Tile';


export class Board {

  tiles : Tile[] = [];
  private static safeTiles = [4,13,17,21,30,34,38,47,51,55,64,68];

  /**
   * Constructor del tablero
   */
  constructor() {
    for(let i : number = 0; i < 68; i++){
      if(Board.safeTiles.includes(i)){
        this.tiles.push(new Tile(true));
      }
        this.tiles.push(new Tile(false));
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
