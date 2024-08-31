import { NextPage } from "next"
import Image from "next/image"
import { AiOutlineGithub } from "react-icons/ai"
import { FcCalendar, FcClock } from "react-icons/fc"
import { TiSocialLinkedinCircular } from "react-icons/ti"

const EventsPage: NextPage = () => {
  // Design a very nice events page here
  return (
    <div>
      <div className="flex flex-col-reverse md:grid md:grid-cols-2 pt-20 h-screen">
        <div className="p-6 flex justify-center items-center lg:p-20 flex-col">
          <div>
            <h1 className="text-2xl lg:text-4xl font-semibold mb-4">
              Event Name
            </h1>
            <div className="flex">
              <FcCalendar className="h-10 w-10" />
              <span className="text-xl m-1 text-gray-600">21 Sept. 2024</span>
              <FcClock className="h-10 w-10 ml-2" />
              <span className="text-xl m-1 text-gray-600">10:00 AM</span>
            </div>
            <p className="text-sm lg:text-xl mb-8 mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              itaque sapiente similique. Esse animi, voluptatem consequuntur,
              dolorem, nostrum fugiat sed voluptates alias qui et sunt
              aspernatur quam dolor? Facilis dolorum soluta commodi corporis eum
              consequatur voluptatum facere mollitia minus assumenda.
            </p>
            <div>
              <button className="bg-primary animated text-white font-semibold text-lg py-3 px-5 rounded-lg cursor-not-allowed">
                Registration Closed
              </button>
              {/* <Link href="/events/nextjs-2022/register" passHref>
                <a className="bg-primary hover:bg-blue-700 animated text-white font-semibold text-lg py-3 px-5 rounded-lg">
                  Register
                </a>
              </Link> */}
            </div>
          </div>
        </div>
        <div>
          <Image
            src={"/logo.png"}
            width={500}
            height={500}
            alt="Event Banner"
            objectFit="contain"
            priority
            layout="responsive"
          />
        </div>
      </div>

      <div className="flex justify-center items-center flex-col">
        <div className="flex items-center justify-center mb-4 md:mb-8 xl:mb-16">
          <h3 className="text-2xl md:text-3xl xl:text-4xl font-bold text-gray-900 rounded-sm border-b-4 border-secondary cursor-pointer max-w-max animated hover:text-white hover:bg-secondary p-1 group flex items-center justify-center">
            <span className="text-secondary mr-1 text-3xl md:text-4xl xl:text-5xl group-hover:text-white animated">
              #
            </span>
            Agenda
          </h3>
        </div>
        <div className="lg:p-5 bg-white w-full">
          <div className="container  mx-auto h-full">
            <div className="relative wrap overflow-hidden p-1 lg:p-10 h-full">
              <div
                className="absolute  border-gray-400 h-full border"
                style={{ left: "50%" }}
              ></div>
              {/* <!-- left timeline --> */}
              <div className="mb-8 flex justify-around flex-row-reverse items-center w-full left-timeline text-center">
                <div className="order-1 lg:w-1/4 w-2/5 "></div>
                <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                  <h1 className="mx-auto text-white font-semibold text-lg">
                    1
                  </h1>
                </div>
                <div className="absolute bg-gray-500 h-1 right-1/2 left-[40%] lg:left-1/4" />
                <div className="order-1 bg-red-300 rounded-lg shadow-xl w-2/5  lg:w-1/4 px-2 py-2">
                  <div>
                    <Image
                      className="rounded-t-lg"
                      src={"/logo.png"}
                      width={500}
                      height={500}
                      alt=""
                      objectFit="cover"
                      layout="responsive"
                    />
                  </div>
                  <h3 className="mb-3 font-bold text-black text-sm lg:text-xl">
                    Introduction to Android
                  </h3>
                </div>
              </div>

              {/* <!-- right timeline --> */}
              <div className="mb-8 flex justify-around items-center w-full right-timeline text-center">
                <div className="order-1 lg:w-1/4 w-2/5"></div>
                <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                  <h1 className="mx-auto font-semibold text-lg text-white">
                    2
                  </h1>
                </div>
                <div className="absolute bg-gray-500 h-1 left-1/2 right-[40%] lg:right-1/4" />

                <div className="order-1 bg-gray-300 rounded-lg shadow-xl lg:w-1/4 w-2/5 px-2 py-2">
                  <div>
                    <Image
                      className="rounded-t-lg"
                      src={"/logo.png"}
                      alt=""
                      width={500}
                      height={500}
                      objectFit="cover"
                      layout="responsive"
                    />
                  </div>
                  <h3 className="mb-3 font-bold text-gray-800 lg:text-xl text-sm  ">
                    Creating an Android Application
                  </h3>
                </div>
              </div>

              {/* <!-- left timeline --> */}
              <div className="mb-8 flex justify-around flex-row-reverse items-center w-full left-timeline text-center">
                <div className="order-1 lg:w-1/4 w-2/5"></div>
                <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                  <h1 className="mx-auto text-white font-semibold text-lg">
                    3
                  </h1>
                </div>
                <div className="absolute bg-gray-500 h-1 right-1/2 left-[40%] lg:left-1/4" />
                <div className="order-1 bg-red-300 rounded-lg shadow-xl lg:w-1/4 w-2/5 px-2 py-2">
                  <div>
                    <Image
                      className="rounded-t-lg"
                      src={"/logo.png"}
                      width={500}
                      height={500}
                      alt=""
                      objectFit="cover"
                      layout="responsive"
                    />
                  </div>
                  <h3 className="mb-3 font-bold text-black lg:text-xl text-sm">
                    Exploring Android Features
                  </h3>
                </div>
              </div>

              {/* <!-- right timeline --> */}
              <div className="mb-8 flex justify-around items-center w-full right-timeline text-center">
                <div className="order-1 lg:w-1/4 w-2/5"></div>
                <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                  <h1 className="mx-auto font-semibold text-lg text-white">
                    4
                  </h1>
                </div>
                <div className="absolute bg-gray-500 h-1 left-1/2 right-[40%] lg:right-1/4" />
                <div className="order-1 bg-gray-300 rounded-lg shadow-xl lg:w-1/4 w-2/5 px-2 py-2">
                  <div>
                    <Image
                      className="rounded-t-lg"
                      src={"/logo.png"}
                      alt=""
                      width={500}
                      height={500}
                      objectFit="cover"
                      layout="responsive"
                    />
                  </div>
                  <h3 className="mb-3 font-bold text-gray-800 lg:text-xl text-sm">
                    Fun Activity
                  </h3>
                </div>
              </div>

              {/* <!-- left timeline --> */}
              <div className="mb-8 flex justify-around flex-row-reverse items-center w-full left-timeline text-center">
                <div className="order-1 lg:w-1/4 w-2/5"></div>
                <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                  <h1 className="mx-auto text-white font-semibold text-lg">
                    5
                  </h1>
                </div>
                <div className="absolute bg-gray-500 h-1 right-1/2 left-[40%] lg:left-1/4" />
                <div className="order-1 bg-red-300 rounded-lg shadow-xl lg:w-1/4 w-2/5 px-2 py-2">
                  <div>
                    <Image
                      className="rounded-t-lg"
                      src={"/logo.png"}
                      alt=""
                      objectFit="cover"
                      width={500}
                      height={500}
                      layout="responsive"
                    />
                  </div>
                  <h3 className="mb-3 font-bold text-black lg:text-xl text-sm">
                    Creating Blog Application with firebase integration
                  </h3>
                </div>
              </div>
              {/* <!-- right timeline --> */}
              <div className="mb-8 flex justify-around items-center w-full right-timeline text-center">
                <div className="order-1 lg:w-1/4 w-2/5"></div>
                <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                  <h1 className="mx-auto font-semibold text-lg text-white">
                    6
                  </h1>
                </div>
                <div className="absolute bg-gray-500 h-1 left-1/2 right-[40%] lg:right-1/4" />
                <div className="order-1 bg-gray-300 rounded-lg shadow-xl lg:w-1/4 w-2/5 px-2 py-2">
                  <div>
                    <Image
                      className="rounded-t-lg"
                      src={"/logo.png"}
                      alt="Deploy Image"
                      width={500}
                      height={500}
                      objectFit="cover"
                      layout="responsive"
                    />
                  </div>
                  <h3 className="mb-3 font-bold text-gray-800 lg:text-xl text-sm">
                    Installing Android Application
                  </h3>
                </div>
              </div>
              {/* <!-- left timeline --> */}
              <div className="mb-8 flex justify-around flex-row-reverse items-center w-full left-timeline text-center">
                <div className="order-1 lg:w-1/4 w-2/5"></div>
                <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                  <h1 className="mx-auto text-white font-semibold text-lg">
                    7
                  </h1>
                </div>
                <div className="absolute bg-gray-500 h-1 right-1/2 left-[40%] lg:left-1/4" />

                <div className="order-1 bg-red-300 rounded-lg shadow-xl lg:w-1/4 w-2/5 px-2 py-2">
                  <div>
                    <Image
                      className="rounded-t-lg"
                      src={"/logo.png"}
                      alt="Industries"
                      width={500}
                      height={500}
                      objectFit="cover"
                      layout="responsive"
                    />
                  </div>
                  <h3 className="mb-3 font-bold text-black lg:text-xl text-sm">
                    Meet & Greet
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 lg:p-20">
        <div className="flex items-center justify-center mb-4 md:mb-8 xl:mb-16">
          <h3 className="text-2xl md:text-3xl xl:text-4xl font-bold text-gray-900 rounded-sm border-b-4 border-secondary cursor-pointer max-w-max animated hover:text-white hover:bg-secondary p-1 group flex items-center justify-center">
            <span className="text-secondary mr-1 text-3xl md:text-4xl xl:text-5xl group-hover:text-white animated">
              #
            </span>
            Speakers
          </h3>
        </div>
        <div className="flex justify-center align-middle mt-10">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  ">
            {[
              {
                id: "Akshay",
                imageUrl: "/logo.png",
                heading: "Akshay Nandwana",
                designation: "Founder @ Android Engineers",
                linkedInUrl: "https://linkedin.com/in/anandwana001",
                githubUrl: "https://github.com/anandwana001",
              },
            ].map((discoverContent) => (
              <div
                key={discoverContent.id}
                className="relative w-94 h-auto lg:w-96  pt-24 pb-8 px-4 rounded-lg border border-gray-300 shadow-md cursor-pointer hover:shadow-lg transition flex flex-col items-center"
              >
                <div className="absolute rounded-full  w-28 h-28 p-2 z-10 -top-8 shadow-lg hover:shadow-xl transition">
                  <div className="rounded-full bg-black w-full h-full overflow-auto">
                    <Image
                      className="rounded-t-lg"
                      src={discoverContent.imageUrl}
                      alt={discoverContent.id + " Image"}
                      layout="responsive"
                      height={1}
                      width={1}
                    />
                  </div>
                </div>
                <label className="font-bold  text-lg">
                  {discoverContent.heading}
                </label>
                <p className="text-center leading-relaxed">
                  {discoverContent.designation}
                </p>
                <ul className="flex flex-row gap-2 mt-4 items-center">
                  <li>
                    <a
                      href={discoverContent.linkedInUrl}
                      className="hover:animate-tada"
                    >
                      <TiSocialLinkedinCircular className="fill-primary animated hover:fill-secondary h-10 w-10" />
                    </a>
                  </li>
                  {discoverContent.githubUrl && (
                    <li>
                      <a
                        href={discoverContent.githubUrl}
                        className="hover:animate-tada"
                      >
                        <AiOutlineGithub className="fill-black animated hover:fill-secondary h-8 w-8" />
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-4 lg:p-20">
        <div className="flex items-center justify-center mb-4 md:mb-8 xl:mb-12">
          <h3 className="text-2xl md:text-3xl xl:text-4xl font-bold text-gray-900 rounded-sm border-b-4 border-secondary cursor-pointer max-w-max animated hover:text-white hover:bg-secondary p-1 group flex items-center justify-center">
            <span className="text-secondary mr-1 text-3xl md:text-4xl xl:text-5xl group-hover:text-white animated">
              #
            </span>
            Why to attend
          </h3>
        </div>
        <div className="flex justify-center align-middle">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  ">
            {[
              {
                id: "Get Inspired",
                image: "/logo.png",
                heading: "Get Inspired",
                description:
                  "Hear from the industry experts and get inspired by their journey. Learn how they started and what motivated them to keep going.",
              },
              {
                id: "Go with Trend",
                image: "/logo.png",
                heading: "Go with Trend",
                description:
                  "The industry trends change frequently. Keep yourself updated with the latest technologies and learn to create strategies to use in your projects.",
              },
              {
                id: "Build Connections",
                image: "/logo.png",
                heading: "Build Connections",
                description:
                  "Meet with like-minded people who share similar interests, build your professional network, and generate new ideas.",
              },
            ].map((discoverContent) => (
              <div
                key={discoverContent.id}
                className="max-w-sm rounded-lg border border-gray-300 shadow-md cursor-pointer"
              >
                <div>
                  <Image
                    className="rounded-t-lg"
                    width={500}
                    height={500}
                    src={discoverContent.image}
                    alt={discoverContent.id + " Image"}
                    objectFit="cover"
                    layout="responsive"
                  />
                </div>
                <div className="p-5">
                  <div>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                      {discoverContent.heading}
                    </h5>
                  </div>
                  <p className="mb-3 font-normal text-gray-700">
                    {discoverContent.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventsPage
