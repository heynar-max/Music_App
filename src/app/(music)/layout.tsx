import { TopMenu } from "@/components";

export default function MusicLayout({children}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen ">
            <TopMenu/>
            {children}
        </div>
    );
}