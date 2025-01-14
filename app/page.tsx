import Image from "next/image";
import {
  BiChat,
  BiFolder,
  BiLock,
  BiLockAlt,
  BiSolidFolder,
  BiSolidLock, BiSupport,
} from "react-icons/bi";
import { FaCloud, FaMessage } from "react-icons/fa6";
import { IoIosLock } from "react-icons/io";
import { IoChatbubble } from "react-icons/io5";
import { FaSpeakerDeck, FaTrello } from "react-icons/fa";
import React from "react";
import { PiOpenAiLogo } from "react-icons/pi";
import {MdAdminPanelSettings} from "react-icons/md";

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
              <FaCloud size="30"/>
            </div>
            <p className="font-semibold text-xl mt-5">Gestor de documentos</p>
            <p className="text-sm font-semibold mt-0 ">Documentos</p>
          </a>
          <a
              href="https://tablero-jefas.autoescuelaseco.cloud"
              target="_blank"
              className="bg-pink-400 p-10 rounded-3xl w-full !text-white "
          >
            <div className="h-[50px] w-[50px] bg-pink-500 flex justify-center items-center rounded-lg text-white">
              {/* eslint-disable-next-line react/jsx-no-undef */}
              <FaTrello size="30"/>
            </div>
            <p className="font-semibold text-xl mt-5">Focalboard Jefas</p>
            <p className="text-sm font-semibold mt-0 ">Tablero de trabajo</p>
          </a>
          <a
              href="https://asistente.autoescuelaseco.cloud"
              target="_blank"
              className="bg-gray-800 p-10 rounded-3xl w-full !text-white "
          >
            <div className="h-[50px] w-[50px] bg-gray-600 flex justify-center items-center rounded-lg text-white">
              {/* eslint-disable-next-line react/jsx-no-undef */}
              <PiOpenAiLogo size="30"/>
            </div>
            <p className="font-semibold text-xl mt-5">Asistente virtual</p>
            <p className="text-sm font-semibold mt-0 ">OpenWebUI</p>
          </a>
          <a
              href="https://admin.autoescuelaseco.cloud"
              target="_blank"
              className="bg-orange-500 p-10 rounded-3xl w-full !text-white "
          >
            <div className="h-[50px] w-[50px] bg-orange-700 flex justify-center items-center rounded-lg text-white">
              {/* eslint-disable-next-line react/jsx-no-undef */}
              <MdAdminPanelSettings size="30"/>
            </div>
            <p className="font-semibold text-xl mt-5">Administración Servidor</p>
            <p className="text-sm font-semibold mt-0 ">Proxmox</p>
          </a>
        </section>
        <h1 className="text-xl mt-10 font-semibold text-gray-500">Carpetas</h1>
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
      </div>
    </div>
  );
}
