import TopNavigation from "@cloudscape-design/components/top-navigation";

export default function Header(){
    return(
        // eslint-disable-next-line react/react-in-jsx-scope
        <TopNavigation
            identity={{
                href: "#",
                title: "Internal Survey Tool",
                logo: {
                src:"Img.jpg",
                alt: "Service"
                }
            }}
            utilities={[
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
                text: "Hemanth Potti",
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
                    { id: "signout", text: "Sign out" }
                ]
                }
            ]}
        />
    );
}
