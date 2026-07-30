import Image from "next/image";

export interface FloatingMailButtonProps {
  openModal: () => void;
}

export default function FloatingMailButton({
  openModal,
}: FloatingMailButtonProps) {
  return (
    <button
      onClick={openModal}
      className="fixed bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-green-800 transition-all duration-150 hover:from-green-600 hover:to-green-900 sm:bottom-8 sm:right-8 sm:h-14 sm:w-14 lg:h-16 lg:w-16"
    >
      <Image
        src="/images/whatsapplogo.png"
        alt="WhatsApp"
        width={52}
        height={52}
        className="object-contain"
      />
    </button>
  );
}
