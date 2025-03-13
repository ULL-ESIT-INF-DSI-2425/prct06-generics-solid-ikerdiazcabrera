import { describe, it, expect, beforeEach } from "vitest";
import { SeriesCollection, PeliculasCollection, DocumentalesCollection } from "../src/EJ1"; // Ajusta la ruta según tu estructura
import { Serie, Pelicula, Documental } from "../src/EJ1"; // Ajusta la ruta según tu estructura

describe("SeriesCollection", () => {
  let seriesCollection: SeriesCollection;

  beforeEach(() => {
    seriesCollection = new SeriesCollection([
      new Serie("Breaking Bad", 2008, 5),
      new Serie("Stranger Things", 2016, 4),
    ]);
  });

  it("debería agregar una serie", () => {
    const newSerie = new Serie("Dark", 2017, 3);
    seriesCollection.addItem(newSerie);
    expect(seriesCollection.listAll()).toContain(newSerie);
  });

  it("debería eliminar una serie", () => {
    const serieToRemove = new Serie("Breaking Bad", 2008, 5);
    seriesCollection.removeItem(serieToRemove);
    expect(seriesCollection.listAll()).not.toContain(serieToRemove);
  });

  it("debería buscar una serie por nombre", () => {
    const result = seriesCollection.findByName("Breaking");
    expect(result.length).toBe(1);
    expect(result[0].title).toBe("Breaking Bad");
  });

  it("debería buscar una serie por año", () => {
    const result = seriesCollection.findByYear(2016);
    expect(result.length).toBe(1);
    expect(result[0].title).toBe("Stranger Things");
  });

  it("debería listar todas las series", () => {
    expect(seriesCollection.listAll().length).toBe(2);
  });
});

describe("PeliculasCollection", () => {
  let peliculasCollection: PeliculasCollection;

  beforeEach(() => {
    peliculasCollection = new PeliculasCollection([
      new Pelicula("Inception", 2010, 148),
      new Pelicula("Interstellar", 2014, 169),
    ]);
  });

  it("debería agregar una película", () => {
    const newPelicula = new Pelicula("Tenet", 2020, 150);
    peliculasCollection.addItem(newPelicula);
    expect(peliculasCollection.listAll()).toContain(newPelicula);
  });

  it("debería eliminar una película", () => {
    const peliculaToRemove = new Pelicula("Inception", 2010, 148);
    peliculasCollection.removeItem(peliculaToRemove);
    expect(peliculasCollection.listAll()).not.toContain(peliculaToRemove);
  });

  it("debería buscar una película por nombre", () => {
    const result = peliculasCollection.findByName("Interstellar");
    expect(result.length).toBe(1);
    expect(result[0].title).toBe("Interstellar");
  });

  it("debería buscar una película por año", () => {
    const result = peliculasCollection.findByYear(2010);
    expect(result.length).toBe(1);
    expect(result[0].title).toBe("Inception");
  });

  it("debería listar todas las películas", () => {
    expect(peliculasCollection.listAll().length).toBe(2);
  });
});

describe("DocumentalesCollection", () => {
  let documentalesCollection: DocumentalesCollection;

  beforeEach(() => {
    documentalesCollection = new DocumentalesCollection([
      new Documental("Nuestro Planeta", 2019, "Naturaleza"),
      new Documental("Cosmos", 1980, "Ciencia"),
    ]);
  });

  it("debería agregar un documental", () => {
    const newDocumental = new Documental("Planeta Azul", 2001, "Océanos");
    documentalesCollection.addItem(newDocumental);
    expect(documentalesCollection.listAll()).toContain(newDocumental);
  });

  it("debería eliminar un documental", () => {
    const documentalToRemove = new Documental("Nuestro Planeta", 2019, "Naturaleza");
    documentalesCollection.removeItem(documentalToRemove);
    expect(documentalesCollection.listAll()).not.toContain(documentalToRemove);
  });

  it("debería buscar un documental por nombre", () => {
    const result = documentalesCollection.findByName("Cosmos");
    expect(result.length).toBe(1);
    expect(result[0].title).toBe("Cosmos");
  });

  it("debería buscar un documental por año", () => {
    const result = documentalesCollection.findByYear(1980);
    expect(result.length).toBe(1);
    expect(result[0].title).toBe("Cosmos");
  });

  it("debería listar todos los documentales", () => {
    expect(documentalesCollection.listAll().length).toBe(2);
  });
});
