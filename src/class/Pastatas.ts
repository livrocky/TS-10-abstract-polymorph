/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-classes-per-file */
// alterantyva abstractciai klasei kai nera funkcijonalumo
interface PastatasI {
  name: string;
  plotis: number;
  ilgis: number;
  turiGaraza: boolean;
  skypoPlotas: number;
  prieEzero?: boolean | undefined;
  garazoPlotas: number;
  readonly visasPastatoPlotas: number;
  gyvenamasPlotas(): number;
  laukoPlotasGyventojui(): number;
}

abstract class Pastatas {
  prieEzero?: boolean | undefined;

  garazoPlotas: number = 20;

  constructor(
    protected name: string,
    protected plotis: number,
    protected ilgis: number,
    protected turiGaraza: boolean,
    protected skypoPlotas: number
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

const n1: IndividualusNamas = new IndividualusNamas('trys berzeliai', 10, 20, true, 2000);
const n2 = new IndividualusNamas('Vilniaus aidai', 30, 50, false, 10000);
n1.gyvenamasPlotas();
n1.laukoPlotasGyventojui();

class Daugiabutis extends Pastatas {
  butuSkaiciusPerAuksta: number = 4;

  constructor(
    name: string,
    plotis: number,
    ilgis: number,
    turiGaraza: boolean,
    skypoPlotas: number,
    public gyventojuSkaicius: number = 1
  ) {
    super(name, plotis, ilgis, turiGaraza, skypoPlotas);
  }

  gyvenamasPlotas(): number {
    const aukstuSkaicius: number = Math.ceil(this.gyventojuSkaicius / this.butuSkaiciusPerAuksta);
    const plotas: number = this.visasPastatoPlotas * aukstuSkaicius;
    console.log(`${this.name}: namo gyvenamasPlotas per ${aukstuSkaicius} aukstus yra ${plotas}`);
    return plotas;
  }

  laukoPlotasGyventojui(): number {
    const gyvPlot: number = (this.skypoPlotas - this.visasPastatoPlotas) / this.gyventojuSkaicius;
    console.log(`${this.name}: namo laukoPlotasGyventojui: ${gyvPlot}`);
    return gyvPlot;
  }
}

const db1 = new Daugiabutis('Centro Apartametai', 15, 45, false, 2500, 16);
const db2 = new Daugiabutis('Uzmiescio Apartametai', 25, 45, false, 5500, 25);
db1.gyvenamasPlotas();
db1.laukoPlotasGyventojui();
console.log('db1.visasPastatoPlotas ===', db1.visasPastatoPlotas);

// class SodoNamas extends Pastatas {}

// apstarctios klaes negalima inicijuoti
// const p1 = new Pastatas(10, 20, true);

const pastatai: Pastatas[] = [n1, n2, db1, db2];

// polymorph example
// skirtingai apskaiciuojamos reiksmes gaunamos to pacio metodo pagalba.
const laukoPlotai: number[] = pastatai.map((el: Pastatas) => el.laukoPlotasGyventojui());
console.log('laukoPlotai ===', laukoPlotai);
