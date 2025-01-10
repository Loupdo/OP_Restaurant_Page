import "./styles.css";
import pizzeria from "./pizza.jpg";
import logo from "./pizzerialogo.png";

const website= document.querySelector(".website");

const container = document.createElement("div");
container.classList.add("container");
website.appendChild(container);
const pizza = document.createElement("img");
pizza.src = pizzeria; 
pizza.style.height = "100vh";
container.appendChild(pizza);
const header=document.createElement("header")
website.appendChild(header);
const divLogo= document.createElement("div")
divLogo.classList.add("logo");
header.appendChild(divLogo);
const SMaP= document.createElement("img");
SMaP.src = logo;
SMaP.style.height = "250px";
SMaP.style.position = "absolute";
divLogo.appendChild(SMaP);

const divButtonBar=document.createElement("div");
divButtonBar.classList.add("buttonBar");
header.appendChild(divButtonBar);
const but1=document.createElement("button");
but1.textContent = "Home"
const but2=document.createElement("button");
but2.textContent = "Menu"
const but3=document.createElement("button");
but3.textContent = "Hours"
divButtonBar.appendChild(but1);
divButtonBar.appendChild(but2);
divButtonBar.appendChild(but3);

const content = document.createElement("div");
content.classList.add("content");
website.appendChild(content);
const h1=document.createElement("h1");
h1.textContent = "Some Mama's and Papa's";
content.appendChild(h1);
const p1=document.createElement("p");
p1.textContent = "The best pizza in Baltimore"
content.appendChild(p1);

const quote=document.createElement("div");
quote.classList.add("quote");
content.appendChild(quote);
const h2=document.createElement("h2");
h2.textContent = "Anyone who say that money can't buy happiness, never bougt a pizza from Some Mama's and Papa's";
const p2=document.createElement("p");
p2.classList.add("newspaper");
p2.textContent = " - New York Times Garden -"
quote.appendChild(h2);
quote.appendChild(p2);


but1.addEventListener("click",() =>{
content.innerHTML=""
const h1=document.createElement("h1");
h1.textContent = "Some Mama's and Papa's";
content.appendChild(h1);
const p1=document.createElement("p");
p1.textContent = "The best pizza in Baltimore"
content.appendChild(p1);

const quote=document.createElement("div");
quote.classList.add("quote");
content.appendChild(quote);
const h2=document.createElement("h2");
h2.textContent = "Anyone who say that money can't buy happiness, never bougt a pizza from Some Mama's and Papa's";
const p2=document.createElement("p");
p2.classList.add("newspaper");
p2.textContent = " - New York Times Garden -"
quote.appendChild(h2);
quote.appendChild(p2);
})



but3.addEventListener("click",() =>{
    content.innerHTML=""
    const h1=document.createElement("h1");
    h1.textContent = "Some Mama's and Papa's";
    content.appendChild(h1);
    const p1=document.createElement("p");
    p1.textContent = "The best pizza in Baltimore"
    content.appendChild(p1);
    
    const quote=document.createElement("div");
    quote.classList.add("quote");
    content.appendChild(quote);
    const h2=document.createElement("h2");
    h2.textContent = "Hours";
    const p2=document.createElement("p");
    p2.classList.add("hours");
    p2.innerHTML = "Sunday: 11am - 8pm<br>Monday: CLOSED<br>Tuesday: 11am - 6pm<br>Wednesday: 11am - 6pm<br>hursday: 11am - 10pm<br>Friday: 11am - 10pm<br>Saturday: 11am - 10pm"
    quote.appendChild(h2);
    quote.appendChild(p2);
    })

    but2.addEventListener("click",() =>{
        content.innerHTML=""
        const quote=document.createElement("div");
        quote.classList.add("quote");
        content.appendChild(quote);
        const h1=document.createElement("h1");
        h1.textContent = "Menu";
        quote.appendChild(h1)
        const h2=document.createElement("h2");
        h2.textContent = "Appetizers";
        quote.appendChild(h2)
        const p=document.createElement("p");
        p.innerHTML = "Mozzarela-Tomatoes................$7.00<br>Breadsticks................................$9.50<br>Mozzarella sticks......................$8.50"
        quote.appendChild(p)
        const h2a=document.createElement("h2");
        h2a.textContent = "Pizzas";
        quote.appendChild(h2a);
        const pa=document.createElement("p");
        pa.innerHTML = "Margharita...............................$17.00<br>Pepperonni..............................$19.50<br>Meat Lover.............................$20.50<br>Supreme..................................$20.00"
        quote.appendChild(pa);
        })