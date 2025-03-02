'use client'

import React from 'react';
import {BiAccessibility, BiLink, BiSolidDashboard} from "react-icons/bi";
import {FaLink} from "react-icons/fa6";
import {FaCog, FaProcedures} from "react-icons/fa";
import Link from "next/link";
import {usePathname} from "next/navigation";

function Header() {
    const pathname = usePathname();
    const isActive = (path: string) => path === pathname;

     return (
        <div className="w-full">
            <section className="w-full justify-center flex flex-col items-center bg-gray-100 py-10">
                <img src="ecotech.png" className="w-full max-w-[300px]"/>
            </section>
            <div className="w-full h-[1px] bg-gray-300"></div>
            <section className="w-full justify-center flex items-center bg-gray-100 py-3 gap-5">
                <Link href="/"
                    className={`${isActive("/") ? "!bg-brand_primary-500 text-white" : ""} w-fit bg-gray-200 px-5 py-2 rounded-lg font-semibold text-gray-700 cursor-pointer flex items-center gap-2`}
                >
                    <BiSolidDashboard></BiSolidDashboard>
                    Aplicaciones
                </Link>
                <Link
                    href="/direct_access"
                    className={`${isActive("/direct_access") ? "!bg-brand_primary-500 text-white " : ""} w-fit bg-gray-200 px-5 py-2 rounded-lg font-semibold text-gray-700 cursor-pointer flex items-center gap-2`}>
                    <FaLink></FaLink>
                    Accesos directos
                </Link>
                <Link
                    href="/process"
                    className={`${isActive("/process") ? "!bg-brand_primary-500 text-white " : ""} w-fit bg-gray-200 px-5 py-2 rounded-lg font-semibold text-gray-700 cursor-pointer flex items-center gap-2`}>
                    <FaCog></FaCog>
                    Procesos
                </Link>
            </section>
            <div className="w-full h-[1px] bg-gray-300"></div>
        </div>
     );
}

export default Header;