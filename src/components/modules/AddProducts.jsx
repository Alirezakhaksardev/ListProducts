import React, { useState } from 'react'
import { MdAddToPhotos } from "react-icons/md";
import toast from 'react-hot-toast';

function AddProducts({ products, setProducts }) {

  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
  })

  // ذخیره تغیرات در استیت محصول
  const changeHandle = e => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  }

  // تابع  submit
  const submitHandle = e => {
    e.preventDefault();

    // اعتبار سنجی فیلد ها
    if (!product.name || !product.price || !product.description) return toast.error('لطفا تمامی فیلد ها را پر کنید !')
    // ذخیره اطلاعات در لیست محصولات
    setProducts([...products, product])
    
  }

  return (
    <div className='w-full my-3 rounded-xl p-5'>
      
      {/* Tiltle */}
      <div className='flex text-xl font-bold mb-6'>
        <span className='text-blue-600 text-3xl'>
          <MdAddToPhotos />
        </span> &nbsp;
        <h3>اضافه کردن محصول به لیست</h3>
      </div>

      {/* Form */}
      <div className='bg-gray-700 text-gray-100 w-2/5 rounded-lg p-5 m-auto'>
        <form className='w-ful flex flex-col justify-center' onChange={changeHandle} onSubmit={submitHandle} >
          <div className='my-1 flex flex-col'>
            <label htmlFor="name">نام محصول : </label>
            <input type="text" name="name" id="name" className='focus:outline-none m-2 rounded-sm py-1 w-auto px-3 text-gray-800' />
          </div>
          <div className='my-1 flex flex-col'>
            <label htmlFor="price">قیمت : </label>
            <input type="number" name="price" id="price" className='focus:outline-none m-2 rounded-sm py-1 w-auto px-3 text-gray-800' />
          </div>
          <div className='my-1 flex flex-col'>
            <label htmlFor="description">توضیحات : </label>
            <textarea name="description" id="description" cols="10" rows="3" maxLength={200} className='focus:outline-none m-2 rounded-sm py-1 
              w-auto px-3 text-gray-800 max-h-28' ></textarea>
            <span className='text-sm mr-5 text-gray-400'>حداکثر 200 کاراکتر</span>
          </div>
          <button type='submit' className='w-full mt-2 border-green-600 border py-2 rounded-md transition-all ease-linear
            hover:bg-green-600'>ثبت محصول</button>
        </form>

      </div>
    </div>
  )
}

export default AddProducts