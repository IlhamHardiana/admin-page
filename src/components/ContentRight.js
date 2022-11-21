import React from "react";
import {GrNotification} from "react-icons/gr";
import {BiUser} from "react-icons/bi";
import LoanAmount from "./LoanAmount";

export default function ContentRight() {
    return (
        <section className="w-96 bg-gray-100 rounded-tl-65px overflow-hidden px-12">
        <div className="mt-4 px-12 flex justify-end space-x-9 items-center">
            <GrNotification size={17}/>
            <BiUser size={17}/>
            <img src="https://images.pexels.com/photos/1585634/pexels-photo-1585634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="user"
            className="h-9 w-9 object-cover rounded-full"
            />
        </div>
        <div className="kartu mt-6"> 
            <div className="relative p-5 text-white">
            <div className="text-[18px] font-semibold">Kartu Identitas </div>
            <div className="mt-8 space-y-2">
            <div className="text-[15px]">M Ilham Hardiana</div>
            <div className="text-[12px]">No. Telepon</div>
            <di className="flex justify-between relative">
                <span>089653758927</span>
            </di>
            </div>
        </div>
    </div>
        <button className="py-3 rounded border border-indigo-600 text-indigo-600 border-dashed w-full hover:bg-sky-200 mt-10">
        Buat Kartu Identitas
        </button>
        <LoanAmount />
        </section>
    );
    
}