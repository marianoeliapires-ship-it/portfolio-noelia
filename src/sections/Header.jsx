import ParticlesBackground from "../components/ParticlesBackground";
import Typewriter from "../components/Typewriter";

export default function Header() {

    return (

        <div className="h-screen flex items-center justify-center text-white relative">

            <ParticlesBackground />

            <div className="relative z-10 text-center">

                <h1 className="text-[80px] font-bold tech-title glow-text">
                    NOELIA PIRES
                </h1>

                <h2 className="text-[28px] mt-4">
                    <Typewriter text="> Administradora de sistemas en formación" />
                </h2>

                <p className="mt-4 tracking-widest">
                    REDES · SOPORTE IT · TECNOLOGÍAS WEB
                </p>

            </div>

        </div>

    )

}