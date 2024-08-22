"use client";

import { Layout, theme } from "antd";
import { AntdRegistry } from "@ant-design/nextjs-registry";

// CSS Style
const contentStyle: React.CSSProperties = {
    padding: 24,
    flexGrow: 1,
    height: "100%",
};

export function Body({ children }: { children: React.ReactNode }) {
    const {
        token: { borderRadiusLG },
    } = theme.useToken();

    const { Content } = Layout;

    return (
        <Content
            style={{
                ...contentStyle,
                borderRadius: borderRadiusLG,
            }}
        >
            <AntdRegistry>{children}</AntdRegistry>
        </Content>
    );
}
