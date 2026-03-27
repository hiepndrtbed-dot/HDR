declare var app: Application;

declare class Application {
  activeDocument: Document;
  documents: Document[];
}

declare class Document {
  name: string;
  activeLayer: ArtLayer;
  layers: ArtLayer[];
  selection: Selection;
}

declare class ArtLayer {
  name: string;
  opacity: number;
  visible: boolean;
  duplicate(): ArtLayer;
}

declare class Selection {
  selectAll(): void;
  deselect(): void;
}