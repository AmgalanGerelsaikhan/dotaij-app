import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
// import { useRouter } from 'next/router';
import NavLogo from "../public/DoTaijMogul.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#fcfaf9');
  const [linkColor, setLinkColor] = useState('#14213d');

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300'
          : 'fixed w-full h-20 z-[100]'
      }
    >
      <div className='flex justify-between items-center w-full h-full px-10 2xl:px-16'>
      <Link href="/" className="group relative">
                    <img
                      src={"/DoTaijMogul.png"}
                      alt="logo"
                      width={180}
                      height={60}
                      className="object-contain transition-transform transform group-hover:scale-110"
                    />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-80 transition-opacity"></div>
                </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
            <li className='ml-10 text-1xl uppercase hover:border-b'>
              <Link href='/'>Home</Link>
            </li>
            <li className='ml-10 text-1xl uppercase hover:border-b'>
              <Link href='/biography'>Biography</Link>
            </li>
            <li className='ml-10 text-1xl uppercase hover:border-b'>
              <Link href='/books'>Books</Link>
            </li>
            <li className='ml-10 text-1xl uppercase hover:border-b'>
              <Link href='/news'>News</Link>
            </li>
            <li className='ml-10 text-1xl uppercase hover:border-b'>
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className='md:hidden'
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
            <Link href="/" className="group relative">
                    <img
                      src={"/DoTaijMogul.png"}
                      alt="logo"
                      width={120}
                      height={35}
                      className="object-contain transition-transform transform group-hover:scale-110"
                    />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-80 transition-opacity"></div>
                </Link>
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>
              Let's explore some lesser-known aspects of Mongolian history.
              </p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Home
                </li>
              </Link>
              <Link href='/biography'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Biography
                </li>
              </Link>
              <Link href='/books'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Books
                </li>
              </Link>
              <Link href='/news'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  News
                </li>
              </Link>
              <Link href='/contact'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Contact
                </li>
              </Link>
            </ul>
            <div className='pt-35'>
              <p className='uppercase tracking-widest text-[#5651e5]'>
                Let&#39;s Connect
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <a
                  href='https://www.linkedin.com/in/clint-briley-50056920a/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href='https://github.com/fireclint'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaGithub />
                  </div>
                </a>
                <Link href='/#contact'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href='/resume'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;