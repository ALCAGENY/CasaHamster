import React from 'react';
import { Titles, Paragraphs } from "../Atomos/Texts";
import { ButtonI } from "../Atomos/Button";
import { DoubleContainer } from './DoubleContainer';

export function DataMonitoring() {
  const datos = [
    { datos: "Temperatura", informacion: "19G" },
    { datos: "Humedad", informacion: "50H" },
  ];

  return (
    <DoubleContainer>
      <article className="w-1/2 h-full p-3">
        <header className="mt-5">
          <Titles text="Tabla Datos" />
        </header>
        <section className="bg-black bg-opacity-10 text-center p-4 mt-24">
          <table className="w-full border-collapse border border-gray-200">
            <thead className="bg-black bg-opacity-10">
              <tr>
                <th className="border border-gray-600 px-4 py-2">Datos</th>
                <th className="border border-gray-600 px-4 py-2">Información</th>
              </tr>
            </thead>
            <tbody>
              {datos.map((item, index) => (
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
        <header className="mt-5">
          <Titles text="Control De Datos" />
        </header>
        <section className="bg-black bg-opacity-10 text-center p-4 mt-24">
          <div className="flex">
            <section className="mb-4 w-1/2">
              <Paragraphs className="p-1" text="Abrir Puerta:" />
              <ButtonI className="bg-black opacity-30 mt-1" text="Abrir Puerta" />
            </section>
            <section className="mb-4 w-1/2">
              <Paragraphs className="p-1" text="Cerrar Puerta:" />
              <ButtonI className="bg-black opacity-30 mt-1" text="Cerrar Puerta" />
            </section>
          </div>

          <div className="flex">
            <section className="mb-4 w-1/2">
              <Paragraphs className="p-1" text="Dar Comida:" />
              <ButtonI className="bg-black opacity-30 mt-1" text="Dar Comida" />
            </section>
            <section className="mb-4 w-1/2">
              <Paragraphs className="p-1" text="Detener Comida:" />
              <ButtonI className="bg-black opacity-30 mt-1" text="Detener Comida" />
            </section>
          </div>

          <div className="flex">
            <section className="mb-4 w-1/2">
              <Paragraphs className="p-1" text="Otra Cosa:" />
              <ButtonI className="bg-black opacity-30 mt-1" text="Otra Cosa" />
            </section>
            <section className="mb-4 w-1/2">
              <Paragraphs className="p-1" text="Otra Cosa:" />
              <ButtonI className="bg-black opacity-30 mt-1" text="Otra Cosa" />
            </section>
          </div>
        </section>
      </article>
    </DoubleContainer>
  );
}
