import SectionTitle from "../components/SectionTitle"
import Card from "../components/Card"

export default function Proyectos() {

    return (

        <section className="min-h-screen flex items-center justify-center px-10">

            <SectionTitle number="4" title="Proyectos" />

            <div className="grid md:grid-cols-3 gap-10">

                <Card title="Virtualización">

                    <p>

                        Implementación de entorno virtualizado para pruebas y simulaciones.

                        ·Descripción: Configuración de máquina virtual

                        · Tecnologías: VirtualBox · Ubuntu 20.04 · Windows 10 home
                        · Resultado: Entorno funcional  para pruebas y simulaciones
                    </p>

                </Card>

                <Card title="Active Directory">

                    <p>
                        Administración de dominio en Windows Server

                        · Descripción: Configuración y gestión de usuarios dentro de Active
                        Directory en entorno de dominio

                        · Tecnologías: Windows server · Active directory · Gestión de
                        grupos y permisos

                        · Resultado: Organización estructurada de usuarios y asignación
                        de membresías dentro del dominio.

                    </p>

                </Card>

                <Card title=" Maquetación web - Tabla estructurada">

                    <p>


                        Estructuración de contenido mediante tablas
                        · Descripción: Estructura de diseño y tabla web
                        · Tecnologías: HTML - CSS
                        · Resultado: Contenido organizado en tabla con estilo


                    </p>

                </Card>

                <Card title=" Desarrolo Web - Formulario de compra">

                    <p>

                        Desarrolo de formulario interactivo en HTML


                        · Descripción: Diseño y maquetaciñon de formulario de compra con
                        validación básica de campos.
                        · Tecnologías: HTML · CSS
                        · Resultado: Estructura funcional con recopilación de datos y navegación
                        entre páginas




                    </p>

                </Card>


            </div>

        </section>

    )

}
