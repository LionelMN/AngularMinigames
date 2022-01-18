export class Chip{

  private position : number;
  private team : String;
  private isInHome : boolean;
  private isInGoal : boolean;

  /**
   * Constructor de la ficha
   * @param team Color de las fichas
   */
  constructor(team:String){
    this.team = team;
    this.position = 0;
    this.isInHome = true;
    this.isInGoal = false;

  }

  /**
   * Método que saca la ficha de casa
   */
  public goOutHome() : void{
    switch(this.team){
      case 'yellow':
        this.isInHome = false;
        this.position = 4;
        break;
      case 'blue':
        this.isInHome = false;
        this.position = 21;
        break;
      case 'red':
        this.isInHome = false;
        this.position = 38;
        break;
      case 'green':
        this.isInHome = false;
        this.position = 55;
        break;
    }
  }

  /**
   * Getter of position
   * @returns posición
   */
  public getPosition() : number {
    return this.position;
  }

  /**
   * Método que cambia la posición
   * @param avance -- número de casillas que se mueven
   */
  public avance(avance : number) : void{
    this.position += avance;
  }

  /**
   * Método que devuelve la ficha a clase
   */
  public goHome() : void {
    this.position = 0;
    this.isInHome = true;
  }

  /**
   * Método que indica si la ficha está en casa
   * @return isInHome
   */
  public getIsInHome() : boolean {
    return this.isInHome;
  }

  /**
   * Método que settea la ficha en la meta
   */
  public setGoal() : void {
    this.isInGoal = true;
  }

  /**
   * Método que indica si la ficha está en la meta
   * @return isInGoal
   */
  public getIsInGoal() : boolean {
    return this.isInGoal;
  }

}
