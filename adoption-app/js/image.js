function finalPic(){
    nombre = localStorage.getItem("name");
    console.log(nombre)
    dogName = localStorage.getItem("dogName");
    dog = localStorage.getItem("dog");
    console.log(dog)
    document.getElementById("nombre").textContent = nombre
    document.getElementById("perroNombre").textContent = dogName

    document.getElementById("dogFinal").src = dog
}
function done(){
    window.location="home.html"
}
