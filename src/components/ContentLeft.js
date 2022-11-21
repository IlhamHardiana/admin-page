import React from "react";
import {BiSearch,
        BiBookOpen,
        BiEdit,
        BiTrash} from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { AiFillInteraction } from "react-icons/ai";
import { HiOutlineSave } from "react-icons/hi";
import {
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
    Type,
    } from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';


export default function ContentLeft() {
    const trailingActions = () => (
        <TrailingActions>
        <SwipeAction
            destructive={true}
            onClick={() => console.info('swipe action triggered')}
        >
            <div className="flex bg-blue-700 rounded-lg w-full items-center px-4">
            <BiTrash size={20} color="white"/>
            </div>
        </SwipeAction>
        <SwipeAction
            destructive={true}
            onClick={() => console.info('swipe action triggered')}
        >
            <div className="flex bg-blue-900 rounded-lg items-center px-4"> 
            <BiEdit size={20} color="white"/>
            </div>
        </SwipeAction>
        </TrailingActions>
);
    return (
        <section className="content-left px-16 bg-gray-200 flex-1 pt-14 h-screen overflow-y-scroll" >
            <div className="border border-green-500 rounded-lg w-full flex items-center py-3 px-3 ">
                <BiSearch className="mr-1"/>
                <input type={"text"} className="flex-1 " placeholder="search" />
            </div>

            <h3 className=" mt-10 text-xl font-semibold bg-gradient-to-l from-blue-500 via-green-500 to-yellow-500 
                            text-transparent bg-clip-text">Selamat Datang di Perpustakaan Kami!</h3>


            <div className="mt-6">
                <button className ="flex flex-row space-x-10  ">
                <div className="rounded bg-red-600 bg-opacity-10 p-4 w-32 text-red-700 
                transition-ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-sky-600 duration-300 space-y-4">
                    <FaUsers size={25} className="mb-6"/>
                    <span className="text-sm">
                        Total Peminjam Buku
                    </span>
                </div>
                <div className="rounded bg-sky-600 bg-opacity-10 p-7 w-32 text-sky-700 
                transition-ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-600 duration-300 space-y-4">
                    <BiBookOpen size={25} className="mb-6 "/>
                    <span className="text-sm">
                        Total Buku
                    </span>
                </div>
                <div className="rounded bg-yellow-600 bg-opacity-10 p-7 w-32 text-yellow-700 
                transition-ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-purple-600 duration-300 space-y-4">
                    <HiOutlineSave size={25} className="mb-6" />
                    <span className="text-sm">
                        Pengambilan
                    </span>
                </div>
                <div className="rounded bg-purple-600 bg-opacity-10 p-7 w-32 text-purple-700 
                transition-ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-green-600 duration-300 space-y-4">
                    <AiFillInteraction size={25} className="mb-6"/>
                    <span className="text-sm">
                        Pengembalian 
                    </span>
                </div>
                </button>
            </div>
            <div className="mt-20">
        {Array.from(Array(8)).map((_,index) => (
        <div key={index} className= "bg-indigo-700 rounded-xl border border-green-600  mb-4">
            <SwipeableList threshold={0.9} type={Type.IOS}>
    <SwipeableListItem trailingActions={trailingActions()}
    >
    <div className="bg-white p-4 rounded-xl border border-white w-full flex cursor-pointer ">
                <img src={
                    "https://images.pexels.com/photos/1585634/pexels-photo-1585634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                } 
                alt="img" 
                className="w-8 h-8 rounded-full object-cover mr-3" 
                />
                <div className="text-sm">
                    <div className="text-green-800">Push</div>
                    <div className="text-gray-400 text-xs">089745721993</div>
                </div>
            </div>
    </SwipeableListItem>
</SwipeableList>
                </div>
                ))}
            </div>

        </section>
    );

}
