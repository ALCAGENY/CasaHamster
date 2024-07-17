import { AuthContainer } from "../Moleculas/AuthContainer"
import { ImgHome } from "../Moleculas/ImgHome"
import { CardData } from "../Moleculas/CardDate"
import { useNavigate } from "react-router-dom";
import { InputT } from "../Atomos/Input";
import { Paragraphs } from "../Atomos/Texts";
import { ButtonI } from "../Atomos/Button";
import { MainBackground } from "../Moleculas/MainBackground";

export function Login (){
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        navigate("/Home");
    };

    return (<>
    <MainBackground>
        <AuthContainer className=" bg-black animate-fade-right animate-duration-[2000ms]">
            <ImgHome/>
            <CardData text="Login">
            <form className="flex flex-col w-full sm:w-4/5 mt-10" onSubmit={handleLogin}>
          <label className="flex flex-col mt-4">
            <Paragraphs text="Correo Electrónico:" />
            <InputT type="email" placeholder="Correo Electrónico" />
          </label>

          <label className="flex flex-col mt-4">
            <Paragraphs text="Contraseña:" />
            <InputT type="password" placeholder="Contraseña" />
          </label>

          <nav className="mt-7 flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-2 sm:space-y-0">
            <a className="text-gray-300 no-underline hover:text-gray-400" href="Formulario">Regístrate</a>
            <a className="text-gray-300 no-underline hover:text-gray-400" href="">Personaliza</a>
          </nav>

          <div className="flex justify-center mt-4">
            <ButtonI type="submit" text="Iniciar Sesión" />
          </div>
        </form>
            </CardData>
        </AuthContainer>
    </MainBackground>
    </>)
}