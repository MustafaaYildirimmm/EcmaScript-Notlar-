//var ile kullanılan değişkenlere kullanıldığı blok dişinda erşibeliyorum.
//(performans bakımından iyi değildir.)
//let ile kullanılan değişkenlere kullanıldığı blok dişinda erişelemez!.

var x="it is a variable";
let y="it is a variable";

console.log(y);

for(let x=0;x<10;x++){
    //
}
console.log(x);

//let ile var in arasındaki fark var tekrardan declare edilebilip değer ataması yapılablir.Let de böyle birşeye gerek yok.
//c# ile benzer.

// var z="foo";
// var z="bar";

let z="foo";
z="bar";

console.log(z);


//----------let ile const arasindaki fark---------

//let ile tanimlanan değişkenin  değerini degistirebiliriz.
//const ile değiştiremeyiz.

//const pi=3;
//pi=3.14;

const numbers=[2,3,4,5];
numbers.push(3);
console.log(numbers);

// const student={name="baki",school="deu"};
// student={name="mustafa"},school="edu"}
// console.log(student);