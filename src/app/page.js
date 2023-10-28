import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      {/* Intro */}
      <div className="my-4 flex flex-col justify-center items-center">
          <div className="w-16 h-16 rounded-full bg-slate-300 flex justify-center items-center mb-3">
            <Image className="w-14 h-14 rounded-full" alt="Ali Shayesteh" src="/img/avatar.jpeg" width={56} height={56} />
          </div>
          <div>
        <h1 className="heading-one">{"Hi, I'm Ali Shayesteh 👋"}</h1>
        <p>
          {
            "I'm a frontend engineer, specialized in Javascript, Reactjs, Nextjs and a performance enthusiast.🚀"
          }
        </p>
        <Link className="text-indigo-400" href="/about">Learn more</Link>
        </div>
      </div>
      {/* Intro */}
      
      
    </div>
  );
}
