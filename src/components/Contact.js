import { AiOutlineGithub } from "react-icons/ai";
import { RiKakaoTalkFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { RxNotionLogo } from "react-icons/rx";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const Contact = () => {
  return (
    <div className="flex fixed ml-[40%] gap-5 z-50 my-7">
      <div>
        {/* <a href="https://github.com/sirri1222?tab=repositories" target="_blank" alt="dd" >dd </a> */}
        <AiOutlineGithub
          className="cursor-pointer xl:text-7xl sm:text-5xl"
          onClick={() => window.open("https://github.com/sirri1222", "_blank")}
        />
        <span className="opacity-0 hover:opacity-1">깃허브</span>
      </div>
      <div>
        <RiKakaoTalkFill
          className="cursor-pointer text-yellow-400 xl:text-7xl sm:text-5xl"
          onClick={() =>
            window.open("https://open.kakao.com/o/ssygmvcf", "_blank")
          }
        />
        <span className="opacity-0 hover:opacity-1">카카오톡</span>
      </div>
      <div>
        <MdEmail
        onClick={() =>
         alert("google-email: hyeonji159753@gmail.com \n naver: shj15975@naver.com")
        }
        className="cursor-pointer text-blue-400 xl:text-7xl sm:text-5xl" />
      
        <span className="opacity-0 hover:opacity-1">이메일</span>
      </div>
      <div>
        <RxNotionLogo
         className="cursor-pointer text-pink-400 xl:text-7xl lg:text-5xl sm:text-5xl"
         onClick={() => window.open("https://gregarious-cello-899.notion.site/frontend-developer-792f654497bb4e65a74bedb86dafdf1a", "_blank")} />
        <span className="opacity-0 hover:opacity-1">인스타그램</span>
      </div>
    </div>
  );
};
export default Contact;
