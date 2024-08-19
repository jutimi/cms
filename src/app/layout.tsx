import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Layout } from "antd";
import { Header, Footer, Content } from "antd/es/layout/layout";
import { NavLinks } from "@/components/nav-links";
import { NavBar } from "@/components/nav-bar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Layout style={{ minHeight: "100vh" }}>
            <NavBar></NavBar>
            <Layout>
              <Header style={{ padding: 0 }} />
              <Content style={{ margin: "0 16px" }}>
                <NavLinks></NavLinks>
                <AntdRegistry>{children}</AntdRegistry>
              </Content>
              <Footer style={{ textAlign: "center" }}>
                Ant Design ©{new Date().getFullYear()} Created by Ant UED
              </Footer>
            </Layout>
          </Layout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
