import { createElemWithClass } from "./helpers.js"

// get stuff from storage
const renderState = (function() {
    const main = document.querySelector("main");
    const dashboard = document.querySelector(".dashboard");
    const branchNav = document.querySelector(".nav-branch");


    function renderTree(tree) {
        const treeName = createElemWithClass("h2", "tree-name", tree.name);
        branchNav.appendChild(treeName);
        
        // Iterate through branches
        tree.branches.forEach(function(item, index) {
            branchNav.appendChild(renderBranch(item, index));
        });


        main.appendChild(dashboard);
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
            dashboard.appendChild(renderLeaves(item, index));
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

    function renderMenu() {
        const addLeaf = createElemWithClass("button", "add-leaf", "Add Leaf");
        dashboard.appendChild(addLeaf);

        const addBranch = createElemWithClass("button", "add-branch", "New Branch");
        branchNav.appendChild(addBranch);

        
        const leafForm = createElemWithClass("div", ".leaf-form");
        const leafNameInput = createElemWithClass("input", ".leaf-form-name", "Name", "type", "text");
        const leafFormSubmit = createElemWithClass("button", ".leaf-form-submit", "Submit");
        const leafDateInput = createElemWithClass("input", ".leaf-form-date", "Date")
        leafForm.appendChild(leafNameInput);
        leafForm.appendChild(leafDateInput);
        leafForm.appendChild(leafFormSubmit);
        dashboard.insertBefore(leafForm, dashboard.lastChild);    
    
    }


    return {
        renderTree,
        renderMenu,
    }

})();

export {
    renderState,
}