function add(a,b,callback){

    console.log(a+b);
    callback();


}
function display(){

    console.log("The total is 15");

}
add(5,10,display);