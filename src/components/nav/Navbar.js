import React from "react";
import NavItem from './NavItem';
const sections = [
    {
        title: "Home",
        url: "/"
    },
    {
        title: "About Us",
        url: "/aboutus/"
    },
    {
        title: "Monthly Challenges",
        url: "/monthlychallenge/"
    }
]

const Navbar = () => {
    return (
        <div className="navbarHolder">
            <div className="navbar" key="nav">
                <ul className="holderNavs">
                    {
                        sections.map((sectionName, index) => {
                            if (window.location.origin + sectionName.url == window.location.href){
                                return (
                                    <>
                                    <NavItem link={sectionName.url} key={index} id="active">{sectionName.title}</NavItem>
                                    </>
                                )
                            } else {
                                return (
                                    <>
                                    <NavItem link={sectionName.url} key={index}>{sectionName.title}</NavItem>
                                    </>
                                )
                            }
                        })
                    }
                </ul>
            </div>
        </div>
    )
}
export default Navbar;