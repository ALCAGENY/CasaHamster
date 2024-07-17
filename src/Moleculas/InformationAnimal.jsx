import { DoubleContainer } from "./DoubleContainer"
import { Titles } from "../Atomos/Texts"

export function InformationAnimal(){

    const datosAnimal = [
        { datos: "Nombre:", informacion: "Pepe" },
        { datos: "Raza:", informacion: "Perro" },
        { datos: "Especie:", informacion: "Canino" },
        { datos: "Edad:", informacion: 5 },
        { datos: "Género:", informacion: "Macho" },
        { datos: "Color:", informacion: "Marrón" },
        { datos: "Tamaño:", informacion: "Mediano" },
        { datos: "Notas:", informacion: "Sin observaciones" },
      ];

      const datosPerfil = [
        { datos: "Nombre:", informacion: "Chikiz" },
        { datos: "Apellido:", informacion: "Gutierrez" },
        { datos: "Correo:", informacion: "GUTIERREZ@gmail.com" },
      ]

    return(<>
    <DoubleContainer>
        <article className="w-1/2 h-full p-3">
        <header className="mt-10">
            <Titles text="Datos Usuario"/>
        </header>
        <section className="bg-black bg-opacity-10 text-center p-4 mt-5" >
        
      <table className="w-full border-collapse border border-gray-200">
        <thead className="bg-black bg-opacity-10">
          <tr>
            <th className="border border-gray-600 px-4 py-2">Datos</th>
            <th className="border border-gray-600 px-4 py-2">Informacion</th>
          </tr>
        </thead>
        <tbody>
          {datosPerfil.map((item, index) => (
            <tr key={index}>
              <td className="border border-gray-600 px-4 py-2">{item.datos}</td>
              <td className="border border-gray-600 px-4 py-2">{item.informacion}</td>
            </tr>
          ))}
        </tbody>
      </table>
        </section>
        </article>

        <article className="w-1/2 h-full p-3">
        <header className="mt-10">
            <Titles text="Datos Animalito"/>
        </header>
        <section className="bg-black bg-opacity-10 text-center p-4 mt-5" >
        
      <table className="w-full border-collapse border border-gray-200">
        <thead className="bg-black bg-opacity-10">
          <tr>
            <th className="border border-gray-600 px-4 py-2">Datos</th>
            <th className="border border-gray-600 px-4 py-2">Informacion</th>
          </tr>
        </thead>
        <tbody>
          {datosAnimal.map((item, index) => (
            <tr key={index}>
              <td className="border border-gray-600 px-4 py-2">{item.datos}</td>
              <td className="border border-gray-600 px-4 py-2">{item.informacion}</td>
            </tr>
          ))}
        </tbody>
      </table>
        </section>
        </article>
    </DoubleContainer>
    </>)
}