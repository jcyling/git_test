import { renderState } from "./render.js";

const listeners = (function() {
    const dashboard = document.querySelector(".dashboard")
    
    function addBtns() {
        const addLeaf = document.querySelector(".add-leaf")
        const addBranch = document.querySelector(".add-branch")
        // addLeaf.addEventListener('click');
        // addBranch.addEventListener('click');    
    }

    dashboard.onclick = function(event) {
        let target = event.target.closest("input");
        if (!target) {
            return;
        }
    }
    
    return {
        addBtns
    }
})();

export {
    listeners
}