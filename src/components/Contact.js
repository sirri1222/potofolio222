import { AiOutlineGithub } from "react-icons/ai";
import { RiKakaoTalkFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { RxNotionLogo } from "react-icons/rx";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const Contact = () => {
  return (
    <div className="flex fixed ml-[50%] translate-x-[-50%] gap-5 z-50 my-7">
      <div>
        {/* <a href="https://github.com/sirri1222?tab=repositories" target="_blank" alt="dd" >dd </a> */}
        <AiOutlineGithub
          className="cursor-pointer xl:text-7xl sm:text-5xl"
          onClick={() => window.open("https://github.com/sirri1222", "_blank")}
        />
        
      </div>
      <div>
        <RiKakaoTalkFill
          className="cursor-pointer text-yellow-400 xl:text-7xl sm:text-5xl"
          onClick={() =>
            window.open("https://open.kakao.com/o/ssygmvcf", "_blank")
          }
        />
        
      </div>
      <div>
        <MdEmail
        onClick={() =>
         alert("google-email: hyeonji159753@gmail.com \n naver: shj15975@naver.com")
        }
        className="cursor-pointer text-blue-400 xl:text-7xl sm:text-5xl" />
      
        
      </div>
      <div>
        <RxNotionLogo
         className="cursor-pointer text-pink-400 xl:text-7xl lg:text-5xl sm:text-5xl"
         onClick={() => window.open("https://gregarious-cello-899.notion.site/FE-ce20f3fc548747c2a2610ce0681b4332", "_blank")} />
      
      </div>
    </div>
  );
};
export default Contact;
