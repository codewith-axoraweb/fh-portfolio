import { useEffect, useRef, useState } from "react";

import { MessageCircle } from "lucide-react";

import FloatingMailButton from "@/components/contact-form/floating-mail-button";

export default function ContactButton() {
  const refSendBtn = useRef<HTMLButtonElement>(null);
  const [isBtnVisible, setIsBtnVisible] = useState(false);

  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setIsBtnVisible(!entry.isIntersecting);
  };

  useEffect(() => {
    const btn = refSendBtn.current;
    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "100px",
      threshold: 0.1,
    });
    if (btn) observer.observe(btn);
    return () => {
      if (btn) observer.unobserve(btn);
    };
  }, []);

  const openWhatsApp = () => {
    window.open("https://wa.me/923091419331", "_blank");
  };

  return (
    <>
      {isBtnVisible && <FloatingMailButton openModal={openWhatsApp} />}

      <button
        ref={refSendBtn}
        onClick={openWhatsApp}
        className="inline-flex items-center gap-2 rounded-md bg-background px-3 py-2 text-blue-600 transition-transform duration-150 focus-within:scale-[1.05] hover:scale-[1.05] hover:bg-foreground hover:text-background"
      >
        <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7 lg:h-9 lg:w-9" />
        <span className="text-base font-semibold sm:text-lg lg:text-xl">
          Send Message
        </span>
      </button>
    </>
  );
}
