import { MessageCircle } from "lucide-react";

export interface FloatingMailButtonProps {
  openModal: () => void;
}

export default function FloatingMailButton({
  openModal,
}: FloatingMailButtonProps) {
  return (
    <button
      onClick={openModal}
      className="items-center-justify-center fixed bottom-4 right-4 flex h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-800 p-2 text-background transition-colors duration-150 hover:from-blue-600 hover:to-blue-900 sm:bottom-8 sm:right-8 sm:h-14 sm:w-14 lg:h-16 lg:w-16"
    >
      <MessageCircle size={28} />
    </button>
  );
}
