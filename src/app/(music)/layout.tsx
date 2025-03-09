import { Sidebar, TopMenu } from "@/components";

export default function MusicLayout({children}: { children: React.ReactNode}) {
    return (
        <div className="min-h-screen ">
            <TopMenu/>
            <Sidebar/>
            <div className="px-0 sm:px-5 flex flex-col justify-center max-[1024px]:px-2 max-[800px]:mb-20">
                {children}                
            </div>
        </div>
    );
}