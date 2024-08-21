"use client";

import { usePathname } from "next/navigation";
import { Breadcrumb } from "antd";
import { ItemType } from "antd/es/breadcrumb/Breadcrumb";
import { useTranslations } from "next-intl";
import { validate as uuidValidate } from "uuid";
import Link from "next/link";

export function NavLinks() {
    const t = useTranslations("nav_bar");
    const pathname = usePathname();

    const pathArr = pathname.split("/").slice(1);
    const getTitle = (data: {
        path: string;
        index: number;
        isLastPath: boolean;
    }): React.ReactNode => {
        let pathName = t(`detail`);
        let pathUrl = `/${pathArr[data.index - 1]}/${data.path}`;

        if (!uuidValidate(data.path)) {
            pathName = t(data.path);
            pathUrl = `/${data.path}`;
        }

        if (data.isLastPath) {
            return <>{pathName}</>;
        }

        return <Link href={pathUrl}>{pathName}</Link>;
    };
    const items: ItemType[] = pathArr.map((path, index) => {
        return {
            key: path,
            title: getTitle({
                path,
                index,
                isLastPath: index === pathArr.length - 1,
            }),
        };
    });

    return <Breadcrumb style={{ margin: "16px 0" }} items={items}></Breadcrumb>;
}
