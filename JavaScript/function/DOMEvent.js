function welcome(){
    alert("Welcome to our website");
}

function highlight(obj){
    obj.style.background="pink";
}

function unhighlight(obj){
    obj.style.background="white";
}

// function getMenu(){
//     const menu = document.getElementById('menu');
//     console.log(menu.value.toUpperCase());
// }

// function $highlight(obj){
//     obj.style.background="yellow";
// }

// function $unhighlight(obj){
//     obj.style.background="red";
// }

const menu = document.getElementById('menu');  //อ้างอิง

menu.addEventListener('change',getMenu);  //event

function getMenu(){
    console.log(menu.value);
}