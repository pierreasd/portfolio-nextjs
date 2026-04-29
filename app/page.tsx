import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-xl mx-auto pb-16">
      {/* <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-lg mb-8 flex items-center justify-center text-gray-500 dark:text-gray-400 shadow-inner"> */}
      <Image
        className="w-full h-84 bg-gray-200 dark:bg-gray-700 rounded-lg mb-8 flex items-center justify-center text-gray-500 dark:text-gray-400 shadow-inner object-cover"
        src="/wp.jpg"
        alt="Profile"
        width={1280}
        height={720}
      />
      {/* </div> */}

      {/* Greeting Banner */}
      <div className="bg-gray-100/80 dark:bg-gray-700/80 backdrop-blur-sm rounded-lg p-3 text-center mb-6 shadow-sm">
        <p className="text-gray-800 dark:text-gray-200">
          Hello, I&apos;m a Software Engineer based in Jakarta, Indonesia!
        </p>
      </div>

      {/* Profile Header */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between mb-10 gap-6">
        <div className="text-center md:text-left flex-1">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight mb-1">
            Pierre Azhanzi Ibrahim
          </h1>
          <p className="text-gray-600 dark:text-gray-400">Software Engineer</p>
        </div>

        {/* Profile Image */}
        <div className="shrink-0">
          <div className="w-24 h-24 rounded-full border-2 border-white dark:border-gray-700 shadow-lg overflow-hidden bg-gray-200 dark:bg-gray-700">
            {/* Replace src with your actual image path in the public folder */}
            {/* <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-500 text-xs">
              Photo
            </div> */}
            <Image 
                src="/duck.webp" 
                alt="Profile" 
                width={96} 
                height={96} 
                className="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-500 text-xs object-cover"
              /> 
           
          </div>
        </div>
      </div>

      {/* Work Section */}
      <section className="mb-10">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 underline decoration-4 decoration-gray-300 dark:decoration-gray-600 underline-offset-4 w-fit">
          Work
        </h3>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-justify indent-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-justify indent-4">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum. Curabitur pretium
          tincidunt lacus. Nulla gravida orci a odio.
        </p>

        <div className="flex justify-center">
          <Link
            href="/portfolio"
            className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-6 rounded-md transition-colors shadow-sm"
          >
            My portfolio &gt;
          </Link>
        </div>
      </section>

      {/* Bio Section */}
      <section className="mb-10">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 underline decoration-4 decoration-gray-300 dark:decoration-gray-600 underline-offset-4 w-fit">
          Bio
        </h3>
        <div className="space-y-3 text-gray-700 dark:text-gray-300">
          <div className="flex">
            <span className="font-bold w-16 shrink-0">1997</span>
            <span>Born in Jakarta.</span>
          </div>
          <div className="flex">
            <span className="font-bold w-16 shrink-0">2018</span>
            <span>
              Worked as front end developer intern at {"PT. Phincon"}, with a
              focus on HRIS app development using Ionic for front-end and PHP
              CodeIgniter for generating {"(PDF and Excel)"} reports. Clients
              include Astra Credit Company and Mandiri Tunas Finance.
            </span>
          </div>
          <div className="flex">
            <span className="font-bold w-16 shrink-0">2019</span>
            <span>
              Graduated from BINUS University School of Computer Science with
              3.20 GPA.
            </span>
          </div>
          <div className="flex">
            <span className="font-bold w-16 shrink-0">2020</span>
            <span>
              Worked as IT Support Specialist in {"PT. Nusa Halmahera Minerals"}{" "}
              where I handled various IT support tasks such as rolling out
              laptops, domain management, network troubleshooting, and
              troubleshooting hardware issues. I also learned a bit about SAP
              ABAP Programming.
            </span>
          </div>
          <div className="flex">
            <span className="font-bold w-16 shrink-0">2023</span>
            <span>Working as a Quality Engineer and building tools.</span>
          </div>
          <div className="flex">
            <span className="font-bold w-16 shrink-0">
              {new Date().getFullYear()}
            </span>
            <span>Open to bringing my skills to the world.</span>
          </div>
        </div>
      </section>

      {/* skills section */}
      <section className="mb-10">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 underline decoration-4 decoration-gray-300 dark:decoration-gray-600 underline-offset-4 w-fit">
          Skills
        </h3>
        <div className="space-y-3 text-gray-700 dark:text-gray-300">
          <div className="flex">
            <span className="font-bold w-32 shrink-0">Front-end</span>
            <span>React, Next.js, Tailwind CSS, Vue.js, HTML</span>
          </div>
          <div className="flex">
            <span className="font-bold w-32 shrink-0">Back-end</span>
            <span>PHP CodeIgniter, Node.js, Express.js, Python, C#, Java</span>
          </div>
          <div className="flex">
            <span className="font-bold w-32 shrink-0">Database</span>
            <span>PostgreSQL, MySQL, MSSQL, Oracle</span>
          </div>
          <div className="flex">
            <span className="font-bold w-32 shrink-0">Middleware</span>
            <span>
              SoftwareAG webMethods, Designer, API Gateway, Java microservices,
              PostgreSQL, Elasticsearch, kibana, redis, kafka
            </span>
          </div>
          <div className="flex">
            <span className="font-bold w-32 shrink-0">
              Testing / Automation
            </span>
            <span>Katalon Studio, JMeter, Postman, Grafana</span>
          </div>
          <div className="flex">
            <span className="font-bold w-32 shrink-0">Operating Systems</span>
            <span>
              Windows, macOS, RHEL Enterprise, Ubuntu, {"(Linux terminals)"}
            </span>
          </div>
          <div className="flex">
            <span className="font-bold w-32 shrink-0">Others</span>
            <span>
              git, Docker, CI/CD, Kubernetes, Jenkins, Agile methodologies,
              RESTful APIs
            </span>
          </div>
        </div>
      </section>

      {/* I Love Section */}
      <section className="mb-10">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 underline decoration-4 decoration-gray-300 dark:decoration-gray-600 underline-offset-4 w-fit">
          I ♥
        </h3>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Music Producing, Guitar, Traveling, Programming, <b>COFFEE</b>, DIY
          Guitar Pedals / Electronics, Currently self-studying for the JLPT N3
          Japanese Language Proficiency Test in December 2026.
        </p>
      </section>

      {/* On the Web Section */}
      <section>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 underline decoration-4 decoration-gray-300 dark:decoration-gray-600 underline-offset-4 w-fit">
          On the web
        </h3>
        <ul className="space-y-2">
          <li>
            <a
              href="https://github.com/pierreasd"
              target="_blank"
              className="flex items-center text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 hover:bg-teal-50 dark:hover:bg-teal-900/30 px-3 py-2 rounded-md transition-all w-fit font-medium"
            >
              <span className="mr-3 font-bold">@</span> Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/pierre-ibrahim-b685b5155/"
              target="_blank"
              className="flex items-center text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 hover:bg-teal-50 dark:hover:bg-teal-900/30 px-3 py-2 rounded-md transition-all w-fit font-medium"
            >
              <span className="mr-3 font-bold">in</span> LinkedIn
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
