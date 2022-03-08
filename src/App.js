import { Spline } from "@splinetool/react-spline";
import Vetri from "./images/vetri.jpg";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Experience } from "./experience";

function App() {
  return (
    <div className="flex w-screen min-h-screen flex-col items-center justify-center relative bg-primary pb-20">
      <nav className="w-full px-6 z-50  fixed inset-x-0 top-2 flex justify-center items-center ">
        <div className=" w-full md:w-880 bg-navBar p-4 rounded-2xl flex items-center">
          <p className="text-lg text-slate-200 font-medium">Vetrivel Ravi</p>

          <div className="hidden md:flex items-center gap-6 ml-6">
            <a
              href="#home"
              className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
            >
              About
            </a>
            <a
              href="#"
              className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
            >
              Projects
            </a>
            <a
              href="#"
              className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
            >
              Contact
            </a>
          </div>
          <a
            href="#"
            className="ml-auto text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in"
          >
            Download
          </a>
        </div>
      </nav>

      <div className="relative" id="home">
        <Spline scene="https://prod.spline.design/oo6IxFu8UDjFUmjD/scene.spline" />
        <div className="absolute bottom-10 w-full flex justify-center items-center">
          <div className="shadow-md p-4 flex items-center justify-center bg-zinc-900 rounded-3xl ">
            <p className="text-white">Press and drag to orbit</p>
          </div>
        </div>
      </div>

      <main className="w-[80%] mt-4">
        <section
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-4"
          id="about"
        >
          <div className="w-full h-420 flex items-center justify-center">
            <div className="w-275 h-340 relative bg-emerald-200 rounded-md">
              <img
                src={Vetri}
                alt=""
                className="w-full h-full absolute -right-4 top-4 object-cover rounded-lg drop-shadow-2xl"
              />
            </div>
          </div>
          <div className="w-full h-420 flex flex-col items-center justify-center ">
            <p className="text-lg text-textBase text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              dicta recusandae commodi praesentium officia, aliquam cumque
              voluptatem dolor enim ducimus id maiores consequatur dolorem!
              Architecto aperiam corrupti nostrum eum similique! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Veritatis saepe dolor
              illo. Tenetur labore impedit nihil natus explicabo perspiciatis
              nisi autem aut numquam dolorum, voluptas vero nobis assumenda
              commodi magni.
            </p>

            <button class="relative mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 hover:shadow-lg hover:shadow-teal-500/50 hover:dark:shadow-lg hover:dark:shadow-teal-800/80">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Download
              </span>
            </button>
          </div>
        </section>

        <section className="w-full flex items-center justify-center">
          <VerticalTimeline>
            {Experience &&
              Experience.map((n) => (
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "rgb(21, 24, 31)",
                    color: "#888",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid  rgb(21, 24, 31)",
                  }}
                  date={n.date}
                  iconStyle={{ background: "rgb(21, 24, 31)", color: "#888" }}
                  icon={n.iconsSrc}
                >
                  <h3 className="vertical-timeline-element-title">{n.title}</h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    {n.location}
                  </h4>
                  <p>{n.description}</p>
                </VerticalTimelineElement>
              ))}
          </VerticalTimeline>
        </section>

        <section
          className="flex flex-wrap items-center justify-evenly mt-6"
          id="projects"
        >
          <div className="border border-textBase rounded-md p-2 min-w-[275px]"></div>
        </section>
      </main>
    </div>
  );
}

export default App;
