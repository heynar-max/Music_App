import { auth } from "@/auth.config";
import { redirect } from "next/navigation";



export default async function favoriteLayout({children}: {
    children: React.ReactNode;
    }) {

        const session = await auth();

    if (!session?.user) {
        // redirect('/auth/login?returnTo=/perfil');
        redirect("/auth/login?redirectTo=/favorite");
    }

    return (
        <>
        { children }
        </>
    );
}