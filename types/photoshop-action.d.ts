declare function charIDToTypeID(id: string): number;
declare function stringIDToTypeID(id: string): number;

declare function executeAction(
  eventID: number,
  descriptor: ActionDescriptor,
  dialogMode: number
): any;

declare class ActionDescriptor {
  putReference(id: number, ref: ActionReference): void;
  putBoolean(id: number, value: boolean): void;
  putString(id: number, value: string): void;
}

declare class ActionReference {
  putEnumerated(a: number, b: number, c: number): void;
  putProperty(a: number, b: number): void;
}

declare const DialogModes: {
  NO: number;
  ALL: number;
};