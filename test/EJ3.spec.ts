import { describe, it, expect, beforeEach, vi } from "vitest";
import * as fs from "fs";
import { LocalFileManager } from "../src/EJ3";
import { FileService } from "../src/EJ3";

// Mock de fs para evitar manipular archivos reales
vi.mock("fs");

describe("LocalFileManager", () => {
  let fileManager: LocalFileManager;
  const filePath = "test.txt";

  beforeEach(() => {
    fileManager = new LocalFileManager(filePath);
    vi.resetAllMocks(); // Reseteamos los mocks antes de cada prueba
  });

  it("debería leer un archivo correctamente", () => {
    vi.spyOn(fs, "readFileSync").mockReturnValue("Test content");
    
    const content = fileManager.read();
    expect(content).toBe("Test content");
    expect(fs.readFileSync).toHaveBeenCalledWith(filePath, "utf-8");
  });

  it("debería lanzar un error si falla la lectura", () => {
    vi.spyOn(fs, "readFileSync").mockImplementation(() => {
      throw new Error("Error al leer archivo");
    });

    expect(() => fileManager.read()).toThrow("Error al leer archivo");
  });

  it("debería escribir un archivo correctamente", () => {
    const mockWrite = vi.spyOn(fs, "writeFileSync").mockImplementation(() => {});

    fileManager.write("New content");
    expect(mockWrite).toHaveBeenCalledWith(filePath, "New content", "utf-8");
  });

  it("debería lanzar un error si falla la escritura", () => {
    vi.spyOn(fs, "writeFileSync").mockImplementation(() => {
      throw new Error("Error al escribir archivo");
    });

    expect(() => fileManager.write("Data")).toThrow("Error al escribir archivo");
  });
});

describe("FileService", () => {
  let fileService: FileService;
  let fileManagerMock: LocalFileManager;

  beforeEach(() => {
    fileManagerMock = {
      read: vi.fn(),
      write: vi.fn(),
    } as unknown as LocalFileManager;

    fileService = new FileService(fileManagerMock);
  });

  it("debería leer de manera segura", () => {
    vi.spyOn(fileManagerMock, "read").mockReturnValue("Safe read content");

    const content = fileService.safeRead();
    expect(content).toBe("Safe read content");
    expect(fileManagerMock.read).toHaveBeenCalled();
  });

  it("debería manejar errores en safeRead", () => {
    vi.spyOn(fileManagerMock, "read").mockImplementation(() => {
      throw new Error("Read error");
    });

    const content = fileService.safeRead();
    expect(content).toBe("");
  });

  it("debería escribir de manera segura", () => {
    vi.spyOn(fileManagerMock, "write").mockImplementation(() => {});

    fileService.safeWrite("Safe write content");
    expect(fileManagerMock.write).toHaveBeenCalledWith("Safe write content");
  });

  it("debería manejar errores en safeWrite", () => {
    vi.spyOn(fileManagerMock, "write").mockImplementation(() => {
      throw new Error("Write error");
    });

    const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    fileService.safeWrite("Data");

    expect(consoleSpy).toHaveBeenCalledWith("Write error");
  });
});
