let exo1 = document.querySelector("h2");

console.log(exo1.innerText);



exo1.innerText += " 1";

console.log(exo1.innerText);



let exo3 = document.querySelector("p");

exo3.innerText += " 1";

console.log(exo3.innerText);


let exo4 = document.querySelector("section");

console.log(exo4.id);


let exo5 = document.querySelector("h1");

console.log(exo5.className);

console.log(exo5.attributes.class.value);



let exo7 = document.querySelectorAll("h1");

exo7.forEach(element =>{
    console.log(element.className);
})


exo8 = document.querySelector("input");

console.log(exo8.attributes);

console.log(exo8.attributes.type);


exo9 = document.querySelector("#inputPassword3");

exo9.attributes.type = "password";

console.log(exo9.attributes.type);


exo8.attributes.type.value = "color";

console.log(exo8.attributes.type.value);
