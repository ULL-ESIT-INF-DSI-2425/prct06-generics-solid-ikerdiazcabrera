import { Collectable } from "./interface_collectable";
import { Printable } from "./interface_printable";

/**
 * 
 * Clase abstracta que implementa las interfaces Collectable y Printable
 * Es una colección genérica con posibilidad de impresión
 */
export abstract class PrintableCollection<T> implements Collectable<T>, Printable {
  /**
   * 
   * Vector con los items de la colección genérica
   */
  protected items: T[] = [];

  /**
   * 
   * @param item - Item que vamos a añadir a la colección
   * ```typescript
   * addItem(10);
   * addItem("hola");
   * ```
   */
  addItem(item: T) {
    this.items.push(item);
  }

  /**
   * 
   * @param item - Item que vamos a eliminar de la colección
   * ```typescript
   * removeItem(10);
   * removeItem("hola");
   * ```
   */
  removeItem(item: T): void {
    this.items = this.items.filter(i => i !== item);
  }

  /**
   * 
   * @param position - posición del elemento que queremos buscar
   * @returns el elemento encontrado en esa posición
   * ```typescript
   * getItem(10) = item_en_la_posición_10;
   * getItem(1) = item_en_la_posicón_1;
   * ```
   */
  getItem(position: number): T {
    return this.items[position];
  }

  /**
   * 
   * @param positions - vector de posiciones de las que queremos encontrar sus valores
   * @returns un vector con los elementos en cada una de sus posiciones
   * ```typescript
   * getNumberOfItems(1, 2, 3) = [item_posicion_1, item_posicion_2, item_posicion_3];
   * getNumberOfItems(4, 5) = [item_posicion_4, item_posicion_5];
   * ```
   */
  getNumberOfItems(positions: number[]): T[] {
    let result: T[] = [];
    for(let i = 0; i < positions.length; ++i) {
      result.push(this.items[i]);
    }
    return result;
  }

  /**
   * 
   * Función que servirá para imprimir por pantalla
   */
  abstract print(): string;
}