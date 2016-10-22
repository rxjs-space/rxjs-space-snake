export const config = {
  _shared: {
    strideInterval: 20
  },
  canvas: {
    width: 400,
    height: 400
  },
  snake: {
    init: {
      segments: [
        {x: 200, y: 200}, 
        {x: 190, y: 200},
        {x: 180, y: 200},
        {x: 170, y: 200},
        {x: 160, y: 200}
      ],
      segmentSize: 5,
      stride: {
        h: 2,
        v: 0
      },
      color: 'yellow',
      moveInterval: 500
    }
  }
}