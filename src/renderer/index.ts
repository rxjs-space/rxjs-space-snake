import { config, ctx, Snake, Game } from '../_shared';

const drawBackground = () => {
  ctx.fillStyle = '#000'
  ctx.fillRect(0, 0, config.canvas.width, config.canvas.height);
  ctx.fill();
}

const drawSnake = (snake: Snake) => {
  snake.segments.forEach((segment, index) => {
  ctx.beginPath();
  ctx.fillStyle = snake.color;
  const r = index === 0 ? snake.segmentSize * 1.3 : snake.segmentSize
  ctx.arc(segment.x, segment.y, r, 0, 2*Math.PI);
  ctx.fill();
  })
}

export const renderer = (game: Game) => {
  drawBackground();
  drawSnake(game.snake);
}