import Image from "next/image";

export default function Footer() {
  return (
    <div className="max-w-7xl mx-auto flex justify-between mt-24">
      <div className="text-white/80 font-medium">
        © 2025 vediocc. All rights reserved.
      </div>
      <div className="flex gap-x-2">
        <div className="text-white/100">Connect.</div>
        <a
          className="cursor-none"
          href="https://www.instagram.com/vediocc/"
          target="_blank"
        >
          <Image
            src={"/insta.svg"}
            alt="instagram icon"
            height={20}
            width={20}
          ></Image>
        </a>
        <a
          href="mailTo:vedioccagency@gmail.com"
          target="_blank"
          className="cursor-none"
        >
          <Image
            src={"/mail.svg"}
            alt="mail icon"
            height={20}
            width={20}
          ></Image>
        </a>
      </div>
    </div>
  );
}
