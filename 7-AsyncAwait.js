//callback funksşyonlar, async ve await işlemleri ile asenkron işlemler yapilabilir.

const user={id:10,name:'mustafa'};
const friends=[{id:11,name:'baki'},{id:12,name:'murat'}];

const GetUser=()=>{
    return new Promise((resolve, reject) => {
        setInterval(()=>{
            resolve(user);
        },3000)
    });
};

const GetFriend=(UserId)=>{
    return new Promise((resolve, reject) => {
        setInterval(()=>{
           // resolve(friends);
            reject('arkadas listesine ulasılamadi');
        },5000);
    });
}

    //callback hell
let userId;
GetUser().then(function(user){
        userId=user.id;
    GetFriend().then(function(friends){
        console.log(user);
        console.log(friends);
    })
    });

    //promise chain
GetUser()
    .then((user)=>{
        return GetFriend(user.id);
    })
    .then((friends)=>{
       console.log(friends); 
    })


    //async - awaid
async function asenkronDeneme(){
    console.log("user start");
    const user=await GetUser();
    console.log("user end");
    
    console.log("friends start");
    const friends=await GetFriend(user.id);
    console.log("friends end");

};


    //async -awaid hata yakalama
async function asenkronDeneme(){
    try{
        console.log("user start");
        const user=await GetUser();
        console.log("user end");
        
        console.log("friends start");
        const friends=await GetFriend(user.id);
        console.log("friends end");
    
    }
    catch(error){
        console.log(error);
    }
   
};

asenkronDeneme();