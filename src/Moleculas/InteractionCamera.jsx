import { DoubleContainer } from "./DoubleContainer"
import { Titles } from "../Atomos/Texts"
import { ButtonI } from "../Atomos/Button"
import { Paragraphs } from "../Atomos/Texts"

export function InteractionCamera (){
  return(<>
  <DoubleContainer>
    <article className=" w-1/2 h-full p-3">
      <header className="mt-5">
        <Titles text="Camara"/>
      </header>
      <section className="bg-black bg-opacity-50 w-full h-3/5 mt-16 flex justify-center p-5">
        <div className="w-full h-full">
          //camara no conectada :( 
        </div>
      </section>
    </article>

    <article className="w-1/2 h-full p-3">
      <header className="mt-5">
        <Titles text="Control Camara"/>
      </header>
      <section className="bg-black bg-opacity-10 text-center p-4 mt-24">
      <div className="flex">
            <section className="mb-4 w-1/2">
              <Paragraphs className="p-1" text="Prender Camara:" />
              <ButtonI className="bg-black opacity-30 mt-1" text="Prender Camara" />
            </section>
            <section className="mb-4 w-1/2">
              <Paragraphs className="p-1" text="ApagarCamara:" />
              <ButtonI className="bg-black opacity-30 mt-1" text="Apagar Camara" />
            </section>
          </div>

          <div className="flex justify-center mt-7">
            <section className="mb-4  ">
              <Paragraphs className="p-1" text="Tomar Foto:" />
              <ButtonI className="bg-black opacity-30 mt-1 rounded-full w-20 h-20" text="Tomar Foto" />
            </section>
          </div>
      </section>
    </article>
  </DoubleContainer>
  </>)
}