
import React, { useState, useEffect } from "react";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isLoading, setIsLoading] = useState(true);

  const navLinks = [
    { id: "home", num: "01", label: "Home" },
    { id: "about", num: "02", label: "About Me" },
    { id: "skills", num: "03", label: "Skills" },
    { id: "projects", num: "04", label: "Projects" },
    { id: "hardware", num: "05", label: "Arduino & ESP" },
    { id: "experience", num: "06", label: "Experience" },
    { id: "contact", num: "07", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY + 180;

      for (const link of navLinks) {
        const element = document.getElementById(link.id);

        if (
          element &&
          position >= element.offsetTop &&
          position < element.offsetTop + element.offsetHeight
        ) {
          setActiveSection(link.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Initial page loading screen
  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1600);

    return () => clearTimeout(loadingTimer);
  }, []);


  const skills = [
    {
      category: "FRONTEND DEVELOPMENT",
      icon: "01",
      items: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
      category: "BACKEND DEVELOPMENT",
      icon: "02",
      items: ["Node.js", "Express.js", "Python", "Django", "REST APIs"],
    },
    {
      category: "DATABASE MANAGEMENT",
      icon: "03",
      items: ["MongoDB", "MySQL", "PostgreSQL"],
    },
    {
      category: "MOBILE APP DEVELOPMENT",
      icon: "04",
      items: [
        "React",
        "Capacitor",
        "Mobile UI Development",
        "Android Integration",
        "Native Device Integration",
      ],
    },
    {
      category: "TOOLS & TECHNOLOGIES",
      icon: "05",
      items: ["Git", "GitHub", "Postman", "Cloudinary", "VS Code"],
    },
    {
      category: "HARDWARE & INTEGRATION",
      icon: "06",
      items: [
        "Arduino",
        "ESP32",
        "ESP8266",
        "RFID",
        "IoT",
        "Biometric Integration",
        "3D Printing",
      ],
    },
  ];


  // Replace the link values with your actual project URLs.
  // Place screenshots inside public/images/projects/.
  const projects = [
    {
      number: "01",
      name: "AquaBill",
      category: "WATER BILLING MANAGEMENT SYSTEM",
      description:
        "A water utility billing management system designed to simplify customer management, meter readings, automated billing, payment monitoring, and business reporting.",
      technologies: ["React", "Node.js", "Database"],
      status: "Completed",
      color: "from-blue-600/20 to-cyan-500/5",
      image: "/images/projects/aquabill.png",
      link: "https://sample-aquabill.onrender.com",
    },
    {
      number: "02",
      name: "SakayGo",
      category: "MOBILE APPLICATION",
      description:
        "A transportation ticketing application featuring automated fare computation, route management, device authentication, offline transactions, and administrative management.",
      technologies: ["React", "Express.js", "MongoDB", "Capacitor"],
      status: "Completed",
      color: "from-indigo-600/20 to-blue-500/5",
      image: "/images/projects/sakaygo.png",
      link: "https://sakaygo-sample-mrcircuits.onrender.com/",
    },
    {
      number: "03",
      name: "BentaPOS",
      category: "POINT OF SALE SYSTEM",
      description:
        "A point of sale solution designed to help businesses manage sales transactions, products, inventory, and daily business operations.",
      technologies: ["React", "Node.js", "Database"],
      status: "Completed",
      color: "from-cyan-600/20 to-blue-500/5",
      image: "/images/projects/bentapos.png",
      link: "https://bentapos.onrender.com/",
    },
    {
      number: "04",
      name: "We Care Pet Care",
      category: "WEB APPLICATION",
      description:
        "A pet care management platform featuring customer management, appointment workflows, messaging, authentication, and camera integration.",
      technologies: ["Python", "Django", "JavaScript", "Tailwind CSS"],
      status: "Completed",
      color: "from-violet-600/20 to-blue-500/5",
      image: "/images/projects/we-care-pet-care.png",
      link: "https://pioduran-petcare.onrender.com/",
    },
    {
      number: "05",
      name: "Sales and Inventory Management System",
      category: "BUSINESS MANAGEMENT SYSTEM",
      description:
        "A business management application for organizing product records, monitoring inventory, recording sales, and generating useful business reports.",
      technologies: ["React", "Node.js", "MongoDB"],
      status: "Completed",
      color: "from-blue-600/20 to-indigo-500/5",
      image: "/images/projects/sales-inventory.png",
      link: "https://sales-inventory-system.onrender.com/",
    },
    {
      number: "06",
      name: "Job Portal",
      category: "WEB APPLICATION",
      description:
        "An online recruitment platform that connects employers and job seekers through job listings, applications, and applicant management.",
      technologies: ["React", "Node.js", "Database"],
      status: "Completed",
      color: "from-indigo-600/20 to-violet-500/5",
      image: "/images/projects/job-portal.png",
      link: "https://job-portal-management-system-3kes.onrender.com/",
    },
    {
      number: "07",
      name: "Online Registration System",
      category: "WEB APPLICATION",
      description:
        "An online registration platform that allows users to submit information digitally while administrators manage registration records.",
      technologies: ["React", "JavaScript", "Database"],
      status: "Completed",
      color: "from-cyan-600/20 to-blue-500/5",
      image: "/images/projects/online-registration.png",
      link: "https://pio-duran-online-registration.onrender.com/",
    },
    {
      number: "08",
      name: "Reusable QR Code Parking System",
      category: "PARKING MANAGEMENT SYSTEM",
      description:
        "A parking management solution using reusable QR codes to support vehicle identification, entry and exit monitoring, and parking operations.",
      technologies: ["React", "Node.js", "QR Code", "Database"],
      status: "Completed",
      color: "from-blue-600/20 to-cyan-500/5",
      image: "/images/projects/qr-parking.png",
      link: "",
    },
  {
    number: "09",
    name: "MakerTech IT Solutions",
    category: "BUSINESS WEBSITE",
    description:
      "A professional business website showcasing IT services, software development, electronics solutions, 3D printing, and technology products offered by MakerTech IT Solutions.",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Responsive Web Design",
    ],
    status: "Completed",
    color: "from-blue-600/20 to-cyan-500/5",
    image: "/images/projects/makertech.jpg",
    link: "https://makertech-official-website.onrender.com",
  },
  {
  number: "10",
  name: "PickleBook",
  category: "COURT RESERVATION MANAGEMENT SYSTEM",
  description:
    "A pickleball court reservation management system designed to simplify court bookings, manage court availability, organize reservation schedules, and streamline facility operations through an intuitive management platform.",
  technologies: ["React", "Node.js", "Express.js", "MongoDB"],
  status: "In Development",
  color: "from-emerald-600/20 to-teal-500/5",
  image: "/images/projects/picklebook.png",
  link: "",
},

  ];

  // Add your actual Arduino and ESP project names, photos, and links here.
  const hardwareProjects = [
    {
      number: "01",
      name: "Smart RFID Attendance",
      category: "RFID HARDWARE & SOFTWARE",
      description:
        "An employee attendance solution integrating RFID identification, software monitoring, and a custom 3D-printed hardware enclosure.",
      technologies: ["RFID", "Hardware", "Software", "3D Printing"],
      image: "/images/hardware/rfid-attendance.jpg",
      link: "https://smart-library-book-monitoring-and.onrender.com/",
      status: "Completed",
    },
    {
      number: "02",
      name: "Arduino Projects",
      category: "ARDUINO DEVELOPMENT",
      description:
        "Microcontroller-based projects involving electronic components, sensors, automation, and practical hardware integrations.",
      technologies: ["Arduino", "Sensors", "Electronics", "C++"],
      image: "/images/hardware/arduino-project.png",
      link: "https://crisjohn-arduino-projects.onrender.com",
      status: "Project Showcase",
    },
    {
      number: "03",
      name: "ESP32 / ESP8266 Projects",
      category: "IOT DEVELOPMENT",
      description:
        "Internet of Things projects using ESP microcontrollers for wireless communication, connected devices, and automation applications.",
      technologies: ["ESP32", "ESP8266", "IoT", "Wi-Fi"],
      image: "/images/hardware/esp-project.png",
      link: "https://crisjohn-esp-projects.onrender.com",
      status: "Project Showcase",
    },
  ];

  const experiences = [
    {
      number: "01",
      role: "IT Instructor",
      type: "EDUCATION & IT INSTRUCTION",
      company: "Southern Luzon Technological College Foundation, Inc. – Pioduran",
      period: "2024 – 2025",
      description:
        "Delivered IT instruction and guided students in developing their knowledge and practical skills in information technology.",
      technologies: ["IT Education", "Technical Instruction", "Computer Technology"],
    },
    {
      number: "02",
      role: "IT Programmer",
      type: "PROFESSIONAL EXPERIENCE",
      company: "MR Circuits and Security, Inc.",
      period: "2025 – Present",
      description:
        "Developing and maintaining software solutions, business applications, and technology systems to support operational requirements.",
      technologies: ["Software Development", "Web Applications", "Database Management"],
    },
    {
      number: "03",
      role: "Full-Stack Development",
      type: "SOFTWARE DEVELOPMENT",
      description:
        "Building full-stack applications with modern frontend frameworks, backend technologies, database systems, and API integrations.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
    },
    {
      number: "04",
      role: "Business System Development",
      type: "APPLICATION DEVELOPMENT",
      description:
        "Developing customized software solutions for business processes, including billing, inventory, management, and reporting systems.",
      technologies: ["React", "Django", "Database Design"],
    },
    {
      number: "05",
      role: "Hardware Integration",
      type: "IT & TECHNOLOGY",
      description:
        "Working with RFID, hardware components, device integration, and 3D-printed prototypes to create practical technology solutions.",
      technologies: ["Arduino", "ESP32", "RFID", "IoT", "3D Printing"],
    },
  ];

  const ProjectCard = ({ project }) => (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${project.name} project`}
      className="group block overflow-hidden rounded-xl border border-white/10 bg-[#080f20] transition duration-300 hover:-translate-y-1 hover:border-blue-500/40"
    >
      <div
        className={`relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br ${project.color || "from-blue-600/20 to-cyan-500/5"}`}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(59,130,246,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,.2) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        {project.image && (
          <img
            src={project.image}
            alt={`${project.name} screenshot`}
            className="absolute inset-0 h-full w-full object-cover opacity-75 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
        )}

        <div className="relative z-10 px-4 text-center">
          <span className="font-mono text-3xl font-bold tracking-wider text-white drop-shadow-lg sm:text-4xl">
            {project.name}
          </span>
          <p className="mt-3 font-mono text-[9px] tracking-[0.3em] text-blue-200">
            PROJECT / {project.number}
          </p>
        </div>

        <span className="absolute right-5 top-5 z-10 font-mono text-xs text-white">
          {project.number}
        </span>

        <span className="absolute bottom-5 left-5 z-10 font-mono text-[9px] tracking-widest text-white">
          {project.category}
        </span>

        <span className="absolute bottom-5 right-5 z-10 rounded-full bg-blue-600/90 px-3 py-1 text-[9px] font-semibold text-white opacity-0 transition group-hover:opacity-100">
          VIEW PROJECT ↗
        </span>
      </div>

      <div className="p-7">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="font-mono text-[9px] tracking-widest text-blue-400">
            {project.category}
          </span>

          <span
            className={`rounded-full px-3 py-1 text-[9px] ${
              project.status === "Completed"
                ? "bg-green-500/10 text-green-400"
                : "bg-blue-500/10 text-blue-400"
            }`}
          >
            {project.status}
          </span>
        </div>

        <h3 className="mt-4 text-xl font-bold text-white transition group-hover:text-blue-400 sm:text-2xl">
          {project.name}
        </h3>

        <p className="mt-4 text-sm leading-7 text-slate-400">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded border border-white/10 px-2.5 py-1.5 font-mono text-[10px] text-slate-400"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
          <span className="font-mono text-[10px] tracking-widest text-slate-500">
            EXPLORE PROJECT
          </span>
          <span className="text-blue-400 transition group-hover:translate-x-1">
            ↗
          </span>
        </div>
      </div>
    </a>
  );

  return (
    <div className="min-h-screen scroll-smooth overflow-x-hidden bg-[#030712] text-slate-100 selection:bg-blue-500/30 selection:text-blue-200">
      <style>{`
        @keyframes portfolioFadeIn {
          from { opacity: 0; transform: translateY(22px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes loaderSpin { to { transform: rotate(360deg); } }
        @keyframes loaderPulse {
          0%, 100% { opacity: .45; transform: scale(.96); }
          50% { opacity: 1; transform: scale(1.04); }
        }
        @keyframes loaderBar {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(250%); }
        }
        main > section { animation: portfolioFadeIn .85s ease-out both; }
        main > section:nth-child(2) { animation-delay: .08s; }
        main > section:nth-child(3) { animation-delay: .14s; }
        main > section:nth-child(4) { animation-delay: .20s; }
        main > section:nth-child(5) { animation-delay: .26s; }
        main > section:nth-child(6) { animation-delay: .32s; }
        main > section:nth-child(7) { animation-delay: .38s; }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>

      {/* FIRST-OPEN LOADING SCREEN */}
      {isLoading && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#030712] transition-opacity duration-500">
          <div className="flex flex-col items-center px-6 text-center">
            <div className="relative flex h-20 w-20 items-center justify-center">
              <div className="absolute inset-0 rounded-2xl border border-blue-500/30" style={{ animation: "loaderSpin 3s linear infinite" }} />
              <div className="absolute inset-2 rounded-xl border-2 border-t-blue-400 border-r-cyan-400 border-b-transparent border-l-transparent" style={{ animation: "loaderSpin 1.2s linear infinite" }} />
              <span className="font-mono text-xl font-bold text-blue-400" style={{ animation: "loaderPulse 1.4s ease-in-out infinite" }}>&lt;/&gt;</span>
            </div>
            <h2 className="mt-7 font-mono text-lg font-bold tracking-[0.2em] text-white">CRIS JOHN RAMIREZ</h2>
            <p className="mt-2 font-mono text-[10px] tracking-[0.3em] text-blue-400">INITIALIZING PORTFOLIO</p>
            <div className="mt-7 h-[2px] w-48 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-1/3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" style={{ animation: "loaderBar 1.1s ease-in-out infinite" }} />
            </div>
            <p className="mt-3 text-[10px] text-slate-500">Loading experience...</p>
          </div>
        </div>
      )}

      {/* TOP ACCENT */}
      <div className="fixed inset-x-0 top-0 z-50 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b border-white/[0.07] bg-[#030712]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a
            href="#home"
            onClick={() => setActiveSection("home")}
            className="group flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-blue-500/40 bg-blue-950/40 font-mono text-sm font-bold text-blue-400 shadow-[0_0_20px_rgba(37,99,235,0.15)] transition group-hover:border-blue-400">
              &lt;/&gt;
            </div>

            <div>
              <div className="font-mono text-base font-bold tracking-wider text-white">
                CRIS JOHN <span className="text-blue-500">RAMIREZ</span>
                <span className="text-blue-400">.</span>
              </div>
              <div className="text-[9px] tracking-[0.25em] text-slate-500">
                FULL-STACK DEVELOPER
              </div>
            </div>
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav
            aria-label="Primary Navigation"
            className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1.5 md:flex"
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setActiveSection(link.id)}
                className={`rounded-full px-3 py-2 text-xs font-medium transition-all duration-200 ${
                  activeSection === link.id
                    ? "bg-blue-600/20 text-blue-300 ring-1 ring-blue-500/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <span className="mr-1 font-mono text-[10px] text-blue-500">
                  {link.num}.
                </span>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-xs font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500"
            >
              Let's Talk <span>↗</span>
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
            className="rounded-lg border border-blue-500/30 bg-slate-950 p-2.5 text-blue-400 transition hover:bg-blue-950/40 md:hidden"
          >
            {isOpen ? (
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>

        {/* MOBILE NAVIGATION */}
        {isOpen && (
          <div className="border-t border-white/10 bg-[#030712] px-5 py-4 md:hidden">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => {
                    setActiveSection(link.id);
                    setIsOpen(false);
                  }}
                  className={`rounded-lg px-4 py-3 text-sm transition ${
                    activeSection === link.id
                      ? "bg-blue-950/60 text-blue-400"
                      : "text-slate-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span className="mr-3 font-mono text-xs text-blue-500">
                    {link.num}.
                  </span>
                  {link.label}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-3 rounded-lg bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Let's Talk
              </a>
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* HERO SECTION */}
        <section
          id="home"
          className="relative flex min-h-[calc(100vh-75px)] scroll-mt-24 items-center overflow-hidden"
        >
          <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />
          <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

          <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-5 py-24 lg:grid-cols-2 lg:px-8">
            {/* INTRODUCTION */}
            <div>
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-950/30 px-4 py-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
                <span className="font-mono text-[10px] tracking-[0.18em] text-blue-300">
                  AVAILABLE FOR OPPORTUNITIES
                </span>
              </div>

              <p className="mb-4 font-mono text-sm text-blue-400">
                Hello, I'm
              </p>

              <h1 className="text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
                CRIS JOHN RAMIREZ
                <span className="mt-2 block text-blue-500">Full-Stack</span>
                Developer.
              </h1>

              <p className="mt-7 max-w-xl text-sm leading-8 text-slate-400 sm:text-base">
                I design and develop modern web applications, mobile
                solutions, and business management systems that transform
                ideas into practical digital solutions.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="rounded-lg bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-500"
                >
                  Explore Projects <span className="ml-2">↗</span>
                </a>

                <a
                  href="#contact"
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-white transition hover:border-blue-500/50 hover:bg-blue-950/30"
                >
                  Contact Me
                </a>
              </div>

              <div className="mt-16 flex flex-wrap gap-9 border-t border-white/10 pt-8">
                {[
                  ["WEB", "Development"],
                  ["APP", "Development"],
                  ["API", "Integration"],
                ].map(([title, subtitle]) => (
                  <div key={title}>
                    <p className="font-mono text-2xl font-bold text-white">
                      {title}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">{subtitle}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* PROFILE PHOTO */}
            <div className="relative hidden items-center justify-center lg:flex">
              <div className="absolute inset-0 rounded-full bg-blue-600/10 blur-[100px]" />

              <div className="relative h-[420px] w-[340px] overflow-hidden rounded-2xl border border-blue-500/30 bg-[#080f20] shadow-[0_0_80px_rgba(37,99,235,0.12)]">
                <img
                  src="/images/profile.jpg"
                  alt="Cris John Ramirez"
                  className="h-full w-full object-cover object-center"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#030712]/50 via-transparent to-transparent" />
              </div>

              <div className="absolute -bottom-8 -left-8 rounded-xl border border-blue-500/20 bg-[#0b1220] px-5 py-4 shadow-xl">
                <p className="font-mono text-xs text-blue-400">
                  &lt; BUILD / CREATE / INNOVATE &gt;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section
          id="about"
          className="scroll-mt-24 border-t border-white/5 py-28"
        >
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-14">
              <p className="font-mono text-xs tracking-[0.25em] text-blue-400">
                02 // ABOUT ME
              </p>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                More Than Just Code.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
                A developer focused on building useful, reliable, and
                meaningful technology.
              </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold leading-relaxed text-slate-200">
                  Turning ideas into functional digital experiences.
                </h3>
                <p className="mt-6 text-sm leading-8 text-slate-400">
                  I am a developer passionate about creating software
                  applications and technology solutions that address
                  real-world problems.
                </p>
                <p className="mt-5 text-sm leading-8 text-slate-400">
                  My work involves building frontend interfaces, backend
                  systems, database architectures, mobile applications, and
                  hardware integrations. I enjoy working across different
                  areas of technology to create complete solutions.
                </p>
                <p className="mt-5 text-sm leading-8 text-slate-400">
                  I continuously explore new tools, improve my development
                  practices, and focus on writing maintainable and practical
                  code.
                </p>
                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-2 font-mono text-xs text-blue-400 transition hover:text-blue-300"
                >
                  LET'S CONNECT →
                </a>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    num: "01",
                    title: "Problem Solving",
                    desc: "Finding practical solutions.",
                  },
                  {
                    num: "02",
                    title: "Development",
                    desc: "Building reliable applications.",
                  },
                  {
                    num: "03",
                    title: "Integration",
                    desc: "Connecting systems and technologies.",
                  },
                  {
                    num: "04",
                    title: "Innovation",
                    desc: "Learning and improving continuously.",
                  },
                ].map((item) => (
                  <div
                    key={item.num}
                    className="rounded-xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-blue-500/30"
                  >
                    <span className="font-mono text-xs text-blue-500">
                      {item.num}
                    </span>
                    <h3 className="mt-6 text-sm font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs leading-6 text-slate-500">
                      {item.desc}
                    </p>
                    <div className="mt-5 h-1 w-8 rounded-full bg-blue-500" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section
          id="skills"
          className="scroll-mt-24 border-t border-white/5 bg-[#050b18] py-28"
        >
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <p className="font-mono text-xs tracking-[0.25em] text-blue-400">
              03 // TECHNICAL EXPERTISE
            </p>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Skills & Technologies
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
              Technologies and tools I work with to design, develop, and
              implement software solutions.
            </p>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((skill) => (
                <div
                  key={skill.category}
                  className="rounded-xl border border-white/10 bg-[#080f20] p-6 transition hover:-translate-y-1 hover:border-blue-500/30"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] tracking-widest text-blue-400">
                      {skill.category}
                    </span>
                    <span className="font-mono text-xs text-slate-600">
                      {skill.icon}
                    </span>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-slate-300 transition hover:border-blue-500/40 hover:text-blue-400"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SOFTWARE PROJECTS SECTION */}
        <section
          id="projects"
          className="scroll-mt-24 border-t border-white/5 py-28"
        >
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="font-mono text-xs tracking-[0.25em] text-blue-400">
                  04 // SELECTED WORK
                </p>
                <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                  Featured Projects
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
                  A selection of web applications, mobile solutions, and
                  business systems I've developed or worked on.
                </p>
              </div>
              <span className="font-mono text-xs text-slate-500">
                SOFTWARE PROJECT SHOWCASE
              </span>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard key={project.number} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* ARDUINO & ESP PROJECTS SECTION */}
        <section
          id="hardware"
          className="scroll-mt-24 border-t border-white/5 bg-[#050b18] py-28"
        >
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="font-mono text-xs tracking-[0.25em] text-blue-400">
                  05 // HARDWARE & IOT
                </p>
                <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                  Arduino & ESP Projects
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
                  Exploring hardware development, microcontrollers,
                  electronics, automation, and Internet of Things solutions.
                </p>
              </div>
              <span className="font-mono text-xs text-slate-500">
                HARDWARE PROJECT SHOWCASE
              </span>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {hardwareProjects.map((project) => (
                <ProjectCard key={project.number} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section
          id="experience"
          className="scroll-mt-24 border-t border-white/5 py-28"
        >
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <p className="font-mono text-xs tracking-[0.25em] text-blue-400">
              06 // WHAT I DO
            </p>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Development Experience
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
              Areas of development and technical work I focus on.
            </p>

            <div className="mt-14 space-y-5">
              {experiences.map((experience) => (
                <div
                  key={experience.number}
                  className="grid gap-6 rounded-xl border border-white/10 bg-[#080f20] p-6 transition hover:border-blue-500/30 sm:grid-cols-[80px_1fr] sm:p-8"
                >
                  <div className="font-mono text-xl font-bold text-blue-500">
                    {experience.number}
                  </div>
                  <div>
                    <p className="font-mono text-[10px] tracking-widest text-blue-400">
                      {experience.type}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold text-white">
                      {experience.role}
                    </h3>
                    {experience.company && (
                      <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span className="text-sm font-medium text-slate-300">{experience.company}</span>
                        <span className="font-mono text-[10px] text-blue-400">{experience.period}</span>
                      </div>
                    )}
                    <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                      {experience.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded border border-white/10 px-3 py-1.5 text-[10px] text-slate-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section
          id="contact"
          className="scroll-mt-24 border-t border-white/5 py-28"
        >
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="relative overflow-hidden rounded-2xl border border-blue-500/20 bg-[#080f20] px-6 py-20 sm:px-12">
              <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-600/10 blur-[100px]" />

              <div className="relative mx-auto max-w-3xl text-center">
                <p className="font-mono text-xs tracking-[0.25em] text-blue-400">
                  07 // GET IN TOUCH
                </p>
                <h2 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl">
                  Have an Idea?
                  <span className="block text-blue-500">Let's Build It.</span>
                </h2>
                <p className="mt-6 text-sm leading-8 text-slate-400">
                  I'm open to discussing development opportunities,
                  collaborations, and interesting projects. Let's connect
                  and create something meaningful.
                </p>

                <a
                  href="mailto:YOUR_EMAIL@example.com"
                  className="mt-9 inline-flex items-center gap-3 rounded-lg bg-blue-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-500"
                >
                  Get In Touch <span>↗</span>
                </a>

                <div className="mt-12 flex flex-wrap justify-center gap-7">
                  <a
                    href="https://github.com/crisjohnDev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-400 transition hover:text-blue-400"
                  >
                    GitHub ↗
                  </a>
                  <a
                    href="https://www.linkedin.com/in/crisjohnramirez091299"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-400 transition hover:text-blue-400"
                  >
                    LinkedIn ↗
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61593960652597"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-400 transition hover:text-blue-400"
                  >
                    Facebook ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#030712]">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-5 py-8 sm:flex-row sm:items-center lg:px-8">
          <div>
            <p className="font-mono text-sm font-bold tracking-widest text-white">
              CRIS JOHN<span className="text-blue-500"> RAMIREZ</span>.
            </p>
            <p className="mt-1 text-[10px] tracking-widest text-slate-500">
              FULL-STACK DEVELOPER
            </p>
          </div>

          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Cris John Ramirez. All rights
            reserved.
          </p>

          <a
            href="#home"
            className="font-mono text-xs text-blue-400 transition hover:text-blue-300"
          >
            BACK TO TOP ↑
          </a>
        </div>
      </footer>
    </div>
  );
}
