"use client";

import React, { useMemo, useState } from "react";
import { Card, Col, Input, Row, Table, TableColumnsType, Tree } from "antd";
import type { TreeDataNode } from "antd";
import { DataType } from "./interface";

function OrganizationTree() {
    const { Search } = Input;

    const x = 3;
    const y = 2;
    const z = 1;
    const defaultData: TreeDataNode[] = [];

    const generateData = (
        _level: number,
        _preKey?: React.Key,
        _tns?: TreeDataNode[]
    ) => {
        const preKey = _preKey || "0";
        const tns = _tns || defaultData;

        const children: React.Key[] = [];
        for (let i = 0; i < x; i++) {
            const key = `${preKey}-${i}`;
            tns.push({ title: key, key });
            if (i < y) {
                children.push(key);
            }
        }
        if (_level < 0) {
            return tns;
        }
        const level = _level - 1;
        children.forEach((key, index) => {
            tns[index].children = [];
            return generateData(level, key, tns[index].children);
        });
    };
    generateData(z);

    const dataList: { key: React.Key; title: string }[] = [];
    const generateList = (data: TreeDataNode[]) => {
        for (let i = 0; i < data.length; i++) {
            const node = data[i];
            const { key } = node;
            dataList.push({ key, title: key as string });
            if (node.children) {
                generateList(node.children);
            }
        }
    };
    generateList(defaultData);

    const getParentKey = (key: React.Key, tree: TreeDataNode[]): React.Key => {
        let parentKey: React.Key;
        for (let i = 0; i < tree.length; i++) {
            const node = tree[i];
            if (node.children) {
                if (node.children.some((item) => item.key === key)) {
                    parentKey = node.key;
                } else if (getParentKey(key, node.children)) {
                    parentKey = getParentKey(key, node.children);
                }
            }
        }
        return parentKey!;
    };

    const [expandedKeys, setExpandedKeys] = useState<React.Key[]>([]);
    const [searchValue, setSearchValue] = useState("");
    const [autoExpandParent, setAutoExpandParent] = useState(true);

    const onExpand = (newExpandedKeys: React.Key[]) => {
        setExpandedKeys(newExpandedKeys);
        setAutoExpandParent(false);
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        const newExpandedKeys = dataList
            .map((item) => {
                if (item.title.indexOf(value) > -1) {
                    return getParentKey(item.key, defaultData);
                }
                return null;
            })
            .filter(
                (item, i, self): item is React.Key =>
                    !!(item && self.indexOf(item) === i)
            );
        setExpandedKeys(newExpandedKeys);
        setSearchValue(value);
        setAutoExpandParent(true);
    };

    const treeData = useMemo(() => {
        const loop = (data: TreeDataNode[]): TreeDataNode[] =>
            data.map((item) => {
                const strTitle = item.title as string;
                const index = strTitle.indexOf(searchValue);
                const beforeStr = strTitle.substring(0, index);
                const afterStr = strTitle.slice(index + searchValue.length);
                const title =
                    index > -1 ? (
                        <span key={item.key}>
                            {beforeStr}
                            <span className="site-tree-search-value">
                                {searchValue}
                            </span>
                            {afterStr}
                        </span>
                    ) : (
                        <span key={item.key}>{strTitle}</span>
                    );
                if (item.children) {
                    return {
                        title,
                        key: item.key,
                        children: loop(item.children),
                    };
                }

                return {
                    title,
                    key: item.key,
                };
            });

        return loop(defaultData);
    }, [searchValue]);

    return (
        <Card title="Organization Tree" className="card-fit-screen">
            <Search
                placeholder="Search"
                onChange={onChange}
                style={{ marginBottom: 8 }}
            />
            <Tree
                onExpand={onExpand}
                expandedKeys={expandedKeys}
                autoExpandParent={autoExpandParent}
                treeData={treeData}
            />
        </Card>
    );
}

function UserWorkspaceTable() {
    const columns: TableColumnsType<DataType> = [
        {
            title: "Full Name",
            width: 100,
            dataIndex: "name",
            key: "name",
            fixed: "left",
        },
        {
            title: "Age",
            width: 100,
            dataIndex: "age",
            key: "age",
            fixed: "left",
        },
        {
            title: "Column 1",
            dataIndex: "address",
            key: "1",
            width: 150,
        },
        {
            title: "Column 2",
            dataIndex: "address",
            key: "2",
            width: 150,
        },
        {
            title: "Column 3",
            dataIndex: "address",
            key: "3",
            width: 150,
        },
        {
            title: "Column 4",
            dataIndex: "address",
            key: "4",
            width: 150,
        },
        {
            title: "Column 5",
            dataIndex: "address",
            key: "5",
            width: 150,
        },
        {
            title: "Column 6",
            dataIndex: "address",
            key: "6",
            width: 150,
        },
        {
            title: "Column 7",
            dataIndex: "address",
            key: "7",
            width: 150,
        },
        { title: "Column 8", dataIndex: "address", key: "8" },
        {
            title: "Action",
            key: "operation",
            fixed: "right",
            width: 100,
            render: () => <a>action</a>,
        },
    ];

    const data: DataType[] = [];
    for (let i = 0; i < 100; i++) {
        data.push({
            key: i,
            name: `Edward ${i}`,
            age: 32,
            address: `London Park no. ${i}`,
        });
    }

    return (
        <Card title="User Workspaces List" className="card-fit-screen">
            <Table
                columns={columns}
                dataSource={data}
                scroll={{ x: true, y: "calc(100vh - 500px)" }}
            />
        </Card>
    );
}

export default function Page() {
    return (
        <>
            <Row className="row-fit-screen">
                <Col span={8} className="col-fit-screen">
                    <OrganizationTree />
                </Col>
                <Col
                    span={16}
                    className="col-fit-screen"
                    style={{ padding: "0 24px" }}
                >
                    <UserWorkspaceTable />
                </Col>
            </Row>
        </>
    );
}
