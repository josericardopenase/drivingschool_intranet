import Image from "next/image";
import {
  BiChat,
  BiFolder,
  BiLock,
  BiLockAlt,
  BiSolidFolder,
  BiSolidLock,
} from "react-icons/bi";
import { FaCloud, FaMessage } from "react-icons/fa6";
import { IoIosLock } from "react-icons/io";
import { IoChatbubble } from "react-icons/io5";

export default function Home() {
  return (
    <div className="w-full justify-center h-[100vh] items-center flex flex-col">
      <div className="max-w-[1200px] w-full">
        <section className="w-full justify-center flex flex-col items-center ">
          <h1 className="text-center text-3xl font-bold">AUTOESCUELA ECO</h1>
          <h2 className="mt-3 text-xl font-bold text-green-500">PEPITO 1.0</h2>
        </section>

        <h1 className="text-xl mt-10 font-semibold text-gray-500">
          Aplicaciones
        </h1>
        <section className="mt-3 grid grid-cols-3 w-full gap-5">
          <a
            href="https://documentos.autoescuelaseco.cloud/"
            target="_blank"
            className="bg-gray-100 p-10 rounded-3xl w-full "
          >
            <div className="h-[50px] w-[50px] bg-blue-400 flex justify-center items-center rounded-lg text-white">
              <FaCloud size="30" />
            </div>
            <p className="font-semibold text-xl text-gray-700 mt-5">
              Gestor de documentos
            </p>
            <p className="text-sm font-semibold mt-0 text-blue-400">
              Documentos
            </p>
          </a>
        </section>

        <h1 className="text-xl mt-10 font-semibold text-gray-700">
          Accesos directos
        </h1>
        <section className="mt-3 grid grid-cols-3 w-full gap-5">
          <a
            href="https://documentos.autoescuelaseco.cloud/index.php/f/2856"
            target="_blank"
            className="bg-gray-100 p-10 rounded-3xl w-full "
          >
            <div className="h-[50px] w-[50px] bg-yellow-400 flex justify-center items-center rounded-lg text-white">
              <BiSolidFolder size="30" />
            </div>
            <p className="font-semibold text-xl text-gray-700 mt-5">
              PROTOCOLOS
            </p>
            <p className="text-sm mt-0 text-yellow-400 font-semibold">
              Documentos
            </p>
          </a>
        </section>
      </div>
    </div>
  );
}
