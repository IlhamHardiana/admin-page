import React from 'react';
import { BsFilterRight } from "react-icons/bs";

const Pengguna = () => {
    return (
    <>
    <section className="flex w-full min-h-screen bg-purple-500 flex-1 h-screen ">
        <main className="flex flex-col flex-1 gap-6 p-4">
        <header>
            <h1 className="text-3xl font-semibold  leading-loose text-gray-600"> Data Guru </h1>
            <div className="text-gray-300 ">Senin 17 Oktober, 2022</div>
        </header>
        <hr className="border-gray-600"/>
        <header className="overflow-y-scroll">
            <div className="p-6 bg-lime-400 rounded-lg"> 
            <div className="flex justify-between items-center pb-4">
                <h2 className="text-xl font-semibold leading-loose text-gray-600">Order Buku</h2>
            <button className="flex py-2 px-3 bg-white rounded-lg border border-black gap-x-2.5">
                <BsFilterRight />
                <span className="text-sm font-semibold text-gray-700">
                    <select class="appearance-none bg-white w-full text-gray-600">
                <option>Filter Order</option>
                <option> Name </option>
                <option>Type</option>
                    </select>
                </span> 
            </button>
            </div>
            <table className=" w-full ">
                <thead>
                    <tr className="text-sm font-semibold text-gray-600">
                        <td className="py-4 border-b border-gray-700">Nama Guru</td>
                        <td className="py-4 px-8 border-b border-gray-700">NIP</td>
                        <td className="py-4 px-8 border-b border-gray-700">Jabatan</td>
                        <td className="py-4 px-9 ml-3 border-b border-gray-700">Status</td>
                    </tr>
                </thead>
                <thead>
                    <tr className="py-2 px-8 text-xs text-gray-600">
                        <td className="py-2">POPONG WARIATI</td>
                        <td className="px-7">131966620</td>
                        <td className="px-7">Wakil Kesiswaan</td>
                        <td className="justify-center ml-8"> 
                            <div className="mt-2 ml-10 h-8 w-20 bg-green-500 cursor-pointer p-2 text-gray-600 hover:shadow-lg text-center text-xs font-semibold">Aktif</div>
                        </td>
                    </tr>
                    <tr className="py-2 px-8 text-xs text-gray-600">
                        <td className="py-2">OMAN SOMANA</td>
                        <td className="px-7"> 131966816</td>
                        <td className="px-7">Wakil Kesiswaan</td>
                        <td className="justify-center ml-8"> 
                            <div className="mt-2 ml-10 h-8 w-20 bg-green-500 cursor-pointer p-2 text-gray-600 hover:shadow-lg text-center text-xs font-semibold">Aktif</div>
                        </td>
                    </tr>
                    <tr className="py-2 px-8 text-xs text-gray-600">
                        <td className="py-2">LISMARYANI BERTIN</td>
                        <td className="px-7">132083404</td>
                        <td className="px-7">Wakil Kesiswaan</td>
                        <td className="justify-center ml-8"> 
                            <div className="mt-2 ml-10 h-8 w-20 bg-green-500 cursor-pointer p-2 text-gray-600 hover:shadow-lg text-center text-xs font-semibold">Aktif</div>
                        </td>
                    </tr>
                    <tr className="py-2 px-8 text-xs text-gray-600">
                        <td className="py-2">PRIYO HADISURYO</td>
                        <td className="px-7">-</td>
                        <td className="px-7">Wakil Kesiswaan</td>
                        <td className="justify-center ml-8"> 
                            <div className="mt-2 ml-10 h-8 w-20 bg-green-500 cursor-pointer p-2 text-gray-600 hover:shadow-lg text-center text-xs font-semibold">Aktif</div>
                        </td>
                    </tr>
                    <tr className="py-2 px-8 text-xs text-gray-600">
                        <td className="py-2">OCTAVINA SOPAMENA</td>
                        <td className="px-7">100201580</td>
                        <td className="px-7">Pengajar</td>
                        <td className="justify-center ml-8"> 
                            <div className="mt-2 ml-10 h-8 w-20 bg-green-500 cursor-pointer p-2 text-gray-600 hover:shadow-lg text-center text-xs font-semibold">Aktif</div>
                        </td>
                    </tr>
                    <tr className="py-2 px-8 text-xs text-gray-600">
                        <td className="py-2">KARWATI</td>
                        <td className="px-7">130899374</td>
                        <td className="px-7">Pengajar</td>
                        <td className="justify-center ml-8"> 
                            <div className="mt-2 ml-10 h-8 w-20 bg-green-500 cursor-pointer p-2 text-gray-600 hover:shadow-lg text-center text-xs font-semibold">Aktif</div>
                        </td>
                    </tr>
                    <tr className="py-2 px-8 text-xs text-gray-600">
                        <td className="py-2">RITA HARTATI</td>
                        <td className="px-7">480122141</td>
                        <td className="px-7">Pengajar</td>
                        <td className="justify-center ml-8"> 
                            <div className="mt-2 ml-10 h-8 w-20 bg-green-500 cursor-pointer p-2 text-gray-600 hover:shadow-lg text-center text-xs font-semibold">Aktif</div>
                        </td>
                    </tr>
                    <tr className="py-2 px-8 text-xs text-gray-600">
                        <td className="py-2">TITA HERIYANTI</td>
                        <td className="px-7">132089143</td>
                        <td className="px-7">Pengajar</td>
                        <td className="justify-center ml-8"> 
                            <div className="mt-2 ml-10 h-8 w-20 bg-green-500 cursor-pointer p-2 text-gray-600 hover:shadow-lg text-center text-xs font-semibold">Aktif</div>
                        </td>
                    </tr>
                    <tr className="py-2 px-8 text-xs text-gray-600">
                        <td className="py-2">SAMSUDIN</td>
                        <td className="px-7">-</td>
                        <td className="px-7">Kesiswaan</td>
                        <td className="justify-center ml-8"> 
                            <div className="mt-2 ml-10 h-8 w-20 bg-green-500 cursor-pointer p-2 text-gray-600 hover:shadow-lg text-center text-xs font-semibold">Aktif</div>
                        </td>
                    </tr>
                    <tr className="py-2 px-8 text-xs text-gray-600">
                        <td className="py-2">RAKIMAN</td>
                        <td className="px-7">197606062014111001</td>
                        <td className="px-7">Pengurus</td>
                        <td className="justify-center ml-8"> 
                            <div className="mt-2 ml-10 h-8 w-20 bg-green-500 cursor-pointer p-2 text-gray-600 hover:shadow-lg text-center text-xs font-semibold">Aktif</div>
                        </td>
                    </tr>
                    <tr className="py-2 px-8 text-xs text-gray-600">
                        <td className="py-2">DEUDEU MULYATI</td>
                        <td className="px-7">96204281995032002</td>
                        <td className="px-7">Pengajar</td>
                        <td className="justify-center ml-8"> 
                            <div className="mt-2 ml-10 h-8 w-20 bg-green-500 cursor-pointer p-2 text-gray-600 hover:shadow-lg text-center text-xs font-semibold">Aktif</div>
                        </td>
                    </tr>
                    <tr className="py-2 px-8 text-xs text-gray-600">
                        <td className="py-2">MAYA KUSMAYANTI</td>
                        <td className="px-7">198105072010012015</td>
                        <td className="px-7">Kesiswaan</td>
                        <td className="justify-center ml-8"> 
                            <div className="mt-2 ml-10 h-8 w-20 bg-green-500 cursor-pointer p-2 text-gray-600 hover:shadow-lg text-center text-xs font-semibold">Aktif</div>
                        </td>
                    </tr>
                    <tr className="py-2 px-8 text-xs text-gray-600">
                        <td className="py-2">NOFA NIRAWATI</td>
                        <td className="px-7">198711132010012005</td>
                        <td className="px-7">Pengajar</td>
                        <td className="justify-center ml-8"> 
                            <div className="mt-2 ml-10 h-8 w-20 bg-green-500 cursor-pointer p-2 text-gray-600 hover:shadow-lg text-center text-xs font-semibold">Aktif</div>
                        </td>
                    </tr>
                    <tr className="py-2 px-8 text-xs text-gray-600">
                        <td className="py-2">KARWATI</td>
                        <td className="px-7">130899374</td>
                        <td className="px-7">Kepala Tata Usaha</td>
                        <td className="justify-center ml-8"> 
                            <div className="mt-2 ml-10 h-8 w-20 bg-green-500 cursor-pointer p-2 text-gray-600 hover:shadow-lg text-center text-xs font-semibold">Aktif</div>
                        </td>
                    </tr>
                </thead>
            </table>
            </div>
        </header>
        </main>
        </section>
    </>
    )
}

export default Pengguna