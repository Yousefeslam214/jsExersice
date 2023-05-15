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

//



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