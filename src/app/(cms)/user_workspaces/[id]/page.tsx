export default function Page({ params }: { params: { id: string } }) {
    return <div>Detail user workspace : {params.id}</div>;
}
