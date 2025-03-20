/**
 * Tipo que representa las acciones a realizar sobre el Logger
 */
export type Actions = "Crear" | "Borrar" | "Modificar" | "Copiar" | "Iniciar Sesión";

/**
 * Tipo que representa un Log a almacenar
 */
export type Log = {
  user: string;
  action: Actions;
  date: Date;
}

/**
 * 
 * Clase que presenta un patrón de diseño Singleton para un Logger
 */
export class LoggerInstance implements Iterable<Log> {
  /**
   * Array de Items que almacenaremos en el Log
   */
  private logs: Log[];

  /**
   * INSTANCIA DE CLASE ÚNICA EN SINGLETON
   * (Variable de clase)
   */
  private static loggerInstance: LoggerInstance;

  /**
   * Constructor de la clase, privado
   */
  private constructor() {
    this.logs = [];
  }

  /**
   * Único método por el que podemos interactuar con la instancia de la clase
   * @returns Devuelve la única instancia de la clase (y la crea si no está creada)
   */
  public static getLoggerInstance(): LoggerInstance {
    if (!LoggerInstance.loggerInstance) {
      LoggerInstance.loggerInstance = new LoggerInstance();
    }
    return LoggerInstance.loggerInstance;
  }

  /**
   * Función que añade un log a la instancia
   * @param item - Log que vamos a añadir a la clase
   */
  addItem(item: Log) {
    LoggerInstance.loggerInstance.logs.push(item);
  }

  /**
   * Función para buscar un elemento
   * @param index - índice del elemento que queremos ver
   * @returns Devuelve el elemento
   */
  getItem(index: number) {
    if (index >= LoggerInstance.loggerInstance.getNumberOfItems()) {
      return undefined;
    }
    return LoggerInstance.loggerInstance.logs[index];
  }

  /**
   * 
   * @returns Devuelve el número de logs almacenados en la instancia
   */
  getNumberOfItems() {
    return LoggerInstance.loggerInstance.logs.length;
  }

  /**
   * 
   * @returns Devuelve los items de la instancia
   */
  getItems() {
    return LoggerInstance.loggerInstance.logs;
  }

  /**
   * 
   * @param items - sirve como inicializador
   */
  setItems(items: Log[]) {
    LoggerInstance.loggerInstance.logs = items;
  }


  /**
   * 
   * @param user - usuario del que queremos buscar sus logs
   * @returns devuelve los logs encontrados del usuario
   */
  searchByUser(user: string) {
    let result = this.logs.filter((item) => item.user === user);
    return result;
  }

  /**
   * 
   * @param action - accion que queremos observar
   * @returns devuelve los logs de dicha acción
   */
  searchByAction(action: Actions) {
    let result = this.logs.filter((item) => item.action === action);
    return result;
  }

  /**
   * 
   * @param date1 - primera fecha
   * @param date2 - segunda fecha
   * @returns devuelve los logs realizados entre las dos fechas dadas
   */
  searchBetweenDates(date1: Date, date2: Date) {
    let result = this.logs.filter((item) => item.date >= date1 && item.date <= date2);
    return result;
  }

  /**
   * Implementamos la interfaz iterable para poder iterar directamente sobre nuestros logs
   * @returns Devuelve los valores como un IterableIterator de Logs
   */
  [Symbol.iterator](): IterableIterator<Log> {
    return this.logs.values();
  }
}