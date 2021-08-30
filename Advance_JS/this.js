class Person{
    constructor(){
        this.Firstname = 'Lanka';
        this.Lastname = 'Naresh';
    }
    getFullname(){
        console.log(" My name is " +this.Firstname+ " " +this.Lastname+ " ");
    }
    
}
p1 = new Person();
p1.getFullname();