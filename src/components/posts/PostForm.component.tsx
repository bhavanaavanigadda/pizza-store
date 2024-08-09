// src/components/PostForm.tsx

import React from 'react';
import { Post } from '../../models/post.model';
import { imageUrls } from '../../libs/imageBank.lib';
import { useGetCategoriesQuery } from '../../features/categories/category.api';
import { Category } from '../../models/category.model';

interface PostFormProps {
  post?: Post;
  onSubmit: (formData: Post) => void;
}

const PostForm: React.FC<PostFormProps> = ({ post, onSubmit }) => {

  const { data: categories } = useGetCategoriesQuery('categories');
  const category = categories ? categories[0].name : '';

  const [formData, setFormData] = React.useState<Post>({
    title: post?.title || '',
    description: post?.description || '',
    image: "https://th.bing.com/th/id/OIP.eRObMj_UCi84G9T654OXuAHaEo?rs=1&pid=ImgDetMain",
    createdAt: post?.createdAt || '',
    category: post?.category || category,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(formData);
  };

 

  return (
    <form onSubmit={handleSubmit}>

        <label className="block text-gray-700 font-bold mb-2">
            Image
        </label>

      <div className='relative w-full h-80 bg-indigo-400/80 mb-5 rounded-xl'>

        {/* <div className='absolute top-0 left-0 w-full h-full'>
            <img className='w-full h-full object-cover rounded-xl' src={formData.image || imageUrls[0]} alt=''  />
        </div>

        <div onClick={getRandomImageUrl}  className="absolute bottom-5 right-5 bg-indigo-500/70 hover:bg-indigo-700/90 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer">
            Regenerate
       </div> */}
       <div className="absolute top-0 left-0 w-full h-full">
  <img
    className="w-full h-full object-cover rounded-xl"
    src={formData.image}
    alt=""
    
  />
</div>

<div className="absolute bottom-5 right-5">
  <input
    type="text"
    required
    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
    placeholder="Enter image URL"
    className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
  />
</div>

      </div>

      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
          Title
        </label>
        <input
          required
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="category" className="block text-gray-700 font-bold mb-2">
          Category
        </label>
        <select
          placeholder='..select'
  
          id="category"
          name="category"
          onChange={handleChange}
          className="w-full border rounded py-2 px-3 text-gray-700"
        >
          {categories &&
            categories.map((category: Category) => (
              <option key={category.id} value={formData.category} selected={category.name === formData.category}>
                {category.name}
              </option>
            ))}
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
          Price
        </label>
        <input
          required
          type="number"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className='flex flex-row justify-end mt-2'>


        <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
        >
            Submit
        </button>

      </div>


    </form>
  );
};

export default PostForm;
