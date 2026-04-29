"use client";

import { useState } from "react";
import Image from "next/image";

type Project = {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  thumbnail: string;
  label: string;
};

const projects: Project[] = [
  {
    id: "document-management-system",
    title: "Permitting Document Management System",
    description: "Vue.js, C#, MSSQL",
    fullDescription: "Maintained a government relation Document Management System (DMS) using Vue.js for front-end and C# with MSSQL for back-end and RDBMS. The system simplifiies the management of government relation documents, including permits, licenses, and compliance records. It features role-based access control using LDAP, document versioning, and automated notifications for renewal deadlines, improving efficiency and ensuring regulatory compliance.",
    thumbnail: "/nhm.jpg", 
    label: "PT Nusa Halmahera Minerals / Full-stack Development",
  },
  {
    id: "talents-mobile",
    title: "Talents Mobile",
    description: "Ionic, Angular, PHP",
    fullDescription: "HRIS mobile app development using Ionic and Angular for front-end, Java Springboot back-end (I did not work on the backend) and PHP CodeIgniter for generating PDF and Excel timesheet, contract, and document reports. The app provides employees with access to their HR information, including but not limited to leave requests, payslips, company announcements, and geo location clock in clock out using Google Maps API. The app improved optimization of the HR processes. Clients include Astra Credit Company and Mandiri Tunas Finance.",
    thumbnail: "/ionic.webp", 
    label: "PT Phincon / Front-end Development",
  },
  {
    id: "hibank-financial",
    title: "Financial Transaction Middleware",
    description: "SoftwareAG webMethods, Java, PostgreSQL",
    fullDescription: "Developed a financial transaction middleware using SoftwareAG webMethods, Java, and PostgreSQL for PT Hibank. The middleware serves as an intermediary layer that facilitates secure and efficient communication between financial systems, including core banking, payment gateways, and billers. It handles transaction processing, data transformation, and routing. Financial transactions include inhouse and online fund transfer, balance inquiry, payment history (mutasi rekening), and other banking utilities such as change ATM PIN, block ATM card.",
    thumbnail: "/hibank.jpg", 
    label: "Hibank / Middleware Development",
  },
  {
    id: "autodebet-automation",
    title: "Autodebet Portal Automation",
    description: "Katalon Studio, Groovy",
    fullDescription: "Automating BNI Autodebet Portal using Katalon Studio with Groovy scripting, achieving 95% test coverage and reducing manual testing time by 80%. The project involved creating test cases for some functionalities and generating reports for BNI.",
    thumbnail: "/bni.jpg", 
    label: "BNI / Automation",
  },
  {
    id: "anomaly-detection",
    title: "Anomaly Detection Engine",
    description: "Python, Elasticsearch, SoftwareAG webMethods",
    fullDescription: "Developed a real-time anomaly detection engine using Python, using pyod and pysad libraries to monitor data streams from Elasticsearch indices. The system identifies outliers and sends alerts to telegram.",
    thumbnail: "/telkom.jpg",
    label: "Telkom Indonesia / Machine Learning",
  },
  {
    id: "performance-testing",
    title: "API Performance Framework",
    description: "JMeter, SoftwareAG API Gateway",
    fullDescription: "Designed and implemented a performance testing framework using JMeter to evaluate the scalability and responsiveness of APIs managed by SoftwareAG API Gateway. We achieved a reduced CPU usage by 10% and improved response times by ~20ms through iterative testing and optimization.",
    thumbnail: "/telkom.jpg",
    label: "Telkom Indonesia / Performance Testing and Tuning",
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description: "Next.js, Tailwind CSS",
    fullDescription: "Well, this.",
    thumbnail: "/vscode.png", 
    label: "Self / Front-end Development",
  },
];

export default function Projects() {
  // 3. State to track which project is currently selected for the modal
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="max-w-xl mx-auto pb-16">
      
      {/* Page Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">Projects</h2>
      </div>

      {/* 2-Column Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div 
            key={project.id} 
            onClick={() => setSelectedProject(project)}
            className="group flex flex-col cursor-pointer"
            role="button"
            tabIndex={0}
          >
            {/* Thumbnail Container */}
            <div className="relative w-full aspect-4/3 mb-3 overflow-hidden rounded-xl bg-gray-200 dark:bg-gray-700 border border-gray-100 dark:border-gray-700 shadow-sm transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-md">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-500 font-medium">
                {project.label}
              </div>
              <Image src={project.thumbnail} alt={project.title} fill className="object-cover" />
            </div>

            {/* Text Content */}
            <div className="text-center sm:text-left px-1">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* 4. Modal Overlay */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          
          {/* Dimmed Background Backdrop */}
          <div 
            className="absolute inset-0 bg-gray-900/60 dark:bg-gray-950/80 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedProject(null)}
          ></div>

          {/* Modal Content Box */}
          <div className="relative w-full max-w-lg bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]">
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center bg-black/40 hover:bg-black/60 text-white rounded-full transition-colors"
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>

            <div className="relative w-full h-64 bg-gray-200 dark:bg-gray-700 shrink-0">
               <div className="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400 font-medium">
                  {selectedProject.label} - Full Image
                </div>
              <Image src={selectedProject.thumbnail} alt={selectedProject.title} fill className="object-cover" />
            </div>

            {/* Modal Text Container (Scrollable) */}
            <div className="p-6 overflow-y-auto">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {selectedProject.title}
              </h3>
              <div className="inline-block bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 text-xs px-2 py-1 rounded-md font-semibold mb-4">
                {selectedProject.label}
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                {selectedProject.fullDescription}
              </p>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}