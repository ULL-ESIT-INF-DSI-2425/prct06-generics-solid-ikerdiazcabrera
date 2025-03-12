import * as fs from "fs";

// Interfaz que define la gestión de archivos
export interface IFileManager {
  read(): string;
  write(data: string): void;
}

// Implementación de la gestión de archivos en el sistema local
export class LocalFileManager implements IFileManager {
  constructor(private filePath: string) {}

  public read(): string {
    try {
      return fs.readFileSync(this.filePath, "utf-8");
    } catch (error) {
      throw new Error(`Error al leer el archivo: ${error.message}`);
    }
  }

  public write(data: string): void {
    try {
      fs.writeFileSync(this.filePath, data, "utf-8");
    } catch (error) {
      throw new Error(`Error al escribir en el archivo: ${error.message}`);
    }
  }
}

// Clase que maneja errores y usa la abstracción IFileManager
export class FileService {
  constructor(private fileManager: IFileManager) {}

  public safeRead(): string {
    try {
      return this.fileManager.read();
    } catch (error) {
      console.error(error.message);
      return "";
    }
  }

  public safeWrite(data: string): void {
    try {
      this.fileManager.write(data);
      console.log("Archivo escrito exitosamente.");
    } catch (error) {
      console.error(error.message);
    }
  }
}