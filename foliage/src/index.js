import { renderState } from "./render.js";
import { listeners } from "./events.js";
import { loadStorage } from "./storage.js";
import './style.css';

let appe = [];


const loadPage = (function() {
    function init() {
        appe = loadStorage();
        renderState.renderTree(appe);
        listeners.events();
    }
    return {
        init
    }
})();

// Initialization
loadPage.init();

export {
    appe
}