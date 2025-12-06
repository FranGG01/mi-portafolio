import { Home, User, Wrench, Code, Send } from 'lucide-react';

function Navbar() {
    return (
        <nav className="fixed top-10 left-0 w-full bg-black/ backdrop-blur-md text-white z-50 ">
            <div className="
                mx-auto 
                w-fit 
                px-9 py-4 
                flex justify-center items-center

                rounded-2xl 
                bg-black/40 
                backdrop-blur-xl  
                border border-cyan-400/20

                shadow-[0_0_25px_rgba(0,200,255,0.35)]
            ">


                {/* menu principal */}
                <ul className="hidden md:flex items-center gap-10 text-base font-light">

                    <li className="group">
                        <a href="#inicio" className="flex items-center gap-2 hover:text-cyan-400 transition-colors duration-300">
                            <Home className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                            <span>Inicio</span>
                        </a>
                    </li>

                    <li className="group">
                        <a href="#sobre-mi" className="flex items-center gap-2 hover:text-cyan-400 transition-colors duration-300">
                            <User className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                            <span>Sobre Mí</span>
                        </a>
                    </li>

                    <li className="group">
                        <a href="#experiencia" className="flex items-center gap-2 hover:text-cyan-400 transition-colors duration-300">
                            <Wrench className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                            <span>Experiencia</span>
                        </a>
                    </li>

                    <li className="group">
                        <a href="#proyectos" className="flex items-center gap-2 hover:text-cyan-400 transition-colors duration-300">
                            <Code className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                            <span>Proyectos</span>
                        </a>
                    </li>

                    <li className="group">
                        <a href="#tecnologias" className="flex items-center gap-2 hover:text-cyan-400 transition-colors duration-300">
                            <svg className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                            <span>Tecnologías</span>
                        </a>
                    </li>

                    <li className="group">
                        <a href="#contacto" className="flex items-center gap-2 hover:text-cyan-400 transition-colors duration-300">
                            <Send className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                            <span>Contacto</span>
                        </a>
                    </li>

                </ul>

                {/* Responsive movil */}
                <button className="md:hidden text-white hover:text-cyan-400 transition-colors">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;