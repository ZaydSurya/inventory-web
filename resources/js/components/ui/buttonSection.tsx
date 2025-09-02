import * as React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    display?: 'primary' | 'secondary' | 'danger' | 'icon' | 'outline';
    size?: 'sm' | 'md' | 'xl'
    children: React.ReactNode
}

export default function ButtonSection({
    children,
    className,
    display = 'primary',
    size = 'md',
    ...props
}: ButtonProps) {
    const base = 'inline-flex items-center justify-center gap-2 font-medium transition-all'
    const displays = {
        primary: 'bg-blue-300 text-white rounded-[5px]',
        icon: 'bg-white text-primary rounded-[3px] shadow-table',
    }
    const sizes = {
        sm: 'px-2 py-1 text-sm',
        md: 'px-3 py-2 text-md'
    }

    return (
        <button className={cn(
            base,
            displays[display],
            sizes[size],
            className
        )}
            {...props}
        >

        </button>
    )

}
