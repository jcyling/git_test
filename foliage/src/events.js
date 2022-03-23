import { renderState } from "./render.js";
import { addToProject } from "./tasks.js";
import { saveStorage } from "./storage.js";
import { appe } from "./index.js";

const listeners = (function() {
    const dashboard = document.querySelector(".dashboard")
    
    function show(element) {
        element.style.display = "block";
    }

    function events() {
        // Toggle forms
        const addLeaf = document.querySelector(".add-leaf");
        const addBranch = document.querySelector(".add-branch");
        addLeaf.addEventListener('click', renderState.showLeafForm);
        addBranch.addEventListener('click', renderState.showBranchForm);

        // Submit forms
        const submitLeaf = document.querySelector(".leaf-form-submit");
        const submitBranch = document.querySelector(".branch-form-submit");
        submitLeaf.addEventListener('click', getLeafProp);
        submitBranch.addEventListener('click', getBranchProp);
    }

    function getLeafProp() {
        let leafNameInput = document.querySelector(".leaf-form-name");
        let leafDateInput = document.querySelector(".leaf-form-date");

        let newLeafName = leafNameInput.value;
        let newLeafDate = leafDateInput.value;

        addToProject.createLeaf(newLeafName, newLeafDate);

        saveStorage(appe);
        renderState.renderTree(appe);
        // Save storage
    }

    function getBranchProp() {
        const branchNameInput = document.querySelector(".branch-form-name");
        let newBranchName = branchNameInput.value;
        addToProject.createBranch(newBranchName);
    }

    dashboard.onclick = function(event) {
        // Checkbox listener
        let target = event.target.closest("input[type=checkbox]");
        if (!target) {
            return;
        }
        else {
            let leaf = target.closest("div");
            // Remove task from storage
            leaf.remove();
        }
    }
    
    return {
        events,
        show
    }
})();

export {
    listeners
}