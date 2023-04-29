function go(){
    window.location="register.html"
}
function next(){
    localStorage.setItem("name",document.getElementById("name").value);
    localStorage.setItem("phone",document.getElementById("number").value);
    window.location="pictures.html"
}
function choose(){
    window.location="name.html"

}
function adoption(){
    localStorage.setItem("dogName",document.getElementById("dogName").value);
    window.location="adoption.html"

}


async function logJSONData() {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const jsonData = await response.json();
    localStorage.setItem("dog",jsonData.message);
    document.getElementById("image").src = jsonData.message
}



