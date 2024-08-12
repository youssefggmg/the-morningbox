import NavComponent from '@/components/utils/Nav'
import Mealstable from '@/components/tables/Mealstable'
import Sidebar from '@/components/utils/Sidebar'
import React from 'react'

const page = () => {
    return (
        <div>
            <NavComponent />
            <div className='flex'>
                <Sidebar />
                <Mealstable />
            </div>
        </div>
    )
}

export default page
