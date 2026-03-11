export default function Herramientas() {

    return (

        <section className="h-screen flex items-center justify-center text-white px-10">

            <div className="max-w-[900px]">

                <h2 className="text-4xl font-bold mb-8">
                    3. Herramientas
                </h2>

                <h3 className="text-2xl font-semibold mt-6 mb-3">
                    Administración de Sistemas
                </h3>

                <ul className="space-y-1">
                    <li>CMD</li>
                    <li>Powershell</li>
                    <li>Active Directory</li>
                    <li>Windows Server</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-6 mb-3">
                    Redes
                </h3>

                <ul className="space-y-1">
                    <li>Configuración TCP/IP</li>
                    <li>DNS / DHCP</li>
                    <li>DHCP</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-6 mb-3">
                    Virtualización
                </h3>

                <ul className="space-y-1">
                    <li>VirtualBox</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-6 mb-3">
                    Soporte Remoto
                </h3>

                <ul className="space-y-1">
                    <li>Escritorio Remoto</li>
                </ul>

            </div>

        </section>

    )

}