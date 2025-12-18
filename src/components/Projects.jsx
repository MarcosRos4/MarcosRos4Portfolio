import { ArrowRight, ArrowUpRight, Github } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const projects = [
  {
    id: 1,
    title: "Truedamage",
    description:
      "Um site de anúncio de shows de uma banda fictícia, inspirado pelo site original do Lucas Inutilismo (https://inutilismo.com.br/)",
    image: "/Projects/truedamage.jpg",
    tags: ["React.js", "Supabase", "Vite", "Node.js"],
    url: "https://truedamage.marcosros4.com.br",
    git: "https://github.com/MarcosRos4/truedamage",
  },

  {
    id: 2,
    title: "Netflix Clone",
    description:
      "Só mais um clone da Netflix, consumindo a api da TMDB (The Movie DataBase)",
    image: "/Projects/netflixclone.jpg",
    tags: [
      "React Native",
      "Expo",
      "TMDB",
      "Vite",
      "Node.js"
    ],
    url: "https://netflixclone.marcosros4.com.br/",
    git: "https://github.com/MarcosRos4/Netflix-React-Native-Clone",
  },

  {
    id: 3,
    title: "The Bear Bar",
    description:
      "Site de bar com cardápio, nome inspirado na série The Bear. Usa uma API Rest própria que está em cold start",
    image: "/Projects/thebearbar.jpg",
    tags: ["Angular", "TypeScript", "Node.js", "API Rest", "SpringBoot"],
    url: "https://thebearbar.marcosros4.com.br/",
    git: "https://github.com/MarcosRos4/TheBearBarAngular",
  }
];

export const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // animation happens only once
    });
  }, []);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div data-aos="fade-up" className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Meus <span className="text-primary">Projetinhos</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Nenhum deles é muito sério, mas todos foram divertidos de fazer<br></br>
          Principalmente os que fiz com meus bons amigos Ivo, Thomas e Matulis
        </p>

        


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover trasnition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 border text-xs rounded-full bg-secondary text-secondary-foreground ">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl text-left font-semibold mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-left text-xs mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cosmic-button text-xs text-muted-foreground font-semibold flex gap-1"
                  >
                    Acesse <ArrowUpRight size={16} />
                  </a>

                  <a
                    href={project.git}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors duration-300"
                  >
                    <Github />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            target="_blank"
            href="https://github.com/abhicodes01"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Olha meu Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
