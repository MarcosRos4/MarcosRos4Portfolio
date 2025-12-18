import { Mail, MapPin,} from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const ContactMe = () =>{

   
useEffect(() => {
  AOS.init({
    duration: 1000,
    once: false, // animation happens only once
  });
}, []);


    return <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div data-aos = "fade-up" className="container mx-auto max-w-5xl" style={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
               Entre em <span className="text-primary">Contato</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                por favor me contrata
            </p>

            <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
                <div style={{border:"dashed 2px blue", width:"fit-content", padding:40, borderRadius:10}}>
                    <h3 className="text-2xl font-semibold mb-6">Informações de Contato</h3>

                    <div style={{display:"flex", justifyContent:"center"}}>
                        <div style={{display:'flex', flexDirection:"column", gap:20}}>
                            <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h-6 w-6 text-primary"/>
                            </div>

                            <div>
                                <h4 className="font-medium text-left">Email :</h4>
                                <a href=""
                                  className="text-muted-foreground text-left hover:text-primary transition-colors duration-300"
                                >
                                    marcosviniciuscrosa@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                               <FontAwesomeIcon icon={faLinkedin} size="lg" style={{color: "#0073e6",}} />
                            </div>

                            <div>
                                <h4 className="font-medium text-left">LinkedIn :</h4>
                                <a href="https://www.linkedin.com/in/marcos-rosa-575398210/"
                                 target="_blank"
                                  className="text-muted-foreground text-left hover:text-primary transition-colors duration-300"
                                >
                                    Marcos Rosa
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="h-6 w-6 text-primary"/>
                            </div>

                            <div>
                                <h4 className="font-medium text-left">Location :</h4>
                                <a
                                  className="text-muted-foreground text-left"
                                >
                                    Embu das Artes, São Paulo, Brasil
                                </a>
                            </div>
                        </div>
                        </div>
                    </div>

                   
                </div>

                

            </div>
        </div>
    </section>
}