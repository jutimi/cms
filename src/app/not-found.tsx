"use client";

import { Button, Col, Result, Row } from "antd";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter();
    const t = useTranslations("not_found");

    return (
        <Row style={{ height: "100vh" }}>
            <Col span={24} className="center" style={{}}>
                <Result
                    status="404"
                    title="404"
                    subTitle={t("sub_title")}
                    extra={
                        <Button type="primary" onClick={() => router.push("/")}>
                            {t("back_home")}
                        </Button>
                    }
                />
            </Col>
        </Row>
    );
}
