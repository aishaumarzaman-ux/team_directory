import SkillBadge from '../SkillBadge/SkillBadge.jsx';
import './TeamMember.css';

// TeamMember receives every field about a person as individual props,
// plus the onFollow callback that was defined all the way up in App.jsx
// (this is the "prop drilling" part of the assignment).
function TeamMember({
  name,
  role,
  age,
  isAdmin = false,
  skills = [],
  address = { city: 'Unknown', country: 'Unknown' },
  onFollow,
}) {
  return (
    <>
      {/* Card already shows the name as its <h3> title, so here we
          pair the role with the Admin badge (shown only when isAdmin is true). */}
      <div className="member-header">
        <p className="member-role">{role}</p>
        {isAdmin && <span className="admin-badge">Admin</span>}
      </div>

      <ul className="member-details">
        <li>
          <span className="detail-label">Age</span>
          <span className="detail-value">{age}</span>
        </li>
        <li>
          <span className="detail-label">Location</span>
          <span className="detail-value">
            {address.city}, {address.country}
          </span>
        </li>
      </ul>

      <div className="skills-list">
        {/* Array mapping: each skill becomes a SkillBadge, each needs a key */}
        {skills.map((skill) => (
          <SkillBadge key={skill} skill={skill} />
        ))}
      </div>

      <button
        type="button"
        className="follow-button"
        aria-label={`Follow ${name}`}
        onClick={() => onFollow(name)}
      >
        Follow
      </button>
    </>
  );
}

export default TeamMember;
