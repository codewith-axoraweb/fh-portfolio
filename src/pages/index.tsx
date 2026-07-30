import { NextSeo } from "next-seo";
import Head from "next/head";

import LandingHero from "@/components/landing-hero";
import SkillsShowcase from "@/components/skills/skills-showcase";
import ProjectCard from "@/components/projects/project-card";

import ExperienceShowcaseList from "@/components/experience/experience-showcase-list";

import { EXPERIENCE } from "@/data/experience";
import { EDUCATION } from "@/data/education";
import { SKILLS_DATA } from "@/data/skills";
import { PROJECTS_CARD } from "@/data/projects";

import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Faqeer Hussain | Full Stack MERN Developer"
        description="Full Stack MERN Developer with 3+ years experience. Expert in React, Next.js, Node.js, MongoDB & React Native."
        canonical={siteMetadata.siteUrl}
        openGraph={{
          url: siteMetadata.siteUrl,
          title: "Faqeer Hussain - Full Stack Developer",
          description:
            "Showcasing modern web and mobile applications built with MERN Stack.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: "Faqeer Hussain Portfolio",
            },
          ],
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        twitter={{ cardType: "summary_large_image" }}
      />

      <Head>
        <title>Faqeer Hussain | Full Stack Developer</title>

        <meta
          name="description"
          content="Professional Full Stack Developer specializing in React, Next.js, Node.js, Express.js, MongoDB, and modern web applications."
        />

        <link
          rel="icon"
          type="image/png"
          href="/images/projects/logos/logo.png"
        />

        <link rel="apple-touch-icon" href="/images/projects/logos/logo.png" />

        {siteMetadata.googleSiteVerification && (
          <meta
            name="google-site-verification"
            content={siteMetadata.googleSiteVerification}
          />
        )}
      </Head>

      {/* Home / Hero Section */}
      <section id="about">
        <LandingHero />
      </section>

      {/* Skills Section */}
      <section id="skills">
        <SkillsShowcase skills={SKILLS_DATA} />
      </section>

      {/* Experience Section */}
      <section id="experience">
        <ExperienceShowcaseList title="Experience" details={EXPERIENCE} />
      </section>

      {/* Education Section */}
      <section id="education">
        <ExperienceShowcaseList title="Education" details={EDUCATION} />
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="mx-auto mb-40 mt-6 w-full gap-20 px-6 sm:mt-12 sm:px-14 md:px-20"
      >
        <div className="mx-auto max-w-7xl">
          <h1 className="text-2xl font-semibold text-foreground md:text-4xl">
            Projects
          </h1>
          <div className="my-2">
            <span className="text-sm text-muted-foreground">
              Here are some of the projects I&apos;d like to share
            </span>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2">
            {PROJECTS_CARD.map((card, index) => (
              <ProjectCard key={index} {...card} />
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-5xl text-center text-foreground md:mt-28">
            <span className="text-xl font-bold md:text-2xl">
              I am currently building new projects and expanding my skills.
            </span>
            <p className="mt-10 text-base md:text-xl">
              Visit my GitHub for more projects:{" "}
              <a
                href={`${siteMetadata.github}?tab=repositories`}
                target="_blank"
                className="font-semibold text-blue-600 underline underline-offset-2 hover:text-blue-600/70"
              >
                GitHub
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
