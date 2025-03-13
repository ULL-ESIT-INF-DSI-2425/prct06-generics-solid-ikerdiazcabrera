export interface Streamable<T> {
  addItem(item: T): void;  // Agregar un elemento a la colección
  removeItem(item: T): void;  // Eliminar un elemento de la colección
  findByName(name: string): T[];  // Buscar elementos por nombre
  findByYear(year: number): T[];  // Buscar elementos por año
  listAll(): T[];  // Listar todos los elementos
}

export abstract class BasicStreamableCollection<T> implements Streamable<T> {
  protected items: T[];  // Lista protegida de elementos

  constructor(items: T[]) {
    this.items = items;
  }

  addItem(item: T): void {
    this.items.push(item);
  }

  removeItem(item: T): void {
    this.items = this.items.filter(i => i !== item);
  }

  listAll(): T[] {
    return this.items;
  }

  abstract findByName(name: string): T[];
  abstract findByYear(year: number): T[];
}

export class Serie {
  constructor(public title: string, public year: number, public seasons: number) {}
}

export class Pelicula {
  constructor(public title: string, public year: number, public duration: number) {}
}

export class Documental {
  constructor(public title: string, public year: number, public topic: string) {}
}

export class SeriesCollection extends BasicStreamableCollection<Serie> {
  findByName(name: string): Serie[] {
    return this.items.filter(serie => serie.title.toLowerCase().includes(name.toLowerCase()));
  }

  findByYear(year: number): Serie[] {
    return this.items.filter(serie => serie.year === year);
  }
}

export class PeliculasCollection extends BasicStreamableCollection<Pelicula> {
  findByName(name: string): Pelicula[] {
    return this.items.filter(pelicula => pelicula.title.toLowerCase().includes(name.toLowerCase()));
  }

  findByYear(year: number): Pelicula[] {
    return this.items.filter(pelicula => pelicula.year === year);
  }
}

export class DocumentalesCollection extends BasicStreamableCollection<Documental> {
  findByName(name: string): Documental[] {
    return this.items.filter(documental => documental.title.toLowerCase().includes(name.toLowerCase()));
  }

  findByYear(year: number): Documental[] {
    return this.items.filter(documental => documental.year === year);
  }
}
