const asenkronFunction=function(sayi1,callback) {
    const sonuc=sayi1+2;
    callback(sonuc);
}
//yalin js
asenkronFunction(2,function(sonuc){
    console.log(sonuc);
    asenkronFunction(3,function(sonuc){
        console.log(sonuc);
        asenkronFunction(6,function(sonuc){
           console.log(sonuc); 
        });
    });
});


//promise yapisi
//resolve:success
//reject:error
const ascFunction=(sayi1)=>{
    return new Promise((resolve,reject)=>{
        if(sayi1===4)
            resolve('everything is ok');
        else
            reject('have a problem!');
    });
}

ascFunction(5)
.then((data)=>{
    console.log(data);
    return 1;
})
.then((data)=>{
    console.log(data);
    return 2;
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})

//proimse reject e düşerse then bloklarina girmez catch çalişir.!.