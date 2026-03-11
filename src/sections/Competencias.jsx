export default function Competencias() {

    return (

        <section className="h-screen flex flex-col items-center justify-center text-white px-10">

            <h2 className="text-4xl font-bold mb-12">
                2. Competencias Técnicas
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl">

                <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-semibold mb-3">
                        Sistemas
                    </h3>

                    <ul className="space-y-1">
                        <li>Gestión de dominios</li>
                        <li>Políticas GPO</li>
                        <li>Active Directory</li>
                        <li>Windows Server</li>
                    </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-semibold mb-3">
                        Redes
                    </h3>

                    <ul className="space-y-1">
                        <li>Configuración TCP/IP</li>
                        <li>DNS / DHCP</li>
                        <li>Modelo OSI</li>
                        <li>Resoluvión de incidencias</li>
                    </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-semibold mb-3">
                        Virtualización
                    </h3>

                    <ul className="space-y-1">
                        <li>VirtualBox/VMware</li>
                        <li>Creación y gestión de máquinas virtuales</li>
                    </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-semibold mb-3">
                        Tecnologías web
                    </h3>

                    <ul className="space-y-1">
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                </div>

            </div>

        </section>

    )

}