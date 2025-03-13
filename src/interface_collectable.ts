/**
 * 
 * Interfaz que se utiliza para manejar una colección genérica
 */
export interface Collectable<T> {
  /**
   * 
   * @param item - Item que vamos a añadir a la colección
   * ```typescript
   * addItem(10);
   * addItem("hola");
   * ```
   */
  addItem(item: T): void; 

  /**
   * 
   * @param item - Item que vamos a eliminar de la colección
   * ```typescript
   * removeItem(10);
   * removeItem("hola");
   * ```
   */
  removeItem(item: T): void;

  /**
   * 
   * @param position - posición del elemento que queremos buscar
   * @returns el elemento encontrado en esa posición
   * ```typescript
   * getItem(10) = item_en_la_posición_10;
   * getItem(1) = item_en_la_posicón_1;
   * ```
   */
  getItem(position: number): T;
  
  /**
   * 
   * @param positions - vector de posiciones de las que queremos encontrar sus valores
   * @returns un vector con los elementos en cada una de sus posiciones
   * ```typescript
   * getNumberOfItems(1, 2, 3) = [item_posicion_1, item_posicion_2, item_posicion_3];
   * getNumberOfItems(4, 5) = [item_posicion_4, item_posicion_5];
   * ```
   */
  getNumberOfItems(positions: number[]): T[];
}