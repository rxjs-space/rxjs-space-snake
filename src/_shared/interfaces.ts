


interface Segment {
  x: number;
  y: number;
}

interface Stride {
  h: number;
  v: number;
}

export interface Snake {
  segments: Segment[],
  segmentSize: number
  stride: Stride,
  color: string;
  moveInterval: number;
}

export interface Game {
  snake: Snake;
  _mousemoveEventSampleInterval: number;
  _running: boolean;
  _score: number;
  _gameOver: boolean;
}