import './Section.css';

// Section groups related content under a heading.
// It also uses the "children" prop, just like Card.
function Section({ title, children }) {
  return (
    <section className="section">
      <h2>{title}</h2>
      <div className="content">{children}</div>
    </section>
  );
}

export default Section;
