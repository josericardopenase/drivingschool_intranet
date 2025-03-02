import React from 'react';
import {BiSolidFolder} from "react-icons/bi";

function Page() {
    return (
        <>
            <h1 className="text-2xl mt-6 mb-6 font-semibold text-gray-800">
                Carpetas
            </h1>
    <section className="mt-3 grid grid-cols-3 w-full gap-5 mb-5">
        <a
            href="https://documentos.autoescuelaseco.cloud/f/10598"
            target="_blank"
            className="bg-gray-100 p-10 rounded-3xl w-full "
        >
            <div className="h-[50px] w-[50px] bg-red-400 flex justify-center items-center rounded-lg text-white">
                <BiSolidFolder size="30"/>
            </div>
            <p className="font-semibold text-xl text-gray-700 mt-5">
                RAFAEL CABRERA
            </p>
            <p className="text-sm mt-0 text-red-400 font-semibold">
                Documentos
            </p>
        </a>
        <a
            href="https://documentos.autoescuelaseco.cloud/f/10599"
            target="_blank"
            className="bg-gray-100 p-10 rounded-3xl w-full "
        >
            <div className="h-[50px] w-[50px] bg-green-400 flex justify-center items-center rounded-lg text-white">
                <BiSolidFolder size="30"/>
            </div>
            <p className="font-semibold text-xl text-gray-700 mt-5">MILLER</p>
            <p className="text-sm mt-0 text-green-400 font-semibold">
                Documentos
            </p>
        </a>

        <a
            href="https://documentos.autoescuelaseco.cloud/f/10600"
            target="_blank"
            className="bg-gray-100 p-10 rounded-3xl w-full "
        >
            <div className="h-[50px] w-[50px] bg-yellow-400 flex justify-center items-center rounded-lg text-white">
                <BiSolidFolder size="30"/>
            </div>
            <p className="font-semibold text-xl text-gray-700 mt-5">
                PASEO DE CHIL
            </p>
            <p className="text-sm mt-0 text-yellow-400 font-semibold">
                Documentos
            </p>
        </a>
        <a
            href="https://documentos.autoescuelaseco.cloud/index.php/apps/files/files"
            target="_blank"
            className="bg-gray-100 p-10 rounded-3xl w-full "
        >
            <div className="h-[50px] w-[50px] bg-blue-400 flex justify-center items-center rounded-lg text-white">
                <BiSolidFolder size="30"/>
            </div>
            <p className="font-semibold text-xl text-gray-700 mt-5">ARCHIVOS</p>
            <p className="text-sm mt-0 text-blue-400 font-semibold">
                Documentos
            </p>
        </a>
        <a
            href="https://documentos.autoescuelaseco.cloud/f/10597"
            target="_blank"
            className="bg-gray-100 p-10 rounded-3xl w-full "
        >
            <div className="h-[50px] w-[50px] bg-pink-400 flex justify-center items-center rounded-lg text-white">
                <BiSolidFolder size="30"/>
            </div>
            <p className="font-semibold text-xl text-gray-700 mt-5">
                PROTOCOLOS
            </p>
            <p className="text-sm mt-0 text-pink-400 font-semibold">
                Documentos
            </p>
        </a>
        <a
            href="https://documentos.autoescuelaseco.cloud/f/10604"
            target="_blank"
            className="bg-gray-100 p-10 rounded-3xl w-full "
        >
            <div className="h-[50px] w-[50px] bg-purple-400 flex justify-center items-center rounded-lg text-white">
                <BiSolidFolder size="30"/>
            </div>
            <p className="font-semibold text-xl text-gray-700 mt-5">
                HORARIOS DE TRABAJO
            </p>
            <p className="text-sm mt-0 text-purple-400 font-semibold">
                Documentos
            </p>
        </a>
        <a
            href="https://documentos.autoescuelaseco.cloud/f/20629"
            target="_blank"
            className="bg-gray-100 p-10 rounded-3xl w-full "
        >
            <div className="h-[50px] w-[50px] bg-orange-400 flex justify-center items-center rounded-lg text-white">
                <BiSolidFolder size="30"/>
            </div>
            <p className="font-semibold text-xl text-gray-700 mt-5">
                LEONOR
            </p>
            <p className="text-sm mt-0 text-orange-400 font-semibold">
                Documentos
            </p>
        </a>
    </section>
</>    )
    ;
}

export default Page;