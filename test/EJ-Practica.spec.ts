import { describe, it, expect } from "vitest";
import { NumericPrintableCollection } from '../src/numericPrintableCollection.js';
import { StringPrintableCollection } from '../src/stringPrintableCollection.js';

describe("NumericPrintableCollection", () => {
  let numberCollection: NumericPrintableCollection;

  it("existe una instancia de la clase", () => {
    let numberCollection: NumericPrintableCollection;
    numberCollection = new NumericPrintableCollection([]);
    expect(numberCollection instanceof NumericPrintableCollection).toBe(true);
  })

  it("addItem existe", () => {
    numberCollection = new NumericPrintableCollection([]);
    expect(NumericPrintableCollection.prototype.addItem).not.toBeUndefined();
  })

  it("removeItem existen", () => {
    numberCollection = new NumericPrintableCollection([]);
    expect(NumericPrintableCollection.prototype.removeItem).not.toBeUndefined();
  })

  it("getItem existen", () => {
    numberCollection = new NumericPrintableCollection([]);
    expect(NumericPrintableCollection.prototype.getItem).not.toBeUndefined();
  })

  it("getNumberItems existen", () => {
    numberCollection = new NumericPrintableCollection([]);
    expect(NumericPrintableCollection.prototype.getNumberOfItems).not.toBeUndefined();
  })

  it("debería agregar un número", () => {
    let numberCollection: NumericPrintableCollection;
    numberCollection = new NumericPrintableCollection([]);
    const n1: number = 10;
    numberCollection.addItem(n1);
    expect(numberCollection.getItem(0)).toBe(n1);
  });

  it("debería eliminar un numero", () => {
    numberCollection = new NumericPrintableCollection([]);
    const n1: number = 10;
    numberCollection.addItem(n1);
    expect(numberCollection.getItem(0)).toBe(n1);
    numberCollection.removeItem(n1);
    expect(numberCollection.getItem(0)).toBeUndefined();
  });

  it("debería devolver un número", () => {
    numberCollection = new NumericPrintableCollection([]);
    const n1: number = 10;
    const n2: number = 20;
    numberCollection.addItem(n1);
    numberCollection.addItem(n2);
    expect(numberCollection.getItem(1)).toBe(n2);
    expect(numberCollection.getItem(0)).toBe(n1);
  });

  it ("debería devolver un vector de números", () => {
    numberCollection = new NumericPrintableCollection([]);
    const n1: number = 10;
    const n2: number = 20;
    const n3: number = 30;
    const n4: number = 40;
    numberCollection.addItem(n1);
    expect(numberCollection.getItem(0)).toBe(n1);
    numberCollection.addItem(n2);
    expect(numberCollection.getItem(1)).toBe(n2);
    numberCollection.addItem(n3);
    expect(numberCollection.getItem(2)).toBe(n3);
    numberCollection.addItem(n4);
    expect(numberCollection.getItem(3)).toBe(n4);
    expect(numberCollection.getNumberOfItems([0, 1, 2, 3])).toStrictEqual([n1, n2, n3, n4]);
  })

  it("debería imprimir la colección entera", () => {
    numberCollection = new NumericPrintableCollection([]);
    const n1: number = 10;
    const n2: number = 20;
    numberCollection.addItem(n1);
    numberCollection.addItem(n2);
    expect(numberCollection.print()).toBe("10, 20")
  })
});




describe("StringPrintableCollection", () => {
  let stringCollection: StringPrintableCollection;

  it("existe una instancia de la clase", () => {
    let stringCollection: StringPrintableCollection;
    stringCollection = new StringPrintableCollection([]);
    expect(stringCollection instanceof StringPrintableCollection).toBe(true);
  }) 

  it("addItem existe", () => {
    stringCollection = new StringPrintableCollection([]);
    expect(StringPrintableCollection.prototype.addItem).not.toBeUndefined();
  })

  it("removeItem existen", () => {
    stringCollection = new StringPrintableCollection([]);
    expect(StringPrintableCollection.prototype.removeItem).not.toBeUndefined();
  })

  it("getItem existen", () => {
    stringCollection = new StringPrintableCollection([]);
    expect(StringPrintableCollection.prototype.getItem).not.toBeUndefined();
  })

  it("getNumberItems existen", () => {
    stringCollection = new StringPrintableCollection([]);
    expect(StringPrintableCollection.prototype.getNumberOfItems).not.toBeUndefined();
  })

  it("debería agregar un número", () => {
    stringCollection = new StringPrintableCollection([]);
    const s1: string = "hola";
    stringCollection.addItem(s1);
    expect(stringCollection.getItem(0)).toBe(s1);
  });

  it("debería eliminar un numero", () => {
    stringCollection = new StringPrintableCollection([]);
    const s1: string = "hola";
    stringCollection.addItem(s1);
    expect(stringCollection.getItem(0)).toBe(s1);
    stringCollection.removeItem(s1);
    expect(stringCollection.getItem(0)).toBeUndefined();
  });

  it("debería devolver un número", () => {
    stringCollection = new StringPrintableCollection([]);
    const s1: string = "hola";
    const s2: string = "adios";
    stringCollection.addItem(s1);
    stringCollection.addItem(s2);
    expect(stringCollection.getItem(1)).toBe(s2);
    expect(stringCollection.getItem(0)).toBe(s1);
  });

  it ("debería devolver un vector de números", () => {
    stringCollection = new StringPrintableCollection([]);
    const s1: string = "hola";
    const s2: string = "adios";
    const s3: string = "como";
    const s4: string = "estas";
    stringCollection.addItem(s1);
    expect(stringCollection.getItem(0)).toBe(s1);
    stringCollection.addItem(s2);
    expect(stringCollection.getItem(1)).toBe(s2);
    stringCollection.addItem(s3);
    expect(stringCollection.getItem(2)).toBe(s3);
    stringCollection.addItem(s4);
    expect(stringCollection.getItem(3)).toBe(s4);
    expect(stringCollection.getNumberOfItems([0, 1, 2, 3])).toStrictEqual([s1, s2, s3, s4]);
  })

  it("debería imprimir la colección entera", () => {
    stringCollection = new StringPrintableCollection([]);
    const s1: string = "hola";
    const s2: string = "adios";
    stringCollection.addItem(s1);
    stringCollection.addItem(s2);
    expect(stringCollection.print()).toBe("hola, adios")
  })
});