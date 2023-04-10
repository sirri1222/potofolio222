import { AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";
import { RiKakaoTalkFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="flex absolute top-[4%] gap-6 left-[40%] z-40 ">
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
          className="cursor-pointer xl:text-7xl sm:text-5xl"
          onClick={() =>
            window.open("https://open.kakao.com/o/ssygmvcf", "_blank")
          }
        />
        <span className="opacity-0 hover:opacity-1">카카오톡</span>
      </div>
      <div>
        <MdEmail className="cursor-pointer xl:text-7xl sm:text-5xl" />
        <span className="opacity-0 hover:opacity-1">이메일</span>
      </div>
      <div>
        <AiOutlineInstagram className="cursor-pointer xl:text-7xl lg:text-5xl sm:text-5xl" />
        <span className="opacity-0 hover:opacity-1">인스타그램</span>
      </div>
    </div>
  );
};
export default Contact;
