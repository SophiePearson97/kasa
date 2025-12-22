import { useState } from "react";
import "./Collapse.scss";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="collapse">
      <button
        className="collapse__header"
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
      >
        <span className="collapse__title">{title}</span>
        <span className={`collapse__chevron ${isOpen ? "collapse__chevron--open" : ""}`}>
          ▲
        </span>
      </button>

      <div className={`collapse__content ${isOpen ? "collapse__content--open" : ""}`}>
        <div className="collapse__content-inner">{children}</div>
      </div>
    </section>
  );
}

export default Collapse;