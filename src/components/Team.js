import { teams } from '../components/items';
import { Card, Container } from 'react-bootstrap';
import 'animate.css';

export function Team() {
  return (
    <section className="mt-10 bg-[#f8f6f1] py-[10%]">
      <Container>
        <h2 className="text-[#fe8d34] font-bold text-4xl text-center" style={{ fontFamily: 'Josefin Sans, sans-serif' }}>
          Meet our team
        </h2>
        <img src="./images/vine.png" alt="a vine" className='mx-auto block mb-7' />
        <div className="flex flex-wrap justify-center animate__animated animate__fadeInRight">
          {teams.map((team) => (
            <Card key={team.id ?? 'default'} className="mb-4 text-center ml-3 md:w-60 w-full shadow-md transform hover:-translate-y-1 transition duration-200 ease-in-out">
              <img
                src={team.imageUrl}
                alt={team.name}
                className="h-40 w-40 rounded-full mx-auto my-4 object-cover p-2"
              />
              <h3 className="text-lg font-bold text-orange-500 mb-1 capitalize">
                {team.name}
              </h3>
              <p className="text-sm mb-2 capitalize block mx-auto">{team.role}</p>
              <a href={team.url} target="_blank" rel='noreferrer' className="text-sm text-blue-600 cursor-pointer pb-2 " style={{ textDecoration: 'none' }}>
                LinkedIn
              </a>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
