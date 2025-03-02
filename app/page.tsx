import Image from "next/image";
import {
  BiChat,
  BiFolder,
  BiLock,
  BiLockAlt, BiPalette,
  BiSolidFolder,
  BiSolidLock, BiSupport,
} from "react-icons/bi";
import {FaCloud, FaMessage, FaPalette, FaPallet} from "react-icons/fa6";
import { IoIosLock } from "react-icons/io";
import { IoChatbubble } from "react-icons/io5";
import { FaSpeakerDeck, FaTrello } from "react-icons/fa";
import React from "react";
import { PiOpenAiLogo } from "react-icons/pi";
import {MdAdminPanelSettings} from "react-icons/md";
import Header from "@/components/header";

export default function Home() {
  return (
      <>
          <h1 className="text-2xl mt-6 mb-6 font-semibold text-gray-800">
            Secretaría
          </h1>
          <section className="mt-3 grid grid-cols-3 w-full gap-5">
            <a
                href="https://documentos.autoescuelaseco.cloud/"
                target="_blank"
                className="bg-[#0291e0] p-10 rounded-3xl w-full !text-white "
            >
              <div className="h-[50px] w-[50px] bg-[#0082c9] flex justify-center items-center rounded-lg text-white">
                <img src="nextcloud.png" className="rounded-xl"/>
              </div>
              <p className="font-semibold text-lg mt-5">Nextcloud</p>
              <p className="text-sm  mt-0 ">Documentos</p>
            </a>
            <a
                href="https://mattermost.autoescuelaseco.cloud/"
                target="_blank"
                className="bg-[#1e325c] p-10 rounded-3xl w-full !text-white "
            >
              <div className="h-[50px] w-[50px] bg-[#28427b] flex justify-center items-center rounded-lg text-white">
                <img className="max-w-[30px]" src="mattermost.png"/>
              </div>
              <p className="font-semibold text-lg mt-5">Mattermost</p>
              <p className="text-sm mt-0 ">Comunicaciones de empresa</p>
            </a>

            <a
                href="https://passbolt.autoescuelaseco.cloud/"
                target="_blank"
                className="bg-gray-800 p-10 rounded-3xl w-full !text-white "
            >
              <div className="h-[50px] w-[50px] bg-gray-900 flex justify-center items-center rounded-lg text-white">
                <img src="passbolt.svg" className="rounded-xl max-w-[30px]"/>
              </div>
              <p className="font-semibold text-lg mt-5">Passbolt</p>
              <p className="text-sm  mt-0 ">Gestor de contraseñas</p>
            </a>
            <a
                href="https://penpot.autoescuelaseco.cloud/"
                target="_blank"
                className="bg-gray-100 p-10 rounded-3xl w-full !text-gray-700 "
            >
              <div className="h-[50px] w-[50px] bg-gray-200 flex justify-center items-center rounded-lg text-black">
                <img className="max-w-[20px]" src="penpot.png"/>
              </div>
              <p className="font-semibold text-lg mt-5">Penpot</p>
              <p className="text-sm mt-0 ">Software de diseño</p>
            </a>
          </section>

          <h1 className="text-2xl mt-6 mb-6 font-semibold text-gray-800">
            Dirección
          </h1>
          <section className="mt-3 grid grid-cols-3 w-full gap-5">
            <a
                href="https://tablero-jefas.autoescuelaseco.cloud"
                target="_blank"
                className="bg-pink-400 p-10 rounded-3xl w-full !text-white "
            >
              <div className="h-[50px] w-[50px] bg-pink-500 flex justify-center items-center rounded-lg text-white">
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <FaTrello size="30"/>
              </div>
              <p className="font-semibold text-lg mt-5">Focalboard Jefas</p>
              <p className="text-sm mt-0 ">Tablero de trabajo</p>
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
              <p className="font-semibold text-lg mt-5">Administración Servidor</p>
              <p className="text-sm  mt-0 ">Proxmox</p>
            </a>
            <a
                href="https://grafana.autoescuelaseco.cloud/"
                target="_blank"
                className="bg-gray-900 p-10 rounded-3xl w-full !text-white "
            >
              <div className="h-[50px] w-[50px] bg-gray-800 flex justify-center items-center rounded-lg text-white">
                <img src="grafana.png" className="rounded-xl max-w-[30px]"/>
              </div>
              <p className="font-semibold text-lg mt-5">Grafana</p>
              <p className="text-sm  mt-0 ">Métricas</p>
            </a>
            <a
                href="https://n8n.autoescuelaseco.cloud/"
                target="_blank"
                className="bg-[#f55b80] p-10 rounded-3xl w-full !text-white "
            >
              <div className="h-[50px] w-[50px] bg-[#ea4b71] flex justify-center items-center rounded-lg text-white">
                <img src="n8n.jpg" className="rounded-xl "/>
              </div>
              <p className="font-semibold text-lg mt-5">n8n</p>
              <p className="text-sm  mt-0 ">Automatizaciones</p>
            </a>
          </section>
      </>
  );
}
