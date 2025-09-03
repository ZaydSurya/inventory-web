import { SlidersHorizontal, Download } from 'lucide-react';

export default function SearchSection() {
    return (
        <div className="my-2">
            <form action="" method="post">
                <div className="flex items-center gap-4">
                    <input type="text" className='bg-white p-[16px] h-12 border-solid rounded-[10px] shadow-table w-1/4 text-gray-500 text-[15px]"' placeholder='Cari data kamu disini . . .' />
                    <div className="bg-white h-12 px-4 border-solid rounded-[10px] shadow-table w-auto text-gray-500 text-[15px]"><SlidersHorizontal></SlidersHorizontal></div>
                    <div className="bg-white h-12 px-4 border-solid rounded-[10px] shadow-table w-auto text-gray-500 text-[15px] inline-flex gap-3"><Download></Download>Export</div>
                </div>
            </form>
        </div>
    );
}
