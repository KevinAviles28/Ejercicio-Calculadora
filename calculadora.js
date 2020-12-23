let calculadora = {
    sumar: function (numeroA, numeroB) {
        return numeroA+numeroB;
    },
    restar:function (numA, numB) {
        return numA-numB;
    },
    multiplicar: function (numeroA,numeroB) {
        return numeroA*numeroB;
    },
    dividir : function (numA, numB) {//puse esta variacion porque puede que alguien se le de por dividir numeros negativos
        if (numB<=0 || numA<=0) {
            console.log("Error");
        }else{
        return numA/numB;
        }
    }
} 
console.log(calculadora.sumar(1,2));
console.log(calculadora.restar(5,4));
console.log(calculadora.multiplicar(3,2));
console.log(calculadora.dividir(20,5));
//sumar, restar , multiplicar, dividir
