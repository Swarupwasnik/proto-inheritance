console.log("working");

//question1;
let obj1={
    Name:"ketan kumar",
    age:24,
    State:"Maharashtra",
    showdetails:function(){
        console.log(this.Name+""+this.State);
    }

}
console.log(obj1);
obj1.showdetails();
let obj2={
    Name:"Swapnil",
    course:"B.tech"
}
obj1.__proto__=obj2;
obj2.showdetails;
console.log(obj2);



//Question 2;
let Book =function(){};
Book.prototype= {
    print(){
        return 'mcabe smith';

    }
};
let book2 = function() {};
book2.prototype =Object.create(Book.prototype);
book2.prototype.print= function(){
return "geankoplis"
}
let reference=function() {};
reference.prototype = Object.create(book2.prototype);
reference.prototype.print = function(){
    return 'Chemical Engineering';
};

var HTO = new Book();
var CRE = new book2();
var MTO = new reference();


console.log(HTO.print());
console.log(CRE.print());
console.log(MTO.print());


//Question3;
var arr1 =[0,1,2,3,4];
let value=0;
let value1=arr1.reduce(
    (previousvalue,currentvalue) => previousvalue+currentvalue,
    value
);
console.log(value1);

//Question4

let ball={
    a:"plastic",
    b:"Rubber",
    c:"leather",
    d:'glass'
};
console.log(Object.getOwnPropertyNames(ball));
console.log(Object.getOwnPropertyDescriptors(ball));
console.log(Object.getPrototypeOf(ball));