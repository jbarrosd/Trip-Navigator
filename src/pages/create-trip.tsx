import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import InviteGuestModal from "./invite-guests-modal";
import ConfirmTripModal from "./confirm-trip-modal";
import DestinationAndDateStep from "./steps/destination-and-date-step";
import InviteGuestsStep from "./steps/invite-guests-step";


function CreateTrip() {
  
  //o input esta aberto? "false" significa nao, entao faça...
  //a resposta da mudança de estado vai ser passado pelo setIsInputOPen
  const [isInputOpen, setIsInputOPen] = useState(false);
  const [isModalOpen, setIsModalOPen] = useState(false);
  const [isSendEmailRequest, setIsSendEmailRequest] = useState([""]);
  const [isConfirmModalTripOpen, setIsConfirmModalTripOpen] = useState(false);

  const navigate = useNavigate();

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

  //criando rota para mudar de page, a funcaao createTrip fou colocada no butao de confirmar criacao da viagem
  //entao quando clicado laa, a pessoa sera direcionada para esta rota especificada
  function createTrip(event: FormEvent<HTMLFormElement>){
    event.preventDefault();
    navigate("/trip/123")
  };
  

  return (
    <div className="h-screen flex items-center justify-center bg-backg">
     
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
       
        <div className="flex flex-col items-center gap-3">
            <img src="src/img/logo.png" alt="Logo da Trip Navegator" />
            <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
        </div>
          
        <div className="space-y-4">
           
            <DestinationAndDateStep
                isInputOpen={isInputOpen}
                inputOpen={inputOpen}
                inputClose={inputClose}
            />

            {/*isInputOpen ? "aberto" : "fechado"} = mostra que acontece quando clico no butao apos colocar */}
              {isInputOpen && (
                <InviteGuestsStep
                    modalOpen={modalOpen}
                    isSendEmailRequest={isSendEmailRequest}
                    confirmModalTripOpen={confirmModalTripOpen}
                />
              )}
        </div> 

        <p className="text-sm text-zinc-400">
            Ao planejar sua viagem pela Trip Navigator você automaticamente concorda <br />
            com nossos <a className="text-zinc-300 underline" href="">termos de uso</a> e <a className="text-zinc-300 underline" href="">políticas de privacidade.</a>
        </p>

      </div>

      {isModalOpen && (
        //enviando as informacoes por props pra para a page InvitGuestModal
        <InviteGuestModal 
            isSendEmailRequest={isSendEmailRequest}
            addNewEmailToInvite={addNewEmailToInvite}
            modalClose={modalClose}
            removeEmailFromInvites={removeEmailFromInvites}
        />
      )}


      {isConfirmModalTripOpen && (
        <ConfirmTripModal 
            confirmModalTripClose={confirmModalTripClose}
            createTrip={createTrip}
        />
      )}
             
      
    </div>
  );
};

export default CreateTrip;
