import { notFound } from "next/navigation";

interface Props{
    params: {
        id: string;
    }
}

export default async function categoryIdPage({params} : Props) {
    
    const { id } = await params;

    if (id === 'abc') {
        notFound();
    }

    return (
        <div>
            <h1>category Page {id} </h1>
        </div>
    );
}