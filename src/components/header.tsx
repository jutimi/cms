"use client";

import { Layout } from "antd";

export function CustomHeader() {
    const { Header } = Layout;

    return (
        <Header style={{ display: "flex", alignItems: "center" }}>
            <div
                className="demo-logo"
                style={{
                    maxWidth: "100px",
                    overflow: "hidden",
                    color: "white",
                    whiteSpace: "nowrap",
                }}
            >
                Workspace Name
            </div>
        </Header>
    );
}
