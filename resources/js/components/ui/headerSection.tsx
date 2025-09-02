import * as React from "react"
import { Head, Link, usePage } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
    headline: string;
    paragraph: string;
}

export default function HeaderSection({ headline, paragraph }: HeaderProps) {
    return (
        <div className="flex justify-between items-center mb-6">
            <div>
                <h1 className="text-2xl font-bold">{headline}</h1>
                <p className="text-gray-500">{paragraph}</p>
            </div>
            <button className="flex items-center gap-2 px-2 py-2 text-blue-600 cursor-pointer">
                <Link href={route("categories.create")}><span>+ Tambah Kategori</span></Link>
            </button>
        </div>
    );
}
