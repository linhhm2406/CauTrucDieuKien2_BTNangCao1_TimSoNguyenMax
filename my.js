let number1 = parseInt(prompt('Nhap so nguyen thu 1'));
let number2 = parseInt(prompt('Nhap so nguyen thu 2'));
let number3 = parseInt(prompt('Nhap so nguyen thu 3'));

if(number1>number2){
    if (number1>number3) {
        alert('So lon nhat la '+number1);
    } else {
        alert('So lon nhat la ' + number3);
    }
} else if (number2>number3) {
    alert('So lon nhat la '+number2);
} else {
    alert('So lon nhat la '+number3);
}