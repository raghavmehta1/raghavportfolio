import React, { useState } from 'react';
import { CiLink, CiMail, CiLocationOn } from 'react-icons/ci';
import { IoMdContact } from 'react-icons/io';
import './output.css';
import { FaRegUserCircle } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Portfolio = () => {
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
    <div className="flex">
      <div className="flex flex-row">
        <div className="min-h-screen bg-white flex flex-col items-end py-10 w-3/4">
          <div className="max-w-4xl w-full mx-auto px-5">
            <div className="text-left -ml-5 md:-ml-10">
              <h1 className="text-2xl font-semibold">Nice to meet you!</h1>
              <h2 className="text-4xl font-bold mt-2">WELCOME TO...</h2>
            </div>
            <div className="flex flex-col items-start mt-10 md:flex-row md:items-start md:-ml-10">
              <div className="flex flex-col items-center md:items-start md:mr-10">
                {base64Image ? (
                  <img src={base64Image} alt="Uploaded" className="rounded-full w-96 h-96 mb-4 md:mb-0" />
                ) : (
                  <div className="w-96 h-96 mb-4 bg-gray-200 flex items-center justify-center rounded-full">
                    <p className="text-gray-500">Upload an Image</p>
                  </div>
                )}
                <label htmlFor="upload-image" className="mt-4 inline-block bg-black text-white py-2 px-4 rounded-full cursor-pointer">
                  Choose Photo
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileUpload(e.target.files[0])}
                  style={{ display: 'none' }}
                  id="upload-image"
                />
              </div>
              <div className="flex flex-col items-center text-center md:items-start md:text-left -ml-5 md:-ml-10">
                <h3 className="text-3xl font-bold text-green-600">JACOB JONES</h3>
                <p className="text-2xl font-bold text-black-500"><b>. Product Designer</b> based in <b> London  </b> </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6 text-center md:text-right -ml-5 md:-ml-10">
              <div className="text-center md:text-left">
             <div className="fixed top-2/4 right-80 w-1/4">
                <h4 className="text-4xl font-bold text-green-600">10+</h4>
                <p className="text-lg font-semibold mt-2">Years experience...</p>
                <p className="text-1xl font-semibold">
                  Hello there! My name is Jacob Jones. 
                </p>
              </div>
              </div>
              <div className="text-center md:text-left mt-10 md:mt-0">
              <div className="fixed top-2/4 right-5 w-1/4">

                <h4 className="text-4xl font-bold text-green-600">14</h4>
                <p className="text-lg font-semibold mt-2">Clients Worldwide...</p>
                <p className="text-1xl font-semibold">
                  With 10+ years experience 
                </p>
              </div>
            </div>
            </div>
            <div className="w-full mt-10 flex justify-end">
            <div className="fixed top-3/4 right-40 w-1/4">

              <div className="p-5 bg-black text-white text-3xl rounded-md">
                <p className="italic">
                  "Lorem ipsum dolor sit amet, consectetur"</p>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed top-1/4 right-40 w-1/4">
          <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-8">
                <FaPhoneAlt className="text-2xl" />
                <p className="text-lg"><b>+77 022 444 05 05</b></p>
              </div>
              <div className="flex items-center gap-8">
                <FaRegUserCircle className="text-2xl" />
                <p className="text-lg"><b>25 yrs</b></p>
              </div>
            </div>
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-8">
                <CiMail className="text-2xl" />
                <p className="text-lg"><b>jacob360@gmail.com</b></p>
              </div>
              <div className="flex items-center gap-6">
                <CiLocationOn className="text-2xl" />
                <p className="text-lg"><b>United Kingdom, London</b></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;