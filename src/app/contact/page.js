import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Blog Ali Shayesteh | Frontend Engineer Reactjs Nextjs",
  description:
    "I'm a frontend engineer, specialized in Javascript, Reactjs, Nextjs, performance enthusiast",
};

export default function Contact() {
  return (
    <div className="container">
      {/* Intro */}
      <div className="my-4 ">
        <div>
          <h1 className="heading-one">{"Contact"}</h1>
          <div className="border-b mb-6" />
        </div>
      </div>
      {/* Intro */}

      <div>
        <ul className="text-sm leading-10 list-disc pl-4">
          <li>
            <span>Email:</span>
            {"      "}
            <a className="text-accent" href="mailto:ali.shayesteh@gmail.com">
              ali.shayesteh@gmail.com
            </a>
          </li>
          <li>
            <span>LinkedIn:</span>{" "}
            <a
              className="text-accent"
              target="_blank"
              href="https://www.linkedin.com/in/ali-shayesteh"
            >
              linkedin.com/in/ali-shayesteh/
            </a>
          </li>
          <li>
            <span>GitHub:</span>
            {"    "}
            <a
              className="text-accent"
              target="_blank"
              href="https://www.github.com/ali-shayesteh"
            >
              github.com/ali-shayesteh
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
