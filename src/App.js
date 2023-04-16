import React, { useEffect, useState } from "react";
import "./App.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Background from "./components/Background";
// 리엑트 아이콘

import { RiGithubLine } from "react-icons/ri";
import {
  MdOutlineArrowDropDownCircle,
  MdDriveFileRenameOutline,
} from "react-icons/md";
import { FaVideo } from "react-icons/fa";

import { AiOutlineHistory } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import Footer from "./components/Footer";
import Contact from "./components/Contact";
// 프레이머모션
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function App() {
  const projectArr = ["clone", "team project"];
  const [filtered, setFiltered] = useState(projectArr[1]);
  const cloneHandler = () => {
    setFiltered(projectArr[0]);
  };
  const teamProjectHandler = () => {
    setFiltered(projectArr[1]);
  };
  // 프로젝트 클릭
  const [modalVisible, setModalVisible] = useState(true);
  const [modalVisible2, setModalVisible2] = useState(true);
  const [modalVisible3, setModalVisible3] = useState(true);
  const [modalVisible4, setModalVisible4] = useState(true);

  // 한글자씩 나타내기

  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [count, setCount] = useState(0);

  const firstTxt = "안녕하세요 프론트엔드 개발자 ";
  const secondTxt = "손현지입니다";
  const openHandler = () => {
    setModalVisible(!modalVisible);
  };
  const openHandler2 = () => {
    setModalVisible2(!modalVisible2);
  };
  const openHandler3 = () => {
    setModalVisible3(!modalVisible3);
  };
  const openHandler4 = () => {
    setModalVisible4(!modalVisible4);
  };
  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (count < firstTxt.length) {
        setText1((prevTxt) => prevTxt + firstTxt[count]);
      } else if (
        count >= firstTxt.length &&
        count < firstTxt.length + secondTxt.length
      ) {
        setText2((prevTxt) => prevTxt + secondTxt[count - firstTxt.length]);
      }

      setCount((prevCount) => prevCount + 1);
    }, 120);

    return () => {
      clearInterval(typingInterval);
    };
  }, [count]);
  return (
    <>
      <Background />
      <Contact />
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        modules={[Mousewheel]}
        className="mySwiper z-10 md:h-full "
      >
        <SwiperSlide>
          <div className="relative mt-[10%] ">
            <img
              src="/images/hyunjimain.png"
              className="w-[500px] h-[400px] mx-auto "
              alt="dd"
            ></img>

          </div>
          <div className="my-auto text-center w-[50%] ml-[25%] rounded-xl py-2 bg-blue-300 bg-opacity-50 ">
            <h2 className="text-5xl  text-white drop-shadow-xl font-nm h-16 my-11 ">
              {text1}
            </h2>
            <h2 className="text-5xl text-white drop-shadow-xl  font-nm h-16 my-11 ">
              {text2}
            </h2>
          </div>
          {/* <img src="/images/7.png" className="ml-[38%] mt-[-10%] w-[400px]" alt="hyunji"></img> */}
          <div className="ml-[32%]"></div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-gray-100 w-[80vw] h-[70vh] mx-auto my-[9%] bg-opacity-70 rounded-lg ">
            <div className="text-center text-6xl pt-[45px] font-bold ">
              About
            </div>
            <div className="flex justify-center gap-20 2xl:my-8 xl:my-8 lg:my-0  ">
              <div className="mt-[-10px] 2xl:mt-8 xl:mt-8 lg:mt-8 sm:mt-3">
                <img
                  className="mx-5 mt-[-30px] 2xl:w-[300px]  xl:w-[200px] lg:w-[200px] sm:w-[200px] xs:w-[150px]"
                  src="/images/7.png"
                  alt="프로필"
                ></img>
              </div>
              <div
                // initial= {{ opacity: 1, scale: 0 }},

                className="bg-[#fcfcfc] p-3 shadow-xl lg:w-[40vw] lg:p-0 lg:h-[25vh] sm:h-[25vh] sm:mt-0 rounded-xl w-[40%] 2xl:mt-9 xl:mt-7"
              >
                <p className="font-bold lg:text-sm lg:my-2 xl:text-3xl 2xl:text-3xl text-center xl:my-4 2xl:my-5">
                  Hello! Frontend 개발자
                </p>
                <p className="font-bold xl:text-3xl 2xl:text-3xl lg:text-sm lg:my-0 text-3xl text-center my-4">
                  <span className="text-[#000000]">손현지</span> 입니다
                </p>
                <p className="2xl:p-5 xl:p-5 lg:p-2 leading-1 2xl:opacity-100 xl:opacity-100 2xl:text-sm xl:text-sm lg:text-xs sm:opacity-0 xs:opacity-0">
                  <br /> 저는 주로 React를 사용하며, Redux, TypeScript 등의 기술
                  스택을 활용해 협업 프로젝트에서도 원활한 소통과 개발을 할 수
                  있습니다. 또한 UI 라이브러리인 Ant Design, Material-UI 등을
                  활용하여 보다 쉽게 사용자 인터페이스를 구현해본 경험이 있으며,
                  코드의 가독성, 유지보수성, 성능 등을 고려하여 코드를
                  작성하려고 합니다. 또한 입사 후에도 새로운 기술을 학습하고
                  이를 적용하는 것에 대한 열정을 가지고 성장을 위해
                  나가가겠습니다.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 divide-x-2 divide-dotted divide-slate-300 bg-white shadow-xl rounded-xl px-4 mx-9 mt-[80px] h-[19vh] ">
              <div className="mt-9 ">
                <p className="flex font-semibold">
                  <CgProfile className="my-auto mx-1" />
                  Profile
                </p>
                <div className="p-2 ">
                  {" "}
                  <p>손현지</p>
                  <p>1996.07.17</p>
                  <p>Korea,Daegu</p>
                  <p>hyeonji159753@gmail.com</p>
                </div>
              </div>
              <div className="mt-9">
                {" "}
                <p className="flex font-semibold">
                  <AiOutlineHistory className="my-auto mx-1 " /> History
                </p>
                <div className="p-2 ">
                  {" "}
                  <p>그린 컴퓨터 학원 React 개발자 과정 수료</p>
                  <p>공공데이터 인턴</p>
                  <p>국제통상학 전공</p>
                </div>
              </div>
              <div className="mt-9">
                {" "}
                <p className="flex font-semibold">
                  {" "}
                  <MdDriveFileRenameOutline className="my-auto mx-1" />
                  License
                </p>
                <div className="p-2">
                  {" "}
                  <p>무역영어 1급</p>
                  <p>유통관리사 2급</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="bg-gray-100 w-[80vw] h-[70vh] mx-auto my-[9%]  bg-opacity-80 rounded-lg ">
            <div className="text-center text-6xl pt-[40px] font-bold ">
              SKILL
            </div>
            <div className="relative 2xl:pt-[210px]  xl:pt-[250px] lg:pt-[80px] sm:pt-[45px] px-[70px] ml-[2%]">
              <Swiper
                cssMode={true}
                slidesPerView={5}
                navigation={{
                  prevEl: ".swiper-button-prev",
                  nextEl: ".swiper-button-next",
                }}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
              >
                <div className="mt-4">
                  {" "}
                  <div className="swiper-button-prev mr-8 z-20">
                    <img
                      className="bg-gray-500 p-2 mt-14 rounded"
                      src="/images/icon-arrowprev.png"
                      alt=""
                    ></img>
                  </div>
                  <div className="swiper-button-next">
                    <img
                      className="bg-gray-500 p-2 mt-14 rounded"
                      src="/images/icon-arrow2next.png"
                      alt=""
                    ></img>
                  </div>
                </div>

                <SwiperSlide>
                  <div className="flex relative mx-[25%] flex-col gap-2 xl:w-[120px] lg:w-[100px] items-center justify-center">
                    <img src="skill/html.png" alt="html"></img>

                    <span className="text-lg leading-loose">HTML</span>
                    <div className="absolute top-0 left-[-41px] w-[200px] h-full bg-black bg-opacity-70 text-white opacity-0 hover:opacity-100 hover:border-black hover:rounded-3xl">
                      <h2 className="my-2 text-xl text-center ">html5</h2>{" "}
                      <p className=" px-3 text-justify">
                        웹 표준성을 준수하여 시맨틱 마크업을 수행할 수 있습니다.
                      </p>
                    </div>
                    <div className="mb-6 h-1 w-full bg-neutral-200 dark:bg-neutral-600">
                      <div className="h-1 bg-[#FF5722] w-[75%]"></div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex mx-[25%] relative flex-col gap-2 items-center xl:w-[120px] lg:w-[100px] justify-center">
                    <span className="">
                      <img className="" src="skill/css.png" alt="css"></img>
                    </span>
                    <span className="text-lg leading-loose">CSS</span>
                    <div className="absolute left-[-40px] top-0 w-[200px] h-full bg-black bg-opacity-70 text-white opacity-0 hover:opacity-100 hover:border-black hover:rounded-3xl">
                      <h2 className="my-2 text-xl mx-[35%]">css3</h2>{" "}
                      <p className=" px-3 text-justify">
                        스타일시트 표준을 준수하여 코드를 작성할 수 있습니다.
                      </p>
                    </div>
                    <div className="mb-6 h-1 w-full bg-neutral-200 dark:bg-neutral-600">
                      <div className="h-1 bg-[#1C88C7] w-[75%]"></div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="flex relative mx-[25%] gap-2 flex-col xl:w-[120px] lg:w-[100px] items-center justify-center">
                    <span className="text-8xl text-[#F7DF1E]">
                      <img src="skill/js.png" alt="js"></img>
                    </span>
                    <span className="text-lg leading-loose">javascript</span>
                    <div className="absolute left-[-40px] top-0 w-[200px] h-full bg-black bg-opacity-70 text-white opacity-0 hover:opacity-100 hover:border-black hover:rounded-3xl">
                      <h2 className="my-2 text-xl mx-[35%]">javascript</h2>{" "}
                      <p className=" px-3 text-justify">
                        폼 유효성 검사, 스크롤 이벤트 및 애니메이션 등과 같은
                        다양한 동적 기능을 구현할 수 있습니다.
                      </p>
                    </div>
                    <div className="mb-6 h-1 w-full bg-neutral-200 dark:bg-neutral-600">
                      <div className="h-1 bg-[#F7DF1E] w-[75%]"></div>
                    </div>
                  </div>{" "}
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="flex relative mx-[25%] gap-2 flex-col xl:w-[120px] lg:w-[100px] items-center justify-center">
                    <span className="text-7xl text-[#007ACC]">
                      <img src="skill/ts.png" alt="ts"></img>
                    </span>
                    <span className="text-lg leading-loose">typescript</span>
                    <div className="absolute left-[-40px] top-0 w-[200px] h-full bg-black bg-opacity-70 text-white opacity-0 hover:opacity-100 hover:border-black hover:rounded-3xl">
                      <h2 className="my-2 text-xl mx-[35%]">typescript</h2>{" "}
                      <p className=" px-3 text-justify">
                        Interface 를 정의해 코드 재사용성을 높일 수 있으며,
                        인터페이스와 제네릭에 대해 이해하고 있습니다.
                      </p>
                    </div>
                    <div className="mb-6 h-1 w-full bg-neutral-200 dark:bg-neutral-600">
                      <div className="h-1 bg-[#007ACC] w-[75%]"></div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="flex relative mx-[25%] gap-2 flex-col xl:w-[120px] lg:w-[100px] items-center justify-center">
                    <span className="text-8xl text-[#CC6699]">
                      <img src="skill/stylecomponent.png" alt="html"></img>
                    </span>
                    <span className="text-lg whitespace-nowrap">
                      styled-components
                    </span>
                    <div className="absolute left-[-40px] top-0 w-[200px] h-full bg-black bg-opacity-70 text-white opacity-0 hover:opacity-100 hover:border-black hover:rounded-3xl">
                      <h2 className="my-2 text-xl text-center whitespace-nowrap">
                        styled-components
                      </h2>{" "}
                      <p className=" px-3 text-justify">
                        styled-components를 사용하여 css 작업을 수행할 수
                        있습니다.
                      </p>
                    </div>
                    <div className="mb-6 h-1 w-full bg-neutral-200 dark:bg-neutral-600">
                      <div className="h-1 bg-[#CC6699] w-[75%]"></div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="flex relative mx-[25%] gap-2 flex-col xl:w-[120px] lg:w-[100px] items-center justify-center">
                    <span className="text-8xl text-[#61DAFB]">
                      <img src="skill/react.png" alt="react"></img>
                    </span>
                    <span className="text-lg leading-loose">react</span>
                    <div className="absolute left-[-40px] top-0 w-[200px] h-full bg-black bg-opacity-70 text-white opacity-0 hover:opacity-100 hover:border-black hover:rounded-3xl">
                      <h2 className="my-2 text-xl mx-[35%]">react</h2>{" "}
                      <p className=" px-3 text-justify">
                        useState, useEffect 등과 같은 Hooks 를 활용하여 상태
                        관리와 렌더링 작업, 라우팅 처리를 할 수 을 보다 간편하게
                        처리할 수 있습니다.
                      </p>
                    </div>
                    <div className="mb-6 h-1 w-full bg-neutral-200 dark:bg-neutral-600">
                      <div className="h-1 bg-[#61DAFB] w-[75%]"></div>
                    </div>
                  </div>{" "}
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex relative mx-[25%] gap-2 flex-col xl:w-[120px] lg:w-[100px] items-center justify-center">
                    <span className="text-8xl text-[#A259EE]">
                      <img src="skill/figma.png" alt="figma"></img>
                    </span>
                    <span className="text-lg leading-loose">figma</span>
                    <div className="absolute left-[-40px] top-0 w-[200px] h-full bg-black bg-opacity-70 text-white opacity-0 hover:opacity-100 hover:border-black hover:rounded-3xl">
                      <h2 className="my-2 text-xl mx-[35%]">Figma</h2>{" "}
                      <p className=" px-3 text-justify">
                        컴포넌트에 맞는 UI,와이어프레임을 구성할 수 있습니다.
                      </p>
                    </div>
                    <div className="mb-6 h-1 w-full bg-neutral-200 dark:bg-neutral-600">
                      <div className="h-1 bg-[#000] w-[75%]"></div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex relative mx-[25%] gap-2 flex-col xl:w-[120px] lg:w-[100px] items-center justify-center">
                    <span className="text-8xl text-[#F64758]">
                      <img src="skill/antdesign.png" alt="antdesign"></img>
                    </span>
                    <span className="text-lg leading-loose">ant design</span>
                    <div className="absolute left-[-40px] top-0 w-[200px] h-full bg-black bg-opacity-70 text-white opacity-0 hover:opacity-100 hover:border-black hover:rounded-3xl">
                      <h2 className="my-2 text-xl text-center whitespace-nowrap">
                        ant design
                      </h2>{" "}
                      <p className=" px-3 text-justify">
                        ant design 을 적용해 프로젝트를 수행할 수 있습니다.
                      </p>
                    </div>
                    <div className="mb-6 h-1 w-full bg-neutral-200 dark:bg-neutral-600">
                      <div className="h-1 bg-[#F64758] w-[75%]"></div>
                    </div>
                  </div>{" "}
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="flex relative mx-[25%] gap-2 flex-col xl:w-[120px] lg:w-[100px] items-center justify-center">
                    <span className="text-6xl text-[#44A8B3]">
                      <img src="skill/tailwind.png" alt="tailwind"></img>
                    </span>
                    <span className="text-lg leading-loose">tailwind</span>
                    <div className="absolute left-[-40px] top-0 w-[200px] h-full bg-black bg-opacity-70 text-white opacity-0 hover:opacity-100 hover:border-black hover:rounded-3xl">
                      <h2 className="my-2 text-xl mx-[35%]">tailwind</h2>{" "}
                      <p className=" px-3 text-justify">
                        tailwind를 적용해 프로젝트를 수행할 수있습니다.
                      </p>
                    </div>
                    <div className="mb-6 h-1 w-full bg-neutral-200 dark:bg-neutral-600">
                      <div className="h-1 bg-[#44A8B3] w-[75%]"></div>
                    </div>
                  </div>{" "}
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex relative flex-col mx-[25%] gap-2 xl:w-[120px] lg:w-[100px] items-center justify-center">
                    <span className="text-6xl text-[#7D12F9]">
                      <img src="skill/bootstrap.png" alt="bootstrap"></img>
                    </span>
                    <span className="text-lg leading-loose">bootstrap</span>
                    <div className="absolute left-[-40px] top-0 w-[200px] h-[200px] bg-black bg-opacity-70 text-white opacity-0 hover:opacity-100 hover:border-black hover:rounded-3xl">
                      <h2 className="my-2 text-xl mx-[35%]">bootstrap</h2>{" "}
                      <p className=" px-3 text-justify">
                        bootstrap를 사용해 프로젝트를 수행 할 수있습니다.
                      </p>
                    </div>
                    <div className="mb-6 h-1 w-full bg-neutral-200 dark:bg-neutral-600">
                      <div className="h-1 bg-[#7D12F9] w-[75%]"></div>
                    </div>
                    .
                  </div>{" "}
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex relative mx-[25%] gap-2 flex-col xl:w-[120px] lg:w-[100px] items-center justify-center">
                    <span className="text-6xl text-[#FFA712]">
                      <img src="skill/firebase.png" alt="firebase"></img>
                    </span>
                    <span className="text-lg leading-loose">firebase</span>
                    <div className="absolute left-[-40px] top-0 w-[200px] h-full bg-black bg-opacity-70 text-white opacity-0 hover:opacity-100 hover:border-black hover:rounded-3xl">
                      <h2 className="my-2 text-xl mx-[35%]">Firebase</h2>{" "}
                      <p className=" px-3 text-justify">
                        Database 를 이용하여 실시간으로 데이터를 저장하고 동기화
                        할수 있습니다.
                      </p>
                    </div>
                    <div className="mb-6 h-1 w-full bg-neutral-200 dark:bg-neutral-600">
                      <div className="h-1 bg-[#FFA712] w-[75%]"></div>
                    </div>
                  </div>{" "}
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex relative mx-[25%] gap-2 flex-col w-[120px] items-center justify-center">
                    <span className="text-6xl text-[#764ABC]">
                      <img src="skill/redux.png" alt="redux"></img>
                    </span>
                    <span className="text-lg leading-loose">redux</span>
                    <div className="absolute left-[-40px] top-0 w-[200px] h-full bg-black bg-opacity-70 text-white opacity-0 hover:opacity-100 hover:border-black hover:rounded-3xl">
                      <h2 className="my-2 text-xl mx-[35%]">Redux </h2>{" "}
                      <p className=" px-3 text-justify">
                        Redux-toolkit 을 이용하여 여러 컴포넌트에서 공유하는
                        데이터를 효율적으로 관리할 수 있습니다.'
                      </p>
                    </div>
                    <div className="mb-6 h-1 w-full bg-neutral-200 dark:bg-neutral-600">
                      <div className="h-1 bg-[#764ABC] w-[75%]"></div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="bg-gray-100 w-[80vw] h-[70vh] mx-auto my-[9%] bg-opacity-80 rounded-lg flex ">
            <div className="flex gap-5 justify-end absolute left-[42%] my-7 ">
              <button
                className={`text-3xl font-semibold text-black rounded-3xl p-2 ${filtered === "clone" && "bg-black text-white"
                  }`}
                onClick={cloneHandler}
              >
                {projectArr[0]}
              </button>
              <button
                className={`text-3xl font-semibold rounded-3xl text-black p-2  ${filtered === "team project" && "bg-black text-white"
                  }`}
                onClick={teamProjectHandler}
              >
                {projectArr[1]}
              </button>
            </div>
            {filtered === "clone" && (
              <div className=" mx-auto font-gw my-[120px]">
                <div className="flex  my-2 ">
                  <div className=" w-[21vw] mx-4 h-[25vh] relative rounded-xl ">
                    <img
                      className="rounded-xl h-full"
                      src="/videos/stx.gif"
                      alt="stx"
                    ></img>
                    <div className="text-center font-gw text-white w-full rounded-xl h-full absolute top-0 left-0  bg-slate-600 hover:grayscale-0 hover:opacity-0">
                      <h2 className=" text-3xl font-bold mt-[16%] ">
                        STX 건설
                      </h2>
                      <p className="my-3">2022. 11. 08 ~ 2022. 11. 21 </p>
                      <p>사용 프로그램 : HTML, CSS, JavaScript</p>
                    </div>
                    <div className="flex absolute bottom-5 left-[8%] justify-center gap-4 items-center text-xl text-black">
                      <button
                        onClick={() =>
                          window.open(
                            "https://sirri1222.github.io/stx-clone/",
                            "_blank"
                          )
                        }
                        className="2xl:px-6 2xl:py-2 xl:px-4 xl:py-2 lg:px-2 lg:py-2 bg-white rounded-3xl"
                      >
                        work
                      </button>
                      <button
                        onClick={() =>
                          window.open(
                            "https://github.com/sirri1222/stx",
                            "_blank"
                          )
                        }
                        className="2xl:px-6 2xl:py-2 xl:px-4 xl:py-2 lg:px-2 lg:py-2 bg-white rounded-3xl"
                      >
                        github
                      </button>
                      <button
                        onClick={() =>
                          window.open(
                            "https://github.com/sirri1222/wonderplace-clone",
                            "_blank"
                          )
                        }
                        className="2xl:px-6 2xl:py-2 xl:px-4 xl:py-2 lg:px-2 lg:py-2 bg-white rounded-3xl"
                      >
                        origin
                      </button>
                    </div>
                  </div>
                  <div className="relative w-[21vw] mx-4 h-[25vh] rounded-xl ">
                    <img
                      className="rounded-xl h-full"
                      src="/videos/hansalim.gif"
                      alt="stx"
                    ></img>
                    <div className="text-center text-white w-full rounded-xl h-full absolute top-0 left-0 bg-[#646e64]  hover:grayscale-0 hover:opacity-0">
                      <h2 className=" text-3xl font-bold  mt-[16%] ">
                        한살림 장보기
                      </h2>
                      <p className="my-3">2022. 11. 09 ~ 2022. 12. 21 </p>
                      <p>사용 프로그램 : HTML, CSS, JavaScript</p>
                    </div>
                    <div className="flex absolute bottom-5 left-[8%] justify-center gap-4 items-center text-xl text-black">
                      <button
                        onClick={() =>
                          window.open(
                            "https://sirri1222.github.io/HANSALIM/",
                            "_blank"
                          )
                        }
                        className="2xl:px-6 2xl:py-2 xl:px-4 xl:py-2 lg:px-2 lg:py-2 bg-white rounded-3xl"
                      >
                        work
                      </button>
                      <button
                        onClick={() =>
                          window.open(
                            "https://github.com/sirri1222/HANSALIM",
                            "_blank"
                          )
                        }
                        className="2xl:px-6 2xl:py-2 xl:px-4 xl:py-2 lg:px-2 lg:py-2 bg-white rounded-3xl"
                      >
                        github
                      </button>
                      <button
                        onClick={() =>
                          window.open(
                            "https://shop.hansalim.or.kr/shopping/spMain.do",
                            "_blank"
                          )
                        }
                        className="2xl:px-6 2xl:py-2 xl:px-4 xl:py-2 lg:px-2 lg:py-2 bg-white rounded-3xl"
                      >
                        origin
                      </button>
                    </div>
                  </div>
                  <div className="relative w-[21vw]  mx-4 h-[25vh] rounded-xl ">
                    <img
                      className="rounded-xl h-full"
                      src="/videos/dosiraktong.gif"
                      alt="stx"
                    ></img>
                    <div className="text-center text-white shadow-lg w-full rounded-xl h-full absolute top-0 left-0  bg-slate-600 grayscale hover:grayscale-0 hover:opacity-0">
                      <h2 className=" text-3xl font-bold mt-[16%] ">
                        도시락통
                      </h2>
                      <p className="my-3">2022. 12. 01 ~ 2023. 01. 25 </p>
                      <p>사용 기술 : HTML, CSS, JavaScript, AOS Swiper.js</p>
                    </div>
                    <div className="flex absolute bottom-5 left-[8%] justify-center gap-4 items-center text-xl text-black">
                      <button
                        onClick={() =>
                          window.open(
                            "https://sirri1222.github.io/dosiractong-clone/",
                            "_blank"
                          )
                        }
                        className="2xl:px-6 2xl:py-2 xl:px-4 xl:py-2 lg:px-2 lg:py-2 bg-white rounded-3xl"
                      >
                        work
                      </button>
                      <button
                        onClick={() =>
                          window.open(
                            "https://github.com/sirri1222/dosiractong",
                            "_blank"
                          )
                        }
                        className="2xl:px-6 2xl:py-2 xl:px-4 xl:py-2 lg:px-2 lg:py-2 bg-white rounded-3xl"
                      >
                        github
                      </button>
                      <button
                        onClick={() =>
                          window.open("https://dosiraktong.com/", "_blank")
                        }
                        className="2xl:px-6 2xl:py-2 xl:px-4 xl:py-2 lg:px-2 lg:py-2 bg-white rounded-3xl"
                      >
                        origin
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex my-7">
                  <div className="relative w-[21vw]  mx-4 h-[25vh] rounded-xl ">
                    <img
                      className="rounded-xl h-full"
                      src="/videos/hyundai.gif"
                      alt="stx"
                    ></img>
                    <div className="text-center text-white w-full rounded-xl h-full absolute top-0 left-0  bg-[#88A1BB] grayscale hover:grayscale-0 hover:opacity-0">
                      <h2 className=" text-3xl font-bold  mt-[14%] ">
                        현대그룹
                      </h2>
                      <p className="my-3">2023. 02. 27 ~ 2022. 03. 15 </p>
                      <p>
                        사용 기술 : HTML, CSS, JavaScript, AOS, Anime.js,
                        Swiper.js
                      </p>
                    </div>
                    <div className="flex absolute bottom-5 left-[8%] justify-center gap-4 items-center text-xl text-black">
                      <button
                        onClick={() =>
                          window.open("https://www.hyundaigroup.com/", "_blank")
                        }
                        className="2xl:px-6 2xl:py-2 xl:px-4 xl:py-2 lg:px-2 lg:py-2 bg-white rounded-3xl"
                      >
                        work
                      </button>
                      <button
                        onClick={() =>
                          window.open(
                            "https://github.com/sirri1222/hyundai-clone",
                            "_blank"
                          )
                        }
                        className="2xl:px-6 2xl:py-2 xl:px-4 xl:py-2 lg:px-2 lg:py-2 bg-white rounded-3xl"
                      >
                        github
                      </button>
                      <button
                        onClick={() =>
                          window.open(
                            "https://github.com/sirri1222/wonderplace-clone",
                            "_blank"
                          )
                        }
                        className="2xl:px-6 2xl:py-2 xl:px-4 xl:py-2 lg:px-2 lg:py-2 bg-white rounded-3xl"
                      >
                        origin
                      </button>
                    </div>
                  </div>
                  <div className="relative w-[21vw]  mx-4 h-[25vh] ">
                    <img
                      className="rounded-xl h-full"
                      src="/videos/wonderplace.gif"
                      alt="stx"
                    ></img>
                    <div className="text-center text-white w-full rounded-xl h-full absolute top-0 left-0  bg-slate-600 grayscale hover:grayscale-0 hover:opacity-0">
                      <h2 className=" text-3xl font-bold  mt-[16%] ">
                        원더플레이스
                      </h2>
                      <p className="my-3">2022. 11. 08 ~ 2022. 11. 21 </p>
                      <p>사용 프로그램 : HTML, CSS, JavaScript</p>
                    </div>
                    <div className="flex absolute bottom-5 left-[8%] justify-center gap-4 items-center text-xl text-black">
                      <button
                        onClick={() =>
                          window.open(
                            "https://github.com/sirri1222/wonderplace-clone",
                            "_blank"
                          )
                        }
                        className="2xl:px-6 2xl:py-2 xl:px-4 xl:py-2 lg:px-2 lg:py-2 bg-white rounded-3xl"
                      >
                        work
                      </button>
                      <button
                        className="2xl:px-6 2xl:py-2 xl:px-4 xl:py-2 lg:px-2 lg:py-2 bg-white rounded-3xl"
                        onClick={() =>
                          window.open(
                            "https://github.com/sirri1222/wonderplace-clone",
                            "_blank"
                          )
                        }
                      >
                        github
                      </button>
                      <button
                        onClick={() =>
                          window.open("https://www.wonderplace.com", "_blank")
                        }
                        className="2xl:px-6 2xl:py-2 xl:px-4 xl:py-2 lg:px-2 lg:py-2 bg-white rounded-3xl"
                      >
                        origin
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {filtered === "team project" && (
              <div className=" mx-auto 2xl:my-[200px] xl:my-[200px] lg:my-[100px] sm:my-[80px] xs:my-[100px] ">
                <div className="2xl:flex xl:flex my-7">
                  <div className="md:flex sm:flex"> <div className="mx-5 ">
                    {" "}
                    <button onClick={openHandler}>
                      <MdOutlineArrowDropDownCircle className="text-black" />
                    </button>
                    <div className="relative flex flex-col justify-center w-[16vw] h-[30vh] border-black border-8 border-black">
                      <div className="flex justify-center items-center ">
                        {modalVisible && (
                          <motion.div className="bg-blue-100 overflow-hidden rounded-lg h-[31vh] absolute top-[-15px] p-4 left-[-9px] w-[17vw] ">
                            <p className="text-center my-2 mt-5 font-bold text-3xl">
                              kyobo
                            </p>
                            <p className="text-xs text-center mb-7">
                              2023.01.11 ~ 2023.02.05
                            </p>
                            <p className="my-4 text-xs text-center  ">
                              프론트엔드 3명, 백엔드 4명 구성의 팀으로 진행한
                              요기요 딜리버리 구현 배달 서비스 프로젝트입니다.
                            </p>
                            <p className="text-sm my-3 font-bold">기술 스택</p>
                            <p className="text-xs text-gray-600 ">
                              React.js, JavaScript, Redux Toolkit, Axios,
                              Tailwind CSS
                            </p>
                            <p className="text-sm  my-3 font-bold">
                              구현한 기능
                            </p>
                            <p className="text-xs text-gray-600">
                              메뉴, 카테고리
                            </p>
                          </motion.div>
                        )}
                        <p className="px-[80px] nowrap text-center text-black font-bold text-xl">
                          kyobo
                        </p>
                      </div>
                      <img
                        className="mx-auto w-[20vw] h-[20vh] hover:scale-110 transition-transform ease-in-out duration-500"
                        src="/images/kyoborbg.png"
                        alt="JUSTDOEAT"
                      ></img>
                    </div>
                    <div className="flex justify-center items-center text-5xl gap-5 my-2">
                      <button onClick={() => alert("동영상이 없습니다.")}>
                        <FaVideo className="text-black" />
                      </button>
                      <button>
                        {" "}
                        <RiGithubLine
                          className="text-black"
                          onClick={() =>
                            window.open(
                              "https://github.com/sirri1222/kyobo-1",
                              "_blank"
                            )
                          }
                        />
                      </button>
                    </div>
                  </div>

                    <div className="mx-5">
                      {" "}
                      <button onClick={openHandler2}>
                        <MdOutlineArrowDropDownCircle className="text-black" />
                      </button>
                      <div className="relative flex flex-col justify-center w-[16vw] h-[30vh] border-8 border-black">
                        <div className="flex justify-center items-center ">
                          <p className="px-[80px] nowrap text-center font-bold text-xl text-black">
                            JUST DO EAT
                          </p>
                        </div>
                        <img
                          className="mx-auto w-[20vw] h-[20vh] hover:scale-110 transition-transform ease-in-out duration-500"
                          src="/images/cookierbg.png"
                          alt="JUSTDOEAT"
                        ></img>
                        {modalVisible2 && (
                          <motion.div className="bg-blue-100 overflow-hidden rounded-lg absolute top-[-15px] p-4 left-[-9px] w-[17vw] h-[31vh] opacity-100 ">
                            <p className="text-center my-2 mt-5 font-bold text-3xl">
                              {" "}
                              JUST DO EAT
                            </p>
                            <p className="text-xs text-center mb-7">
                              2023.01.11 ~ 2023.02.05
                            </p>
                            <p className="my-4 text-xs text-center ">
                              프론트엔드 3명, 백엔드 4명 구성의 팀으로 진행한
                              요기요 딜리버리 구현 배달 서비스 프로젝트입니다.
                            </p>
                            <p className="text-sm my-3 font-bold">기술 스택</p>
                            <p className="text-xs text-gray-600 ">
                              React.js, JavaScript, Redux Toolkit, Axios,
                              Tailwind, styled-component CSS
                            </p>
                            <p className="text-sm  my-3 font-bold">구현한 기능</p>
                            <p className="text-xs text-gray-600">
                              메뉴, 카테고리, 장바구니, 주문하기
                            </p>
                          </motion.div>
                        )}
                      </div>

                      <div className="flex justify-center items-center text-5xl gap-5 my-2">
                        <button
                          onClick={() =>
                            window.open("https://youtu.be/3vGqb2JfWGo", "_blank")
                          }
                        >
                          <FaVideo className="text-black" />
                        </button>
                        <button>
                          {" "}
                          <RiGithubLine
                            className="text-black"
                            onClick={() =>
                              window.open(
                                "https://github.com/sirri1222/JUSTDOEAT",
                                "_blank"
                              )
                            }
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="md:flex md:justify-around sm:flex">
                  <div className="mx-5">
                    {" "}
                    <button onClick={openHandler3}>
                      <MdOutlineArrowDropDownCircle className="text-black" />
                    </button>
                    <div className="relative flex flex-col justify-center w-[16vw] h-[30vh] border-8 border-black">
                      <div className="flex justify-center items-center ">
                        <p className="px-[80px] nowrap text-center text-black font-bold text-xl">
                          Bon Voyage
                        </p>
                      </div>
                      <img
                        className="mx-auto w-[20vw] h-[20vh] hover:scale-110 transition-transform ease-in-out duration-500"
                        src="/images/travelrbg.png"
                        alt="JUSTDOEAT"
                      ></img>
                      {modalVisible3 && (
                        <motion.div
                          className={`bg-blue-100 overflow-hidden rounded-lg absolute top-[-15px] p-4 left-[-9px] w-[17vw]  opacity-1 h-[31vh] 
                          `}
                        >
                          <p className="text-center my-2 mt-5 font-bold text-3xl">
                            {" "}
                            Bon Voyage
                          </p>
                          <p className="text-xs text-center mb-7">
                            2023.02.07 ~ 2023.03.03
                          </p>
                          <p className="my-4 text-xs text-center ">
                            프론트엔드 3명, 백엔드 4명 구성의 팀으로 진행한
                            국내여행 스케줄러 구현 플래너 서비스 프로젝트입니다.
                          </p>
                          <p className="text-sm my-3 font-bold">기술 스택</p>
                          <p className="text-xs text-gray-600 ">
                            React.js, JavaScript, Redux Toolkit, Axios, Tailwind
                            CSS
                          </p>
                          <p className="text-sm  my-3 font-bold">구현한 기능</p>
                          <p className="text-xs text-gray-600">
                            로그인,여행지검색, 카테고리, 카카오지도
                            API,여행스케줄 생성,마이페이지
                          </p>
                        </motion.div>
                      )}
                    </div>
                    <div className="flex justify-center items-center text-5xl gap-5 my-2">
                      <button
                        onClick={() =>
                          window.open("https://youtu.be/ePmlGtwn984", "_blank")
                        }
                      >
                        <FaVideo className="text-black" />
                      </button>
                      <button>
                        {" "}
                        <RiGithubLine
                          className="text-black"
                          onClick={() =>
                            window.open(
                              "https://github.com/sirri1222/Bon-voyage",
                              "_blank"
                            )
                          }
                        />
                      </button>
                    </div>
                  </div>

                  <div className="mx-5">
                    {" "}
                    <button onClick={openHandler4}>
                      <MdOutlineArrowDropDownCircle className="text-black" />
                    </button>
                    <div className="relative flex flex-col justify-center w-[16vw] h-[30vh] border-8 border-black">
                      <div className="flex justify-center items-center ">
                        <p className="px-[80px] text-black nowrap text-center font-bold text-xl">
                          Schoolfitness
                        </p>
                      </div>
                      <img
                        className="mx-auto w-[20vw] h-[20vh] hover:scale-110 transition-transform ease-in-out duration-500"
                        src="/images/fitrbg.png"
                        alt="JUSTDOEAT"
                      ></img>
                      {modalVisible4 && (
                        <motion.div className="bg-blue-100 overflow-hidden rounded-lg absolute top-[-15px] p-4 left-[-9px] w-[17vw] h-[31vh]  opacity-100  ">
                          <p className="text-center my-2 mt-5 font-bold text-3xl">
                            Schoolfitness
                          </p>
                          <p className="text-xs text-center mb-7">
                            2023.03.06 ~ 2023.04.04
                          </p>
                          <p className="my-4 text-xs text-center ">
                            프론트엔드 5명, 백엔드 4명 구성의 팀으로 진행한
                            요기요 딜리버리 구현 배달 서비스 프로젝트입니다.
                          </p>
                          <p className="text-sm my-3 font-bold">기술 스택</p>
                          <p className="text-xs text-gray-600 ">
                            React.js, JavaScript, recoil, Axios, Tailwind CSS
                          </p>
                          <p className="text-sm  my-3 font-bold">구현한 기능</p>
                          <p className="text-xs text-gray-600">
                            메인페이지, 헬스리포트, 게임, 마이스탬프, 더보기
                          </p>
                        </motion.div>
                      )}
                    </div>
                    <div className="flex justify-center items-center text-5xl gap-5 my-2">
                      <button
                        onClick={() =>
                          window.open(
                            "https://www.youtube.com/watch?v=hLS2y7jnayA&t=35s",
                            "_blank"
                          )
                        }
                      >
                        <FaVideo className="text-black" />
                      </button>
                      <button>
                        {" "}
                        <RiGithubLine
                          className="text-black"
                          onClick={() =>
                            window.open(
                              "https://github.com/sirri1222/schoolfitness",
                              "_blank"
                            )
                          }
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div></div>
            )}

            <div></div>
          </div>{" "}
        </SwiperSlide>

        <SwiperSlide>
          {" "}
          <div className="bg-gray-100 w-[80vw] h-[70vh] mx-auto my-[9%] bg-opacity-80 rounded-lg ">
            <div className="flex border-y-2 border-white">
              <div className="grayscale relative bg-slate-600 border-x-2 overflow-hidden hover:filter-none border-white w-[33vw] h-[35vh] bg-opacity-30">
                <img
                  className="overflow-hidden absolute top-0 h-full w-full z-10 opacity-0 hover:opacity-100"
                  src="/images/hyunji6.jpg"
                  alt="현지1"
                ></img>
                <img
                  className="overflow-hidden h-full absolute top-0 opacity-100 hover:opacity-0"
                  src="/images/coffee.jpg"
                  alt="커피1"
                ></img>
                <p className="absolute bottom-0 ">#커피</p>
              </div>
              <div className="grayscale overflow-hidden relative hover:filter-none w-[33vw] h-[35vh] bg-opacity-30">
                <img
                  className="overflow-hidden h-full w-full absolute top-0 z-10 opacity-0 hover:opacity-100"
                  src="/images/hyunji5.jpg"
                  alt="현지2"
                ></img>
                <img
                  className="overflow-hidden h-full absolute top-0 w-[100%] opacity-100 hover:opacity-0"
                  src="/images/art.png"
                  alt="미술관"
                ></img>
                <p className="absolute bottom-0 ">#미술관</p>
              </div>

              <div className="grayscale relative  overflow-hidden bg-slate-500 border-x-2 hover:filter-none border-white w-[33vw] h-[35vh] bg-opacity-30">
                <img
                  className="overflow-hidden h-full w-full absolute top-0 z-10 opacity-0 hover:opacity-100"
                  src="/images/book8.jpg"
                  alt="현지"
                ></img>
                <img
                  className="overflow-hidden h-full absolute w-[100%] top-0 opacity-100 hover:opacity-0"
                  src="/images/baking8.png"
                  alt="베이킹"
                ></img>
                <p className="absolute bottom-0 ">#독서</p>
              </div>
            </div>
            <div className="flex border-b-2 border-white">
              <div className="relative overflow-hidden hover:filter-none grayscale bg-slate-400 border-x-2 border-white w-[33vw] h-[35vh] bg-opacity-30">
                <img
                  className="overflow-hidden h-full w-full absolute top-0 z-10 opacity-0 hover:opacity-100"
                  src="/images/exercise.jpg"
                  alt="현지운동"
                ></img>
                <img
                  className="overflow-hidden w-full h-full absolute top-0 opacity-100 hover:opacity-0"
                  src="/images/exercise4.png"
                  alt="운동"
                ></img>
                <p className="absolute bottom-0 ">#운동</p>
              </div>
              <div className="grayscale relative overflow-hidden hover:filter-none bg-slate-500 w-[33vw] h-[35vh] bg-opacity-30">
                <img
                  className="overflow-hidden h-full w-full absolute top-0 z-10 opacity-0 hover:opacity-100"
                  src="/images/travel.jpg"
                  alt="현지여행"
                ></img>
                <img
                  className="overflow-hidden h-full w-full absolute top-0 opacity-100 hover:opacity-0"
                  src="/images/travel1.png"
                  alt="여행"
                ></img>
                <p className="absolute bottom-0 ">#여행</p>
              </div>
              <div className="grayscale relative overflow-hidden hover:filter-none bg-slate-300 border-x-2 border-white w-[33vw] h-[35vh] bg-opacity-30">
                <img
                  className="overflow-hidden absolute h-full w-full top-0 z-10 opacity-0 hover:opacity-100"
                  src="/images/IMG_1881.jpeg"
                  alt="현지등산"
                ></img>
                <img
                  className="overflow-hidden absolute w-full h-full top-0 opacity-100 hover:opacity-0"
                  src="/images/tree.png"
                  alt="등산"
                ></img>
                <p className="absolute bottom-0 ">#등산</p>
              </div>
            </div>
            <div className="absolute bottom-[42%]  left-[44%] z-11 text-white text-9xl">
              LIFE
            </div>
          </div>{" "}
        </SwiperSlide>
      </Swiper>
      <Footer />
    </>
  );
}
