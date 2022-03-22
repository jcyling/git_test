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

    get branchName() {
        return this.name;
    }

    set branchName(value) {
        this.name = value;
    }

}

class Leaf {
    constructor(name, stat, date, priority) {
        this.name = name;
        this.stat = stat;
        this.date = date;
        this.priority = priority;
    }

    get leafName() {
        return this.name;
    }

    set leafName(value) {
        this.name = value;
    }

    get leafStat() {
        return this.stat;
    }

    set leafStat(value) {
        this.stat = value;
    }

    get leafDate() {
        return this.date;
    }

    set leafDate(value) {
        this.date = value;
    }

    get leafPriority() {
        return this.priority;
    }

    set leafPriority(value) {
        this.priority = value;
    }
}

// Module: Default project
const createDefaultProject = (function() {
    function createDefault() {
        const defaultTree = new Tree("The Tree");
        const dailies = new Branch("Dailies");
        const weeklies = new Branch("Weeklies");

        const getMilk = new Leaf("Get milk", false, "", 1);
        const getBread = new Leaf("Get bread", false, "", 1);
        const makePlaylist = new Leaf("Make playlist", false, "", 2);

        defaultTree.branches.push(dailies, weeklies);
        dailies.leaves.push(getMilk, getBread, makePlaylist);
        
        return defaultTree;
    }

    return {
        createDefault
    }
})();

const addToProject = (function() {
    function createBranch(name) {
        let newLeaf = new Leaf(name.value);
    }

    function createLeaf(name) {
        let newBranch = new Branch(name.value);
    }
    return {
        createBranch,
        createLeaf
    }
})();


export {
    createDefaultProject,
    addToProject
}