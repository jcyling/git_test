// get stuff from storage
const renderState = (function() {
    const main = document.querySelector("main");
    const treeDiv = document.createElement("div");

    function renderTree(tree) {
        const treeName = document.createElement("h2");

        treeDiv.classList.add("tree");
        treeName.classList.add("tree-name");
        treeName.textContent = tree.name;
        treeDiv.appendChild(treeName);
        
        // Iterate through branches
        tree.branches.forEach(function(item, index) {
            treeDiv.appendChild(renderBranch(item, index));
        });


        main.appendChild(treeDiv);
    }

    function renderBranch(item, index) {
        const branch = document.createElement("div");
        branch.classList.add("branch");

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
            branch.appendChild(renderLeaves(item, index));
        });

        return branch;
    }

    function renderLeaves(item, index) {
        const leaf = document.createElement("div");
        leaf.classList.add("leaf");

        // Iterate through leaf properties
        for (const [key, value] of Object.entries(item)) {
            const element = document.createElement("span");
            element.textContent = value;
            element.classList.add(`leaf-${key}`);
            leaf.appendChild(element);
        }

        return leaf;
    }

    function renderMenu() {
        const branch = document.querySelector(".branch");
        const button = document.createElement("button");
        button.textContent = "Add Branch";
        branch.appendChild(button);
    }

    return {
        renderTree,
        renderMenu
    }

})();

export {
    renderState,
}