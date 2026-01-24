export default function SocialIcon({ children }) {
  return (
    <a
      href="#"
      className="w-10 h-10 flex items-center justify-center rounded-lg
                 bg-white/10 hover:bg-orange-500 hover:text-white
                 transition"
    >
      {children}
    </a>
  );
}