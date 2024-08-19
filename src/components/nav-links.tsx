"use client";

import { usePathname } from "next/navigation";
import { Breadcrumb } from "antd";
import { ItemType } from "antd/es/breadcrumb/Breadcrumb";
import { useTranslations } from "next-intl";

export function NavLinks() {
    const t = useTranslations("nav_bar");
    const pathname = usePathname();

    const items: ItemType[] = pathname
        .split("/")
        .slice(1)
        .map((path) => {
            return {
                title: t(path),
                key: path,
            };
        });

    return <Breadcrumb style={{ margin: "16px 0" }} items={items}></Breadcrumb>;
}
