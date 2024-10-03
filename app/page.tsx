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
    <div className="w-full  h-[100vh] items-center flex flex-col ">
      <section className="w-full justify-center flex flex-col items-center bg-green-500 py-16">
        <h1 className="text-center text-white text-3xl font-bold">
          AUTOESCUELA ECO
        </h1>
        <h2 className="mt-3 text-xl font-bold text-white">PEPITO 1.0</h2>
      </section>

      <div className="max-w-[1200px] w-full">
        <h1 className="text-2xl mt-10 font-semibold text-gray-800">
          PANEL PRINCIPAL
        </h1>
        <h1 className="text-xl mt-10 font-semibold text-gray-500">Apps</h1>
        <section className="mt-3 grid grid-cols-3 w-full gap-5">
          <a
            href="https://documentos.autoescuelaseco.cloud/"
            target="_blank"
            className="bg-blue-400 p-10 rounded-3xl w-full !text-white "
          >
            <div className="h-[50px] w-[50px] bg-blue-500 flex justify-center items-center rounded-lg text-white">
              <FaCloud size="30" />
            </div>
            <p className="font-semibold text-xl mt-5">Gestor de documentos</p>
            <p className="text-sm font-semibold mt-0 ">Documentos</p>
          </a>
        </section>

        <h1 className="text-xl mt-10 font-semibold text-gray-500">Carpetas</h1>
        <section className="mt-3 grid grid-cols-3 w-full gap-5 mb-5">
          <a
            href="https://documentos.autoescuelaseco.cloud/index.php/f/3851"
            target="_blank"
            className="bg-gray-100 p-10 rounded-3xl w-full "
          >
            <div className="h-[50px] w-[50px] bg-green-400 flex justify-center items-center rounded-lg text-white">
              <BiSolidFolder size="30" />
            </div>
            <p className="font-semibold text-xl text-gray-700 mt-5">MILLER</p>
            <p className="text-sm mt-0 text-green-400 font-semibold">
              Documentos
            </p>
          </a>
          <a
            href="https://documentos.autoescuelaseco.cloud/index.php/f/3854"
            target="_blank"
            className="bg-gray-100 p-10 rounded-3xl w-full "
          >
            <div className="h-[50px] w-[50px] bg-red-400 flex justify-center items-center rounded-lg text-white">
              <BiSolidFolder size="30" />
            </div>
            <p className="font-semibold text-xl text-gray-700 mt-5">
              RAFAEL CABRERA
            </p>
            <p className="text-sm mt-0 text-red-400 font-semibold">
              Documentos
            </p>
          </a>
          <a
            href="https://documentos.autoescuelaseco.cloud/index.php/f/3853"
            target="_blank"
            className="bg-gray-100 p-10 rounded-3xl w-full "
          >
            <div className="h-[50px] w-[50px] bg-yellow-400 flex justify-center items-center rounded-lg text-white">
              <BiSolidFolder size="30" />
            </div>
            <p className="font-semibold text-xl text-gray-700 mt-5">
              PASEO DE CHIL
            </p>
            <p className="text-sm mt-0 text-yellow-400 font-semibold">
              Documentos
            </p>
          </a>
          <a
            href="https://documentos.autoescuelaseco.cloud/index.php/f/2856"
            target="_blank"
            className="bg-gray-100 p-10 rounded-3xl w-full "
          >
            <div className="h-[50px] w-[50px] bg-blue-400 flex justify-center items-center rounded-lg text-white">
              <BiSolidFolder size="30" />
            </div>
            <p className="font-semibold text-xl text-gray-700 mt-5">ARCHIVOS</p>
            <p className="text-sm mt-0 text-blue-400 font-semibold">
              Documentos
            </p>
          </a>
          <a
            href="https://documentos.autoescuelaseco.cloud/index.php/f/2856"
            target="_blank"
            className="bg-gray-100 p-10 rounded-3xl w-full "
          >
            <div className="h-[50px] w-[50px] bg-pink-400 flex justify-center items-center rounded-lg text-white">
              <BiSolidFolder size="30" />
            </div>
            <p className="font-semibold text-xl text-gray-700 mt-5">
              PROTOCOLOS
            </p>
            <p className="text-sm mt-0 text-pink-400 font-semibold">
              Documentos
            </p>
          </a>
          <a
            href="https://documentos.autoescuelaseco.cloud/index.php/f/4383"
            target="_blank"
            className="bg-gray-100 p-10 rounded-3xl w-full "
          >
            <div className="h-[50px] w-[50px] bg-purple-400 flex justify-center items-center rounded-lg text-white">
              <BiSolidFolder size="30" />
            </div>
            <p className="font-semibold text-xl text-gray-700 mt-5">
              HORARIOS SECRETARÍAS
            </p>
            <p className="text-sm mt-0 text-purple-400 font-semibold">
              Documentos
            </p>
          </a>
        </section>
      </div>
    </div>
  );
}
