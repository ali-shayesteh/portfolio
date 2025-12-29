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
      <div className="my-4 grid grid-cols-1 gap-2">
        <div>
          <h1 className="heading-one">{"Resume"}</h1>
          <div className="border-b mb-6" />
          <h2 className="heading-two">Summary</h2>
          <p className="text-sm">
            Frontend Engineer with over 10 years of experience in building and
            maintaining web applications. Focused on component-based
            architecture, design systems, and performance-oriented user
            interfaces. Experienced in React and Next.js, working closely with
            product, design, and backend teams.
          </p>
        </div>
        <div className="border-b mb-6" />

        <div>
          <h2 className="heading-two">Experience</h2>
          <div className="">
            <h3 className="font-semibold">Frontend Developer (Mid–Senior)</h3>
            <div className="text-sm">
              Lavan Asia Technology Development — Tehran, Iran
            </div>
            <div className="italic text-sm">Oct 2024 – Present</div>
            <ul className="list-disc pl-4 leading-6 text-sm">
              <li>
                Developing and maintaining web applications with a focus on
                scalability and maintainability.
              </li>
              <li>
                Working on a design system for a banking product (Eghtesad Novin
                Bank).
              </li>
              <li>
                Building reusable UI components and shared frontend foundations.
              </li>
              <li>
                Implementing data-heavy interfaces, including TradingView-based
                charts for financial and market data.
              </li>
              <li>
                Collaborating closely with backend and design teams to deliver
                stable product features.
              </li>
            </ul>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold">
              Frontend Developer (Remote – Part-time)
            </h3>
            <div className="text-sm">Mecurus — Singapore</div>
            <div className="italic text-sm">Jul 2022 – Present</div>
            <ul className="list-disc pl-4 leading-6 text-sm">
              <li>
                Developing and maintaining frontend features using Next.js and
                TypeScript.
              </li>
              <li>
                Building reusable UI components aligned with design
                requirements.
              </li>
              <li>
                Collaborating with UI/UX designers to improve usability and
                accessibility.
              </li>
            </ul>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold">Frontend Developer</h3>
            <div className="text-sm">Vira Miner — Tehran, Iran</div>
            <div className="italic text-sm">Sep 2022 – Oct 2024</div>
            <ul className="list-disc pl-4 leading-6 text-sm">
              <li>
                Developed product-oriented web applications using React and
                Next.js.
              </li>
              <li>
                Built real-time dashboards with charts and state-driven UI
                flows.
              </li>
              <li>
                Worked extensively with data visualization using Highcharts for
                crypto mining metrics.
              </li>
              <li>
                Integrated frontend applications with backend APIs for live data
                and user-specific views.
              </li>
            </ul>
          </div>
        </div>

        <div className="border-b mb-6" />

        <div>
          <h2 className="heading-two">Selected Projects</h2>
          <div className="">
            <h3 className="font-semibold">Crypto Mining Dashboard</h3>

            <ul className="list-disc pl-4 leading-6 text-sm">
              <li>
                Designed and implemented responsive dashboards for monitoring
                mining activity and user balances.
              </li>
              <li>
                Focused on performance, clarity of data presentation, and
                maintainable component structure.
              </li>
            </ul>
            <div className="text-sm">
              <span className="text-accent">Tech: </span>React, Redux,
              Highcharts
            </div>
          </div>

          <div className="mt-4">
            <div className="">
              <h3 className="font-semibold">Product & E-commerce Platforms</h3>

              <ul className="list-disc pl-4 leading-6 text-sm">
                <li>
                  Built scalable frontend solutions for dashboards, landing
                  pages, and internal tools.
                </li>
                <li>
                  Emphasized reusable components and component-based
                  architecture.
                </li>
              </ul>
              <div className="text-sm">
                <span className="text-accent">Tech: </span>React, Next.js,
                Tailwind CSS
              </div>
            </div>
          </div>
        </div>
        <div className="border-b mb-6" />

        <div>
          <h2 className="heading-two">Skills</h2>
          <div className="">
            <h3 className="font-semibold">Frontend</h3>
            <div className="leading-6 text-sm">
              JavaScript (ES6+), React, Next.js, HTML, CSS, Tailwind CSS
            </div>
          </div>

          <div className="">
            <h3 className="font-semibold">State & Architecture</h3>
            <div className="leading-6 text-sm">
              Redux Toolkit, Zustand, Component-based Architecture, Design
              Systems
            </div>
          </div>

          <div className="">
            <h3 className="font-semibold">Tooling</h3>
            <div className="leading-6 text-sm">
              Git, API Integration, Monorepo Architecture
            </div>
          </div>

          <div className="">
            <h3 className="font-semibold">Backend (Supporting)</h3>
            <div className="leading-6 text-sm">WordPress, PHP</div>
          </div>
        </div>

        <div className="border-b mb-6" />

        <div>
          <h2 className="heading-two">Education</h2>
          <div className="">
            <h3 className="font-semibold">
              Bachelor’s Degree — Software / Computer Engineering
            </h3>
            <div className="leading-6 text-sm">Shiraz University</div>
          </div>
        </div>

        <div className="mt-4">
          <Link
            className="btn bg-accent text-white"
            href="/files/Ali_Shayesteh_Frontend_Engineer.pdf"
          >
            Download Full CV (PDF)
          </Link>
        </div>

        <div className="max-lg:py-6" />
      </div>
    </div>
  );
}
