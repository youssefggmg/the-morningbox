/* eslint-disable @next/next/no-img-element */
import React from 'react';
import ModalComponent from '../forms/popupform';

const Mealstable = () => {
    const mealinfo = [{
        id: 1,
        name: "Chicken Tikka Masala",
        price: 15.99,
        image: "Chicken-Tikka-Masala.jpg",
        status: "in stock"
    },
    {
        id: 2,
        name: "Chicken Tikka Masala",
        price: 15.99,
        image: "Chicken-Tikka-Masala.jpg",
        status: "out stock"
    }]
    return (
        <div className='w-full mt-12'>
            {/* Responsive Table Wrapper */}
            <div className="font-sans overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-[#374151] whitespace-nowrap">
                        <tr>
                            <th className="px-4 py-4 text-center text-xs font-semibold  text-white uppercase tracking-wider">
                                Image
                            </th>
                            <th className="px-4 py-4 text-center text-xs font-semibold text-white uppercase tracking-wider">
                                title
                            </th>
                            <th className="px-4 py-4 text-center text-xs font-semibold text-white uppercase tracking-wider">
                                price
                            </th>
                            <th className="px-4 py-4 text-center text-xs font-semibold text-white uppercase tracking-wider">
                                status
                            </th>
                            <th className="px-4 py-4 text-center text-xs font-semibold text-white uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 whitespace-nowrap">
                        {
                            mealinfo.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="px-4 py-4 text-center text-sm w-[14%] text-gray-800"><img className='object-fill h-auto w-full' src={item.image} alt="" /></td>
                                        <td className="px-4 py-4 text-sm text-center text-gray-800">{item.name}</td>
                                        <td className="px-4 py-4 text-sm text-center text-gray-800">{item.price}</td>
                                        <td className="px-4 py-4 text-sm text-center text-gray-800">{item.status}</td>
                                        <td className="px-4 py-4 text-sm flex items-center justify-center text-gray-800">
                                            <ModalComponent/>
                                            <button className="text-red-600" data-id={item.id} >Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Mealstable;
