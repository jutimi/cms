"use client";

import { Layout, theme } from "antd";

export function CustomHeader() {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const { Header } = Layout;

    return (
        <Header
            style={{
                display: "flex",
                alignItems: "center",
                background: colorBgContainer,
                borderBottom: `1px solid #f0f0f0`,
            }}
        >
            <div
                className="demo-logo"
                style={{
                    maxWidth: "100px",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                }}
            >
                Workspace Name
            </div>
        </Header>
    );
}
