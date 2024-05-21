import React, { useState } from "react";
import "./output.css";
import { FaLocationArrow } from "react-icons/fa";

export default function ReachOutMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
 
    console.log("Name:", name);
    console.log("Email:", email);
  };

  return (
    <div className=" w-[1915px] h-[968px] pl-[395px] pr-[285px] pt-[212px] pb-[220px] box-border  bg-[linear-gradient(0deg, rgba(255,255,255,1), rgba(255,255,255,1))] bg-[url(https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/wxjzbl5dili-1%3A6?alt=media&token=a2c00450-a2f2-4f73-8df0-90757b24223e)]">
      <div className=" flex flex-row justify-between items-center h-[100%] box-border">
        <div className=" flex flex-col h-[undefinedundefined] pr-[52px] box-border">
          {/* ... */}
        </div>
        <div className=" w-[775px] h-[100%] px-[82.83px] py-[61.83px] box-border  bg-[ linear-gradient(-88.16deg, rgba(255,177,71,1) 0%, rgba(255,108,99,1) 52%, rgba(184,106,223,1) 100%) ]">
          <div className=" flex flex-col w-[100%] h-[100%] box-border">
            <p className="  border-[#ffffffff]  text-[40px]  leading-[120%]  font-ibm plex sans  font-[700] uppercase">
              any project?
            </p>
            <form onSubmit={handleSubmit}>
              <div className=" flex flex-row justify-between w-[100%] box-border">
                <div className=" flex flex-col justify-start items-start gap-2.5 w-[280px] h-[100%] box-border">
                  <p className="  border-[#ffffffff] text-base  leading-[150%]  font-ibm plex sans  font-[500] uppercase opacity-80">
                    Name
                  </p>
                  <input
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    className="  border-[#ffffffff] text-base  leading-[150%]  font-ibm plex sans  font-[500] uppercase opacity-80 bg-transparent outline-none"
                  />
                </div>
                <div className=" flex flex-col justify-start items -start gap-2.5 w-[280px] h-[100%] box-border">
                  <p className="  border-[#ffffffff] text-base  leading-[150%]  font-ibm plex sans  font-[500] uppercase opacity-80">
                    Email
                  </p>
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    className="  border-[#ffffffff] text-base  leading-[150%]  font-ibm plex sans  font-[500] uppercase opacity-80 bg-transparent outline-none"
                  />
                </div>
              </div>
              {/* ... */}
              <div className=" w-[undefinedundefined] h-14 box-border">
                <button
                  type="submit"
                  className=" flex flex-row justify-center items-center gap-2 w-[100%] h-[100%] px-[37.83px] py-[15.83px] box-border  bg-[rgba(20,19,19,1)]"
                >
                  <p className="  border-[#ffffffff] text-lg  leading-[133%]  font-ibm plex sans  font-[500] text-white">
                    Submit now
                  </p>
                  <FaLocationArrow />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}