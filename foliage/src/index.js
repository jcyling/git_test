import { loadStorage } from "./storage.js";
import { renderState } from "./render.js";
import "./style.css";

const loadPage = (function() {

    function init() {
        const tree = loadStorage();
        renderState.renderTree(tree);
        renderState.renderMenu();
        // Save storage
        // Begin event listeners
    }

    return {
        init
    }
})();

// Initialization
loadPage.init();