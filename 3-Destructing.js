//es6 ile gelen özellik destructing
const degerler={
    deger1:'deger1',
    deger2:'deger2'
};

//eski kullanımı
// const value1=degerler.deger1;
// const value2=degerler.deger2;
// console.log(value1);
// console.log(value2);

//es6 ile gelen destructing özelligi
const{deger1:val1,deger2,deger4='deger4'}=degerler;
console.log(val1);
console.log(deger2);

const numbers=[1,2,3];
const[num1,num2,num3]=numbers;
console.log(num1);



const names={
    name1:"ali",
    name2:"baki",
    name3:{
        surname:"öztürk"
    }
}
const {name3:{surname:soyisim}}=names;
console.log(soyisim);



