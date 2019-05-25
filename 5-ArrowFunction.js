//es6 ile birlikte gelmiştir.

var test=function(){
    return 1;
};
console.log(test());

//----arrow  funciton----- 

const deneme=()=>{
    return 2;
};
console.log(deneme());

//direk olarak return işlemi varsa bu yapıyı kullanmak daha mantıklı
const denemeParameter=(sayi1,sayi2)=> sayi1+sayi2;
console.log(denemeParameter(5,8));

const denemeParameter2=sayi1=>sayi1+5;
console.log(denemeParameter2(5));
