import { renderState } from "./render.js";
import { saveStorage } from "./storage.js";
import { appe } from "./index.js";
import { editTree } from "./tasks.js";

const listeners = (function() {
    const branchNav = document.querySelector(".nav-branch")
    const dashboard = document.querySelector(".dashboard")
    const leafForm = document.querySelector(".leaf-form");
    const branchForm = document.querySelector(".branch-form");
    const addLeaf = document.querySelector(".add-leaf");
    const addBranch = document.querySelector(".add-branch");

    function events() {
        // TODO: Refactor into event handler below
        // Toggle forms

        addLeaf.addEventListener('click', function() {renderState.show(leafForm)} );
        addBranch.addEventListener('click', function() {renderState.show(branchForm)} );

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

        // Add to data
        editTree.createLeaf(newLeafName, newLeafDate);
        saveStorage(appe);
        renderState.show(leafForm);
        renderState.renderTree(appe);
    }

    function getBranchProp() {
        const branchNameInput = document.querySelector(".branch-form-name");
        let newBranchName = branchNameInput.value;
        editTree.createBranch(newBranchName);
        saveStorage(appe);
        renderState.show(branchForm);
        renderState.renderTree(appe);
    }

    branchNav.onclick = function(event) {
        let target = event.target
        if (!target) {
            return;
        }
        else if (target.matches(".branch-delete")) {
            console.log(target);
            let branch = target.parentNode;
            let name = branch.querySelector(".branch-name").textContent;
            editTree.deleteBranch(name);
            renderState.renderTree(appe);
            saveStorage(appe);

        }
    }

    dashboard.onclick = function(event) {
        // Checkbox listener
        let target = event.target
        if (!target) {
            return;
        }
        else if (target.matches(".leaf-edit")) {
            let leaf = target.closest(".leaf");

            // Render form
            renderState.editLeafForm(leaf);
            renderState.show(leaf);
        }
        else if (target.matches(".edit-leaf-submit")) {
            let leafForm = target.closest(".edit-leaf-form");
            let selectLeaf = target.parentNode.previousSibling;
            let newName = target.parentNode.querySelector(".edit-leaf-name").value;
            let newDate = target.parentNode.querySelector(".edit-leaf-date").value;
            let oldName = target.parentNode.previousSibling.querySelector(".leaf-name").textContent;
            // Set leaf name;
            editTree.editLeaf(oldName, newName, newDate);

            renderState.show(selectLeaf);
            renderState.show(leafForm);
            renderState.renderTree(appe);
            saveStorage(appe);
        }
        else if (target.matches(".edit-form-exit")) {
            let leafForm = target.closest(".edit-leaf-form");
            let leaf = target.parentNode.previousSibling;
            renderState.show(leaf);
            leafForm.remove();
        }
        else if (target.matches("input[type=checkbox]")) {
            let leaf = target.closest(".leaf");
            console.log(leaf);
            // Remove from data
            let name = leaf.querySelector(".leaf-name").textContent;
            editTree.deleteLeaf(name);
            renderState.renderTree(appe);
            saveStorage(appe);
        }
        else {
            return;
        }
    }
    
    return {
        events,
    }
})();

export {
    listeners
}