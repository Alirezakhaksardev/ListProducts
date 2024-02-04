import React, { Fragment } from 'react'
import { BsCart4 } from "react-icons/bs";
import {formatCurrency} from 'utils/utils';

function ListProducts({ products }) {
  return (
    <div className='w-full my-3 rounded-xl p-5'>
      {/* Title */}
      <div className='flex text-xl font-bold mb-6'>
        <span className='text-blue-600 text-3xl'>
          <BsCart4 />
        </span> &nbsp;
        <h3>لیست محصولات</h3>
      </div>

      {/* Table */}
      <table className='w-full text-right bg-gray-100 '>
        <thead className='bg-gray-50 border-b-2 border-gray-200'>
          <tr>
            <th className='p-3 text-sm font-semibold tracking-wide '>شماره</th>
            <th className='p-3 text-sm font-semibold tracking-wide '>نام محصول</th>
            <th className='p-3 text-sm font-semibold tracking-wide '>قیمت</th>
            <th className='p-3 text-sm font-semibold tracking-wide '>توضیحات</th>
          </tr>
        </thead>
        <tbody>
          {
            products?.map((product, index) => (
              <tr key={index} className={index % 2 == 0 ? 'bg-gray-50' : ''}>
                <td className='w-8 p-3 text-sm text-blue-400 font-bold'>{index + 1}</td>
                <td className='w-48 p-3 text-sm text-gray-700'>{product.name}</td>
                <td className='w-60 p-3 text-sm text-gray-400'>{formatCurrency(+product.price)} &nbsp; <span className="text-gray-700">تومان</span> </td>
                <td className='p-3 text-sm text-gray-700'>{product.description}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      {/* نمایش متن خالی بودن لیست */}
      {!products.length && <p className='text-center w-full mt-5 text-gray-500'>هیچ محصولی در لیست وجود ندارد</p>}
    </div>
  )
}

export default ListProducts