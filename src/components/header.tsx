import { Header } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";

export function CustomHeader() {
    return (
        <Header style={{ display: "flex", alignItems: "center" }}>
            <div
                className="demo-logo"
                style={{
                    maxWidth: "100px",
                }}
            >
                <Title
                    level={3}
                    style={{
                        color: "white",
                        overflow: "hidden",
                    }}
                >
                    Workspace Name
                </Title>
            </div>
        </Header>
    );
}
