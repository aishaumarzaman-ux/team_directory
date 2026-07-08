import team from './data/team';
import Section from './components/Section/Section';
import Card from './components/Card/Card';
import TeamMember from './components/TeamMember/TeamMember';
import './App.css';

function App() {
  // onFollow is defined once, here in App.jsx.
  // It is then passed down as a prop through the component tree
  // (App -> Card -> TeamMember) to the Follow button — this is the
  // prop drilling Task 5 wants you to demonstrate.
  const onFollow = (name) => {
    console.log(name);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Team Profile Directory</h1>
        <p className="app-subtitle">Meet the people behind the product</p>
      </header>

      <Section title="Directory Profiles">
        {team.map((member) => (
          <Card key={member.id} title={member.name}>
            <TeamMember
              name={member.name}
              role={member.role}
              age={member.age}
              isAdmin={member.isAdmin}
              skills={member.skills}
              address={member.address}
              onFollow={onFollow}
            />
          </Card>
        ))}
      </Section>
    </div>
  );
}

export default App;
