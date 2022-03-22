// Create dom creation helpers
function createElemWithClass(elem, name, content, attrName, attrValue) {
    const element = document.createElement(elem);
    element.classList.add(name);

    if (content) {
        element.textContent = content;
    }

    if (attrName && attrValue) {
        element.setAttribute(attrName, attrValue);
    }
    return element;
}


333








































export {
    createElemWithClass
}