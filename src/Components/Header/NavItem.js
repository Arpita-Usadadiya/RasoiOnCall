
export default function NavItem({ text }) {
  return (
    <a
      href="#"
      className="hover:text-orange-400 transition cursor-pointer"
    >
      {text}
    </a>
  );
}