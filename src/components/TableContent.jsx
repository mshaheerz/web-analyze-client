/* eslint-disable react/prop-types */

import axios from "axios"


function TableContent({ logs,setRefresh,refresh }) {

   async function updateFav(fav,id){
        try {
            await axios.patch(`/insight/${id}`,{fav},{headers:{'usertoken':localStorage.getItem('usertoken')}})
            setRefresh(!refresh)
        } catch (error) {
            console.log(error.message)
        }
    }

    async function deleteData(id){
        try {
            await axios.delete(`/insight/${id}`,{headers:{'usertoken':localStorage.getItem('usertoken')}})
            setRefresh(!refresh)
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <div className="relative overflow-x-auto mt-5 shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Domain Name
                        </th>
                        <th scope="col" className="px-3 py-3">
                            Word Counts
                        </th>
                        <th scope="col" className="px-4 py-3">
                            favourite
                        </th>
                        <th scope="col" className="px-4 py-3">
                            Web-Links
                        </th>
                        <th scope="col" className="px-2 py-3">
                            Media-Links
                        </th>
                        <th scope="col" className="px-1 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        logs.length > 0 && logs.map((data) => (
                            <tr key={data._id} className="bg-white border-b">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {data.domain}
                                </th>
                                <td className="px-4 py-4">
                                    {data.wordCount}
                                </td>
                                <td className="px-4 py-4">
                                    {data.fav ? 'yes' : 'no'}
                                </td>
                                <td className="px-3 py-4">
                                    {data.webLinks && data.webLinks.map((webLink, index) => {
                                        if (index < 8) {
                                            return <div className="w-[370px] text-blue-700   leading-4 whitespace-nowrap" key={index}>

                                                <a className=" hover:underline break-words" href={webLink} target="_blank" rel="noreferrer">{webLink.substring(0,54)}</a> <span className="text-pink-600 hover:underline cursor-pointer"> { webLink.length>54?'...more..':''}</span>
                                            </div>

                                        }



                                    }
                                    )}
                                </td>
                                <td className="px-2  py-4">
                                    {data.mediaLinks && data.mediaLinks.map((mediaLink, index) => {
                                        if (index < 8) {
                                            return <div className="w-[430px] leading-4" key={index}>
                                                <a className="text-blue-600 break-words hover:underline" href={mediaLink} target="_blank" rel="noreferrer">{mediaLink.substring(0,50)}</a><span className="text-pink-600 hover:underline cursor-pointer"> { mediaLink.length>54?'...more':''}</span>
                                            </div>
                                        }
                                    })}
                                </td>
                                <td className="px-5 py-4">
                                    <div className='flex gap-2'>
                                        {
                                            data.fav?( <button onClick={()=>updateFav(false,data._id)}  className="bg-pink-500 px-2 rounded text-white hover:bg-blue-400">Unlike</button>):(
                                                <button onClick={()=>updateFav(true,data._id)} className="bg-blue-500 px-2 rounded text-white hover:bg-blue-400">Like</button>
                                            )
                                        }
                                       
                                        <button onClick={()=>deleteData(data._id)} className="bg-red-500 px-2 rounded text-white hover:bg-red-600" >Delete</button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }



                </tbody>
            </table>
        </div>
    )
}

export default TableContent