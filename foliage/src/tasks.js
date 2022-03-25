import { isDate, isPast } from 'date-fns/isDate';
import { appe } from './index.js';
import { saveStorage } from './storage.js';

export class Tree {
    constructor(name) {
        this.name = name;
        this.branches = []; 
    }

    createBranch(name) {
        let newBranch = new Branch(name.value);
    }
}

export class Branch {
    constructor(name, status) {
        this.name = name;
        this.leaves = [];
        this.status = status;
    }

    get branchName() {
        return this.name;
    }

    set branchName(value) {
        this.name = value;
    }

    get branchStatus() {
        return this.status;
    }
}

export class Leaf {
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
        weeklies.leaves.push(getMilk, getBread, makePlaylist);

        return defaultTree;
    }

    return {
        createDefault
    }
})();

const editTree = (function() {
    function createLeaf(name, date) {
        if (!name) {
            return;
        }
        let newLeaf = new Leaf(name, false);
        if (date) {
            newLeaf.date = date;
        }
        let activeBranch = appe.branches.find(branch => branch.status == true);
        activeBranch.leaves.push(newLeaf);
    }
    
    function deleteLeaf(name) {
        let activeLeaves = appe.branches.find(branch => branch.status == true).leaves;
        let leafIndex = activeLeaves.findIndex(item => item.name == name);
        activeLeaves.splice(leafIndex, 1);
    }

    function editLeaf(oldName, newName, newDate) {
        if (!newName) {
            return;
        }
        else {
            let activeLeaves = appe.branches.find(branch => branch.status == true).leaves;
            let activeLeafIndex = activeLeaves.findIndex(item => item.name == oldName);
            activeLeaves[activeLeafIndex].name = newName;
            if (newDate) {
                activeLeaves[activeLeafIndex].date = newDate;
            }
            else {
                activeLeaves[activeLeafIndex].date = "";
            }
        }
    }

    function createBranch(name) {
        if (appe.branches.find(item => item.name == name)) {
            console.log("Error");
            return;
        }
        else {
            let newBranch = new Branch(name, false);
            appe.branches.push(newBranch);
        }
    }

    function deleteBranch(name) {
        let branchIndex = appe.branches.findIndex(item => item.name == name);
        if (branchIndex >= 0) {
            appe.branches.splice(branchIndex, 1);
        }
    }

    function setActiveBranch(name) {
        appe.branches.forEach(item => item.status = false);
        let currentBranchIndex = appe.branches.findIndex(item => item.name == name);
        appe.branches[currentBranchIndex].status = true;

    }
    
    return {
        createLeaf,
        deleteLeaf,
        createBranch,
        deleteBranch,
        editLeaf,
        setActiveBranch
    }
})();

export {
    createDefaultProject,
    editTree
}