import ContactButton from "@/components/contact-form/contact-button";
import { FacebookIcon, LinkedinIcon, TwitterIcon } from "@/components/icons";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center gap-20 bg-transparent px-6 py-8 sm:px-14 md:px-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-800 p-8 text-background sm:p-12 md:gap-12 lg:p-20">
        <div className="text-center">
          <span className="inline-block rounded-full bg-background px-3 py-1 text-xs font-semibold uppercase text-blue-600 md:text-sm lg:text-base">
            Get in touch
          </span>
        </div>
        <a
          href={`mailto:${siteMetadata.email}`}
          target="_blank"
          className="mb-6 cursor-pointer text-center text-2xl font-bold underline sm:text-4xl lg:text-6xl"
        >
          <span>works.alihamza</span>
          <br />
          <span>@gmail.com</span>
        </a>
        <div className="flex justify-center">
          <ContactButton />
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-between gap-8 text-center  md:flex-row md:justify-between lg:mx-auto lg:max-w-7xl">
        <span className="text-foreground">©2026 Ali Hamza</span>
        <div className="flex gap-8">
          <a
            href="https://www.facebook.com/profile.php?id=61558541441930"
            target="_blank"
            className="h-6 w-6"
            aria-label="link to Facebook"
          >
            <FacebookIcon className="hover:text-blue-600-foreground text-blue-600 transition-colors duration-150" />
          </a>
          <a
            href={siteMetadata.twitter}
            target="_blank"
            className="h-6 w-6"
            aria-label="link to Twitter"
          >
            <TwitterIcon className="hover:text-blue-600-foreground text-blue-600 transition-colors duration-150" />
          </a>
          <a
            href={siteMetadata.linkedin}
            target="_blank"
            className="h-6 w-6"
            aria-label="link to Linkedin"
          >
            <LinkedinIcon className="hover:text-blue-600-foreground text-blue-600 transition-colors duration-150" />
          </a>
        </div>
      </div>
    </footer>
  );
}
