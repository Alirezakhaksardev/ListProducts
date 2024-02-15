import React from 'react'
import { GoHeartFill } from "react-icons/go";

function Layout({ children }) {
    return (
        <>
            <header className='w-full text-center py-3 text-xl font-bold bg-gray-800 rounded-lg text-gray-100'>
                <h1>
                    صفحه محصولات
                    &nbsp;
                    <span className='text-green-500'>نام شرکت شما</span>
                </h1>
            </header>
            <main style={{ minHeight: "80vh" }}>
                {children}
            </main>
            <footer className='w-full text-center py-3 font-bold bg-gray-800 rounded-lg text-gray-100'>
                <p className='flex justify-center items-center'>
                    ساخته شده با &nbsp; <span className='text-red-400'><GoHeartFill /></span> &nbsp;
                    علیرضا خاکسار
                </p>
            </footer>
        </>
    )
}

export default Layout