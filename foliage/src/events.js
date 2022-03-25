import { renderState } from "./render.js";
import { saveStorage } from "./storage.js";
import { appe } from "./index.js";
import { editTree } from "./tasks.js";

const listeners = (function() {
    const branchNav = document.querySelector(".nav-branch")
    const dashboard = document.querySelector(".dashboard")
    const leafForm = document.querySelector(".leaf-form");
    const branchForm = document.querySelector(".branch-form");

    function events() {
        branchNav.onclick = function(event) {
            let target = event.target;
            if (!target) {
                return;
            }
            // Deleting projects
            if (target.matches("button") && target.matches(".branch-delete")) {
                let branch = target.parentNode;
                let name = branch.querySelector(".branch-name").textContent;
                editTree.deleteBranch(name);
                renderState.renderTree(appe);
                saveStorage(appe);
            }
            // Opening new branch form
            else if (target.matches(".add-branch")) {
                renderState.show(branchForm);
            }
            // Submitting new
            else if (target.matches(".branch-form-submit")) {
                const branchNameInput = target.parentNode.querySelector(".branch-form-name").value;
                console.log(branchNameInput);
                if (!branchNameInput) {
                    return;
                }
                else {
                    let newBranchName = branchNameInput;
                    editTree.createBranch(newBranchName);
                    saveStorage(appe);
                    renderState.show(branchForm);
                    renderState.renderTree(appe);
                }
            }
            // Changing active project
            else if (target.matches(".branch") || target.parentNode.matches(".branch")) {
                if (target.closest(".branch").classList.contains("inactive")) {
                    let branchName = target.closest(".branch").querySelector(".branch-name").textContent;
                    editTree.setActiveBranch(branchName);
                    renderState.renderTree(appe);
                }
            }
        }
    
    
    
        // Main dashboard events listener
        dashboard.onclick = function(event) {
            let target = event.target
            if (!target) {
                return;
            }
            else if (target.matches(".add-leaf")) {
                renderState.show(leafForm);
            }
            // Submitting new task form
            else if (target.matches(".leaf-form-submit")) {
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
            // Opening task edit form
            else if (target.matches(".leaf-edit")) {
                let leaf = target.closest(".leaf");
    
                // Render form
                renderState.editLeafForm(leaf);
                renderState.show(leaf);
            }
            // Submitting task edit form
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
            // Closing task edit form
            else if (target.matches(".edit-form-exit")) {
                let leafForm = target.closest(".edit-leaf-form");
                let leaf = target.parentNode.previousSibling;
                renderState.show(leaf);
                leafForm.remove();
            }
            // Checking/Deleting tasks
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
    }
    
    return {
        events,
    }

    
})();

export {
    listeners
}