import "./navbar-style.css";


export default class navBar {
    constructor(data) {
        this.logo = data.logo;

        let navElement;
        navElement = document.createElement('nav');
        document.body.appendChild(navElement);
        navElement.classList.add("nav-element");
        navElement.classList.add("shadow");

        let menuIconWrapper;
        menuIconWrapper = document.createElement('div');
        navElement.appendChild(menuIconWrapper);
        menuIconWrapper.classList.add('menu-icon-wrapper');

        let menuIcon;
        menuIcon = document.createElement('div');
        menuIconWrapper.appendChild(menuIcon);
        menuIcon.innerHTML = "&#9776;";
        menuIcon.classList.add('menu-icon');

        let profileIcon;
        profileIcon = document.createElement('div');
        navElement.appendChild(profileIcon);
        profileIcon.innerHTML = "&#128100;";
        profileIcon.classList.add("profile-icon");

        let logo;
        logo = document.createElement('h2');
        navElement.appendChild(logo);
        logo.innerHTML = this.logo.text;
        logo.classList.add("logo");
    }

}
