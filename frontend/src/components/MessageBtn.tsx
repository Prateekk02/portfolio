import { FaRegEnvelope } from "react-icons/fa6";

const email = process.env.NEXT_PUBLIC_EMAIL_ADDRESS;

// Temporary until the FastAPI-backed contact page ships (Phase 6).
const MessageBtn = () => {
  if (!email) return null;

  return (
    <a
      href={`mailto:${email}`}
      aria-label="Send me an email"
      className="group fixed bottom-24 right-4 sm:right-6 md:bottom-28 md:right-8 z-30 flex items-center justify-center"
    >
      <div className="p-3 shadow-md border dark:shadow-lg dark:shadow-blue-950 rounded-full transition-transform group-hover:scale-110">
        <FaRegEnvelope
          className="text-neutral-600 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-500 transition-colors"
          size={20}
        />
      </div>
    </a>
  );
};

export default MessageBtn;
