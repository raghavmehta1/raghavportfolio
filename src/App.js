import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { CiMail } from 'react-icons/ci';
import { FaPhoneAlt } from 'react-icons/fa';
import { CiStar } from 'react-icons/ci';
import { FaBehance } from 'react-icons/fa';
import { CiFootball } from 'react-icons/ci';
import { CiInstagram } from 'react-icons/ci';
import { FaArrowUp } from 'react-icons/fa';
import { MdArrowOutward } from 'react-icons/md';
import About from './About';
import Services from './Services';
import Works from './Works';
import Blogs from './Blogs';
import Contact from './Contact';
import Form from './Form';
import FileUpload from './FileUpload';
import './App.css';
export default function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [file, setFile] = useState(null);

  const handleFileUpload = (uploadedFile) => {
    setFile(uploadedFile);
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const paramName = searchParams.get('name');
    const paramEmail = searchParams.get('email');
    const paramPhone = searchParams.get('phone');

    if (paramName) {
      setName(paramName);
    }
    if (paramEmail) {
      setEmail(paramEmail);
    }
    if (paramPhone) {
      setPhone(paramPhone);
    }
  }, []);

  return (
    <div className="app">
      <div className="main-container" style={{ display: 'flex' }}>
        <div className="side-bar">
          <div className="content">
            <div className="logo-1">
              <div className="logo">
                <p className="jac">Jac.</p>
              </div>
            </div>
            <div className="menu-1">
              <div className="menu">
                <Link to="/">
                  <p className="home">Home</p>
                </Link>
                <Link to="/about">
                  <p className="about">About</p>
                </Link>
                <Link to="/services">
                  <p className="services">Services</p>
                </Link>
                <Link to="/works">
                  <p className="works">Works</p>
                </Link>
                <Link to="/blogs">
                  <p className="blogs">Blogs</p>
                </Link>
                <Link to="/contact">
                  <p className="contact">Contact</p>
                </Link>
                <Link to="/form">
                  <p className="form">Form</p>
                </Link>
              </div>
            </div>
            <div className="social-media">
              <FaBehance size={40} style={{ fill: 'white' }} />
              <CiFootball size={40} style={{ fill: 'white' }} />
              <CiInstagram size={40} style={{ fill: 'white' }} />
            </div>
            <div className="copyrights">
              <p className="copyright-2023-jacob-jo">
                Copyright ©2023 Jacob Jones. All right reserved.
              </p>
            </div>
          </div>
        </div>

        <div
          className="hero"
          style={{
            backgroundImage: 'Picture2.png',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <Routes>
            <Route
              exact
              path="/"
              element={
                <div className="group-544">
                  <div className="content-1">
                    <div className="content">
                      <div className="text">
                        <div className="txt">
                          <p className="my-name-is-jacob-jones">
                            My name is {name}
                          </p>
                          <p className="product-designer-based">
                            Product Designer based in London
                          </p>
                        </div>
                        <div className="button-1">
                          <div className="button">
                            <p className="let-talk-with-me">Let's talk </p>
                            <FaArrowUp className="text-[40px]" />

                            <MdArrowOutward />
                          </div>
                        </div>
                      </div>
                      <div className="contact-info">
                        <div className="call">
                          <FaPhoneAlt />
                          <p className="\\\_-770224440505">{phone}</p>
                        </div>
                        <div className="mail">
                          <CiMail />
                          <p className="jacob-360-gmail-com">{email} </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CiStar />
                </div>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/works" element={<Works />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/form" element={<Form />} />
            <Route path="/main" element={<About file={file} />} />
            <Route path="*" element={<h1>404</h1>} />
            <Route path="/" element={<FileUpload onFileUpload={handleFileUpload} />} />

          </Routes>
        </div>
      </div>
    </div>
  );
}
