import React from 'react';
import {BsPhone} from 'react-icons/bs';

export default function Form() {
    return(
        <>
        <div className='bg-white px-10 py-20 rounded-3xl'>
            <h1 className='flex items-center justify-center text-5xl font-semibold'>Selamat Datang!</h1>
            <p className="font-medium text-lg text-gray-500 mt-5">Selamat Datang! Silahkan Masukan Detail Anda. </p>
            <div className="mt-8 ">
                <div>
                    <label className="text-lg font-medium">Username</label>
                    <input
                        className='w-full border-2 border-gray-300 rounded-xl p-2 mt-1 bg-transparent'
                        placeholder='Masukan Username'
                    />
                </div>
                <div>
                    <label className="text-lg font-medium">Password</label>
                    <input
                        className='w-full border-2 border-gray-300 rounded-xl p-2 mt-1 bg-transparent'
                        placeholder='Masukan Password'
                    />
                </div>
                <div className='mt-7 flex justify-between items-center'>
                    <div>
                        <input
                            type="checkbox"
                            id='remember'
                        />
                        <label className="ml-2 font-medium text-base" for="remember">Remember</label>
                    </div>
                    <button className='font-medium text-base text-blue-400'>Lupa Password</button>
                </div>
                <div className='mt-8 flex flex-col gap-y-3'>
                    <button className="active:scale-[.98] active:duration-150 transition-all hover:scale-[1.01] ease-in-out  py-2 rounded-xl bg-green-400 text-white text-lg font-bold">Sign in</button>
                    <button className="flex rounded-xl py-2 border border-green-400 items-center justify-center gap-2 active:scale-[.98] active:duration-150 transition-all">
                        <BsPhone />
                        Sign in with your Phone
                        </button>
                </div>
                <div className="mt-8 flex items-center justify-center">
                    <p className="font-medium text-base">Tidak Punya Akun?</p>
                    <button className="text-blue-400 text-base font-medium ml-1">Buat Akun</button>
                </div>
            </div>
        </div>
    </>
    );
}