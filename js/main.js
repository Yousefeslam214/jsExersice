//Add Defult Local Storage Class on Body
document.body.classList.add(localStorage.getItem("pageColor") || "red")
var el = document.querySelectorAll(".color-switcher li")
var classList = [] ;

// Loop On Elements
for (var i = 0; i<el.length;i++){
       // Get ClassList
       classList.push(el[i].getAttribute("data-color"));
       el[i].addEventListener("click", function() {
              //Remove All Old Classes
              document.body.classList.remove(...classList);
              //Add Curent Class From Li Data Attribute
              document.body.classList.add(this.getAttribute("data-color"));
              // Add Data to Local Storage
              localStorage.setItem("pageColor", this.getAttribute("data-color"))
       },false)
}







var count = document.getElementById("count");
var textarea = document.getElementById("text");
var maxLength = textarea.getAttribute("maxlength");


//function to change number of letters
textarea.oninput = function() {

       count.innerHTML = maxLength - this.value.length; 

       if (count.innerHTML == 0) {
              count.classList.add("zero")
       } else {
              count.classList.remove("zero")
       }
}


textarea.onfocus = function () {

       // store PlaceHoder Attr In Backup Attr
       this.setAttribute("data-place", this.getAttribute("placeholder"));

       //Empty Placeholder

       this.setAttribute("placeholder","")
}
textarea.onblur = function () {

       // Get Placeholder Attr From Backup Attribute
       this.setAttribute("placeholder", this.getAttribute("data-place"));
}


var myText = 'hello From Yousef World  this is type Writer Effects on Text';
var myButton = document.getElementById("button");
var i = 1;
myButton.onclick = function (){
       var typeWriter = setInterval( function(){
              document.getElementById('type').textContent += myText[i];
              i++
              if ( i>myText.length-1) {
                     clearInterval(typeWriter)
                     i=0
              }
       },100);
}


var passwardButton = document.getElementById("my-button");
var myInput = document.getElementById("my-input");
var toogleButton = document.getElementById("toogleButton");

// Retrieve the value of the "storage" key from local storage
var storage = localStorage.getItem("storage");

// Set the initial value of the "disabled" attribute on the myInput element
//myInput.setAttribute("disabled", storage === "disabled");


// const isDisabled = myInput.getAttribute("disabled") === "disabled";

// toogleButton.addEventListener("click", () => {
//        // Toggle the value of the "disabled" attribute on the myInput element
//        const isDisabled = myInput.getAttribute("disabled") === "disabled";
//        myInput.setAttribute("disabled", !isDisabled);
       
//        // Store the new value of the "disabled" attribute in local storage
//        localStorage.setItem("storage", isDisabled ? "enabled" : "disabled");
//        console.log(isDisabled)
// });

// console.log(isDisabled)


// var storage = localStorage.getItem( "storage","disabled")


toogleButton.addEventListener("click", () => {
       myInput.toggleAttribute(storage);
       


});



passwardButton.onclick = function () {
       if (this.textContent === "show your password"){
       myInput.setAttribute("type","text")
       this.textContent = "Hide Password"


} else {
       myInput.setAttribute("type","password")
       this.textContent = "show your password"
}}

// // localStorage.getItem("toggle");
// document.myInput.toggleAttribute = window.localStorage.getItem("toggle");

// const toggleButtons = localStorage.setItem("toggle", myInput.toggleAttribute("type","text"))
// console.log(toggleButtons)
//window.localStorage.clear();



// const myValue = localStorage.getItem("myKey");
// const myImage = document.querySelector("#myImage");
// myImage.setAttribute("src", myValue);



var classList = ["class-one","class-two","class-three","class-four"]
var randomKey = Math.floor(Math.random() * classList.length);

console.log(randomKey)
document.body.setAttribute('class',classList[randomKey])

var myTitle = document.getElementById('texts')
var myContent = document.getElementById('message')
var myTitleLive = document.getElementById('textcon')
var myContentLive = document.getElementById('messagecon')


myTitle.onkeyup = function () {
       myTitleLive.textContent = this.value;
}
myContent.onkeyup = function () {
       myContentLive.textContent = this.value;
}


//to stop rigth click

// document.addEventListener('contextmenu',function(e) {
//        e.preventDefault()
// })


// clock
function showTime() {
       var now = new Date(),
       hours = now.getHours(),
       minutes = now.getMinutes(),
       seconds = now.getSeconds()
       if (hours < 10) {
              hours = '0' + hours;
       }
       if (minutes < 10) {
              minutes = '0' + minutes;
       }
       if (seconds < 10) {
              seconds = '0' + seconds;
       }
       document.getElementById('clock').textContent = hours +":"+minutes +":"+seconds ;

}


window.onload = function () {
       setInterval(showTime, 500)
}





