class Tree {
    constructor(name) {
        this.name = name;
        this.branches = []; 
    }

}

class Branch {
    constructor(name) {
        this.name = name;
        this.leaves = [];
    }

}

class Leaf {
    constructor(name) {
        this.name = name;
        this.stat;
        this.date;
        this.priority;
    }
}

// Module: Default project
const createDefaultProject = (function() {
    function createDefault() {
        const defaultTree = new Tree("Default");
        const dailies = new Branch("Dailies");
        const getMilk = new Leaf("Get milk");

        defaultTree.branches.push(dailies);
        dailies.leaves.push(getMilk);
        
        return defaultTree;
    }
    
    return {
        createDefault
    }
})();


export {
    createDefaultProject
}