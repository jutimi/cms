"use client";

import React, { useMemo, useState } from "react";
import { Card, Col, Input, Row, Tree } from "antd";
import type { TreeDataNode } from "antd";

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
        <Card title="Organization Tree">
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
    return (
        <div>
            <p>long content</p>
            {
                // indicates very long content
                Array.from({ length: 100 }, (_, index) => (
                    <React.Fragment key={index}>
                        {index % 20 === 0 && index ? "more" : "..."}
                        <br />
                    </React.Fragment>
                ))
            }
        </div>
    );
}

export default function Page() {
    return (
        <>
            <Row>
                <Col span={8}>
                    <OrganizationTree />
                </Col>
                <Col span={16} style={{ padding: "0 24px" }}>
                    <UserWorkspaceTable />
                </Col>
            </Row>
        </>
    );
}
