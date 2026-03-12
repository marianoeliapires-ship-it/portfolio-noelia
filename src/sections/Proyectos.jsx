export default function Proyectos() {

    return (

        <section className="h-screen flex flex-col items-center justify-center text-white px-10">

            <h2 className="text-4xl font-bold mb-12 text-center tech-title">
                4. Proyectos
            </h2>

            <div className="max-w-6xl grid md:grid-cols-2 gap-8">

                <div className="project-card">

                    <h3 className="text-xl font-semibold mb-2">
                        Virtualización
                    </h3>

                    <p>
                        Implementación de entorno virtualizado para pruebas y simulaciones.
                    </p>

                    <p className="mt-2">
                        <strong>Descripción:</strong> Configuración de máquina virtual.
                    </p>

                    <p className="mt-2 code-style">
                        <strong>Tecnologías:</strong> VirtualBox · Ubuntu 20.04 · Windows 10 Home
                    </p>

                    <p className="mt-2">
                        <strong>Resultado:</strong> Entorno funcional para pruebas y simulaciones.
                    </p>

                </div>


                <div className="project-card">

                    <h3 className="text-xl font-semibold mb-2">
                        Active Directory
                    </h3>

                    <p>
                        Administración de dominio en Windows Server.
                    </p>

                    <p className="mt-2">
                        <strong>Descripción:</strong> Configuración y gestión de usuarios dentro de Active Directory en entorno de dominio.
                    </p>

                    <p className="mt-2 code-style">
                        <strong>Tecnologías:</strong> Windows Server · Active Directory
                    </p>

                    <p className="mt-2">
                        <strong>Resultado:</strong> Gestión de grupos y permisos. Organización estructurada de usuarios y asignación de membresías dentro del dominio.
                    </p>

                </div>


                <div className="project-card">

                    <h3 className="text-xl font-semibold mb-2">
                        Maquetación web - Tabla estructurada
                    </h3>

                    <p>
                        Estructuración de contenido mediante tablas.
                    </p>

                    <p className="mt-2">
                        <strong>Descripción:</strong> Estructura de diseño y tabla web.
                    </p>

                    <p className="mt-2 code-style">
                        <strong>Tecnologías:</strong> HTML · CSS
                    </p>

                    <p className="mt-2">
                        <strong>Resultado:</strong> Contenido organizado en tabla con estilo.
                    </p>

                </div>


                <div className="project-card">

                    <h3 className="text-xl font-semibold mb-2">
                        Desarrollo Web - Formulario de compra
                    </h3>

                    <p>
                        Desarrollo de formulario interactivo en HTML.
                    </p>

                    <p className="mt-2">
                        <strong>Descripción:</strong> Diseño y maquetación de formulario de compra con validación básica de campos.
                    </p>

                    <p className="mt-2 code-style">
                        <strong>Tecnologías:</strong> HTML · CSS
                    </p>

                    <p className="mt-2">
                        <strong>Resultado:</strong> Estructura funcional con recopilación de datos y navegación entre páginas.
                    </p>

                </div>

            </div>

        </section>

    )

}