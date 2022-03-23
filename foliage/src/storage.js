import { createDefaultProject } from "./tasks.js";

function loadStorage() {
    const appState = JSON.parse(localStorage.getItem("appState"));
    if (appState) {
        return appState;
    }
    else {
        return createDefaultProject.createDefault();
    }
}
function saveStorage(tree) {
    window.localStorage.setItem("appState", JSON.stringify(tree));
    console.log("storage" + tree);

}

export {
    loadStorage,
    saveStorage
}