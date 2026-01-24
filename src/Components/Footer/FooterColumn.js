export default function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="text-white text-lg font-semibold mb-5">
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map((link, i) => (
          <li key={i}>
            <a
              href="#"
              className="hover:text-white transition"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
