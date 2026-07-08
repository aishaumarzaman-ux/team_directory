import './SkillBadge.css';

// SkillBadge receives a single "skill" string prop and renders it
// as a small styled badge.
function SkillBadge({ skill = 'General' }) {
  return <span className="skill-badge">{skill}</span>;
}

export default SkillBadge;
