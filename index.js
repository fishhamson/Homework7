var arr = new Array(1000)
var count = 0

const inputArray = ()=>{
    var num = +document.querySelector('#inputNum').value
    arr[count] = num;
    count++;
    document.querySelector('#inputNum').value = "";
}

const outputArray = ()=>{
    var result = ""
    for(var i = 0 ; i < count; i++){
        result += arr[i] + ', ';
    }
    return result
}
document.querySelector('#inputBtn').onclick = ()=>{
    inputArray()
    document.querySelector('#txtArray').innerHTML = outputArray();
}