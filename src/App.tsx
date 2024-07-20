import {MapPin, Calendar, ArrowRight, UserRoundPlus, Settings2} from "lucide-react";//importando icones do lucide-react
import { useState } from "react";


function App() {
  
  //o input esta aberto? "false" significa nao, entao faça...
  //a resposta da mudança de estado vai ser passado pelo setIsInputOPen
  const [isInputOpen, setIsInputOPen] = useState(false);

  function InputOpen(){
    setIsInputOPen(true); // agora ele esta aberto e essa resposta vai refletir no isInputOpen
  };

  function closeInput(){
    setIsInputOPen(false); // agora ele esta fechado e essa resposta vai refletir no isInputOpen
  }

  return (
    <div className="h-screen flex items-center justify-center bg-backg">
     
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
       
        <div className="flex flex-col items-center gap-3">
          <img src="src/img/logo.png" alt="Logo da Trip Navegator" />
          <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
        </div>
        
        <div className="space-y-4">
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
                <button onClick={closeInput} className="bg-blue-400 text-blue-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-blue-300 ">
                  Alterar local/data
                  <Settings2 /> 
                </button>
               
                ) : (
                    /*onClick={InputOpen} significa que quando o butao é apertado vai fazer  */
                    <button onClick={InputOpen} className="bg-blue-400 text-blue-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-blue-300 " >
                      Continuar
                      <ArrowRight className="size-5 text-blue-950"/>
                    </button>
            
                  )
              } 
            
          </div>

          {/*isInputOpen ? "aberto" : "fechado"} = mostra que acontece quando clico no butao apos colocar */}
            {isInputOpen && (
              <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
                
                <div className="flex items-center gap-2 flex-1">
                  <UserRoundPlus  className=" size-5 text-zinc-400"/>
                  <input type="text" placeholder="Terá companhia nesta viagem?" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
                </div>

                <div className="w-px h-6 bg-zinc-800"/>

                  {/*onClick={InputOpen} significa que quando o butao é apertado vai fazer  */}
                <button className="bg-blue-400 text-blue-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-blue-300 " >
                  Confirmar viagem
                  <ArrowRight className="size-5 text-blue-950"/>
                </button>
                
              </div>
            )}
        </div> 

        <p className="text-sm text-zinc-400">
          Ao planejar sua viagem pela Trip Navegator você automaticamente concorda <br />
          com nossos <a className="text-zinc-300 underline" href="">termos de uso</a> e <a className="text-zinc-300 underline" href="">políticas de privacidade.</a></p>
      </div>
    </div>
  );
};

export default App;
