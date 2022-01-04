import { Chip } from '../Chip/Chip';

/**
 * Clase del jugador
 */
export class Player {

  private static number = 0;
  private numberPlayer : number;
  private team : String;
  private chips : Chip[] = [];

  /**
   * Constructor de la clase
   * @param team -- String que marca el equipo al que pertenece al jugador
   */
  constructor(team : String) {
    Player.number ++;
    this.numberPlayer = Player.number;
    this.team = team;
    this.createChips();
  }

  /**
   * Getter del número del jugador (1-4)
   * @returns -- number número del jugador
   */
  public getNumber() : number{
    return this.numberPlayer;
  }

  /**
   * Getter del team
   * @returns -- String equipo al que pertenece el jugador
   */
  private getTeam() : String {
    return this.team;
  }

  /**
   * Método que crea las 4 fichas que pertenecen al jugador
   */
  private createChips(){
    for (let index = 0; index < 4; index++) {
      this.chips.push(new Chip(this.getTeam()));
    }
  }

  /**
   * Getter of chip
   * @returns Chip -- Devuelve las fichas del jugador
   */
  public getChips() : Chip[]{
    return this.chips;
  }

  /**
   * Método que saca una fichas de casa
   * @param whichChip -- indica que ficha es la que se saca
   */
  public putChipOutHome(whichChip : number){
    console.log(whichChip)
    this.chips[whichChip].goOutHome();
  }

  /**
   * Método que mete una fichas de casa
   * @param whichChip -- indica que ficha es la que se mete
   */
  public putChipInHome(whichChip : number){
    this.chips[whichChip].goHome();
  }

  /**
   * Método que mueve una ficha
   * @param whichChip -- indica que ficha es la que se mueve
   * @param avance -- indica cuanto se mueve
   */
  public moveChip(whichChip : number, avance : number){
    this.chips[whichChip].avance(avance);
  }
}
