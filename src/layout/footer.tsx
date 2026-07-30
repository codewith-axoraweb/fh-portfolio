import ContactButton from "@/components/contact-form/contact-button";
import { FacebookIcon, LinkedinIcon, TwitterIcon } from "@/components/icons";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="flex w-full flex-col items-center gap-12 bg-transparent px-4 py-8 sm:gap-16 sm:px-8 md:px-20"
    >
      {/* Contact Card */}
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-8 text-white shadow-2xl sm:gap-8 sm:px-10 sm:py-12 lg:px-20 lg:py-20">
        <div className="text-center">
          <span className="inline-block rounded-full bg-white px-4 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700 sm:text-sm">
            Let's Work Together
          </span>

          <h2 className="mt-5 text-2xl font-bold leading-tight sm:text-4xl lg:text-6xl">
            Need a MERN Stack Developer?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl px-1 text-sm leading-6 text-blue-100 sm:px-0 sm:text-base md:text-lg">
            I'm available for freelance projects, remote jobs, and long-term
            collaborations. Have an idea or project? Let's discuss it on
            WhatsApp and build something amazing together.
          </p>
        </div>

        <div className="flex justify-center">
          <ContactButton />
        </div>

        <p className="text-center text-xs text-blue-100 sm:text-sm">
          ⚡ Usually replies within a few minutes on WhatsApp.
        </p>
      </div>

      {/* Footer Bottom */}
      <div className="flex w-full max-w-7xl flex-col items-center justify-between gap-6 text-center md:flex-row">
        <span className="text-sm text-foreground sm:text-base">
          © 2026 Faqeer Hussain. All Rights Reserved.
        </span>

        <div className="flex items-center gap-6 sm:gap-8">
          <a
            href="https://www.facebook.com/profile.php?id=61558541441930"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="transition-transform duration-300 hover:scale-110"
          >
            <FacebookIcon className="h-6 w-6 text-blue-600" />
          </a>

          <a
            href={siteMetadata.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="transition-transform duration-300 hover:scale-110"
          >
            <TwitterIcon className="h-6 w-6 text-blue-600" />
          </a>

          <a
            href={siteMetadata.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-transform duration-300 hover:scale-110"
          >
            <LinkedinIcon className="h-6 w-6 text-blue-600" />
          </a>
        </div>
      </div>
    </footer>
  );
}