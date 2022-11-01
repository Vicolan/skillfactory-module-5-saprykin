let arr = ['', false, 55,];
let Same = true;

for (let i = 0; i < arr.length - 1; i++){
    for (let j = i + 1; j < arr.length; j++){
        if (typeof(arr[i]) !== typeof(arr[j])){
            Same = false;
        }
    }
}
if (Same) {
    console.log("Да, все элементы массива одинаковы");
} else {
    console.log("Нет, элементы массива не одинаковы");
}