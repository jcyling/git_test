import { createElemWithClass, createCircle } from "./helpers.js"

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
            // For each object property (excluding arrays)
            if (Array.isArray(value) != true) {
                const element = document.createElement("span");
                if (key == "name") {
                    element.textContent = value;
                }
                else {
                    renderBranchStatus(branch, key, value);
                }
                element.classList.add(`branch-${key}`);
                branch.appendChild(element);
            }
        }

        // Delete button
        const branchDel = createElemWithClass("button", "branch-delete", "X");
        branch.appendChild(branchDel);
        
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

        leaf.appendChild(createElemWithClass("button", 'leaf-edit', "Edit"));
        return leaf;
    }

    function show(element) {
        if (element.classList.contains("hidden")) {
            element.classList.remove("hidden");
        }
        else {
            element.classList.add("hidden");
        }
        
    }

    function renderBranchStatus(branch, key, value) {
        branch.appendChild(createCircle(value, "branch-status"));
    }

    function editLeafForm(leaf) {
        const editForm = createElemWithClass("div", "edit-leaf-form")
        const editLeafName = createElemWithClass("input", "edit-leaf-name", "", "placeholder", "Name")
        const editLeafDate = createElemWithClass("input", "edit-leaf-date", "", "type", "date")
        const editFormSubmit = createElemWithClass("button", "edit-leaf-submit", "Edit")
        const editFormX = createElemWithClass("button", "edit-form-exit", "X")
        editForm.append(editLeafName, editLeafDate, editFormSubmit, editFormX);
        leaf.after(editForm);
    }

    return {
        renderTree,
        show,
        editLeafForm
    }

})();

export {
    renderState,
}