import { teams } from '../components/items';
import { Card, Container } from 'react-bootstrap';
import 'animate.css';

export function Team() {
  return (
    <section className="mt-10 bg-slate-100">
      <Container>
        <h2 className="text-orange-500 text-4xl text-center mb-5" style={{ fontFamily: 'Josefin Sans, sans-serif' }}>
          Meet our team
        </h2>
        <div className="flex flex-wrap justify-center animate__animated animate__fadeInRight">
          {teams.map((team) => (
            <Card key={team.id ?? 'default'} className="mb-4 text-center ml-3 md:w-60 w-full shadow-md hover:transform-scale-0.2">
              <img
                src={team.imageUrl}
                alt={team.name}
                className="h-40 w-40 rounded-full mx-auto my-4 object-cover p-2"
              />
              <h3 className="text-lg font-bold text-orange-500 mb-1 capitalize">
                {team.name}
              </h3>
              <p className="text-sm mb-2 capitalize">{team.role}</p>
              <a href={team.url} target="_blank" rel='noreferrer' className="text-sm text-blue-600 cursor-pointer pb-2" style={{ textDecoration: 'none' }}>
                LinkedIn
              </a>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
