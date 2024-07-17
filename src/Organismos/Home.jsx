import { MainBackground } from "../Moleculas/MainBackground"
import { AuthContainer } from "../Moleculas/AuthContainer"
import { Navigation } from "../Moleculas/Navigation"

export function Home(){
    return(<>
    <MainBackground>
        <AuthContainer className="bg-black animate-fade-up">
           <Navigation/>
           
        </AuthContainer>
    </MainBackground>
    </>)
}