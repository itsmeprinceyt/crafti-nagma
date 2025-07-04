export function PageWrapperMain({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen pt-10 flex flex-col items-center justify-center gap-5">
            {children}
        </div>
    );
}

export function PageWrapper({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col justify-start gap-5">
            {children}
        </div>
    );
}