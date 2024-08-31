import Link from "next/link"
import { FC } from "react"
import { BiHeart } from "react-icons/bi"
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaX,
  FaYoutube,
  FaMedium,
  FaStackOverflow,
} from "react-icons/fa6"

export const Footer: FC = () => {
  return (
    <div className="py-16 mt-32 flex flex-col gap-4 md:flex-row justify-around items-center">
      <div className="">
        <p className="flex items-center">
          {new Date().getFullYear()}
          &copy; Made with&nbsp;
          <BiHeart className="text-primary" /> &nbsp;by Android Engineers.
        </p>
      </div>
      <div className="">
        <ul className="flex flex-wrap px-16 md:px-0 gap-6 justify-center">
          <li className="">
            <Link
              href="https://www.linkedin.com/company/android-engineers/"
              target="_blank"
            >
              <FaLinkedin
                size={30}
                className="hover:scale-110 cursor-pointer transition-all duration-300"
              />
            </Link>
          </li>
          <li className="">
            <Link href="https://github.com/androidengineers" target="_blank">
              <FaGithub
                size={30}
                className="hover:scale-110 cursor-pointer transition-all duration-300"
              />
            </Link>
          </li>
          <li className="">
            <Link
              href="https://www.instagram.com/_androidengineers/"
              target="_blank"
            >
              <FaInstagram
                size={30}
                className="hover:scale-110 cursor-pointer transition-all duration-300"
              />
            </Link>
          </li>
          <li className="">
            <Link href="https://twitter.com/akshay81844" target="_blank">
              <FaX
                size={30}
                className="hover:scale-110 cursor-pointer transition-all duration-300"
              />
            </Link>
          </li>
          <li className="">
            <Link
              href="https://www.youtube.com/@android_engineers"
              target="_blank"
            >
              <FaYoutube
                size={30}
                className="hover:scale-110 cursor-pointer transition-all duration-300"
              />
            </Link>
          </li>
          <li className="">
            <Link href="https://medium.com/@anandwana" target="_blank">
              <FaMedium
                size={30}
                className="hover:scale-110 cursor-pointer transition-all duration-300"
              />
            </Link>
          </li>
          <li className="">
            <Link
              href="https://stackoverflow.com/users/5261361/akshay-nandwana"
              target="_blank"
            >
              <FaStackOverflow
                size={30}
                className="hover:scale-110 cursor-pointer transition-all duration-300"
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
