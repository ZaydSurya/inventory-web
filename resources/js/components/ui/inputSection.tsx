import * as React from 'react';

export default function InputSection({ type, className, ...props }: React.ComponentProps<"input">) {
    return (
        <input
            type={type}
            data-slot="input"
            className="border-input file:text-foreground placeholder:text-muted-foreground
                        selection:bg-primary selection:text-primary-foreground
                        flex h-9 w-1/3 min-w-auto rounded-sm border bg-transparent px-3 py-5
                        text-baseoutline-none
                        file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium
                        disabled:pointer-events-none
                        md:text-sm"
            {...props}
        />
    )
}

