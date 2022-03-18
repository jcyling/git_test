function renderHome() {
    // Home
    const home = document.createElement("div");
    const banner = document.createElement("div");
    const callout = document.createElement("h1");

    banner.classList.add("banner");
    callout.classList.add("callout");

    callout.textContent = "Certified Nice Pancakes";

    home.append(banner, callout);
    return home;
}

export {
    renderHome
}