/**
 * @brief Used for /
 */
export function PageWrapperMain({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen pt-10 flex flex-col items-center justify-center gap-5">
            {children}
        </div>
    );
}

/**
 * @brief Used for / (2nd page)
 */
export function PageWrapper({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col justify-start gap-5">
            {children}
        </div>
    );
}

/**
 * @brief Used for /shop/item (2nd page)
 */
export function PageWrapperItem({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex items-center justify-start gap-5">
            {children}
        </div>
    );
}

/**
 * @brief Used for /shop & categories & items
 */
export function PageWrapper2({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex items-start justify-center gap-5">
            {children}
        </div>
    );
}