import { Mail, User, X } from "lucide-react";
import { FormEvent } from "react";


interface ConfirmTripModalProps {
    confirmModalTripClose: () => void
    createTrip: (event: FormEvent<HTMLFormElement>) => void
}
function ConfirmTripModal({confirmModalTripClose, createTrip}: ConfirmTripModalProps){

    return(
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
                <form onClick={createTrip}  className="space-y-3" >
                
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
    )
}


export default ConfirmTripModal;