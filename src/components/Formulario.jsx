import {useState, useEffect} from 'react';

const Formulario = () => {

  const [nombre, setNombre] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Enviando Formulario");
  }

  return (
    <div className="md:w-1/2 lg:w-2/5">
        <h2 className="font-black text-3xl text-center">Seguimiento Novedades</h2>
        <p className="text-lg mt-5 text-center mb-10">Añade Pacientes y {""}
          <span className="text-indigo-600 font-bold ">Administralos</span>
        </p>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
          <div className="mb-7">
            <label htmlFor="nombre" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
            <input 
              id="nombre" 
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="text" 
              placeholder="Nombre de la Mascota"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              />
          </div>
          <div className="mb-7">
            <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
            <input 
              id="propietario" 
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="text" 
              placeholder="Nombre del Propietario"
              />
          </div>
          <div className="mb-7">
            <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
            <input 
              id="email" 
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="email" 
              placeholder="Email de Contacto"
              />
          </div>
          <div className="mb-7">
            <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
              Alta
            </label>
            <input 
              id="alta" 
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="date" 
              />
          </div>
          <div className="mb-7">
            <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
              Síntomas
            </label>
            <textarea 
              id="sintomas"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              placeholder="Describe los Síntomas"
            />
          </div>

          <input 
            type="submit"
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
            value="Agregar Paciente"
           />
        </form>
    </div>
  )
}

export default Formulario