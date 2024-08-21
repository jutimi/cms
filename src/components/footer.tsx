"use client";

import { Layout, theme } from "antd";

export function CustomFooter() {
    const { Footer } = Layout;

    return (
        <Footer style={{ textAlign: "center" }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
    );
}
