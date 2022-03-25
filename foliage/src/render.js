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

        let activeBranch = tree.branches.find(branch => branch.status == true);
        if (activeBranch) {
            renderBranchItems(activeBranch);
        }
        else {
            tree.branches[0].status = true;
            console.log(tree.branches[0]);
            renderBranchItems(tree.branches[0]);
        }

        // Render branch in navigation
        tree.branches.forEach(function(item, index) {
            branchNav.insertBefore(renderBranchNav(item, index), branchForm);
        });
    }

    function renderBranchItems(item) {
        // Render branch tasks in dashboard
        item.leaves.forEach(function(item, index) {
            dashboard.insertBefore(renderLeaves(item, index), leafForm);
        });    
    }

    function renderBranchNav(item) {
        const branch = createElemWithClass("div", "branch");

        // Render branch UI in navigation pane
        for (const [key, value] of Object.entries(item)) {
            // For each object property (excluding arrays)
            if (Array.isArray(value) != true) {
                if (key == "name") {
                    const element = document.createElement("span");
                    element.classList.add(`branch-${key}`);
                    element.textContent = value;
                    branch.appendChild(element);
                }
                if (key == "status") {
                    renderBranchStatus(branch, key, value);

                    if (value == true) {
                        branch.classList.add("active");
                    }
                    else {
                        branch.classList.add("inactive");
                    }
                }
            }
        }
        const branchDel = createElemWithClass("button", "branch-delete", "X");
        branch.appendChild(branchDel);
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

    function renderBranchStatus(branch, key, value) {
        branch.appendChild(createCircle(value, "branch-status"));
    }

    function show(element) {
        if (element.classList.contains("hidden")) {
            element.classList.remove("hidden");
        }
        else {
            element.classList.add("hidden");
        }
        
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
    renderState
}