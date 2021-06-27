// var cup = {
//     color : "white",
//     height: 100,
//     content: [{water:"clean"},{tea:"milo"},{sugar:"10"}],
//     throw : function(){return "nothing inside"}
    

// }
// console.log(delete cup.color);
// console.log(cup)

// console.log(function())

// let array = [
//     'string',
//     100,
//     ['embed',200],
//     {car: 'ford'},
//     function(){return "drive"}
// ]
// console.log(array[0]+= " man")
// console.log(array)
//  array.pop()
//  console.log(array.pop())
//  console.log(array)

//  array.unshift('strong','heak', )
//  console.log(array)

// function name(){
//     let fullname = " declan ogbodo";

//     function concat( name ){
//         return "MR." + name;
//     }

//     return concat(fullname);
// }
// console.log(name());

// function name(fullname){

//     return fullname.firstname + fullname.lastname;
    
// }
// console.log (
//     name({ firstname: "ogbodo", lastname: " Declan"})
// )

// console.log( myName, printName());

// var myName = "declan";
// function printName(){
//     return "ogbodo"
// }
//  var engine = {
//      maker : "ford",
//      headGasket:{
//         pots:[
//             "piston1",
//             "piston2"
//         ]
//      }
//  }
//  function runExpression(){
//      var a = 10;
//      function add(b)
//      {
//          return a + b;
//      }
//      console.log(
//          add(90),
//          add(60)
//      )
//     //  return add(40) && add(5)
     
//  }
// console.log(runExpression())

//  console.log( this);

//  let object ={
//      prop : this,
//      method: function(){ return this}
//  };

//  let array = [
//      this,
//      function(){ return this}

//  ];

//  function global(){
//      return this;

//  }
// global.call(object)

// function Apple( color, weight){
    
//     this.color = color;
//     this.weight = weight;
    
// }

// Apple.prototype = {
//     eat : function(){return "eat the apple";},
//     throw : function(){ return "throw the apple";}
// }

// var apple1 = new Apple( "red",99);
// var apple2 = new Apple( 'green', 109);
// var apple3 = new Apple( 'yellow',299);

// console.log(Apple.prototype.eat)

let elements = document.getElementsByName('cssProperty');
let div = document.getElementById('modify');

function set(){

    // console.log(elements);
    for( let index =0;index < elements.length;index++){
        // console.log(index)
        let cssValue = elements[index].value;

        let cssProperty = elements[index].getAttribute('id');
        // console.log(cssProperty,cssValue)
        
        div.style[cssProperty] = cssValue;
    }
}

document.getElementById('set').addEventListener('click',set) 


function leftBtn(){
    let element = document.getElementById('left-block');
    
    
    
}
document.getElementById('left-btn').addEventListener('click',leftBtn);



 

function rightBtn(){
    let element = document.getElementById('left-block');
    
}
document.getElementById('right-btn').addEventListener('click',rightBtn)






































































