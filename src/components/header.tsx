"use client";

import { Layout, theme } from "antd";

// Styling
const headerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    borderBottom: `1px solid #f0f0f0`,
    position: "fixed",
    zIndex: 1,
    width: "100%",
    top: 0,
    height: "50px",
};
const logoStyle: React.CSSProperties = {
    maxWidth: "100px",
    overflow: "hidden",
    whiteSpace: "nowrap",
};

export function CustomHeader() {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const { Header } = Layout;

    return (
        <Header
            className="app-header"
            style={{
                ...headerStyle,
                background: colorBgContainer,
            }}
        >
            <div className="demo-logo" style={logoStyle}>
                Workspace Name
            </div>
        </Header>
    );
}
