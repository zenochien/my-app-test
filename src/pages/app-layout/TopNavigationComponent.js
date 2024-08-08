import React from "react";
import { signOut } from "aws-amplify/auth";
import { TopNavigation } from "@cloudscape-design/components";

const TopNavigationComponent = () => {
    const handleSignOut = async () => {
        try {
            await signOut({ global: true });
            console.log("Signed out globally.");
            // Optionally redirect to login page or home page after sign-out
            // window.location.href = "/login";
        } catch (error) {
            console.error("Error signing out: ", error);
        }
    };

    return (
        <TopNavigation
            identity={{
                href: "#",
                title: "Service",
                logo: {
                    src: "/logo-small-top-navigation.svg",
                    alt: "Service"
                }
            }}
            utilities={[
                {
                    type: "button",
                    text: "Link",
                    href: "https://example.com/",
                    external: true,
                    externalIconAriaLabel: " (opens in a new tab)"
                },
                {
                    type: "button",
                    iconName: "notification",
                    title: "Notifications",
                    ariaLabel: "Notifications (unread)",
                    badge: true,
                    disableUtilityCollapse: false
                },
                {
                    type: "menu-dropdown",
                    iconName: "settings",
                    ariaLabel: "Settings",
                    title: "Settings",
                    items: [
                        {
                            id: "settings-org",
                            text: "Organizational settings"
                        },
                        {
                            id: "settings-project",
                            text: "Project settings"
                        }
                    ]
                },
                {
                    type: "menu-dropdown",
                    text: "Customer Name",
                    description: "email@example.com",
                    iconName: "user-profile",
                    items: [
                        { id: "profile", text: "Profile" },
                        { id: "preferences", text: "Preferences" },
                        { id: "security", text: "Security" },
                        {
                            id: "support-group",
                            text: "Support",
                            items: [
                                {
                                    id: "documentation",
                                    text: "Documentation",
                                    href: "#",
                                    external: true,
                                    externalIconAriaLabel:
                                        " (opens in new tab)"
                                },
                                { id: "support", text: "Support" },
                                {
                                    id: "feedback",
                                    text: "Feedback",
                                    href: "#",
                                    external: true,
                                    externalIconAriaLabel:
                                        " (opens in new tab)"
                                }
                            ]
                        },
                        { id: "signout", text: "Sign out", onClick: handleSignOut }
                    ]
                }
            ]}
        />
    );
};

export default TopNavigationComponent;
