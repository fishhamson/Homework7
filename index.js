var arr = new Array(1000)
var count = 0

const inputArray = () => {
    var num = +document.querySelector('#inputNum').value
    arr[count] = num;
    count++;
    document.querySelector('#inputNum').value = "";
}

const outputArray = (arr) => {
    var result = ""
    for (var i = 0; i < count; i++) {
        result += arr[i] + ', ';
    }
    return result
}

document.querySelector('#inputBtn').onclick = () => {
    inputArray()
    document.querySelector('#txtArray').innerHTML = outputArray(arr);
}

document.querySelector('#btn-result1').onclick = () => {
    var arr_result1 = { ...arr }
    var sum = 0
    for (var i = 0; i < count; i++) {
        sum += arr_result1[i]
    }
    document.querySelector('#txtResult1').innerHTML = sum;
}

document.querySelector('#btn-result2').onclick = () => {
    var arr_result2 = { ...arr }
    var count_ = 0
    for (var i = 0; i < count; i++) {
        if (arr_result2[i] > 0)
            count_++;
    }
    document.querySelector('#txtResult2').innerHTML = count_;
}

document.querySelector('#btn-result3').onclick = () => {
    var arr_result3 = { ...arr }
    var min = arr_result3[0]
    for (var i = 0; i < count; i++) {
        if (arr_result3[i] < min)
            min = arr_result3[i];
    }
    document.querySelector('#txtResult3').innerHTML = min;
}

document.querySelector('#btn-result4').onclick = () => {
    var arr_result4 = { ...arr }
    var min_ = arr_result4[0]
    for (var i = 1; i < count; i++) {
        if (arr_result4[i] > 0) {
            if (arr_result4[i] < min_)
                min_ = arr_result4[i]
        }
    }
    document.querySelector('#txtResult4').innerHTML = min_;
}

document.querySelector('#btn-result5').onclick = () => {
    var arr_result5 = { ...arr }
    var even = 0
    for (var i = 0; i < count; i++) {
        if (arr_result5[i] % 2 === 0) {
            even = arr_result5[i]
        }
    }
    document.querySelector('#txtResult5').innerHTML = even;
}

function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp
}

document.querySelector('#btn-result6').onclick = () => {
    var arr_result6 = { ...arr }
    var Index1 = document.querySelector('#inputIndex1').value
    var Index2 = document.querySelector('#inputIndex2').value
    swap(arr_result6, Index1, Index2);
    document.querySelector('#txtResult6bf').innerHTML = outputArray(arr);
    document.querySelector('#txtResult6').innerHTML = outputArray(arr_result6);
}

function selectionSort(inputArr) {
    for (var i = 0; i < count; i++) {
        var min = i;
        for (var j = i + 1; j < count; j++) {
            if (inputArr[j] < inputArr[min]) {
                min = j;
            }
        }
        if (min != i) {
            var tmp = inputArr[i];
            inputArr[i] = inputArr[min];
            inputArr[min] = tmp;
        }
    }
}

document.querySelector('#btn-result7').onclick = () => {
    var arr_result7 = { ...arr }
    selectionSort(arr_result7)
    document.querySelector('#txtResult7').innerHTML = outputArray(arr_result7);
}

function isPrime(n) {
    if (n <= 1) {
        return 0;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return 0;
        }
    }
    return 1;
}

document.querySelector('#btn-result8').onclick = () => {
    var arr_result8 = { ...arr }
    var i = 0
    for (i; i < count; i++) {
        if (isPrime(arr_result8[i]) === 1)
            break
    }
    document.querySelector('#txtResult8').innerHTML = arr_result8[i];
}

document.querySelector('#btn-result9').onclick = () => {
    var arr_result9 = { ...arr }
    var count__ = 0
    for (var i = 0; i < count; i++) {
        if (Number.isInteger(arr_result9[i]) === true) {
            count__++
        }
    }
    document.querySelector('#txtResult9').innerHTML = 'Số nguyên là: ' + count__;
}

document.querySelector('#btn-result10').onclick = () => {
    debugger
    var arr_result10 = { ...arr }
    var tmp = ' < '
    var tmp_ = ' > '
    var count_pos = 0
    var count_neg = 0
    for (var i = 0; i < count; i++) {
        if (arr_result10[i] > 0) {
            count_pos++
        } else
            count_neg++
    }
    if (count_neg > count_pos) {
        return document.querySelector('#txtResult10').innerHTML = 'Số âm ' + tmp_ + 'Số dương';
    }
    if (count_neg < count_pos)
        return document.querySelector('#txtResult10').innerHTML = 'Số âm ' + tmp + 'Số dương';
    if (count_neg === count_pos)
        return document.querySelector('#txtResult10').innerHTML = 'Số âm ' + ' = ' + 'Số dương';
}   