import React, { useState } from 'react';

const Contacto = () => {
    const [mostrarAviso, setMostrarAviso] = useState(false);
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        comentario: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleClick = () => {
        setMostrarAviso(true);

        setFormData({
            nombre: '',
            apellido: '',
            comentario: '',
            email: ''
        });

        setTimeout(() => {
            setMostrarAviso(false);
        }, 3000);
    };

    return (
        <>
            <div className='bg-gray-50 p-10 grid grid-cols-2 gap-4'>
                <div className="col-span-1">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13680.576030844928!2d-62.8248086!3d-30.9943615!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94349d667646e223%3A0x6eb2577ebad97ef4!2sFarmacia%20Perotti%20Ricardi!5e0!3m2!1ses-419!2sar!4v1693149061436!5m2!1ses-419!2sar" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="w-[32rem] h-full mt-4"></iframe>
                </div>

                <div className="col-span-1">
                    <div id="info" className="flex items-center mt-4 pt-5 pb-5">
                        <div className="flex items-center">
                            <img src="../src/assets/contacto/ubicacion.png" className="h-8 w-auto mr-2" alt="Ubicación" />
                            <p className="font-bold">Sarmiento 146, Marull, Córdoba</p>
                        </div>
                        <div className="flex items-center ml-10">
                            <img src="../src/assets/contacto/telefono.png" className="h-8 w-auto mr-2" alt="Teléfono" />
                            <p className="font-bold">Tel: 3563-492253</p>
                        </div>
                    </div>

                    <div id="formulario" className="mt-4">
                        <h6 className="text-lg font-bold">Envíanos un mensaje</h6>

                        <div id="nombre" className="flex mt-2">
                            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} className="form-control mr-2 p-2 w-full border border-gray-300 rounded" placeholder="Nombre" aria-label="Nombre" />
                            <input type="text" name="apellido" value={formData.apellido} onChange={handleChange} className="form-control p-2 w-full border border-gray-300 rounded" placeholder="Apellido" aria-label="Apellido" />
                        </div>

                        <div id="comentario" className="form-floating mt-2">
                            <textarea name="comentario" value={formData.comentario} onChange={handleChange} className="form-control p-2 w-full border border-gray-300 rounded" placeholder="Deje su comentario aquí" id="floatingTextarea2" style={{ height: '100px' }}></textarea>
                        </div>

                        <div id="email" className="input-group mt-2">
                            <input type="text" name="email" value={formData.email} onChange={handleChange} className="form-control p-2 w-full border border-gray-300 rounded" placeholder="Email" aria-label="Email" />
                        </div>

                        <div className="mt-5">
                            <button className="btn btn-outline-secondary px-8 py-2 border border-blue-300 rounded bg-blue-400 font-bold" type="button" id="button-addon2" onClick={handleClick}>Enviar</button>
                        </div>

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
            </footer>
        </>
    );
}

export default Contacto;
