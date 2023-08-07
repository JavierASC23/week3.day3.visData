
let img = document.querySelector("img");
let gender = document.getElementById("gender");
let nombre = document.getElementById("name");
let age = document.getElementById("age");
let phoneNumber = document.getElementById("phone");
let email = document.getElementById("email");
let ClickButton = document.getElementById("Button");


ClickButton.onclick = function(event){
    
    event.preventDefault();

    let num = Math.floor(Math.random() * people.results.length);


    nombre.innerHTML = `${people.results[num].name.title} ${people.results[num].name.first} ${people.results[num].name.last}`;
    gender.innerHTML = people.results[num].gender;
    img.src = people.results[num].picture.medium;
    phoneNumber.innerHTML = "Phone Number: " + people.results[num].phone;
    email.innerHTML = "Email : " + people.results[num].email;
    age.innerHTML = "Age: " + people.results[num].dob.age;

}


/*
let clickButton = document.querySelector("#Button");
randomBtn.addEventListener("click", pickRandomStarter);

function pickRandomStarter(){
    let num = Math.floor(Math.random() * pokemon.length);
    
    let nameHeading = document.querySelector("h2");
nameHeading.innerHTML = `#${people[num].id} - ${people[num].name}`;

let personImage = document.getElementById("Image");
personImage.src = people[num].image[0];

let info = document.getElementById("userInformation");
info.innerHTML = `${people[num].type[0]} - Type`;

let statDiv = document.querySelectorAll("#poke_stats div")
for(let i = 0; i < statDiv.length; i++){
    let stat = statDiv[i].id;
    statDiv[i].style["width"] = `${people[num].base[stat] * 4}px`
}
}
*/