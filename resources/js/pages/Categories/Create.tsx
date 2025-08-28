import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, usePage, useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Categories',
        href: '/categories',
    },
];

export default function Categories() {

    const { data, setData, post, processing, errors } = useForm({
        name: '',
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault
        post(route('categories.store'))
    }
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create new Category" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl">
                    <div className="m-4">
                        <form onSubmit={handleSubmit} className='space-y-4'>
                            <div className='gap-5 mb-4'>
                                <Label className='product'>Nama Kategori</Label>
                                <Input placeholder='Ketikan kategori' value={data.name} onChange={(e) => setData('name', e.target.value)}></Input>
                            </div>
                            <Button type='submit'>Buat baru</Button>
                        </form>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
