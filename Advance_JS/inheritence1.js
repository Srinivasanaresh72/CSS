class Parent{
    constructor(){
        this.age=60;
    }
    displayName(){
        console.log('Parent name is Kumar');
    }
}
class child extends Parent{
    constructor(){
        super();
    }
    getAgeofMyFather(){
        console.log('Father age is ' + this.age);
    }
}
c1=new child();
c1.displayName();
c1.getAgeofMyFather();