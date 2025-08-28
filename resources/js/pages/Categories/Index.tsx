import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Categories',
        href: '/categories',
    },
];

export default function Categories() {
    const { datas } = usePage().props;
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Categories" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl">
                    <table className='table-auto w-fill bg-white shadow-sm rounded'>
                        <thead>
                            <tr>
                                <th className='px-4 py-2 text-left'>No</th>
                                <th className='px-4 py-2 text-left'>Nama Kategori</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                    <div className="m-4">
                        <Link href={route('categories.create')}><Button>Buat Kategori</Button></Link>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
