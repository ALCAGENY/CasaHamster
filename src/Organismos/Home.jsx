import { MainBackground } from "../Moleculas/MainBackground"
import { AuthContainer } from "../Moleculas/AuthContainer"
import { Navigation } from "../Moleculas/Navigation"
import { DoubleContainer } from "../Moleculas/DoubleContainer"
import { DataMonitoring } from "../Moleculas/DataMonitoring"
import { InformationAnimal } from "../Moleculas/InformationAnimal"

export function Home(){
    return(<>
    <MainBackground>
        <AuthContainer className="bg-black animate-fade-up">
           <Navigation/>
           <div className="w-1/2  flex">
           <InformationAnimal/>
           </div>
           <div>
            <DataMonitoring/>
           </div>
        </AuthContainer>
    </MainBackground>
    </>)
}