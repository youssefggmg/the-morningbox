import React from 'react'

const CommandeTabdes = () => {
    const commandes =[
        {
            id: 1,
            Name:"John",
            status:"pending",
            total:170,
            numberOfItems:7
        },
        {
            id: 2,
            Name:"Jane",
            status:"active",
            total: 145,
            numberOfItems: 5
        }
    ]
    return (
        <div className='w-full'>
            <div className="font-[sans-serif] overflow-x-auto">
                <table className="min-w-full bg-white">
                    <thead className="whitespace-nowrap">
                        <tr>
                            <th className="p-4 text-center text-sm font-semibold text-gray-800">username </th>
                            <th className="p-4 text-center text-sm font-semibold text-gray-800">Status </th>
                            <th className="p-4 text-center text-sm font-semibold text-gray-800"> total </th>
                            <th className="p-4 text-center text-sm font-semibold text-gray-800"> N.O.I </th>
                            <th className="p-4 text-center text-sm font-semibold text-gray-800 "> Action </th>
                        </tr>
                    </thead>
                    <tbody className="whitespace-nowrap">
                        <tr className="odd:bg-blue-50">
                            <td className="p-4 text-sm text-center text-gray-800">Louis Vuitton</td>
                            <td className="p-4 text-sm flex justify-center text-gray-800"> <span className="w-[68px] block text-center py-1 border border-green-500 text-green-600 rounded text-xs"> Active </span> </td>
                            <td className="p-4 text-sm text-center text-gray-800">Bravo</td>
                            <td className="p-4 text-sm text-center text-gray-800">8066</td>
                            <td className="p-4 flex justify-center">
                                    <button type="button" className="px-5 mx-1 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-red-700 outline-none bg-transparent hover:bg-red-700 text-red-700 hover:text-white transition-all duration-300">cancel </button>
                                    <button type="button" className="px-5 mx-1 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-blue-700 outline-none bg-transparent hover:bg-blue-700 text-blue-700 hover:text-white transition-all duration-300" >deatails</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CommandeTabdes
