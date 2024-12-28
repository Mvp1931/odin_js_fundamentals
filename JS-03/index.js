const container = document.querySelector(".container");

// Append elements to the container

const paragraphElement = document.createElement("p");
paragraphElement.textContent = "Hey, I am red!";
paragraphElement.style.color = "red";

container.appendChild(paragraphElement);

const headerLevelThreeElement = document.createElement("h3");
headerLevelThreeElement.textContent = "I am a blue h3!";
headerLevelThreeElement.style.color = "blue";

container.appendChild(headerLevelThreeElement);

// div

const insideContainer = document.createElement("div");

const insideHeader1 = document.createElement("h1");
insideHeader1.textContent = "I am in a div!";
insideContainer.appendChild(insideHeader1);

const insideParagraph = document.createElement("p");
insideParagraph.textContent = "ME TOO!";
insideContainer.appendChild(insideParagraph);

insideContainer.setAttribute(
    "style",
    "background-color: hotpink; border: black solid 1px;"
);

container.appendChild(insideContainer);

const clickButton = document.querySelector("button");
clickButton.addEventListener("click", (e) => {
    alert("You clicked me!");

    console.log(e.target.textContent);
    e.target.setAttribute("style", "background-color: blue;");
});
