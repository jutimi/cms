"use client";

import { Layout, theme } from "antd";
import { AntdRegistry } from "@ant-design/nextjs-registry";

export function Body({ children }: { children: React.ReactNode }) {
    const {
        token: { borderRadiusLG },
    } = theme.useToken();

    const { Content } = Layout;

    return (
        <Content
            style={{
                padding: 24,
                minHeight: 360,
                borderRadius: borderRadiusLG,
            }}
        >
            <AntdRegistry>{children}</AntdRegistry>
        </Content>
    );
}
