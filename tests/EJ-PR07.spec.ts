import { describe, it, expect } from "vitest";
import { LoggerInstance, Log } from "../src/EJ-PR07.ts"

describe("NumericPrintableCollection", () => {
  const myLoggerInstance =  LoggerInstance.getLoggerInstance();
  const logger_item1: Log = {
    user: "Iker",
    action: "Iniciar Sesión",
    date: new Date(2025, 3, 15, 10, 10, 0)
  };
  const logger_item2: Log = {
    user: "Iker",
    action: "Modificar",
    date: new Date(2025, 3, 15, 10, 15, 0)
  };
  const logger_item3: Log = {
    user: "Segredo",
    action: "Iniciar Sesión",
    date: new Date(2025, 3, 15, 10, 30, 0)
  };

  it("getItems existe", () => {
    expect(LoggerInstance.prototype.getItems).not.toBeUndefined();
  })

  it("searchBetweenDates existe", () => {
    expect(LoggerInstance.prototype.searchBetweenDates).not.toBeUndefined();
  })

  it("searchByAction existe", () => {
    expect(LoggerInstance.prototype.searchByAction).not.toBeUndefined();
  })

  it("searchByUser existe", () => {
    expect(LoggerInstance.prototype.searchByUser).not.toBeUndefined();
  })

  it("debería agregar un log", () => {
    myLoggerInstance.addItem(logger_item1);
    expect(myLoggerInstance.getItem(0)).toBe(logger_item1);
  });

  it("debería encontrar los logs del mismo usuario", () => {
    myLoggerInstance.addItem(logger_item2);
    expect(myLoggerInstance.getItem(1)).toBe(logger_item2);
    expect(myLoggerInstance.searchByUser("Iker")).toStrictEqual([logger_item1, logger_item2]);
  });

  it("debería encontrar los logs que son de inicio de sesión", () => {
    myLoggerInstance.addItem(logger_item3);
    expect(myLoggerInstance.getItem(2)).toBe(logger_item3);
    expect(myLoggerInstance.searchByAction("Iniciar Sesión")).toStrictEqual([logger_item1, logger_item3]);
  });

  it("debería encontrar los logs entre las dos horas", () => {
    expect(myLoggerInstance.getItem(0)).toBe(logger_item1);
    expect(myLoggerInstance.getItem(1)).toBe(logger_item2);
    expect(myLoggerInstance.getItem(2)).toBe(logger_item3);
    
    const date1 = new Date(2025, 3, 15, 10, 9, 0);
    const date2 = new Date(2025, 3, 15, 10, 35, 0);
    expect(myLoggerInstance.searchBetweenDates(date1, date2)).toStrictEqual([logger_item1, logger_item2, logger_item3]);
  })

  it("debería NO encontrar los logs que NO son del usuario", () => {
    expect(myLoggerInstance.getItem(0)).toBe(logger_item1);
    expect(myLoggerInstance.getItem(1)).toBe(logger_item2);
    expect(myLoggerInstance.getItem(2)).toBe(logger_item3);
    expect(myLoggerInstance.searchByUser("Iker")).not.toContain(logger_item3);
  });

  it("debería NO encontrar los logs que NO son de inicio de sesión", () => {
    expect(myLoggerInstance.getItem(0)).toBe(logger_item1);
    expect(myLoggerInstance.getItem(1)).toBe(logger_item2);
    expect(myLoggerInstance.getItem(2)).toBe(logger_item3);
    expect(myLoggerInstance.searchByAction("Iniciar Sesión")).not.toContain([logger_item2]);
  });

  it("debería NO encontrar los logs que NO estén entre las dos horas", () => {
    expect(myLoggerInstance.getItem(0)).toBe(logger_item1);
    expect(myLoggerInstance.getItem(1)).toBe(logger_item2);
    expect(myLoggerInstance.getItem(2)).toBe(logger_item3);
    
    const date1 = new Date(2025, 3, 15, 10, 9, 0);
    const date2 = new Date(2025, 3, 15, 10, 20, 0);
    expect(myLoggerInstance.searchBetweenDates(date1, date2)).not.toContain([logger_item3]);
  })

  it("Podemos usar la clase ITERABLE", () => {
    expect(myLoggerInstance.getItem(0)).toBe(logger_item1);
    expect(myLoggerInstance.getItem(1)).toBe(logger_item2);
    expect(myLoggerInstance.getItem(2)).toBe(logger_item3);

    let counter = 0;
    for (const log of myLoggerInstance) {
      if(counter == 0) expect(log).toBe(logger_item1);
      if(counter == 1) expect(log).toBe(logger_item2);
      if(counter == 2) expect(log).toBe(logger_item3);
      counter++;
    }
  })
});