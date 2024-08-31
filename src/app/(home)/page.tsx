"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { CgBatteryFull } from "react-icons/cg"
import { SectionCards } from "@/components/SectionCards"
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMedium,
  FaStackOverflow,
  FaX,
  FaYoutube,
} from "react-icons/fa6"
import { MdSignalCellular3Bar } from "react-icons/md"
import { createSubscription } from "./newsletter.action"
import { toast } from "react-toastify"
import { ContactForm } from "@/components/ContactForm"
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from "@nextui-org/react"
import {
  services,
  events,
  projects,
  gallery,
  product,
} from "../../data/homeData"

export default function Home() {
  const [contactModalOpen, setContactModalOpen] = useState("")

  return (
    <div>
      <div
        id="home"
        className="bg-secondary pt-16 md:pt-28 w-full flex flex-col-reverse lg:flex-row items-center justify-center gap-8 lg:gap-6"
      >
        <div className="2xl:w-1/2 pb-12 ">
          <div className="relative ml-auto  border-black bg-black border-[14px] rounded-[2.5rem] h-[600px] w-[300px] 2xl:h-[750px] 2xl:w-[375px] shadow-black shadow-xl">
            <div className="h-10 absolute flex justify-between px-4 items-center bg-secondary w-full rounded-t-[2rem] pt-1 text-white">
              <div className="h-6 w-6 bg-black rounded-full left-1/2 -translate-x-1/2 absolute top-2" />
              <div className="absolute left-4 text-xs">
                09:41 <span className="text-[12px] font-sans">AM</span>
              </div>
              <div className="flex gap-1 right-4 absolute">
                <MdSignalCellular3Bar size={16} />
                <div className="flex">
                  <span className="text-xs ">99%</span>
                  <CgBatteryFull size={16} className="-rotate-90" />
                </div>
              </div>
            </div>
            <div className="h-[32px] w-[3px] bg-black dark:bg-black absolute -start-[17px] top-[72px] rounded-s-lg" />
            <div className="h-[46px] w-[3px] bg-black dark:bg-black absolute -start-[17px] top-[144px] rounded-s-lg" />
            <div className="h-[46px] w-[3px] bg-black dark:bg-black absolute -start-[17px] top-[198px] rounded-s-lg" />
            <div className="h-[64px] w-[3px] bg-black dark:bg-black absolute -end-[16.6px] top-[142px] rounded-e-lg" />
            <div className="w-full pb-6 pt-2 flex flex-col gap-2  absolute bottom-0 bg-[#062330] rounded-b-3xl">
              <div className="flex justify-around items-center text-xs text-white">
                {/* <BsCircleFill size={24} className="text-primary" />
                <BsStarFill size={24} className="text-white" />
                <BsTriangleFill size={24} className="text-primary" /> */}
                <div className="flex flex-col items-center">
                  <div className="mb-1 w-2/3 h-[4px] rounded-full  bottom-4 bg-primary" />
                  Home
                </div>
                <div className="flex flex-col items-center">
                  <div className="mb-1 w-2/3 h-[4px] rounded-full  bottom-4 bg-transparent" />
                  DSA
                </div>
                <div className="flex flex-col items-center">
                  <div className="mb-1 w-2/3 h-[4px] rounded-full  bottom-4 bg-transparent" />
                  Android
                </div>
                <div className="flex flex-col items-center">
                  <div className="mb-1 w-2/3 h-[4px] rounded-full  bottom-4 bg-transparent" />
                  Jobs
                </div>
              </div>
              <div className="w-36 bg-white h-[2.6px] rounded-full left-1/2 absolute bottom-2 -translate-x-1/2" />
              {/* <div className="flex justify-around">
              <BiMenu />
              <BiSquareRounded />
              <BiArrowBack />
            </div> */}
            </div>

            <div className="overflow-hidden h-full px-4 bg-secondary flex-col flex items-center justify-center rounded-[2rem] w-full pb-8">
              <div>
                <Image
                  src={"/logo.png"}
                  alt="Android Engineers"
                  width={150}
                  height={150}
                  className="overflow-hidden rounded-full"
                />
              </div>
              <h1
                id="androidEngineersWritten"
                className="text-2xl xl:text-3xl [text-shadow:_2px_4px_2px_rgb(0_0_0_/_70%)] font-bold text-center text-white"
              >
                Android <span className="text-highlight">Engineers</span>
              </h1>

              <Link
                href="https://play.google.com/store/apps/dev?id=5652228853318715771"
                className="rounded-full p-3 mt-8 relative flex justify-center  hover:border-gray-800  items-center"
              >
                <div className="shadow-[_-2px_-2px_8px_0.5px_rgb(0_0_0_/_50%)] cursor-pointer hover:shadow-[_-0.5px_-0.5px_2px_0.1px_rgb(0_0_0_/_40%)]  transition-shadow  rounded-full absolute w-full h-full" />
                <Image
                  src="/assets/playstore.svg"
                  alt="Play Store"
                  width={32}
                  height={32}
                />
              </Link>
              <div className="text-sm mt-2 text-white">
                🔥 App Coming Soon 🔥
              </div>
              <div className="flex flex-row flex-wrap text-white justify-center mt-12 gap-4 gap-y-3">
                <Link
                  href="https://www.linkedin.com/company/android-engineers/"
                  target="_blank"
                >
                  <FaLinkedin
                    size={32}
                    className="hover:scale-110 cursor-pointer transition-all duration-300"
                  />
                </Link>
                <Link
                  href="https://github.com/androidengineers"
                  target="_blank"
                >
                  <FaGithub
                    size={32}
                    className="hover:scale-110 cursor-pointer transition-all duration-300"
                  />
                </Link>
                <Link
                  href="https://www.instagram.com/_androidengineers/"
                  target="_blank"
                >
                  <FaInstagram
                    size={32}
                    className="hover:scale-110 cursor-pointer transition-all duration-300"
                  />
                </Link>
                <Link href="https://twitter.com/akshay81844" target="_blank">
                  <FaX
                    size={32}
                    className="hover:scale-110 cursor-pointer transition-all duration-300"
                  />
                </Link>
                <Link
                  href="https://www.youtube.com/@android_engineers"
                  target="_blank"
                >
                  <FaYoutube
                    size={32}
                    className="hover:scale-110 cursor-pointer transition-all duration-300"
                  />
                </Link>
                <Link href="https://medium.com/@anandwana" target="_blank">
                  <FaMedium
                    size={32}
                    className="hover:scale-110 cursor-pointer transition-all duration-300"
                  />
                </Link>
                <Link
                  href="https://stackoverflow.com/users/5261361/akshay-nandwana"
                  target="_blank"
                >
                  <FaStackOverflow
                    size={32}
                    className="hover:scale-110 cursor-pointer transition-all duration-300"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full  lg:w-2/3 2xl:w-1/2 px-4 sm:px-32">
          <div className="w-full mt-16 md:mt-28 p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 text-2xl lg:text-3xl font-bold text-headingText ">
              Subscribe to our Newsletter
            </h5>
            <p className="mb-5 text-sm lg:text-base text-gray-500 sm:text-lg ">
              Stay up to date and get notified when we launch our app. And be
              the first to know about our latest updates.
            </p>
            <form
              className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4 max-w-6xl m-auto"
              onSubmit={async (e) => {
                e.preventDefault()
                const target = e.currentTarget
                const email = target.email.value
                if (!email) return toast.error("Email is required")
                const id = toast.loading("Subscribing...")
                try {
                  const data = await createSubscription(email)
                  if (data?.error) {
                    toast.update(id, {
                      type: "error",
                      render: data.error,
                      isLoading: false,
                    })
                  } else {
                    toast.update(id, {
                      type: "success",
                      render: "You have been subscribed successfully🥳",
                      isLoading: false,
                    })
                  }
                } catch (err) {
                  toast.update(id, {
                    type: "error",
                    render: (err as any).message,
                    isLoading: false,
                  })
                }
                target.reset()
              }}
            >
              <Input
                type="email"
                label="Email"
                name="email"
                isClearable
                // size="md"
                variant="bordered"
                className="ring-primary w-full sm:h-auto"
              />

              <Button
                color="primary"
                className="text-secondary w-full sm:h-auto"
                type="submit"
                // size="md"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      <SectionCards
        isEvent
        id={"events"}
        description="We keep organising virtual events and challenges and other online
          activites which helps developer to test their knowledge and prepare
          for interview."
        heading="Our Events"
        items={events}
      />
      <SectionCards
        id={"services"}
        invert
        description="We offer a wide range of services to help you with your Android
          Development journey."
        heading="Our Services"
        items={services}
      />
      <SectionCards
        id={"blog"}
        heading="Blog"
        description="Coming Soon!!"
        items={[]}
      />
      <SectionCards
        id={"projects"}
        invert
        heading="Projects"
        items={projects}
      />
      <SectionCards id={"gallery"} heading="Gallery" items={gallery} />
      <SectionCards
        id={"jobs"}
        invert
        heading="Jobs"
        description="Who all are hiring, Coming Soon!!"
        items={[]}
      />
      <SectionCards
        id={"product"}
        heading="Product"
        description="Our Digital Ebooks will be available to DOWNLOAD soon!!"
        items={product}
      />

      <Modal
        isOpen={!!contactModalOpen}
        size="4xl"
        onOpenChange={(isOpen) => {
          if (!isOpen) {
            setContactModalOpen("")
          }
        }}
      >
        <ModalContent className="bg-gray-800">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Service: {contactModalOpen}
              </ModalHeader>
              <ModalBody>
                <ContactForm />
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}
