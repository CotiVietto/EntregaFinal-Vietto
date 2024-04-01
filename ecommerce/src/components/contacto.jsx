import React, { useState } from 'react';

const Contacto = () => {
    const [mostrarAviso, setMostrarAviso] = useState(false);
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [comentario, setComentario] = useState('');
    const [email, setEmail] = useState('');

    const handleClick = () => {
        setMostrarAviso(true);

        // Limpiar el formulario
        setNombre('');
        setApellido('');
        setComentario('');
        setEmail('');

        setTimeout(() => {
            setMostrarAviso(false);
        }, 5000);
    };

    return ( 
        <><div className='bg-gray-50 p-10 grid grid-cols-2 gap-4'>

            <div className="col-span-1">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13680.576030844928!2d-62.8248086!3d-30.9943615!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94349d667646e223%3A0x6eb2577ebad97ef4!2sFarmacia%20Perotti%20Ricardi!5e0!3m2!1ses-419!2sar!4v1693149061436!5m2!1ses-419!2sar" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="w-[32rem] h-full mt-4"></iframe>
            </div>

            <div className="col-span-1">

                <div id="info" className="flex items-center mt-4 pt-5 pb-5">
                    <p className="ml-0 font-bold">📍 Sarmiento 146, Marull, Córdoba</p>
                    <p className="ml-10 font-bold">📞 Tel: 3563-492253</p>
                </div>

                <div id="formulario" className="mt-4">
                    <h6 className="text-lg font-bold">Envíanos un mensaje</h6>

                    <div id="nombre" className="flex mt-2">
                        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} className="form-control mr-2 p-2 w-full border border-gray-300 rounded" placeholder="Nombre" aria-label="Nombre" />
                        <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} className="form-control p-2 w-full border border-gray-300 rounded" placeholder="Apellido" aria-label="Apellido" />
                    </div>

                    <div id="comentario" className="form-floating mt-2">
                        <textarea value={comentario} onChange={(e) => setComentario(e.target.value)} className="form-control p-2 w-full border border-gray-300 rounded" placeholder="Deje su comentaio acá" id="floatingTextarea2" style={{ height: '100px' }}></textarea>
                    </div>

                    <div id="email" className="input-group mt-2">
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control p-2 w-full border border-gray-300 rounded" placeholder="Email" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    </div>

                    <div className="mt-5">
                        <button className="btn btn-outline-secondary px-8 py-2 border border-blue-300 rounded bg-blue-400 font-bold" type="button" id="button-addon2" onClick={handleClick}>Enviar</button>
                    </div>

                    {/* Mostrar el aviso */}
                    {mostrarAviso && (
                        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
                            <div className="bg-white p-8 rounded-lg">
                                <p className="text-xl font-bold">En minutos lo contactaremos</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>

        <footer className="mt-4 bg-gray-400 p-20 flex justify-center flex-col items-center">
            <div>
                <p>Marull, Córdoba, Argentina</p>
            </div>
            <div>
                <p>© 2023 Farmacia Perotti-Ricardi</p>
            </div>
        </footer></>
    );
}
 
export default Contacto;
