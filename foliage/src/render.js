import { appe } from "./index.js"
import { createElemWithClass } from "./helpers.js"

// get stuff from storage
const renderState = (function() {
    const dashboard = document.querySelector(".dashboard");
    const branchNav = document.querySelector(".nav-branch");
    const branchForm = document.querySelector(".branch-form");
    const leafForm = document.querySelector(".leaf-form");

    function renderTree(tree) {
        // Refresh tree
        document.querySelectorAll(".branch").forEach(n => n.remove());
        document.querySelectorAll(".leaf").forEach(n => n.remove());

        // Iterate through branches
        tree.branches.forEach(function(item, index) {
            branchNav.insertBefore(renderBranch(item, index), branchForm);
        });
    }

    function renderBranch(item, index) {
        const branch = createElemWithClass("div", "branch");

        //Iterate through branch properties
        for (const [key, value] of Object.entries(item)) {
            if (Array.isArray(value) != true) {
                const element = document.createElement("h3");
                element.textContent = value;
                element.classList.add(`branch-${key}`);
                branch.appendChild(element);
            }
        }

        // Iterate through leaves
        item.leaves.forEach(function(item, index) {
            dashboard.insertBefore(renderLeaves(item, index), leafForm);
        });

        return branch;
    }

    function renderLeaves(item, index) {
        const leaf = createElemWithClass("div", "leaf");
        leaf.appendChild(createElemWithClass("input", `leaf-status`, "", "type", "checkbox"));

        // Iterate through leaf properties
        for (const [key, value] of Object.entries(item)) {
            leaf.appendChild(createElemWithClass("span", `leaf-${key}`, value));            
        }

        return leaf;
    }

    function showLeafForm() {
        leafForm.classList.toggle("hidden");
    }

    function showBranchForm() {
        branchForm.classList.toggle("hidden");

    }
    return {
        renderTree,
        showLeafForm,
        showBranchForm
    }

})();

export {
    renderState,
}