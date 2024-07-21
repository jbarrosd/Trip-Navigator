import { ArrowRight, UserRoundPlus } from "lucide-react";

interface InviteGuestsStepProps{
    modalOpen: () => void
    isSendEmailRequest: string[]
    confirmModalTripOpen: () => void
}



function InviteGuestsStep({modalOpen, isSendEmailRequest, confirmModalTripOpen}: InviteGuestsStepProps){
    
    return (
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
    );

};

export default InviteGuestsStep;