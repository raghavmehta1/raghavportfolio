import React, { useState } from "react";
import "./output.css";
import { CiLink, CiMail, CiLocationOn } from "react-icons/ci";
import { IoMdContact } from "react-icons/io";

export default function WelcomeTo() {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [base64Image, setBase64Image] = useState(null);

  const handleFileUpload = (file) => {
    setUploadedFile(file);
    convertToBase64(file);
  };

  const convertToBase64 = (file) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      setBase64Image(fileReader.result);
    };
  };

  return (
    <div className="w-full h-auto px-8 py-10 bg-white box-border">
      <div className="flex flex-col justify-between h-full box-border">
        <div className="flex flex-col justify-start items-start gap-4 box-border">
          <p className="text-lg leading-[133%] font-ibm plex sans font-[400]">
            Nice to meet you!
          </p>
          <p className="text-5xl leading-[117%] font-ibm plex sans font-[700] uppercase">
            Welcome to...
          </p>
        </div>
        <div className="flex flex-row w-full box-border">
          <div className="flex flex-col h-full box-border">
            <div className="flex flex-col justify-start items-center gap-4 w-full box-border">
              <div className="flex flex-col items-center">
                <div className="mb-8">
                  <p className="bg-gradient-to- to-purple-500 text-5xl leading-none font-ibm plex sans font-[700] text-center uppercase tracking-tight">
                    Jacob Jones
                  </p>
                  <p className="text-2xl leading-[133%] font-ibm plex sans font-[400] text-center tracking-tight">
                    Product Designer based in London
                  </p>
                </div>
                <div className="h-14 box-border">
                  <div className="flex flex-row justify-center items-center gap-2 w-full h-full px-8 py-4 box-border bg-white">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileUpload(e.target.files[0])}
                      style={{ display: "none" }}
                      id="upload-image"
                    />
                    <label htmlFor="upload-image" className="cursor-pointer">
                      <p className="text-lg leading-[133%] font-ibm plex sans font-[500] underline">
                        Choose photo
                      </p>
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex flex-col h-full box-border">
              {base64Image && (
                <img src={base64Image} className="w-full h-[410px]" alt="Uploaded" />
              )}
              </div>
            </div>
          </div>
          <div className="flex flex-col h-full box-border">
            <div className="flex flex-col w-full pr-8 pb-8 box-border">
              <div className="flex flex-row box-border">
                <div className="flex flex-row justify-start items-center gap-3 mr-8 h-full box-border">
                  <CiLink  className="text-[40px]"/>
                  <p className="text-lg leading-[133%] font-ibm plex sans font-[400]">
                    +77 022 444 05 05
                  </p>
                </div>
                <div className="flex flex-row justify-start items-center gap-3 h-full box-border">
                  <IoMdContact  className="text-[40px]"/>
                  <p className="text-lg leading-[133%] font-ibm plex sans font-[400]">
                    25 yrs
                  </p>
                </div>
              </div>
              <div className="flex flex-row mt-4 box-border">
                <div className="flex flex-row justify-start items-center gap-3 mr-8 h-full box-border">
                  <CiMail  className="text-[40px]"/>
                  <p className="text-lg leading-[133%] font-ibm plex sans font-[400]">
                    jacob360@gmail.com
                  </p>
                </div>
                <div className="flex flex-row justify-start items-center gap-3 h-full box-border">
                  <CiLocationOn  className="text-[40px]"/>
                  <p className="text-lg leading-[133%] font-ibm plex sans font-[400]">
                    United Kingdom, London
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full box-border mt-10">
          <div className="flex flex-col justify-start items-start gap-5 h-full box-border">
            <div className="flex flex-row justify-start items-center gap-3 w-full box-border">
              <p className="bg-gradient-to-r from-yellow-500 via-red-400 to-purple-500 text-5xl leading-none font-ibm plex sans font-[700] text-center uppercase tracking-tight">
                10+
              </p>
              <p className="text-lg leading-[111%] font-ibm plex sans font-[400]">
                Years experience...
              </p>
            </div>
            <p className="text-lg leading-[133%] font-ibm plex sans font-[400]">
              Hello there! My name is Jacob Jones. I am a web designer & developer, and I'm very passionate and dedicated to my work.
            </p>
          </div>
          <div className="flex flex-col justify-start items-start gap-5 h-full box-border">
            <div className="flex flex-row justify-start items-center gap-3 w-full box-border">
              <p className="bg-gradient-to-r from-yellow-500 via-red-400 to-purple-500 text-5xl leading-none font-ibm plex sans font-[700] text-center uppercase tracking-tight">
                14
              </p>
              <p className="text-lg leading-[111%] font-ibm plex sans font-[400]">
                Clients Worldwide...
              </p>
            </div>
            <p className="text-lg leading-[133%] font-ibm plex sans font-[400]">
              With 10+ years experience as a professional graphic designer, I have acquired the skills and knowledge necessary to make your project a success.
            </p>
          </div>
        </div>
        <div className="w-full h-36 p-10 mt-10 box-border bg-black">
          <div className="flex flex-row justify-start items-start gap-3 w-full h-full box-border">
            <p className="text-xl leading-[160%] font-ibm plex sans font-[400] text-white">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus sed sit ultrices et sed metus sollicitudin."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
