<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function index()
    {
        $data = Category::all();
        return Inertia::render('Categories/Index', [
            'datas' => $data,
            'message' => [
                'success' => session('success'),
                'error' => session('error'),
            ]
        ]);
    }

    public function indexApi(){
        $data = Category::all();
        return response()->json([
            'status'=> 'success',
            'datas'=> $data,
        ]);
    }

    public function create()
    {
        return Inertia::render('Categories/Create');
    }

    public function store(Request $request)
    {
        $validate = $request->validate([
            'name' => 'string|min:3|max:100|unique:categories,name'
        ]);

        if($validate){
            Category::create($validate);
        } else {
            return redirect()->route('categories.index');
        }
        return redirect()->route('categories.create')->with('message','Berhasil menyimpan data Kategori');
    }

    public function show(string $id)
    {
        //
    }

    public function update(Request $request, string $id)
    {
        //
    }

    public function destroy(Category $id)
    {
        $id->delete();
        return redirect()->route('categories.index')->with('message','Berhasil menghapus data');
    }
}
