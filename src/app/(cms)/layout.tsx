import { Body } from "@/components/body";
import { CustomFooter } from "@/components/footer";
import { CustomHeader } from "@/components/header";
import { NavBar } from "@/components/nav-bar";
import { NavLinks } from "@/components/nav-links";
import { Layout } from "antd";

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Layout className="app-layout">
            <CustomHeader></CustomHeader>
            <Layout className="main-layout">
                <NavBar></NavBar>
                <Layout className="content-layout">
                    <NavLinks></NavLinks>
                    <Body>{children}</Body>
                    <CustomFooter></CustomFooter>
                </Layout>
            </Layout>
        </Layout>
    );
}
