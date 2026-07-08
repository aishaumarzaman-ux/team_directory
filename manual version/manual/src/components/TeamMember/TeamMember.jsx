import SkillBadge from '../SkillBadge/SkillBadge';
import './TeamMember.css';

export default function TeamMember({
  name,
  role,
  age,
  isAdmin,
  skills,
  address,
  onFollow,
}) {
  return (
    <div className="team-member-info">
      <div className="member-header">
        {isAdmin && <span className="admin-badge">Admin</span>}
      </div>

      <p className="member-role"><strong>Role:</strong> {role}</p>
      <p className="member-age"><strong>Age:</strong> {age} years old</p>
      <p className="member-location">
        <strong>Location:</strong> {address.city}, {address.country}
      </p>

      <div className="skills-section">
        <strong>Skills:</strong>
        <div className="skills-list">
          {skills.map((skill) => (
            <SkillBadge key={skill} skill={skill} />
          ))}
        </div>
      </div>

      <div className="member-actions">
        <button
          type="button"
          className="follow-btn"
          onClick={() => onFollow(name)}
        >
          Follow
        </button>
      </div>
    </div>
  );
}
