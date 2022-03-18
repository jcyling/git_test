function renderMenu() {
    // Home
    const menu = document.createElement("div");
    const ul = document.createElement("ul");
    const menuTitle = document.createElement("h3");

    menuTitle.classList.add("menuTitle");
    ul.classList.add("menuList");

    menuTitle.textContent = "Breakfast Menu";

    const menuItems = {
        "Pancakes with maple syrup" : "$10.00",
        "Pancakes with choco sauce" : "$9.00",
        "Pancakes with sugar" : "$8.00",
    }
    
    menu.append(menuTitle, ul);

    for(const key in menuItems) {
        console.log(key);
        console.log(menuItems[key]);

        const menuItem = document.createElement("h3");
        menuItem.classList.add("menuItem");
        const menuItemPrice = document.createElement("p");
        menuItemPrice.classList.add("price");

        menuItem.textContent = key;
        menuItemPrice.textContent = menuItems[key];
        menu.append(menuItem, menuItemPrice);
    }

    return menu;
}

export {
    renderMenu
}