// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let getselect=JSON.parse(localStorage.getItem("movies"))

getselect.map(function(e1){
    box=document.createElement("div");
    var image=document.createElement("img")
    image.src=e1.Poster;
    var name=document.createElement("p");
    name.innerText=e1.Title;
    box.append(image,name);
    document.querySelector("#movie").append(box);
})