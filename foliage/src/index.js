import { loadStorage } from "./storage.js";
import { renderState } from "./render.js";
import { listeners } from "./events.js";
import './style.css';


const loadPage = (function() {

    function init() {
        const tree = loadStorage();
        renderState.renderTree(tree);
        renderState.renderMenu();
        listeners.addBtns();
        // Save storage
        // Begin event listeners

    }

    return {
        init
    }
})();

// Initialization
loadPage.init();