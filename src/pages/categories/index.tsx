import React from 'react';
import { useGetCategoriesQuery } from '../../features/categories/category.api';
import CategoryItem from '../../components/categories/CategoryItem.component';

const Categories: React.FC = () => {

    const { data: categories, error, isLoading } = useGetCategoriesQuery('categories');

    if (isLoading) {
        return <div className='w-full h-56 text-center self-center'>Loading...</div>;
    }

    if (error) {
        return <div className='w-full h-56 text-center self-center'>An error have occured</div>;
    }

  return (
    <div className="h-screen bg-gray-100">
        <div className="mx-auto max-w-2xl py-3 sm:py-10 lg:py-18 mb-4">
          
          <div className="text-center">
            <div className="text-4xl font-bold tracking-tight sm:text-6xl">
                <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-indigo-600">
                    About
                </h1>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center flex-col">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-2/3">
            <div className="col-span-1 md:col-span-2 xl:col-span-3">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-pink-600">Our Passion for Pizza</h2>
              <p className="text-gray-700 text-lg">
                Convey genuine enthusiasm for pizza, Highlight the love for crafting delicious pizzas, Discuss the commitment to quality ingredients.
              </p>
            </div>

            <div className="col-span-1 md:col-span-2 xl:col-span-3 mt-8">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-indigo-600">What Sets Us Apart</h2>
              <p className="text-gray-700 text-lg">
                Emphasize special ingredients, cooking methods, or dough recipes, Highlight any awards or recognitions.
              </p>
            </div>

            <div className="col-span-1 md:col-span-2 xl:col-span-3 mt-8">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-pink-600">Visuals</h2>
              <p className="text-gray-700 text-lg">
                High-quality images of the pizza-making process,Pictures of the store's interior and exterior.
              </p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Categories;