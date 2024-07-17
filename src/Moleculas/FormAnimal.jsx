import ImgFormAnimal from "../assets/Img/ImgFormAnimal.jpeg";
import { Paragraphs } from "../Atomos/Texts";
import { InputT } from "../Atomos/Input";
import { ButtonI } from "../Atomos/Button";

export function FormAnimal() {
  return (
    <>
      <article className="w-full h-full relative">
        <img
          className="absolute w-full h-full object-cover"
          src={ImgFormAnimal}
          alt="ImgFormAnimal"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <section className="relative flex items-center justify-center h-full">
          <form className="bg-blue-50 bg-opacity-15 w-11/12 h-5/6">
            <div className="w-full h-1/4 mt-6 flex justify-center items-center gap-28">
              <label className="bg-black opacity-50">
                <Paragraphs text="Nombre:" />
                <InputT type="email" placeholder="Nombre" />
              </label>
              <label className="bg-black opacity-50">
                <Paragraphs text="Raza:" />
                <InputT type="email" placeholder="Raza" />
              </label>

              <label className="bg-black opacity-50">
                <Paragraphs text="Especie:" />
                <InputT type="email" placeholder="Especie" />
              </label>
            </div>

            <div className=" w-full h-1/4 mt-6 flex justify-center items-center gap-28">
              <label className="bg-black opacity-50">
                <Paragraphs text="Edad:" />
                <InputT type="email" placeholder="Edad" />
              </label>
              <label className="bg-black opacity-50">
                <Paragraphs text="Género:" />
                <InputT type="email" placeholder="Género" />
              </label>

              <label className="bg-black opacity-50">
                <Paragraphs text="Color:" />
                <InputT type="email" placeholder="Color" />
              </label>
            </div>

            <div className=" w-full h-1/4 mt-6 flex justify-center items-center gap-28">
              <label className="bg-black opacity-50">
                <Paragraphs text="Tamaño:" />
                <InputT type="email" placeholder="Tamaño" />
              </label>
              <label className="bg-black opacity-50">
                <Paragraphs text="Notas:" />
                <InputT type="email" placeholder="Notas" />
              </label>

              <div className="">
            <ButtonI className="bg-black opacity-50" type="submit" text="Perzonaliza" />
          </div>
            </div>
          </form>
        </section>
      </article>
    </>
  );
}
