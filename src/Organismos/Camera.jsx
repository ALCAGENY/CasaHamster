import { MainBackground } from "../Moleculas/MainBackground"
import { AuthContainer } from "../Moleculas/AuthContainer"
import { Navigation } from "../Moleculas/Navigation"
import { InteractionCamera } from "../Moleculas/InteractionCamera"


export function Camera (){
    return(<>
       <MainBackground>
        <AuthContainer className="bg-black animate-fade-up">
           <Navigation/>
          <InteractionCamera/>
        </AuthContainer>
    </MainBackground>
    </>)
}   