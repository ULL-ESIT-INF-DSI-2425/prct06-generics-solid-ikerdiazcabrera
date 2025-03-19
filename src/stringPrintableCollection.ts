import { PrintableCollection } from "./printableCollection.js";

/**
 * 
 * Clase que extiende la PrintableCollecion y usa como parámetro "string", volviendola concreta
 * Implementa el método print de su clase abstracta
 */
export class StringPrintableCollection extends PrintableCollection<string> {
  /**
   * 
   * Constructor de la clase
   * @param items - vector con elementos a inicializar en la coleccion
   */
  constructor(items: string[]) {
    super();
    this.items = items;
  }

  /**
   * 
   * Función que servirá para imprimir por pantalla
   * @returns Una string con las cadenas de la colección separados por comas
   */
  print() {
    let result: string = "";
    for(let i = 0; i < this.items.length - 1; ++i) {
      result = result + this.items[i] + ", ";
    }
    result += this.items[this.items.length - 1];
    return result;
  }
}