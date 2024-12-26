

export default function AuthLayout({children}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-slate-500">
            {children}
        </div>
    );
}