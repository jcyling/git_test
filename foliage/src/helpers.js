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

function createCircle(status, classes) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttributeNS(null, "class",  classes);
    circle.setAttributeNS(null, "cx", "50%");
    circle.setAttributeNS(null, "cy", "50%");
    circle.setAttributeNS(null, "r",  5);
    if (status == true) {
        circle.setAttributeNS(null, "fill", "mediumaquamarine");
    }
    else {
        circle.setAttributeNS(null, "fill", "salmon");
    }
    svg.appendChild(circle);
    return svg;
}
export {
    createElemWithClass,
    createCircle,
}