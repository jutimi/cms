"use client";

import { usePathname } from "next/navigation";
import { Breadcrumb } from "antd";

export function NavLinks() {
  const pathname = usePathname();

  return (
    <Breadcrumb style={{ margin: "16px 0" }}>
      <Breadcrumb.Item>User</Breadcrumb.Item>
      <Breadcrumb.Item>Bill</Breadcrumb.Item>
    </Breadcrumb>
  );
}
