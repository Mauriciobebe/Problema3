function problema3(){

var tamano = [];
var tam = [];

var cosa = document.getElementById('p3-input').value;
if(cosa!=''){

var array = cosa.split(',');
for (var i = 0; i < array.length; i++){
            
var letrita = array[i];

var str1Unique = [...new Set(letrita.split(''))];

var result = str1Unique.length;

console.log(str1Unique);

tamano.push(result);
tam.push(result)
}
var may = Math.max.apply(null, tamano)
console.log(may);
document.querySelector('#p3-output').textContent = "Numero mas grande de letras " + may;
}

}