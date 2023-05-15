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