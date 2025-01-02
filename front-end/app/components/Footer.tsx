import { BiChevronRight } from "react-icons/bi";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaDribbble,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="bg-gray-800 p-8 text-gray-200 font-serif">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-2 justify-between max-md:flex-col max-md:text-center">
            <div className="mb-5">
              <h4 className="text-3xl pb-4 font-bold font-title text-purple-500">
                StarkLand
                <span className="text-green-500">.com</span>
              </h4>
              <p className="text-gray-400 pb-2">
                Join 1000+ others and never miss out our Latest Updates.
              </p>
              <form
                action=""
                className="flex flex-row max-sm:flex-col max-sm:items-center"
              >
                <input
                  type="text"
                  className="text-gray-700 w-2/3 p-2 focus:border-blue-400 max-sm:mb-2"
                  placeholder="Please Enter Your Email"
                />
                <button className="bg-blue-600 hover:bg-blue-800 text-white duration-300 w-1/3 p-2 font-semibold">
                  Subscribe
                </button>
              </form>
            </div>

            <div className="flex justify-between">
              <div className="mb-5 md:mx-40">
                <h4 className="pb-4 text-xl font-semibold">Resources</h4>
                <ul className="text-gray-400">
                  <li className="pb-2 flex">
                    <BiChevronRight
                      className="relative text-blue-500"
                      size={25}
                    />
                    <a
                      href="/"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-blue-500 cursor-pointer font-semibold duration-200"
                    >
                      About
                    </a>
                  </li>
                  <li className="pb-2 flex">
                    <BiChevronRight
                      className="relative text-blue-500"
                      size={25}
                    />
                    <a
                      href="/"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-blue-500 cursor-pointer font-semibold duration-200"
                    >
                      Blogs
                    </a>
                  </li>
                  <li className="pb-2 flex">
                    <BiChevronRight
                      className="relative text-blue-500"
                      size={25}
                    />
                    <a
                      href="/"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-blue-500 cursor-pointer font-semibold duration-200"
                    >
                      News
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mb-5">
                <h4 className="pb-4 text-xl font-semibold">Legal</h4>
                <ul className="text-gray-400">
                  <li className="pb-2 flex">
                    <BiChevronRight
                      className="relative text-blue-500"
                      size={25}
                    />
                   <a
                      href="/"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-blue-500 cursor-pointer font-semibold duration-200"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li className="pb-2 flex">
                    <BiChevronRight
                      className="relative text-blue-500"
                      size={25}
                    />
                    <a
                      href="/"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-blue-500 cursor-pointer font-semibold duration-200"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-600 text-gray-400 flex max-sm:flex-col justify-between items-center px-10 py-5 mb-auto font-semibold text-center">
        <div className="text-base">
          © 2024-2025 StarkLand™. All Rights Reserved.
        </div>
        <div className="flex justify-center items-center gap-4">
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter className="text-xl cursor-pointer hover:text-blue-500 transition duration-300" />
          </a>
          <a href="https://dribbble.com" target="_blank" rel="noreferrer">
            <FaDribbble className="text-xl cursor-pointer hover:text-blue-500 transition duration-300" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebook className="text-xl cursor-pointer hover:text-blue-500 transition duration-300" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram className="text-xl cursor-pointer hover:text-purple-500 transition duration-300" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin className="text-xl cursor-pointer hover:text-blue-500 transition duration-300" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <FaYoutube className="text-xl cursor-pointer hover:text-red-500 transition duration-300" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
