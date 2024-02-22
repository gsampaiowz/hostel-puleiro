"use client";

import Logo from "@/assets/img/logo.jpg";

const Header = () => {
  return (
    <header className="flex gap-8 flex-col justify-center items-center w-full h-96 ">
        {/* <img className="rounded-full invert" width={180} height={180} src="https://drive.google.com/thumbnail?id=1iGtMQa7TcIgwdPPdiL_nk3t8iWNV22qW&sz=w10000" alt="" /> */}
        <img
          className="rounded-full invert"
          width={180}
          height={180}
          src={Logo.src}
          alt="Logo"
        />

        <h1 className="text-white drop-shadow-[0_0_10px_rgba(0,0,0,1)]">Rua Aristides Milton, 25,   Salvador-BA Cep 41610011</h1>
    </header>
  );
};

export default Header;
