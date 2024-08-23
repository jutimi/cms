"use client";

import { Button, Col, Flex, Form, FormProps, Input, Row } from "antd";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Page() {
    const t = useTranslations();

    const onFinishRegister: FormProps<RegisterFieldType>["onFinish"] = (
        values
    ) => {
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
                        name="register"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        style={{ width: "80%" }}
                        initialValues={{ remember: true }}
                        onFinish={onFinishRegister}
                        autoComplete="off"
                    >
                        <Form.Item<RegisterFieldType>
                            label={t("register.username")}
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: t("validation.required", {
                                        field: t("register.username"),
                                    }),
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item<RegisterFieldType>
                            label={t("register.password")}
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: t("validation.required", {
                                        field: t("register.password"),
                                    }),
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit">
                                {t("register.register")}
                            </Button>
                            &nbsp; {t("register.login_text")}{" "}
                            <Link href="/login">{t("register.login")}</Link>
                        </Form.Item>
                    </Form>
                </Flex>
            </Col>
        </Row>
    );
}
