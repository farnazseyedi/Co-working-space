import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/Home/logo.png";

export default function Footer() {
  const socialLinks = [
    {
      href: "https://instagram.com",
      icon: "/icons/instagram.svg",
      alt: "Instagram",
    },
    {
      href: "https://linkedin.com",
      icon: "/icons/linkedin.svg",
      alt: "LinkedIn",
    },
    {
      href: "https://linkedin.com",
      icon: "/icons/linkedin.svg",
      alt: "LinkedIn",
    },
  ];

  return (
    <footer className="relative py-40 rtl flex justify-center items-center w-full overflow-hidden">
      <div className="absolute top-0 right-[-360px] w-[880px] h-[840px] opacity-5 -z-10">
        <Image
          src={logo}
          alt="Background Logo"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>

      <div className="relative mx-auto px-4 flex flex-col items-center w-full max-w-[900px]">
        <div className="w-20 h-20 mb-4">
          <Image
            src={logo}
            alt="Logo"
            width={28}
            height={28}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex flex-col gap-2 text-center">
          <div className="text-xl font-bold">آکادمی مکین</div>
          <div className="text-lg opacity-90">
            ما اینجا بهت یاد میدیم چطوری یاد بگیری…
          </div>
        </div>

        <nav className="mt-10">
          <ul className="flex flex-wrap justify-center items-center gap-x-10 gap-y-3 text-lg">
            {[
              { href: "/", label: "وبسایت آکادمی مکین" },
              { href: "/faq", label: "سوالات پرتکرار" },
              { href: "/blog", label: "بلاگ" },
              { href: "/contact", label: "تماس با ما" },
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2 group">
                <span className="w-2 h-2 rounded-full bg-neutral-300 group-hover:bg-tertiary-500 transition-colors"></span>
                <Link
                  href={item.href}
                  className="opacity-60 hover:opacity-100 hover:text-black transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-10 w-full h-0.5 bg-neutral-300 mx-auto"></div>

        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-black w-full gap-4">
          <div className="text-center md:text-left mb-2 md:mb-0">
            تمامی حقوق این وب‌سایت متعلق به موسسه ایده‌آل رسانه مکین است.
          </div>
          <div className="flex gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <span className="block bg-neutral-200 rounded-full p-2 group-hover:bg-blue-500 transition-colors"></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
