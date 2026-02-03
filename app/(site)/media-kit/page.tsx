"use client";
import { Lightbulb, Eye } from "lucide-react"; // icons for mission & vision
import { Cpu, Smartphone, CheckCircle, Database } from "lucide-react"; // example icons
import { Linkedin, Instagram, Briefcase } from "lucide-react";
import Image from "next/image";
import { Globe, Calendar, MapPin, User, Bot, Cloud } from "lucide-react";
import { CreditCard, Heart, ShoppingCart, Truck, Server } from "lucide-react";
import { FaPython, FaJs, FaReact, FaNodeJs, FaDocker, FaAws } from "react-icons/fa";


export default function HeroSection() {
  const services = [
    {
      title: "AI-Powered Software Automation",
      description: "Custom automation tools that streamline business operations.",
      icon: Cpu,
      color: "text-blue-600",
    },
    {
      title: "Cloud Engineering & DevOps",
      description: "Scalable, secure, and cost-optimized infrastructure solutions.",
      icon: Cloud,
      color: "text-green-500",
    },
    {
      title: "Custom App Development",
      description: "Web, mobile, and AI-integrated applications built for speed and scale.",
      icon: Smartphone,
      color: "text-purple-600",
    },
    {
      title: "Quality Assurance Automation",
      description: "Intelligent QA systems that reduce testing time and improve reliability.",
      icon: CheckCircle,
      color: "text-yellow-500",
    },
    {
      title: "LLM Integrations & AI Agents",
      description: "Leveraging GPT-based models and on-device AI for enterprise-grade solutions.",
      icon: Bot,
      color: "text-red-500",
    },
  ];
  const clients = [
    { name: "Fintech", icon: CreditCard, color: "text-blue-600" },
    { name: "Healthcare", icon: Heart, color: "text-red-500" },
    { name: "Retail", icon: ShoppingCart, color: "text-yellow-500" },
    { name: "Logistics", icon: Truck, color: "text-green-500" },
    { name: "SaaS", icon: Cloud, color: "text-purple-600" },
  ];

  const technologies = [
    { name: "Python", icon: FaPython, color: "text-blue-700" },
    { name: "JavaScript", icon: FaJs, color: "text-yellow-500" },
    { name: "TypeScript", icon: FaJs, color: "text-blue-600" },
    { name: "React", icon: FaReact, color: "text-blue-500" },
    { name: "Node.js", icon: FaNodeJs, color: "text-green-600" },
    { name: "Google Cloud", icon: Cloud, color: "text-blue-400" },
    { name: "AWS", icon: FaAws, color: "text-orange-500" },
    { name: "OpenAI API", icon: Cpu, color: "text-purple-600" },
    { name: "LangChain", icon: Server, color: "text-blue-700" },
    { name: "TensorFlow", icon: Cpu, color: "text-orange-400" },
    { name: "Docker", icon: FaDocker, color: "text-blue-600" },
    { name: "Kubernetes", icon: Server, color: "text-blue-500" },
    { name: "Elasticsearch", icon: Database, color: "text-yellow-600" },
  ];

  return (
    <section className="relative w-full mt-[80px] md:mt-[120px]">
      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Heading */}
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Company Overview
            </h2>
            <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
              Discover <span className="font-semibold text-blue-600">CodeAutomation.ai</span>, our story, mission, and the people behind the innovation.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
            {/* First Row: 3 cards */}
            {[0, 1, 2].map((idx) => {
              const card = [
                {
                  title: "Website",
                  icon: <Globe className="w-6 h-6 text-white" />,
                  content: <a href="https://www.codeautomation.ai" target="_blank" className="text-blue-600 hover:underline font-medium">www.codeautomation.ai</a>,
                  color: "bg-blue-600",
                },
                {
                  title: "Founded",
                  icon: <Calendar className="w-6 h-6 text-white" />,
                  content: <p className="text-gray-700 font-medium">2020</p>,
                  color: "bg-yellow-400",
                },
                {
                  title: "Headquarters",
                  icon: <MapPin className="w-6 h-6 text-white" />,
                  content: <p className="text-gray-700 font-medium">Naperville, Illinois, USA</p>,
                  color: "bg-green-400",
                },
              ][idx];
              return (
                <div key={idx} className="flex flex-col justify-between p-8 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition transform hover:-translate-y-3 w-full max-w-sm">
                  <div className="flex items-center mb-6">
                    <div className={`flex items-center justify-center w-14 h-14 rounded-full ${card.color} mr-4`}>
                      {card.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{card.title}</h3>
                  </div>
                  <div className="text-gray-700">{card.content}</div>
                </div>
              );
            })}

            {/* Second Row: 4th and 5th cards centered */}
            <div className="flex flex-wrap justify-center gap-10 col-span-full w-full">
              {[
                {
                  title: "Founder & CEO",
                  icon: <User className="w-6 h-6 text-white" />,
                  content: <p className="text-gray-700 font-medium">Adnan Ghaffar</p>,
                  color: "bg-purple-500",
                },
                {
                  title: "Industry",
                  icon: <Cpu className="w-6 h-6 text-white" />,
                  content: <p className="text-gray-700 font-medium">
                    Artificial Intelligence, Automation, Software Development, Cloud Computing
                  </p>,
                  color: "bg-blue-500",
                }
              ].map((card, idx) => (
                <div key={idx} className="flex flex-col justify-between p-8 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition transform hover:-translate-y-3 w-full max-w-sm">
                  <div className="flex items-center mb-6">
                    <div className={`flex items-center justify-center w-14 h-14 rounded-full ${card.color} mr-4`}>
                      {card.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{card.title}</h3>
                  </div>
                  <div className="text-gray-700">{card.content}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Mission Statement */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Mission Statement
            </h2>
            <p className="text-gray-700 text-md mt-4 max-w-3xl mx-auto leading-relaxed">
              <span className="font-semibold text-blue-600">CodeAutomation.ai</span> empowers businesses to accelerate digital transformation through intelligent automation, AI-driven development, and scalable cloud solutions. Our mission is to simplify complex workflows using AI and automation bridging the gap between innovation and efficiency.
            </p>
          </div>

          {/* What We Do */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              What We Do
            </h3>
            <p className="text-gray-700 text-md max-w-3xl mx-auto mb-12">
              <span className="font-semibold text-blue-600">CodeAutomation.ai</span> specializes in delivering cutting-edge solutions across multiple domains.
            </p>

            <div className="flex flex-wrap justify-center gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2 border-l-4 border-blue-600 w-full sm:w-[45%] lg:w-[30%]"
                >
                  <div className="flex items-center mb-4">
                    <service.icon className={`w-8 h-8 mr-4 ${service.color}`} />
                    <h4 className="text-xl text-left font-semibold text-gray-900">{service.title}</h4>
                  </div>
                  <p className="text-gray-700 text-left leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>


      <div className="px-6 max-w-7xl mx-auto py-16 flex flex-col lg:flex-row items-start gap-12">
        {/* Left Content */}
        <div className="lg:w-1/2 flex flex-col gap-6">
          <h1 className="text-3xl font-extrabold text-gray-900 leading-snug">
            Transform Your Business with <span className="text-blue-600">CodeAutomation’s Smart</span>, <span className="text-blue-600">Affordable AI</span> & <span className="text-blue-600">Automation Solutions</span>
          </h1>

          <p className="text-gray-700 text-md">
            Tired of wasting time on <span className="font-semibold text-gray-900">manual tasks</span>? Let <span className="font-semibold text-blue-600">CodeAutomation’s AI Workflow automation</span> solutions help you focus on what truly drives your business forward.
          </p>

          <p className="text-gray-700 text-md">
            At <span className="font-semibold text-blue-600">CodeAutomation</span>, we specialize in <span className="font-semibold text-blue-600">AI-powered software development</span>, <span className="font-semibold text-blue-600">mobile app development</span>, and <span className="font-semibold text-blue-600">workflow automation</span> to make your business smarter, faster, and more efficient.
          </p>

          <p className="text-gray-700 text-md">
            We’re a <span className="font-semibold text-gray-900">US-based company</span> with a unique blend of <span className="font-semibold text-blue-600">top-tier skillset</span> and <span className="font-semibold text-blue-600">affordable pricing</span>, helping businesses like yours scale seamlessly and automate the tedious tasks that slow you down.
          </p>

          <p className="text-gray-700 text-md ">
            With <span className="font-semibold text-blue-600">CodeAutomation</span>, you’re not just getting a service – you’re getting a <span className="font-semibold text-gray-900">partner</span> committed to helping you grow. Our AI solutions empower you to make better decisions, improve productivity, and stay ahead of the competition.
          </p>

          <p className="text-gray-700 text-md">
            Let’s work together to turn your business challenges into <span className="font-semibold text-blue-600">opportunities for growth</span>.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
            <a
              href="https://calendly.com/adnanghaffar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-center font-semibold px-8 py-4 rounded-lg shadow-lg transition transform hover:scale-105"
            >
              Book Your Meeting Now
            </a>
            <p className="text-gray-700 text-sm sm:text-md">
              15-minute strategy session to explore your vision
            </p>
          </div>

        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src="/tech-ai.jpg"
            alt="AI & Automation Illustration"
            className="w-full lg:max-w-md rounded-xl shadow-2xl"
          />
        </div>
      </div>

      <section className="w-full py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-12 items-stretch">

          {/* Mission Card */}
          <div className="relative lg:w-1/2 bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2">
            <div className="flex items-center mb-6">
              <Lightbulb className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-gray-700 text-md leading-relaxed">
              We help businesses transform their operations through <span className="font-semibold text-blue-600">smart automation</span>.
              At <span className="font-semibold text-blue-600">CodeAutomation</span>, our AI-driven systems boost <span className="font-semibold">accuracy</span>, reduce <span className="font-semibold">costs</span>,
              and increase <span className="font-semibold">efficiency</span>, so your business can <span className="font-semibold text-blue-600">scale faster</span> and focus on growth.
            </p>
          </div>

          {/* Vision Card */}
          <div className="relative lg:w-1/2 bg-gradient-to-tr from-blue-50 via-blue-100 to-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2">
            <div className="flex items-center mb-6">
              <Eye className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-gray-700 text-md leading-relaxed italic">
              &quot;We believe in a future where <span className="font-semibold text-blue-600">automation isn’t just for big companies – it’s for everyone</span>.
              Our goal is to make <span className="font-semibold text-blue-600">AI-driven solutions simple, effective, and available</span> to businesses of all sizes, helping them thrive in a <span className="font-semibold">fast-moving world</span>.&quot;
            </p>
          </div>

        </div>
      </section>


      <section className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Key Clients */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Key Clients
            </h2>
            <p className="text-gray-700 text-md mt-4 max-w-3xl mx-auto leading-relaxed">
              Our clients include startups, enterprises, and global organizations across multiple industries.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
            {clients.map((client, index) => (
              <div key={index} className="flex flex-col items-center bg-gray-50 p-6 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
                <client.icon className={`w-10 h-10 mb-4 ${client.color}`} />
                <p className="text-gray-900 font-semibold text-center">{client.name}</p>
              </div>
            ))}
          </div>

          {/* Core Technologies */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Core Technologies
            </h3>
            <p className="text-gray-700 text-md max-w-3xl mx-auto mb-12">
              We leverage modern tools and frameworks to build scalable and efficient solutions.
            </p>

            <div className="flex flex-wrap justify-center gap-8">
              {technologies.map((tech, index) => (
                <div key={index} className="flex flex-col items-center bg-gray-50 p-4 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 w-28">
                  <tech.icon className={`w-10 h-10 mb-2 ${tech.color}`} />
                  <p className="text-gray-900 font-medium text-center text-sm">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
              Our Expertise in <span className="text-blue-600">AI, Automation, and Custom Software Solutions</span>
            </h2>
            <p className="text-gray-700 text-md max-w-3xl mx-auto">
              At CodeAutomation, we focus on delivering intelligent solutions designed to help your business grow. From AI-powered systems to mobile app development, our services are tailored to solve real-world challenges, making your operations smarter, faster, and more efficient.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="w-full md:w-[48%] lg:w-[30%] bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
              >
                <service.icon className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-700 text-md leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">

          {/* Founder Image */}
          <div className="lg:w-1/3 flex justify-center lg:justify-start">
            <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-xl">
              <Image
                src="/ceo-adnan.png" // replace with founder's photo
                alt="Adnan Ghaffar"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Founder Bio */}
          <div className="lg:w-2/3">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              Adnan Ghaffar
            </h2>
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Founder & CEO, CodeAutomation</h3>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Adnan Ghaffar brings over <span className="font-semibold text-blue-600">10 years of experience</span> in AI software development, mobile app development, and automation solutions. Based in Chicago, he founded CodeAutomation over 7 years ago with the goal of delivering intelligent, scalable solutions that help businesses grow and innovate.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed">
              In addition to his role as a business leader, Adnan is an <span className="font-semibold text-blue-600">AI researcher</span>, contributing to American journals on machine learning, predictive analytics, and the future of automation. His work continues to influence AI-driven solutions that solve real-world business challenges.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Under his leadership, CodeAutomation has become a <span className="font-semibold text-blue-600">leader in AI software development</span>, specializing in AI-powered applications and custom mobile apps. Adnan’s team builds scalable solutions that connect businesses with customers and improve internal operations.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Adnan is also a regular contributor to Forbes, sharing insights on automation, AI innovations, and business growth strategies. His vision is to continue innovating and delivering custom software solutions that empower businesses to stay ahead in a competitive market.
            </p>

            {/* Social / Links */}
            <div className="flex items-center text-sm md:text-md gap-6 mt-4">
              <a href="https://www.linkedin.com/in/adnanghaffar007/" target="_blank" className="flex items-center text-blue-600 hover:text-blue-800 font-semibold">
                <Linkedin className="h-3 w-3 md:w-5 md:h-5 mr-2" /> LinkedIn
              </a>
              <a href="https://www.instagram.com/itsadnanghaffar/" target="_blank" className="flex items-center text-pink-500 hover:text-pink-700 font-semibold">
                <Instagram className="h-3 w-3 md:w-5 md:h-5 mr-2" /> Instagram
              </a>
              <a
                href="https://adnanghaffar.com/" // replace with your portfolio URL
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-800 hover:text-gray-900 font-semibold"
              >
                <Briefcase className="h-3 w-3 md:w-5 md:h-5 mr-2" /> Portfolio
              </a>
            </div>
          </div>
        </div>
      </section>

    </section>
  );
}
