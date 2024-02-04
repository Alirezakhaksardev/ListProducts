import React, { useEffect, useState } from 'react'
import AddProducts from "modules/AddProducts"
import ListProducts from "modules/ListProducts"
import { Toaster } from 'react-hot-toast'

function HomePage() {

    const [products, setProducts] = useState([])

    // گرفتن لیست محصولات از لوکال استورج در صورت وجود
    useEffect(() => {
        const LocalStorageData = JSON.parse(localStorage.getItem("products"));
        if (LocalStorageData) setProducts(LocalStorageData)
    }, [])

    // ذخیره لیست محصولات در لوکال استورج
    useEffect(() => {
        if(products.length > 0) localStorage.setItem("products", JSON.stringify(products))
    }, [products])


    return (
        <>
            {/* اضافه کردن محصول به لیست */}
            <AddProducts products={products} setProducts={setProducts} />
            {/* نمایش لیست محصولات */}
            <ListProducts products={products} />

            {/* کامپونت پکیج توست برای نمایش اعلان */}
            <Toaster />
        </>
    )
}

export default HomePage