"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="pl-2 list-disc">
        <li>MERN | MEAN | WordPress </li>
        <li>Linux</li>
        <li>Docker</li>
        <li>Kubernetes</li>
        <li>CI/CD</li>
        <li>GIT</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="pl-2 list-disc">
        <li>Computer Science</li>
        <li>UK College of Business & Computing</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="pl-2 list-disc">
        <li>BTec HND Computer Science</li>
        <li>AWS Cloud Practitioner</li>
        <li>AWS Solution Architect</li>
        <li>DevOps</li>
      </ul>
    ),
  },
  {
    title: "Expierence",
    id: "expierence",
    content: (
      <ul className="pl-2 list-disc">
        <li>AWS Solution Architect</li>
        <p> 2023 - present @ TSN Global</p>
        <li>WEB CONTENT MANAGE</li>
        <p>2022 - 2023</p>
        <li>APPLICATIONS DEVELOPER</li>
        <p>2021 - 2022 @ TSN Global🚀</p>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="items-center gap-8 px-4 py-8 md:grid md:grid-cols-2 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          alt="about-image"
          width={500}
          height={500}
        />
        <div className="flex flex-col h-full mt-4 text-left md:mt-0">
          <h2 className="mb-4 text-4xl font-bold text-white">About Me</h2>
          <p className="text-base lg:text-lg">
            Driven by a passion for technology and a knack for problem-solving,
            I excel as a Fullstack Developer with a focus on leveraging AWS
            cloud services. With 2 years of experience in the tech industry,
            I've mastered the art of crafting robust, scalable solutions that
            deliver tangible results.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("expierence")}
              active={tab === "expierence"}
            >
              {" "}
              Expierence{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
