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
        <h2 className="heading-two">{"Contact info"}</h2>
      </div>
    </div>
  );
}
