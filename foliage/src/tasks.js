import { isDate, isPast } from 'date-fns/isDate';
import { appe } from './index.js';
import { saveStorage } from './storage.js';

class Tree {
    constructor(name) {
        this.name = name;
        this.branches = []; 
    }
}

class Branch {
    constructor(name, status) {
        this.name = name;
        this.leaves = [];
        this.active = status;
    }

    get branchName() {
        return this.name;
    }

    set branchName(value) {
        this.name = value;
    }

    get branchStatus() {
        return this.active;
    }

}

class Leaf {
    constructor(name, stat, date) {
        this.name = name;
        this.stat = stat;
        this.date = date;
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
        if (!isDate(value) || isPast(value)) {
            return console.log("Error");
        }
        else {
            this.date = value;
        }
    }
}

// Module: Default project
const createDefaultProject = (function() {
    function createDefault() {
        const defaultTree = new Tree("The Tree");
        const dailies = new Branch("Dailies", true);
        const weeklies = new Branch("Weeklies", false);

        const getMilk = new Leaf("Get milk", false, "");
        const getBread = new Leaf("Get bread", false, "");
        const makePlaylist = new Leaf("Make playlist", false, "");

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
        let newBranch = new Branch(name.value);
    }

    function createLeaf(name, date) {
        let newLeaf = new Leaf(name, false);
        if (date) {
            newLeaf.date = date;
        }
        let currentBranch = appe.branches.find(branch => branch.active == true);
        currentBranch.leaves.push(newLeaf);
        console.log(appe);
        saveStorage(appe);
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