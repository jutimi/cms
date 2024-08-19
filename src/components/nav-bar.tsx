"use client";

import { useTranslations } from "next-intl";
import { Menu, MenuProps } from "antd";
import Sider from "antd/es/layout/Sider";
import { useRouter } from "next/navigation";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(t: any): MenuItem[] {
  return [
    {
      key: "workspace_group",
      type: "group",
      label: t("workspace_group"),
      children: [
        {
          key: "user_workspaces",
          label: t("user_workspaces"),
        },
        {
          key: "organizations",
          label: t("organizations"),
        },
      ],
    },
  ];
}

export function NavBar() {
  const t = useTranslations("nav_bar");
  const router = useRouter();

  const onClick: MenuProps["onClick"] = (e) => {
    router.push(`/${e.key}`);
  };

  return (
    <Sider collapsible>
      <div className="demo-logo-vertical" />
      <Menu
        onClick={onClick}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={getItem(t)}
        theme="dark"
      />
    </Sider>
  );
}
