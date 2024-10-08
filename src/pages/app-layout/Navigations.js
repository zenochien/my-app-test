import React from "react";
import { SideNavigation, SideNavigationProps } from "@cloudscape-design/components";

export const Navigations = (props) => {
    const navItems = [
        { type: "link", text: "Home", href: "#/home" },
        { type: "link", text: "CV", href: "#/CV/ProfilePage" },
    ];

    return (
        <SideNavigation
            activeHref={document.location.hash}
            header={props.header}
            items={props.items || navItems}
            toolsHide={true}
            {...props}
        />
    );
};

export default Navigations;