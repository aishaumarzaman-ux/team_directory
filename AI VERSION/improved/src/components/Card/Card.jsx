import './Card.css';

// Card is a wrapper component that demonstrates the "children" prop.
// It doesn't know or care what is inside it — it just wraps
// whatever is passed between its opening and closing tags.
function Card({ title, children, index }) {
  // Turns the .map() index App already has into a "N° 01" style
  // directory entry number — a small nod to the "directory" concept.
  const entryNumber = String(index + 1).padStart(2, '0');

  return (
    <div className="card">
      <span className="card-entry-number">No. {entryNumber}</span>
      <h3>{title}</h3>
      {children}
    </div>
  );
}

export default Card;
