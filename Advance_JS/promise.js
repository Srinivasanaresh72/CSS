var promise = new Promise(function(resolve,reject){
    const x = 'India';
    const y ='China';
    if(x == y){
        resolve();
    }
    else{
        reject();
    }
});


promise.then(function(){
    console.log("Promise is resolved, the country is India");
}).catch(function(){
    console.log("Promise got rejected, Due to some error");
});