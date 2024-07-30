import React, { useEffect, useState } from 'react';
import { Titles } from "../Atomos/Texts";
import { DoubleContainer } from './DoubleContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThermometerHalf, faTint } from '@fortawesome/free-solid-svg-icons';
import io from "socket.io-client";

const socket = io('http://54.165.181.210', {
    extraHeaders: {
        'Authorization': '123ADWAWDAWDQWDAD33'
    }
});

socket.on('connect', () => {
    console.clear();
    console.log('Conectado al servidor');
});

socket.on('sensors', (data) => { // Escuchar el evento emitido por el servidor
    console.log('Datos recibidos del servidor:', data);
    // procesar y mostrar los datos en el frontend
});

socket.on('connect_error', (err) => {
    console.error('Error de conexión:', err.message);
});

socket.on('disconnect', () => {
    console.log('Desconectado del servidor');
});

export function DataMonitoring() {
  const [datos, setDatos] = useState([
    { datos: "Temperatura", informacion: "19°C", icono: faThermometerHalf, color: "bg-red-200" },
    { datos: "Humedad", informacion: "50%", icono: faTint, color: "bg-blue-200" },
  ]);

  useEffect(() => {
    socket.on('sensors', (data) => {
      const { temperature, humidity } = data;
      setDatos([
        { datos: "Temperatura", informacion: `${temperature}°C`, icono: faThermometerHalf, color: "bg-red-200" },
        { datos: "Humedad", informacion: `${humidity}%`, icono: faTint, color: "bg-blue-200" },
      ]);
    });

    return () => {
      socket.off('sensors');
    };
  }, []);

  return (
    <DoubleContainer className='flex justify-center'>
      <article className="w-full md:w-1/2 h-full p-3">
        <header className="mt-5">
          <Titles text="Datos de Monitoreo" />
        </header>
        <section className="text-center p-4 mt-6 md:mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {datos.map((item, index) => (
              <div key={index} className={`p-4 rounded-lg shadow-md border border-gray-200 ${item.color}`}>
                <FontAwesomeIcon icon={item.icono} className="text-4xl mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.datos}</h3>
                <p className="text-2xl font-bold">{item.informacion}</p>
              </div>
            ))}
          </div>
        </section>
      </article>
    </DoubleContainer>
  );
}
