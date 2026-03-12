import { useState } from "react"

import virtualizacion from "../assets/projects/virtualizacion.png"
import activeDirectory from "../assets/projects/active-directory.png"
import tablaHtml from "../assets/projects/tabla-html.png"
import formularioHtml from "../assets/projects/formulario-html.png"

export default function Proyectos() {

    const [active, setActive] = useState(null)

    const toggle = (i) => {

        if (active === i) {
            setActive(null)
        } else {
            setActive(i)
        }

    }

    const proyectos = [

        {
            titulo: "Virtualización",
            descripcion: "Implementación de entorno virtualizado para pruebas y simulaciones.",
            detalle: "Configuración de máquina virtual.",
            tecnologias: "VirtualBox · Ubuntu 20.04 · Windows 10 Home",
            resultado: "Entorno funcional para pruebas y simulaciones.",
            imagen: virtualizacion
        },

        {
            titulo: "Active Directory",
            descripcion: "Administración de dominio en Windows Server.",
            detalle: "Configuración y gestión de usuarios dentro de Active Directory en entorno de dominio.",
            tecnologias: "Windows Server · Active Directory",
            resultado: "Gestión de grupos y permisos.",
            imagen: activeDirectory
        },

        {
            titulo: "Maquetación web - Tabla estructurada",
            descripcion: "Estructuración de contenido mediante tablas.",
            detalle: "Estructura de diseño y tabla web.",
            tecnologias: "HTML · CSS",
            resultado: "Contenido organizado en tabla con estilo.",
            imagen: tablaHtml
        },

        {
            titulo: "Desarrollo web - Formulario de compra",
            descripcion: "Desarrollo de formulario interactivo.",
            detalle: "Diseño y maquetación con validación básica de campos.",
            tecnologias: "HTML · CSS",
            resultado: "Recopilación de datos y navegación entre páginas.",
            imagen: formularioHtml
        }

    ]

    return (

        <section>

            <h2 className="text-6xl tech-title mb-10">
                4. PROYECTOS
            </h2>

            <div className="projects-grid">

                {proyectos.map((p, i) => (

                    <div
                        key={i}
                        className={`flip-card ${active === i ? "active" : ""}`}
                        onClick={() => toggle(i)}
                    >

                        <div className="flip-inner">

                            <div className="flip-front">

                                <h3>{p.titulo}</h3>

                                <p>{p.descripcion}</p>

                                <p className="mt-2">
                                    <strong>Descripción:</strong> {p.detalle}
                                </p>

                                <p className="code-style mt-3">
                                    {p.tecnologias}
                                </p>

                                <p className="mt-2">
                                    <strong>Resultado:</strong> {p.resultado}
                                </p>

                            </div>

                            <div className="flip-back">

                                <img src={p.imagen} />

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </section>

    )

}