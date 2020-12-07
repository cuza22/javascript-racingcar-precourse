import Car from './car.js';

// functions game progress
export function startGame(game) {
    game.nowCount = 0;
}

export function playGame(game, carList) {
    for (const car of carList) {
        car.moveCar();
    }
    increaseCount(game);
}

export function endGame() {
    let winnerList = new Array(getWinner());
    printResult(winnerList);
}

// setters
export function setTotalCount(game, totalCount) {
    game.totalCount = totalCount;
}

export function setCarList(game, carList) {
    game.carList = carList;
}

export function setWinnerList(game, winnerList) {
    game.winnerList = winnerList;
}

export function increaseCount(game) {
    game.nowCount = game.nowCount + 1;
}

// functions for game playing
export function createCars(carNameList) {
    let carList = new Array();
    for (const carName of carNameList) {
        let car = new Car(carName);
        carList.push(car);
    }
    return carList;
}

export function getWinner(carList) {
    let winnerList = new Array();
    let maxCount = 0;
    for (const car of carList) {
        if (car.move > maxCount) {
            winnerList.length = 0;
            winnerList.push(car.name);
            maxCount = car.move;
        }
        if (car.move === maxCount) {
            winnerList.push(car.name);
        }
    }
    return winnerList;
}
