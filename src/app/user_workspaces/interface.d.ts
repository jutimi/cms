interface DataNode {
    title: string;
    key: string;
    isLeaf?: boolean;
    children?: DataNode[];
}

export { DataNode };
