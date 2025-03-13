import { PrintableCollection } from "./printableCollection";

/**
 * 
 * Clase que extiende la PrintableCollecion y usa como parámetro "number", volviendola concreta
 * Implementa el método print de su clase abstracta
 */
export class NumericPrintableCollection extends PrintableCollection<number> {
  /**
   * 
   * Constructor de la clase
   * @param items - vector con elementos a inicializar en la coleccion
   */
  constructor(items: number[]) {
    super();
    this.items = items;
  }

  /**
   * 
   * Función que servirá para imprimir por pantalla
   * @returns Una string con los números de la colección separados por comas
   */
  print() {
    let result: string = "";
    for(let i = 0; i < this.items.length - 1; ++i) {
      result = result + this.items[i].toString() + ", ";
    }
    result += this.items[this.items.length - 1];
    return result;
  }
}