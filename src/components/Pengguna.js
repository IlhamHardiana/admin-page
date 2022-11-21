import React from 'react';
import { BsFilterRight } from "react-icons/bs";

const Pengguna = () => {
    return (
    <>
    <section className="flex w-full min-h-screen bg-zinc-500 flex-1 h-screen ">
        <main className="flex flex-col flex-1 gap-6 p-4">
        <header>
            <h1 className="text-3xl font-semibold  leading-loose text-white"> Pengguna </h1>
            <div className="text-gray-300 ">Senin 17 Oktober, 2022</div>
        </header>
        <hr className="border-gray-600"/>
        <header className=" overflow-y-scroll">
            <div className="p-6 bg-gray-900 rounded-lg"> 
            <div className="flex justify-between items-center pb-4">
                <h2 className="text-xl font-semibold leading-loose text-white">Order Buku</h2>
            <button className="flex py-2 px-3 bg-white rounded-lg border border-black gap-x-2.5">
                <BsFilterRight />
                <span className="text-sm font-semibold text-gray-700">
                    <select class="appearance-none w-full border border-white">
                <option disabled selected >Filter Order</option>
                <option> Name </option>
                <option>Type</option>
                    </select>
                </span> 
            </button>
            </div>
            <table className=" w-full">
                <thead>
                    <tr className="text-sm font-semibold text-white">
                        <td className="py-4 border-b border-gray-700">Peminjam</td>
                        <td className="py-4 border-b border-gray-700">Judul Buku</td>
                        <td className="py-4 border-b border-gray-700">Total</td>
                        <td className="py-4 border-b border-gray-700">Status</td>
                    </tr>
                </thead>
                <tbody className="w-full overflow-auto">
                    <tr className="py-4 text-white">
                        <td className="py-3">Fajar Mahmud</td>
                        <td>Matematika</td>
                        <td className="justify-center">3</td> 
                        <td>
                        <div className="bg-green-500 p-2 text-white hover:shadow-lg text-center text-xs ">succeed</div>
                    </td>     
                    </tr>
                    <tr className="py-4 text-white">
                        <td className="py-3">Ahmad Fauzi</td>
                        <td>Indahnya Senja</td>
                        <td>1</td> 
                        <td>
                        <div className="bg-green-500 p-2 text-white hover:shadow-lg text-center text-xs ">succeed</div>
                        </td>           
                    </tr>
                    <tr className="py-4 text-white">
                        <td className="py-3">Adam Ramadhan</td>
                        <td>Biografi Ali Bin Abi Thalib </td>
                        <td>1</td> 
                        <td><div className="bg-green-500 p-2 text-white hover:shadow-lg text-center text-xs ">succeed</div>
                        </td>           
                    </tr>
                    <tr className="py-4 text-white">
                        <td className="py-3">Rizki S A</td>
                        <td className="py-3">Makna Budaya Dalam Komunikasi Antar Budaya</td>
                        <td>2</td> 
                        <td><div className="bg-red-500 p-2 text-white hover:shadow-lg text-center text-xs ">unsucces</div>
                        </td>           
                    </tr>
                    <tr className="py-4 text-white">
                        <td className="py-3">Izza Zaki</td>
                        <td>Islam dan Permasalahan Sosial</td>
                        <td>1</td> 
                        <td><div className="bg-red-500 p-2 text-white hover:shadow-lg text-center text-xs ">unsucces</div>
                        </td>           
                    </tr>
                    <tr className="py-4 text-white">
                        <td className="py-3">Firmansyah</td>
                        <td>Cara mudah berfilsafat</td>
                        <td>1</td> 
                        <td><div className="bg-green-500 p-2 text-white hover:shadow-lg text-center text-xs ">succeed</div>
                        </td>           
                    </tr>
                    <tr className="py-4 text-white">
                        <td className="py-3">Sendhi A</td>
                        <td>Lelaki Harimau</td>
                        <td>1</td> 
                        <td><div className="bg-green-500 p-2 text-white hover:shadow-lg text-center text-xs ">succeed</div>
                        </td>           
                    </tr>
                    <tr className="py-4 text-white">
                        <td className="py-3">Regi Fauzi</td>
                        <td>Tenggelamnya Kapal Van Der Wijck</td>
                        <td>1</td> 
                        <td><div className="bg-red-500 p-2 text-white hover:shadow-lg text-center text-xs ">unsucces</div>
                        </td>           
                    </tr>
                    <tr className="py-4 text-white">
                        <td className="py-3">Farhan Chandra</td>
                        <td>Biografi Politik Habibie</td>
                        <td>1</td> 
                        <td><div className="bg-green-500 p-2 text-white hover:shadow-lg text-center text-xs ">succeed</div>
                        </td>           
                    </tr>
                    <tr className="py-4 text-white">
                        <td className="py-3">Denis Januar</td>
                        <td>Ilmu Pengetahuan Alam</td>
                        <td>1</td> 
                        <td><div className="bg-green-500 p-2 text-white hover:shadow-lg text-center text-xs ">succeed</div>
                        </td>           
                    </tr>                         
                </tbody>
            </table>
            </div>
        </header>
        </main>
        </section>
    </>
    )
}

export default Pengguna