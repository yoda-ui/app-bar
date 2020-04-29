'use strict';
import "./drawer-style.css";

export default class Drawer {
    constructor(data) {
        this.logo = data.logo;

        // Create overlay for drawer
        let drawerOverlay = document.createElement('div');
        document.body.appendChild(drawerOverlay);
        drawerOverlay.classList.add("drawer-overlay");
        drawerOverlay.classList.add("drawer-invisible");

        // Create drawer
        let drawerMain;
        drawerMain = document.createElement('div');
        drawerOverlay.appendChild(drawerMain);
        drawerMain.classList.add('drawer-main');

        // Open drawer
        document.querySelector('.menu-icon-wrapper').onclick = function (event) {
            event.stopPropagation();
            event.preventDefault();
            drawerOverlay.classList.remove('drawer-invisible');
        }

        // Close drawer
        drawerOverlay.onclick = function (event) {
            event.stopPropagation();
            event.preventDefault();
            if (event.target !== this) return;
            drawerOverlay.classList.add('drawer-invisible');
        }

        // Add logo to drawer
        let logo;
        logo = document.createElement('div');
        drawerMain.appendChild(logo);
        logo.classList.add("drawer-logo");
        logo.innerHTML = this.logo.text;


    }
}
