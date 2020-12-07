import { startGame } from './utils.js';
import { carNamesListener, racingCountListener } from './input.js';
import { ID } from './constants.js';

export default function RacingCarGame() {
    startGame(this);
    console.log(this);

    ID.CAR_NAME_BUTTON.addEventListener('click', carNamesListener());
    ID.RACING_COUNT_BUTTON.addEventListener('click', racingCountListener());
    console.log(this.numberOfCars, this.racingCount);
}

export let GAME = new RacingCarGame();