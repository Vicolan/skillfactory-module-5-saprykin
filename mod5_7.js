let arrN = [0, 13, 11, 84, 66, 35, 65, 71, 28, 77, 80, 'blabla', null, 'true'];


function getEvenOdd (arr){
    let getEven = 0;
    let getOdd = 0;
    let getOther = 0;

    for (let i = 0; i < arr.length; i++){
        if ((arr[i] === 0) || (typeof(arr[i]) != 'number')) {
			getOther++;
        } else {
            if (arr[i] % 2 === 0) {
					getEven++;
            } else {
					getOdd++;
            }
        }
    }

    return [getEven, getOdd, getOther];
}

let rez = getEvenOdd(arrN);

console.log("Четных чисел " + rez[0]);
console.log("Нечетных чисел " + rez[1]);
console.log("Остальных " + rez[2]);
