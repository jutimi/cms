"use client";

import {
    Button,
    Checkbox,
    Col,
    Flex,
    Form,
    FormProps,
    Input,
    Row,
    Typography,
} from "antd";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Page() {
    const t = useTranslations();

    const onFinishLogin: FormProps<LoginFieldType>["onFinish"] = (values) => {
        console.log("Success:", values);
    };

    return (
        <Row style={{ height: "100vh" }}>
            <Col span={14}></Col>
            <Col span={10}>
                <Flex
                    justify="center"
                    align="center"
                    style={{ height: "100vh" }}
                >
                    <Form
                        name="login"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        style={{ width: "80%" }}
                        initialValues={{ remember: true }}
                        onFinish={onFinishLogin}
                        autoComplete="off"
                    >
                        <Form.Item<LoginFieldType>
                            label={t("login.username")}
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: t("validation.required", {
                                        field: t("login.username"),
                                    }),
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item<LoginFieldType>
                            label={t("login.password")}
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: t("validation.required", {
                                        field: t("login.password"),
                                    }),
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item<LoginFieldType>
                            name="remember"
                            valuePropName="checked"
                            wrapperCol={{ offset: 8, span: 16 }}
                        >
                            <Flex justify="space-between" align="center">
                                <Form.Item
                                    name="remember"
                                    valuePropName="checked"
                                    noStyle
                                >
                                    <Checkbox>
                                        {t("login.remember_me")}
                                    </Checkbox>
                                </Form.Item>
                                <Link href="">
                                    {t("login.forgot_password")}
                                </Link>
                            </Flex>
                        </Form.Item>
                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit">
                                {t("login.login")}
                            </Button>
                            &nbsp; {t("login.register_text")}{" "}
                            <Link href="/register">{t("login.register")}</Link>
                        </Form.Item>
                    </Form>
                </Flex>
            </Col>
        </Row>
    );
}
