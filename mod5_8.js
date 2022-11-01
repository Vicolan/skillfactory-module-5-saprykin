let cars = new Map([
	['lada', 'russia'], ['toyota', 'japan'], ['audi', 'germany'], ['kia', 'korea']
]);
for(let car of cars.keys()) {
	console.log('x -' + car, 'y -' + cars.get(car));
}




