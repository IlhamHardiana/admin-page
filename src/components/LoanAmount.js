import React from 'react';
import {AiOutlineIdcard} from 'react-icons/ai';

export default function LoanAmount() {
    const today = [
    {
        name:"Peminjam",
        status:"Selesai",
        results:"2 Hari",
        
    },
];

return (
    <div className="mt-52 w-80 flex-col bg-slate-400 rounded-lg overflow-hidden px-4 py-2">
        <h3 className=" text-neutral-900 text-[14px] space-x-3">Hari Ini</h3>
        <div>
            {today.map((val) => {
                return (
                <div className="flex flex-row items-center space-x-4">
                <div className="h-8 w-8 bg-blue-700 rounded-lg flex items-center justify-center">        
                    <AiOutlineIdcard size={20}/>                
                    </div>
                    <div className="mr-5 flex-1">
                        <div>{val.name}</div>
                        <div>{val.status}</div>
                    </div>
                    <div className="text-red-700">{val.results}</div>
                </div>
                );
            })}
        </div>
    </div>
    );  
}