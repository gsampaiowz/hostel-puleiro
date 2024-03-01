"use client";

import Logo from "@/assets/img/logo.jpg";

const Header = () => {
  return (
    <header className="flex gap-12 flex-col justify-center items-center w-full min-h-screen ">
        {/* <img className="rounded-full invert" width={180} height={180} src="https://drive.google.com/thumbnail?id=1iGtMQa7TcIgwdPPdiL_nk3t8iWNV22qW&sz=w10000" alt="" /> */}
        <img
          className="rounded-full invert"
          width={180}
          height={180}
          src={Logo.src}
          alt="Logo"
        />

        <h1 className="text-white my-animated-button bg-[#513c34] drop-shadow-[0_0_5px_rgba(0,0,0,1)]" onClick={() => scrollTo(0,700)}>Conheça nossos quartos!</h1>
    </header>
  );
};

export default Header;
