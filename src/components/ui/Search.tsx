import * as React from "react";

import { cn } from "../lib/utils";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export interface SearchProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: React.ReactNode;
}

const Search = React.forwardRef<HTMLInputElement, SearchProps>(
    ({ className, icon, type, ...props }, ref) => {
        return (
            <div className="relative flex items-center">
                {icon}
                <input
                    type={type}
                    className={cn(
                        "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
                        className,
                    )}
                    ref={ref}
                    {...props}
                />
            </div>
        );
    },
);
Search.displayName = "Search";

export { Search };