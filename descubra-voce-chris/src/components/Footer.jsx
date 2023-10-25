import styles from "../style";
import { socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className={`${styles.flexCenter} h-40 md:h-44 w-full bg-superDarkPurple`}>
      <div className="flex flex-col items-center gap-y-3 max-container">
        <div className="flex flex-row md:mt-0">
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
              onClick={() => window.open(social.link)}
            />
          ))}
        </div>
        <p className="font-lato font-normal text-center text-[12px] md:text-[14px] md:leading-[20px] text-white">
          Copyright Ⓒ 2023 All Rights Reserved.
        </p>
        <p className="font-lato font-normal text-center text-[12px] md:text-[14px] md:leading-[20px] text-white">
          Desenvolvido por{" "}
          <a
            href="https://wa.me/5581999458630"
            className="cursor-pointer underline font-medium tracking-wide"
          >
            Raisa Bernardes
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
