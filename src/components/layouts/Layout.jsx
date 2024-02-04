import React from 'react'
import { GoHeartFill } from "react-icons/go";

function Layout({ children }) {
    return (
        <>
            <header className='w-full text-center py-3 text-xl font-bold bg-gray-800 rounded-lg text-gray-100'>
                <h1>
                    جواب پروژه عملی آزمون 
                    &nbsp;
                    <span className='text-green-500'>علیرضا خاکسار </span>
                </h1>
            </header>
            <main style={{ minHeight: "80vh" }}>
                {children}
            </main>
            <footer className='w-full text-center py-3 font-bold bg-gray-800 rounded-lg text-gray-100'>
                <p className='flex justify-center items-center'>
                    ساخته شده با &nbsp; <span className='text-red-400'><GoHeartFill /></span> &nbsp;
                    ایکس کد آکادمی
                </p>
            </footer>
        </>
    )
}

export default Layout