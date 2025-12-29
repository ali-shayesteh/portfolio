import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      {/* Intro */}
      <div className="my-2 flex flex-col justify-center ">
        <div>
          <div className="flex gap-4">
            <div className="w-16 h-16 rounded-full bg-slate-300 flex justify-center items-center mb-3">
              <Image
                className="w-14 h-14 rounded-full"
                alt="Ali Shayesteh"
                src="/img/avatar.jpeg"
                width={56}
                height={56}
              />
            </div>
            <div>
              <h1 className="heading-one">{"Ali Shayesteh"}</h1>
              <h2 className="font-semibold">Frontend Engineer</h2>
            </div>
          </div>
          <p>
            {
              "Building scalable, maintainable web applications with React and Next.js."
            }
          </p>
          <div className="flex gap-4">
            <Link className="btn text-white bg-accent text-sm" href="/resume">
              Download CV
            </Link>
            <Link
              className="btn text-accent border rounded border-accent text-sm"
              href="/contact"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
      {/* Intro */}
      <div className="my-3 h-0.5 w-full" />
      <div>
        <ul className="list-disc pl-4 leading-8 text-sm">
          <li>10+ years of experience in web application development</li>
          <li>
            Component-based architecture, design systems, and
            performance-focused UI
          </li>
          <li>Dashboards and data-driven interfaces (React, Next.js)</li>
        </ul>
      </div>
    </div>
  );
}
