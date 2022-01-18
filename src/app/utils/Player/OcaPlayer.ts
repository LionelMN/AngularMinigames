import { Chip } from '../Chip/Chip';

/**
 * Clase del jugador
 */
export class OcaPlayer {

  private static number = 0;
  private numberPlayer : number;
  private name : String;
  private chip : Chip;

  /**
   * Constructor de la clase
   * @param name -- String que marca el equipo al que pertenece al jugador
   */
  constructor(name : String) {
    OcaPlayer.number ++;
    this.numberPlayer = OcaPlayer.number;
    this.name = name;
    this.createChip();
  }

  /**
   * Getter del número del jugador (1-4)
   * @returns -- number número del jugador
   */
  public getNumber() : number{
    return this.numberPlayer;
  }

  /**
   * Getter del name
   * @returns -- String equipo al que pertenece el jugador
   */
  private getName() : String {
    return this.name;
  }

  /**
   * Método que crea las 4 fichas que pertenecen al jugador
   */
  private createChip(){
    this.chip = new Chip(this.name);
  }

  /**
   * Getter of chip
   * @returns Chip -- Devuelve las fichas del jugador
   */
  public getChip() : Chip{
    return this.chip;
  }

  /**
   * Método que mueve una ficha
   * @param whichChip -- indica que ficha es la que se mueve
   * @param avance -- indica cuanto se mueve
   */
  public moveChip(avance : number){
    this.chip.avance(avance);
  }
}
