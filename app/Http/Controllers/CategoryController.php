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
        Category::create($request->all());

        return redirect()->route('categories.create');
    }

    public function show(string $id)
    {
        //
    }

    public function update(Request $request, string $id)
    {
        //
    }

    public function destroy(string $id)
    {
        Product::delete($id);

    }
}
