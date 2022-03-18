import { renderHome } from "./home.js";
import { renderMenu } from "./menu.js";
import "./style.css";

const loadPage = (function() {    
    function renderNav() {

        // Nav bar
        const nav = document.createElement("nav");
        const ul = document.createElement("ul");
        ul.classList.add("navList");

        const navList = ["home", "menu", "location"];

        navList.forEach(function(item, index) { 
            let li = document.createElement("li");
            li.classList.add("item");
            li.classList.add(item);
            ul.appendChild(li);
            li.textContent = item;
        });

        nav.appendChild(ul);
        return nav;
    }

    function menuListener() {
        const homeBtn = document.querySelector(".home");
        const menuBtn = document.querySelector(".menu");
        const locationBtn = document.querySelector(".location");

        homeBtn.addEventListener("click", function() {
            renderContent(renderHome())
        });
        menuBtn.addEventListener("click", function() {
            renderContent(renderMenu())
        });
        // locationBtn.addEventListener("click", );

    }

    function renderContent(f) {
        const content = document.querySelector(".content");
        content.removeChild(content.firstChild);
        content.appendChild(f);
    }

    function init() {
        const body = document.querySelector("body");
        const content = document.createElement("div");
        content.classList.add("content");
        body.appendChild(renderNav());
        body.appendChild(content);
        content.appendChild(renderHome());
        menuListener();
    }

    return {
        init
    }
})();


loadPage.init();