/* eslint-disable @typescript-eslint/lines-between-class-members */
/* eslint-disable max-classes-per-file */
abstract class Pastatas {
  prieEzero?: boolean | undefined;

  garazoPlotas: number = 20;

  constructor(
    public name: string,
    public plotis: number,
    public ilgis: number,
    public turiGaraza: boolean,
    public skypoPlotas: number,
    public gyventojuSkaicius: number = 1
  ) {}

  get visasPastatoPlotas(): number {
    return this.plotis * this.ilgis;
  }
  abstract gyvenamasPlotas(): number;
  abstract laukoPlotasGyventojui(): number;
}

class IndividualusNamas extends Pastatas {
  gyvenamasPlotas(): number {
    let plotas: number = this.visasPastatoPlotas;
    if (this.turiGaraza) {
      plotas -= this.garazoPlotas;
    }
    console.log(`${this.name}: namo plotas: ${plotas}`);
    return plotas;
  }

  laukoPlotasGyventojui(): number {
    const gyvPlot: number = this.skypoPlotas - this.visasPastatoPlotas;
    console.log(`${this.name}: namo laukoPlotasGyventojui: ${gyvPlot}`);
    return gyvPlot;
  }
}

const n1 = new IndividualusNamas('trys berzeliai', 10, 20, true, 2000);
n1.gyvenamasPlotas();
n1.laukoPlotasGyventojui();

class Daugiabutis extends Pastatas {
  butuSkaiciusPerAuksta: number = 4;

  gyvenamasPlotas(): number {
    throw new Error('Method not implemented.');
  }
  laukoPlotasGyventojui(): number {
    throw new Error('Method not implemented.');
  }
}
// class SodoNamas extends Pastatas {}

// apstarctios klaes negalima inicijuoti
// const p1 = new Pastatas(10, 20, true);
