import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import { Game, config } from '../_shared';

const gameInitFac = (): Game => {
  return {
    snake: config.snake.init,
    _mousemoveEventSampleInterval: 200,
    _running: true,
    _score: 0,
    _gameOver: false
  }
}


export const game$Fac = (): Observable<Game> => {
  return Observable.of(gameInitFac())
}
