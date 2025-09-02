import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, usePage, useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { ArrowLeft } from 'lucide-react';
import InputSection from '@/components/ui/inputSection';


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
                <div className="m-5 px-5">
                    <div className="flex justify-between items-center mb-6">
                        <Link href={route("categories.index")}>
                            <button className="flex items-center justify-center gap-2 mt-2">
                                <ArrowLeft className='text-blue-600 inline-flex size:'></ArrowLeft><span> Kembali</span>
                            </button>
                        </Link>
                    </div>
                    <div className="relative p-5 flex-1 overflow-hidden rounded-xl bg-white shadow-table">
                        <div className="m-4">
                            <div className='mb-5'>
                                <h1 className="text-2xl font-bold">Tambah Kategori</h1>
                                <p className="text-gray-500">Menampilkan seluruh data Kategori Produk</p>
                            </div>
                            <form onSubmit={handleSubmit} className='space-y-4'>
                                <div className='gap-5 mb-4'>
                                    <Label className='font-light'>Nama Kategori</Label>
                                    <InputSection placeholder='Ketikan kategori' value={data.name} onChange={(e) => {
                                        console.log("User ketik:", e.target.value) // 👀 log 1
                                        setData('name', e.target.value)
                                        console.log("State data sekarang:", data) // 👀 log 2
                                    }}></InputSection>
                                </div>
                                <Button type='submit' className='float-end'>Buat baru</Button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </AppLayout>
    );
}
