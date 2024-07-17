import { MainBackground } from "../Moleculas/MainBackground"
import { CardData } from "../Moleculas/CardDate"
import { AuthContainer } from "../Moleculas/AuthContainer"
import { ImgHome } from "../Moleculas/ImgHome"
import { Paragraphs } from "../Atomos/Texts"
import { InputT } from "../Atomos/Input"
import { ButtonI } from "../Atomos/Button"
import { useNavigate } from "react-router-dom"

export function LoginForm(){
    const navigate = useNavigate();

    const handleForm = (e) => {
        e.preventDefault();
        navigate("/");
    };

    return(<>
<MainBackground>
<AuthContainer className="bg-pink-300 animate-fade-left animate-duration-[2000ms]">
    <CardData>
    <form className="flex flex-col w-full sm:w-4/5 mt-7" onSubmit={handleForm}>
      <label>
        <Paragraphs text="Nombre:" />
        <InputT type="text" placeholder="Nombre" />
      </label>

      <label className="mt-4">
        <Paragraphs text="Apellido:" />
        <InputT type="text" placeholder="Apellido"  />
      </label>

      <label className="mt-4">
        <Paragraphs text="Correo:" />
        <InputT type="email" placeholder="Correo"  />
      </label>

      <label className="mt-4">
        <Paragraphs text="Contraseña:" />
        <InputT type="password" placeholder="Contraseña"/>
      </label>

      <div className="flex justify-center mt-4">
        <ButtonI type="submit" text="Registrar" />
      </div>
    </form>
    </CardData>
    <ImgHome/>
</AuthContainer>
</MainBackground>
    </>)
}