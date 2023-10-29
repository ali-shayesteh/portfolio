import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Ali Shayesteh | Frontend Engineer Reactjs Nextjs",
  description:
    "I'm a frontend engineer, specialized in Javascript, Reactjs, Nextjs, performance enthusiast",
};

export default function About() {
  return (
    <div className="container">
      {/* Intro */}
      <div className="my-4 ">
       
        <div>
          <h1 className="heading-one">{"About"}</h1>
          <div className="border-b mb-6" />
          <p>
            {
              "Hi I'm Ali and I am a software engineer, specialized in Javascript, Reactjs, Nextjs and a performance enthusiast.🚀"
            }
          </p>
          <p>
            {
              "Currently learning typescript, TDD along with Jest and Cypress, and NX to expand my knowledge as a frontend engineer."
            }
          </p>
        </div>
      </div>
      {/* Intro */}

      <div>
        <h2 className="heading-two">{"Porfolio"}</h2>
      </div>
    </div>
  );
}
