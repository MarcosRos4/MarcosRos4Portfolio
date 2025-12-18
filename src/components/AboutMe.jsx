import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const AboutMe = () => {

    useEffect(() => {
  AOS.init({
    duration: 1000,
    once: false, // animation happens only once
  });
}, []);

    return <section id="about" className="py-24 px-4 relative">
        <div data-aos = "fade-up" className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Sobre <span className="text-primary">Mim</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Desenvolvedor de Software Full Stack</h3>

                    <p className="text-muted-foreground md:text-left">
                        Tenho 21 anos de idade, sou de Embu das Artes - SP e quero seguir a carreira de desenvolvedor porque
                        a habilidade de materializar produtos, serviços, utilidades e inutilidades através de um computador me parece mágica 🧙‍♂️
                    </p>

                    <p className="text-muted-foreground md:text-left">
                        Trabalhei como garçon, recepcionista, lavanderia, professor de inglês, garçon novamente. Nesse meio tempo
                        desenvolvi projetos com HTML, CSS, Javascript, React, Angular, React Native, API Rest, MySQL, SpringBoot, Node.js,
                        Java, Python, C#, Git, GitHub
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                    <a href="#contact" className="cosmic-button">
                        Entre em contato
                    </a>

                    <a href="/Resume/Marcos Rosa Desenvolvedor Full Stack 2026.pdf" download className="px-6 py-2 rounded-full  border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                        Baixe meu curriculo
                    </a>
                </div>
                </div>

                <div className='bg-card rounded-lg overflow-hidden shadow-xs card-hover flex justify-center'>
                    <img className='h-100 overflow-hidden object-cover' src="/Images/cropped-image.jpeg" alt="" />
                </div>
            </div>
        </div>
    </section>
}