"use client";

import { useTranslations } from "next-intl";
import { Menu, MenuProps, Layout } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { OrganizationIcon, WorkspaceIcon } from "@/components/icon";

// Private Interface/Type
type MenuItem = Required<MenuProps>["items"][number];

// CSS Style
const siderStyle: React.CSSProperties = {
    width: "200px",
    overflow: "auto",
    position: "fixed",
    height: "100%",
    left: 0,
    top: "50px" /* Offset sider by header height */,
    scrollbarWidth: "thin",
    scrollbarColor: "unset",
    borderRight: "1px solid #f0f0f0",
};

// Private Function
function getItem(t: any): MenuItem[] {
    return [
        {
            key: "workspace_group",
            label: t("workspace_group"),
            icon: <WorkspaceIcon />,
            children: [
                {
                    key: "user_workspaces",
                    label: t("user_workspaces"),
                    icon: <UserOutlined />,
                },
                {
                    key: "organizations",
                    label: t("organizations"),
                    icon: (
                        <OrganizationIcon
                            style={{ width: "20px", height: "20px" }}
                        />
                    ),
                },
            ],
        },
    ];
}

// Public Component
export function NavBar() {
    const t = useTranslations("nav_bar");
    const router = useRouter();
    const [collapsed, setCollapsed] = useState(false);

    const { Sider } = Layout;

    const onClick: MenuProps["onClick"] = (e) => {
        router.push(`/${e.key}`);
    };

    return (
        <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
            theme="light"
            style={siderStyle}
        >
            <Menu
                onClick={onClick}
                mode="inline"
                items={getItem(t)}
                theme="light"
            />
        </Sider>
    );
}
