import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";
import Button from "../../../components/Button/button";

interface DestinationAndDateStepProps{
    isInputOpen: boolean
    inputClose: () => void
    inputOpen: () => void
}

function DestinationAndDateStep({isInputOpen, inputClose, inputOpen}: DestinationAndDateStepProps){

    return (
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
                
                <div className=" flex items-center gap-2 flex-1">
                  <MapPin  className=" size-5 text-zinc-400"/>
                  {/*disabled={isInputOpen}, butao desabilitado caso o input esteja open */}
                  <input disabled={isInputOpen} type="text" placeholder="Para onde gostaria de ir?" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
                </div>


                <div className=" flex items-center gap-2">
                  <Calendar  className=" size-5 text-zinc-400"/>
                  <input disabled={isInputOpen} type="text" placeholder="Quando?" className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none" />
                
                </div>

                <div className="w-px h-6 bg-zinc-800"/>


                {isInputOpen ? (
                 
                  <Button onClick={inputClose} btn_color_variant="btn_primary">
                    Alterar local/data
                    <Settings2 /> 
                  </Button>
                  
                
                  ) : (
                      /*onClick={InputOpen} significa que quando o butao é apertado vai fazer  */
                   

                    <Button onClick={inputOpen} btn_color_variant="btn_primary">
                      Continuar
                      <ArrowRight className="size-5 text-blue-950"/>
                    </Button>

                    )
                } 
              
            </div>
    )
}

export default DestinationAndDateStep;