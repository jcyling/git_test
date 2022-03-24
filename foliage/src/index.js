import { renderState } from "./render.js";
import { listeners } from "./events.js";
import { loadStorage } from "./storage.js";
import { Tree, Branch, Leaf } from "./tasks.js";
import './style.css';

window.Tree = Tree;
window.Branch = Branch;
window.Leaf = Leaf;

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