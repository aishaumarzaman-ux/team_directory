import team from './data/team.js';
import Section from './components/Section/Section.jsx';
import Card from './components/Card/Card.jsx';
import TeamMember from './components/TeamMember/TeamMember.jsx';
import './App.css';

function App() {
  // onFollow is defined once, here in App.jsx, and passed straight
  // down as a prop to TeamMember, where it's used in the Follow button.
  // Card sits between App and TeamMember in the tree but never touches
  // onFollow itself — that pass-through is the "prop drilling" Task 5
  // wants you to notice (and which Context solves in Class 2).
  function handleFollow(name) {
    console.log(name);
  }

  return (
    <>
      <header className="app-header">
        <div>
          <span className="eyebrow">Internal Directory</span>
          <h1>Team Profile Directory</h1>
        </div>
        <span className="member-count">{team.length} members</span>
      </header>

      <Section title="Engineering & Design Team">
        {team.map((member, index) => (
          <Card key={member.id} title={member.name} index={index}>
            <TeamMember
              name={member.name}
              role={member.role}
              age={member.age}
              isAdmin={member.isAdmin}
              skills={member.skills}
              address={member.address}
              onFollow={handleFollow}
            />
          </Card>
        ))}
      </Section>

      <footer className="app-footer">
        <p>Built with React + Vite — Class 1 Assignment</p>
      </footer>
    </>
  );
}

export default App;
