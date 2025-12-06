import { ArrowDown, Terminal } from "lucide-react";

function Hero() {
    return (
        <section
            id="inicio"
            className="relative min-h-screen w-full flex items-center justify-center text-white 
                       bg-cover bg-center bg-no-repeat overflow-hidden"
            style={{ backgroundImage: "url('/hero.jpg')" }}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-cyan-900/40" />

            <div className="relative max-w-5xl px-6 mx-auto text-center">

                <h2 className="text-2xl md:text-3xl font-bold mb-3">
                    <span className="text-gray-300">El portfolio de</span>
                    <span className="text-cyan-400 ml-2 font-mono">Francisco García</span>
                </h2>

                <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-none mb-6">
                    <span className="block text-white">
                        Full<span className="text-cyan-400">Stack</span>
                    </span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-600 
                                     text-5xl md:text-6xl lg:text-7xl mt-2">
                        Developer
                    </span>
                </h1>

                <div className="max-w-2xl mx-auto mb-10">
                    <p className="text-lg md:text-xl text-gray-200 mb-3 leading-relaxed">
                        Construyendo experiencias digitales desde el
                        <span className="text-cyan-400 font-semibold"> código hasta el pixel</span>.
                    </p>

                    <p className="text-base md:text-lg text-gray-400 mb-4 italic">
                        Bienvenidos a mi rincón digital — espero que os guste.
                    </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
                    <a
                        href="#proyectos"
                        className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 
                                   rounded-lg font-bold text-white
                                   hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]
                                   hover:scale-105 transition-all duration-300
                                   flex items-center gap-2"
                    >
                        Comenzar
                        <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                    </a>
                </div>

                {/* redes sociales*/}
                <div className="flex justify-center items-center gap-4">
                    <div className="flex gap-6">
                        <a
                            href="https://github.com/FranGG01"
                            target="_blank"
                            rel="noreferrer"
                            className="group relative w-20 h-20 rounded-lg border border-cyan-400/30 
                                       bg-black/40 backdrop-blur-md 
                                       flex items-center justify-center 
                                       hover:border-cyan-400 hover:bg-cyan-400/10
                                       transition-all duration-300"
                        >
                            <svg className="w-10 h-10 text-cyan-400 group-hover:scale-110 transition-transform"
                                viewBox="0 0 24 24"
                                fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            <div className="absolute inset-0 rounded-lg bg-cyan-400/0 group-hover:bg-cyan-400/5 blur-xl transition-all" />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/francisco-garcía-garcía"
                            target="_blank"
                            rel="noreferrer"
                            className="group relative w-20 h-20 rounded-lg border border-cyan-400/30 
                                       bg-black/40 backdrop-blur-md 
                                       flex items-center justify-center 
                                       hover:border-cyan-400 hover:bg-cyan-400/10
                                       transition-all duration-300"
                        >
                            <svg className="w-10 h-10 text-cyan-400 group-hover:scale-110 transition-transform"
                                viewBox="0 0 24 24"
                                fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                            <div className="absolute inset-0 rounded-lg bg-cyan-400/0 group-hover:bg-cyan-400/5 blur-xl transition-all" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
                <span className="text-xs text-gray-400 font-mono">scroll</span>
                <div className="w-6 h-10 rounded-full border-2 border-cyan-400/30 flex items-start justify-center p-2">
                    <div className="w-1 h-2 bg-cyan-400 rounded-full" />
                </div>
            </div>
        </section>
    );
}

export default Hero;