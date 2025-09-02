import React, { useState } from 'react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import HeaderSection from '@/components/ui/headerSection';
import SearchSection from '@/components/ui/SearchSection';
import { Trash, SquarePen } from 'lucide-react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Categories',
        href: '/categories',
    },
];


interface Category {
    id: number
    name: string
}

interface CategoriesProps {
    datas: Category[]
}

export default function Categories({ datas }: CategoriesProps) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Categories" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
                <div className="m-5 px-5">
                    <HeaderSection
                        headline={"Kategori"}
                        paragraph={"Menampilkan seluruh data Kategori"}>
                    </HeaderSection>
                    <SearchSection></SearchSection>
                    <div className="relative mt-5 flex-1 overflow-hidden rounded-xl bg-white shadow-table">
                        <div className="m-4 px-3">
                            <Table>
                                <TableCaption>A list of your recent invoices.</TableCaption>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Nama kategori</TableHead>
                                        <TableHead>Jumlah Produk</TableHead>
                                        <TableHead>Tindakan</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {datas.map((data) => (
                                        <TableRow>
                                            <TableCell className="font-medium">{data.name}</TableCell>
                                            <TableCell></TableCell>
                                            <TableCell className='flex float-start gap-2 justify-center'>
                                                <Link><div className=" ">Detail</div></Link>
                                                <Link><div className="bg-yellow-400 text-white rounded-full p-2"><SquarePen size={20}></SquarePen></div></Link>
                                                <Link><div className="bg-red-400 text-white rounded-full p-2"><Trash size={20}></Trash></div></Link>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
