
export default function MusicLayout({children}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-neutral-500">
            {children}
        </div>
    );
}