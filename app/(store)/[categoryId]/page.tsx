type Params = Promise<{ categoryId: string }>

export default async function Storepage({ params }: { params: Params }) {
    const { categoryId } = await params

    console.log(categoryId)

    return (
        <div>Storepage</div>
    )
}
