interface Certificate {
    name: string;
    link: string;
    skills: Array<string>;
    company: string;
}

export const certificates: Array<Certificate> = [
    {
        name: 'JavaScript: Test-Driven Development (ES6)',
        link: 'https://www.linkedin.com/learning/certificates/03de52109867764fe0bfb28bfe00af7976377d0d303337c1485df30a9f2b8d30',
        skills: ['JavaScript', 'Unit Testing'],
        company: 'LinkedIn',
    },
    {
        name: 'Learning Full-Stack JavaScript Development: MongoDB, Node, and React',
        link: 'https://www.linkedin.com/learning/certificates/08fb4fc5bf3049243bb217795fcb3093a9c627662d0170ade50e1d9d73f107f9',
        skills: ['Node.js', 'JavaScript', 'Databases', 'React.js', 'MongoDB'],
        company: 'LinkedIn',
    },
    {
        name: 'Learning Next.js',
        link: 'https://www.linkedin.com/learning/certificates/7d4221f4a24799debd064fd20f40067b4cf185fef429bacfc112ae6d4732607f',
        skills: ['JavaScript', 'React.js', 'Next.js', 'Server Side'],
        company: 'LinkedIn',
    },
    {
        name: 'MongoDB Cloud Essential Training',
        link: 'https://www.linkedin.com/learning/certificates/54c80fba871118261c3bd4b05e564a69ebb5eec1ba1fb1710a0d03cda115bdc9',
        skills: ['Databases', 'MongoDB'],
        company: 'LinkedIn',
    },
    {
        name: 'React Hooks',
        link: 'https://www.linkedin.com/learning/certificates/9aa59267d7daf691fd5b24eac27c41db8030e076ba7ca2e4ae566f6feda684a4',
        skills: ['JavaScript', 'React.js'],
        company: 'LinkedIn',
    },
    {
        name: 'Emmet: Fast and Efficient Web Coding',
        link: 'https://www.linkedin.com/learning/certificates/ab9f5bb3a65d8311a6ac1c71125096de458da8fb4d39cb995c3ae0d93a0028d4',
        skills: ['CSS', 'HTML'],
        company: 'LinkedIn',
    }
]