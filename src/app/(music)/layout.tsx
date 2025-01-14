import { TopMenu } from "@/components";

export default function MusicLayout({children}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen ">
            <TopMenu/>
            <div className="px-0 sm:px-5 flex justify-center">
                {children}                
            </div>
        </div>
    );
}