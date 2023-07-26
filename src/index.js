import "./index.css"
import "./header.css";
import "./main.css";
import "./components/elsewhere.css";
import "./components/dropdown.css"
import menuClose from "./images/menuClose.svg";
import restaurant from "./images/restaurant.jpg"
import weather from "./images/weather.jpg";
import work from "./images/work.jpg";
import { elsewhere } from "./components/elsewhere.js";
import linkedin from "./images/linkedin.png";
import github from "./images/github.png";
import spotify from "./images/spotify.png";

const projectImages = [restaurant, weather, work];
const elsewhereInfo = [
  {link: "https://github.com/heealexx", image: github },
  {link: "https://www.linkedin.com/in/alexhe29/", image: linkedin},
  {link: "https://open.spotify.com/user/1295359353?si=f92960bd17fb442e", image: spotify}
];
const projectNames = document.querySelectorAll(".projects h2");
const rightBackground = document.querySelector(".right-background");

function addImagesHidden(){
  for(let i = 0; i < projectNames.length; i++){
    const imageDiv = document.createElement("img");
    imageDiv.className = "hidden";
    imageDiv.src = projectImages[i];
    imageDiv.setAttribute = ("idx", i);
    rightBackground.append(imageDiv);
    projectNames[i].setAttribute("idx", i);
  }
}
function backgroundEventListener(){
  const hiddenImages = document.querySelectorAll(".right-background img");
  for(let i = 0; i < projectNames.length; i++){
    projectNames[i].addEventListener("mouseenter", function changeImage(event){
      const idx = event.target.getAttribute("idx");
      hiddenImages[idx].classList.add("reveal"); 
    });
    projectNames[i].addEventListener("mouseleave", function removeImage(){
      for (let i = 0; i < hiddenImages.length; i++){
        hiddenImages[i].classList.remove("reveal");
      }
    });
  }
}

const menuButton = document.querySelector("nav button");
menuButton.addEventListener("click", function (){
  const dropdown = document.querySelector(".dropdown");
  if (dropdown.classList.contains("show")){
    dropdown.classList.add("unshow");
    dropdown.classList.remove("show");
    menuButton.classList.remove("menuClose");
  }else{
    dropdown.classList.add("show");
    dropdown.classList.remove("unshow");
    menuButton.classList.add("menuClose");
  }
});

addImagesHidden();
backgroundEventListener();
elsewhere(elsewhereInfo);