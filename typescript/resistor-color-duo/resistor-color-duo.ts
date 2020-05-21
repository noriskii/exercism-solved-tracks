export class ResistorColor {
  //Black, Brown, Red, Orange, Yellow, Green, Blue, Violet, Grey, White
  private colors: string[];

  constructor(colors: string[]) {
    this.colors = colors;

    if(this.colors.length < 2) 
      throw new Error("At least two colors need to be present");
  }

  value = (): number => {
  
    const pattern: string[] = ["black", "brown", "red", "orange", "yellow", "green",
                                "blue", "violet", "grey", "white"];

    const resistorId = pattern.indexOf(this.colors[0].toLowerCase()).toString() 
                    + pattern.indexOf(this.colors[1].toLowerCase()).toString();

    return parseInt(resistorId);
  };
}
