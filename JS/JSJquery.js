document.write("++use document write already, document.write always append to the previous content");

document.getElementById("txtContent").textContent="textContent";
document.getElementById("innerHtml").innerHTML="<h1>innerHTML</h1>";

// anonymous without name of the function, express - with equal sign
var area = function(b, h){
    return b*h
}
document.getElementById("area").textContent= area(2,3);

// iffe
document.getElementById("iffe").textContent=(function(b,h){
    var b=3;
    var h=4;
    return b*h;
}());

// access function within an object 
var hotel={
    name:"quay",
    rooms: 100,
    booked: 40,
    available: function(){
        return this.rooms - this.booked;
    }
}

document.getElementById("room").textContent=hotel.available();