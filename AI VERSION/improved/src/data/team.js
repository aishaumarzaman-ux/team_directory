// Static data source for the Team Profile Directory.
// Each object below intentionally contains every field type required
// by the assignment: number, string, boolean, array, and nested object.

const team = [
  {
    id: 1,
    name: 'Amina Raza',
    role: 'React Developer',
    age: 24,
    isAdmin: true,
    skills: ['React', 'JavaScript', 'CSS'],
    address: {
      city: 'Lahore',
      country: 'Pakistan',
    },
  },
  {
    id: 2,
    name: 'Daniel Cho',
    role: 'Backend Engineer',
    age: 29,
    isAdmin: false,
    skills: ['Node.js', 'Express', 'MongoDB'],
    address: {
      city: 'Seoul',
      country: 'South Korea',
    },
  },
  {
    id: 3,
    name: 'Sofia Martinez',
    role: 'UI/UX Designer',
    age: 27,
    isAdmin: false,
    skills: ['Figma', 'Prototyping', 'Design Systems'],
    address: {
      city: 'Madrid',
      country: 'Spain',
    },
  },
  {
    id: 4,
    name: 'James Okafor',
    role: 'Team Lead',
    age: 33,
    isAdmin: true,
    skills: ['React', 'Leadership', 'System Design'],
    address: {
      city: 'Lagos',
      country: 'Nigeria',
    },
  },
  {
    id: 5,
    name: 'Priya Nair',
    role: 'QA Engineer',
    age: 26,
    isAdmin: false,
    skills: ['Testing', 'Cypress', 'Automation'],
    address: {
      city: 'Bengaluru',
      country: 'India',
    },
  },
  {
    id: 6,
    name: 'Lucas Berg',
    role: 'DevOps Engineer',
    age: 31,
    isAdmin: false,
    skills: ['Docker', 'CI/CD', 'AWS'],
    address: {
      city: 'Berlin',
      country: 'Germany',
    },
  },
];

export default team;
