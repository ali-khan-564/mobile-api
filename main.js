/*
//number
var n = 500
console.log(n)
//object
var object={
   name:"ali",
   fathername:"irfan",
   batch:'2408a',
   mothername:"nazia",
}
console.log(object)
//bollean is true or false
// double == equal to is normal checker
var n = (2== '2')
console.log(n)
// triple equal is to ==== is strick checker
var na = (2 === '2')
console.log(na)
//undefiend
var a = ('undefined')
console.log(a)
//calculator

 var firstnumber =parseFloat( prompt("Enter the number"))
 var secondnumber =parseFloat (prompt("Enter second number"))
 var operator = prompt("enter operator")
 switch (operator) {
   case "+":
      console.log(firstnumber+secondnumber)
      break;
      case "-":
         console.log(firstnumber-secondnumber)
         break;
         case "*":
            console.log(firstnumber*secondnumber)
            break;
            case "/":
               console.log(firstnumber/secondnumber)
               break;
   default:
      break;
 }
//for loop even or odd  number 
for(var i = 1; i <=10; i++ ) {
if(i % 2==0){
console.log("even number")
}
else{
   console.log("odd number")
}

}
//while loop even orr odd number 
 var w =  1;
 while(w <= 100){
   if(1 % 2==0){
console.log(`even number ${w}`)
   }
   else{
      console.log(`odd num ${w}`)
   }
   w++
 }
 
 //function else if is used to multiple function 
 function addnumber(num1, num2, num3 = 7){
   var  result =  num1 + num2 + num3
   if(result == 30){
     return console.log(`this is thirty`)
   }
  else if(result == 25){
   console.log(`the result is twenty five`)
  }

   else{
     return console.log(`this is n error`)
   }
 
 }
 addnumber(10,5,10)
 

//basic patten
var name = "aliraza"
var pattern = /^[a-z]+$/
var result = pattern.test(name)
console.log(result)

var number = 70
var pattern = /^[1-9]/
var result = pattern.test(number)
console.log(result)

var number = 90877678966
var pattern = /\d{11}/
var result = pattern.test(number)
console.log(result)
//pattern topic learm with form   "name only name" "password everything" "phone number is only number 11"
var formbtn = document.getElementById("button")
formbtn.addEventListener("click" , function(e){
   e.preventDefault()
   var username = document.getElementById("name").value
   var password = document.getElementById("pass").value
   var phone = document.getElementById("phone").value
if((/^[a-zA-Z\s]+$/).test(username) ){
   console.log("username is correct")
}
else{
   console.log("wrong")
}
if((/\d{10,11}/).test(phone)){
   console.log("phone number is correct")
}
else{
   console.log("wrong")
}
if((/^.{0,16}/).test(password)){
   console.log("correct password")
}
else{
   console.log("worng")
}
})

// apply validation on facebook form or any type of form

var formbtn = document.getElementById("submit")
formbtn.addEventListener("click" , function(e){
   e.preventDefault()

var username = document.getElementById("username").value
var usererror = document.getElementById("usererror")

var email = document.getElementById("email").value
var emailerror = document.getElementById("emailerror")

var phone = document.getElementById("phone").value
var phoneerror = document.getElementById("phoneerror")

if((/^[a-zA-Z]+$/).test(username)){
   console.log("name is right")
}
else{
   usererror.innerText = "wrong name"
}

if((/^\S+@\S+$/).test(email)){
   console.log("email is write")
}
else{
   emailerror.innerText = "email error"
}

if((/^\d{11,12}/).test(phone)){{
   console.log("phone is  write")
}}
else{
   phoneerror.innerText = "wrong phone number"
}
})

 // ek div ma agr click pr color ksy change kary
var colorbtn = document.getElementById("changecolor")
colorbtn .addEventListener("input" , function(){
   var box = document.querySelector("#box")
   var colorpicker = document.getElementById("color-picker").value
   box.style.background = colorpicker
})

//without button channge color with color code 
var colorpicker = document.getElementById("color-picker")
colorpicker.addEventListener("input" , function(){
 var colorpicker = document.getElementById("color-picker").value
   var box = document.querySelector("#box")
   box.style.background = colorpicker
   var colorvalue = document.getElementById("colorvalue")
   colorvalue.innerHTML = colorpicker

})
*/
//concat prperty is usse to murch to classes
var class1 = ["ali" , "fahadd" , "yousuf" , "anees" ]
var class2 = ["johhus" , "usama" , "hamza" , "umer" ]
var class3 = class1.concat(class2)
console.log(class3)
//sort is use to arrange all variable
var class4 = ["c" , "e" , "a" , "j" , "g"]
var class5 = class4.sort()
console.log(class5)
//reverse property is use to reverse all thing
var numbers = [1,2,3,4,5,6,7,8,9]
numbers.reverse()
console.log(numbers)
//includes prrperty is use to check this item is  preesen or no
 var fruits = ["apple" , "mango" , "banana" , "pumkin"]
console.log (fruits.includes("waleermelon"))
console.log(fruits.includes("apple"))
//join property array convert into string
var namw = ["hello" , "world"]
console.log(namw.join('-'))
//filters  show wheen condition is true
var age = ["14" , "15" , "18" , "19" , "20" , "21"]
var adults = age.filter(age => age <15)
console.log(adults)
//reduce is use to calculation aand the square of numbers
var num = ["15" , "12" , "4" , "3"]
var sum = num.reduce((total , num) => total+num ,0)
console.log(sum)
//for each
var item = ["pen" , "pencil" , "rubber" , "ink"]
item.forEach(item => console.log("this is my " + item))
//highesst to lowest number with sort property
var number2  = [85,64,55,1,57,2,15,26]
number2.sort((a ,b) => b - a)
//online offline visibility in js  function api
function update(){
   var status = document.getElementById("status")
   if(navigator.onLine){
      console.log("onlinne")
      status.innerText = "you re online"
      status.style.color = "green"
   }
   else{
      console.log("you are offline")
      status.innerText = "you are offline"
      status.style.color = "red"
   }
}
window.addEventListener("online" , update())
window.addEventListener("offline" , update())
//page visibility api
document.addEventListener("visibilitychange" , function(){
if(document.hidden){
      document.title = "😘😢plz come back"
}
else{
   document.title = "page  visibility"
}
})
//mobile api to turn mobile for video  and make it angle  
window.addEventListener("deviceorientation" , function(e){
   var alpha = e.alpha.toFixed
   var beta = e.beta.toFixed
   var gamma = e.gamma.toFixed
   this.document.getElementById("orientation").innerHTML = `alpha:${alpha} , beta:${beta} , gamma:${gamma}`
})