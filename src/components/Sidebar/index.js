import React from "react";
import Logo from '../../assets/logo.png';
import {BiCalendar,
        BiHomeAlt,
        BiBook,
        } from "react-icons/bi";
import {FiUser} from "react-icons/fi";
import {FaUsers} from "react-icons/fa";
import { Link } from "react-router-dom";


export default function Sidebar() {
    const menu=[
        {name:"Pengguna", to:'/Pengguna' ,icon:<BiHomeAlt/>, },
        {name:"Guru", to:'/Guru' ,icon:<FiUser/> },
        {name:"Siswa", to:'/Siswa' ,icon:<FaUsers/> },
        {name:"Buku", to:'/Buku', icon:<BiBook/> },
        {name:"Tangggal Pengambilan", to:'/Tanggal Pengambilan', icon:<BiCalendar/> },
    ];


    return (
    <div className="h-screen border-r border-black w-64 px-9">
        <div className="flex flex-row items-center pt-8">
            <img src={Logo} alt="sakir" className=  "w-auto -mt-16" />
        </div>
        <div className="space-y-24">
        <div>
            <div className="-mt-10 mb-7 text-[17px] text-sky-600">Peminjaman Buku</div>
            <ul className="space-y-7">
            {menu.map((val, index) =>{
                return (
                    <li 
                        key={index} 
                        className="flex flex-row items-center text-gray-600 hover:bg-sky-200 "
                    >
                        <div className="mr-5 ">{val.icon}</div>
                        {/* <div className="cursor-pointer">{val.name} {val.path}</div>    */}
                        <Link to={val.to}><div className="cursor-pointer">{val.name} {val.path}</div></Link>
                    </li>
                );
            })}
            </ul>
        </div>
        <div className="mt-5">
        <div className="mt-8 flex items-center justify-center mb-4 text-[15px] text-green-600">Lamanya Peminjaman</div>
        <div className='ml-8'>
                    <div>
                        <input
                            type="checkbox"
                            id='perjam'
                        />
                        <label className="ml-2 font-medium text-base" for="perjam">PerJam</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id='perhari'
                        />
                        <label className="ml-2 font-medium text-base" for="perhari">Perhari</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id='perminggu'
                        />
                        <label className="ml-2 font-medium text-base" for="perminggu">PerMinggu</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}