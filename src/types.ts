export type TransformState = {
  scale: number;
};

export type PinchZoomParameters = {
  screen: HTMLElement;
  target: HTMLElement;
  setState: (state: TransformState) => void;
  getState: () => TransformState;
};
