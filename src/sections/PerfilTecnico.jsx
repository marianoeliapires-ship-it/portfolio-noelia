import qr from "../assets/qr.png"
import foto from "../assets/foto-perfil.jpg"

export default function PerfilTecnico() {

    return (

        <section className="perfil-section">

            <div className="perfil-container">

                {/* TEXTO */}

                <div className="perfil-texto-container">

                    <h2 className="tech-title perfil-title">
                        1. Perfil Técnico
                    </h2>

                    <div className="perfil-box">

                        <p className="perfil-parrafo">

                            Soy estudiante de Administración de Sistemas Informáticos en Red con una trayectoria marcada por la constancia, la adaptación y el aprendizaje continuo.

                            A lo largo de mi formación he trabajado en implantación de sistemas operativos, virtualización y administración de entornos Windows Server, configurando dominios y gestionando Active Directory en escenarios cliente-servidor.

                            Me interesa comprender cómo se conectan infraestructura y aplicación, por lo que actualmente amplío mis competencias en tecnologías web, buscando desarrollar un perfil técnico completo y versátil.

                            Valoro la organización, la responsabilidad y la capacidad de resolver problemas desde una perspectiva estructurada y práctica.

                        </p>

                    </div>

                </div>


                {/* FOTO + QR */}

                <div className="perfil-card">

                    <div className="perfil-card-inner">

                        <div className="perfil-card-front">

                            <img src={foto} alt="Noelia Pires" />

                        </div>

                        <div className="perfil-card-back">

                            <img src={qr} alt="QR Portfolio" />

                        </div>

                    </div>

                </div>


            </div>

        </section>

    )

}