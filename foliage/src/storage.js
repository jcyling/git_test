import { createDefaultProject } from "./tasks.js";

function loadStorage() {
    const appState = JSON.parse(localStorage.getItem("appState"));
    if (appState) {
        return appState;
    }
    else {
        const tree = createDefaultProject.createDefault()
        return tree;
        
    }
}


function saveStorage() {
    // localStorage.setItem("activeTasks", JSON.stringify(//activeTasks
    // ));
}


export {
    loadStorage,
    saveStorage
}