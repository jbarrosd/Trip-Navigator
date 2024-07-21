import {MapPin, Calendar, ArrowRight, UserRoundPlus, Settings2, X, AtSign, Plus, User, Mail} from "lucide-react";//importando icones do lucide-react
import { FormEvent, useState } from "react";


function App() {
  
  //o input esta aberto? "false" significa nao, entao faça...
  //a resposta da mudança de estado vai ser passado pelo setIsInputOPen
  const [isInputOpen, setIsInputOPen] = useState(false);
  const [isModalOpen, setIsModalOPen] = useState(false);
  const [isSendEmailRequest, setIsSendEmailRequest] = useState([""]);
  const [isConfirmModalTripOpen, setIsConfirmModalTripOpen] = useState(false);

  function inputOpen(){
    setIsInputOPen(true); // agora ele esta aberto e essa resposta vai refletir no isInputOpen
  };

  function inputClose(){
    setIsInputOPen(false); // agora ele esta fechado e essa resposta vai refletir no isInputOpen
  };

  function modalOpen(){
    setIsModalOPen(true);
  };

  function modalClose(){
    setIsModalOPen(false);
  };

  
  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>){
      //impedindo da formulario ficar atualizando a page  
      event.preventDefault();
      
      const data = new FormData(event.currentTarget);
      const email = data.get("email")?.toString();

      //se usuario nao preencher nada no campo, entao nao faca nada
      if(!email){
        return
      };

      //se o email ja foi incluso, então nao vai permitir convidar de novo
      if(isSendEmailRequest.includes(email)){
        return alert("Email ja cadastrado!");
      };

      //imutabilidade: nao altera array setIsSendEmailRequest que esta la em cima, mas sim cria um outro
        setIsSendEmailRequest([
          ...isSendEmailRequest,
          email
        ]);

        //para resetar o formulario depois de preenchido
        event.currentTarget.reset();
  };

  function removeEmailFromInvites(emailToRemove: string){
    //salva no newEmaiList todos os emails, menos o que quer excluir ou que foi excluido
    const newEmaiList = isSendEmailRequest.filter(email => email !== emailToRemove);
    
    //para excutar a exclusao do email
    setIsSendEmailRequest(newEmaiList);
 
  };

  function confirmModalTripOpen(){
    setIsConfirmModalTripOpen(true); // agora ele esta aberto e essa resposta vai refletir no isInputOpen
  };

  function confirmModalTripClose(){
    setIsConfirmModalTripOpen(false); // agora ele esta fechado e essa resposta vai refletir no isInputOpen
  };


  

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
                  <button onClick={inputClose} className="bg-blue-400 text-blue-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-blue-300 ">
                    Alterar local/data
                    <Settings2 /> 
                  </button>
                
                  ) : (
                      /*onClick={InputOpen} significa que quando o butao é apertado vai fazer  */
                      <button onClick={inputOpen} className="bg-blue-400 text-blue-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-blue-300 " >
                        Continuar
                        <ArrowRight className="size-5 text-blue-950"/>
                      </button>
              
                    )
                } 
              
            </div>

            {/*isInputOpen ? "aberto" : "fechado"} = mostra que acontece quando clico no butao apos colocar */}
              {isInputOpen && (
                <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
                  
                  <button type="button" onClick={modalOpen} className="flex items-center gap-2 flex-1">
                    <UserRoundPlus  className=" size-5 text-zinc-400"/>
                   
                  {/*se o meu envio de email for maior que 0 entao mostre a quantidade de pessoas convidadas por email, se nao for maior que 0, mostre... */}
                   {isSendEmailRequest.length > 0 ? (
                    <span className="text-zinc-100">{isSendEmailRequest.length} pessoa(s) convidada(s)</span>
                   ) : (
                    <span className="text-zinc-400 text-lg flex-1 text-left">Terá companhia nesta viagem?</span>
                   )}
                    
                  </button>

                  <div className="w-px h-6 bg-zinc-800"/>

                    {/*onClick={confirmModalTripOpen} significa que quando o butao é apertado vai confirmar a viagem e pegar as informacoes  */}
                  <button onClick={confirmModalTripOpen} className="bg-blue-400 text-blue-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-blue-300 " >
                    Confirmar viagem
                    <ArrowRight className="size-5 text-blue-950"/>
                  </button>
                  
                </div>
              )}
        </div> 

        <p className="text-sm text-zinc-400">
            Ao planejar sua viagem pela Trip Navigator você automaticamente concorda <br />
            com nossos <a className="text-zinc-300 underline" href="">termos de uso</a> e <a className="text-zinc-300 underline" href="">políticas de privacidade.</a>
        </p>

      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
            {/*qunado quiser colocar ma valor que nao existe no taiwind */}
            <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
                
                <div className="space-y-2">
                
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold">Selecionar convidados</h2>
                    <button onClick={modalClose}><X className="size-5 text-red-300"/></button>
                  </div>

                  <p className=" text-sm text-zinc-400">Os convidados irão receber e-mails para confirmar a participação na viagem.</p>
                
                 
                </div>


                <div className="flex flex-wrap gap-2">
                      {isSendEmailRequest.map(email => {
                          return (
                            
                            <div key={email} className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2">
                              
                              <span className="text-zinc-300">{email}</span>
                              
                              <button type="button">
                                  <X  onClick={() => removeEmailFromInvites(email)} className="size-4 text-red-300" />
                              </button>
                            </div>
                          )
                      })}
                      {/*
                      <div className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2">
                          <span className="text-zinc-300">teste@gmail.com</span>
                          <button type="button"><X className="size-4 text-red-300" /></button>
                      </div>
                       */}
                </div>

                <div className="w-full h-px bg-zinc-800" />

                  {/*onSubmit={addNewEmailToInvite} = chamando a funcao */}
                <form onSubmit={addNewEmailToInvite} className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                  
                  <div className="px-2 flex items-center flex-1 gap-2">
                    <AtSign className="text-zinc-400 size-5"/>
                    <input type="email" name="email" placeholder="Digite o e-email do convidado" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
                  </div>
                
                {/*button type="submit"  é pra quando clicar no butao o onSubmit no form entender a que foi clicado */}
                  <button type="submit" className="bg-blue-400 text-blue-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-blue-300 " >
                    Convidar
                    <Plus className="size-5 text-blue-950"/>
                  </button>
                </form>

            </div>
        </div>
      )}


      {isConfirmModalTripOpen && (
           <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
           {/*qunado quiser colocar ma valor que nao existe no taiwind */}
           <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
               
               <div className="space-y-2">
               
                 <div className="flex items-center justify-between">
                   <h2 className="text-lg font-semibold">Confirmar a viagem</h2>
                   <button onClick={confirmModalTripClose}><X className="size-5 text-red-300"/></button>
                 </div>

                 <p className=" text-sm text-zinc-400">Para concluir a criação da viagem para <span className="font-semibold text-zinc-100">Florianópolis, Brasil</span> nas datas de <span className="font-semibold text-zinc-100">16 a 27</span> de Agosto de 2024 preencha seus dados abaixo:</p>
               
               
               </div>


               
               

                 {/*onSubmit={addNewEmailToInvite} = chamando a funcao */}
               <form onSubmit={addNewEmailToInvite} className="space-y-3" >
               
                 <div className="py-2.5 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">{/*esse clasname na div jogou o botao para fora da caixa*/}
                   <User className="text-zinc-400 size-5"/>
                   <input type="text" name="name" placeholder="Digite seu nome completo" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
                 </div>

                 <div className="py-2.5 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">{/*esse clasname na div jogou o botao para fora da caixa*/}
                   <Mail className="text-zinc-400 size-5"/>
                   <input type="email" name="email" placeholder="Digite seu e-email pessoal" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
                 </div>
               
               
               {/*button type="submit"  é pra quando clicar no butao o onSubmit no form entender a que foi clicado */}
                 <button type="submit" className="bg-blue-400 w-full justify-center text-blue-950 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-blue-300 " >
                   Confirmar
                 </button>
               </form>

           </div>
       </div>
      )}
             
      
    </div>
  );
};

export default App;
