import navBar from "./navbar/navbar";
import drawer from "./drawer/drawer";

let navBarData = {
    logo: { text: "Hannah", link: "/" },
    links: [
        { text: "Home", link: "/" },
        { text: "About", link: "/about" }
    ]
};

let navBarStyle = {

};

new navBar( navBarData );
new drawer( navBarData );
