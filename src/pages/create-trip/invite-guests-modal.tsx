import { AtSign, Plus, X } from "lucide-react";
import { FormEvent } from "react";
import Button from "../../components/Button/button";

//propriedades ira trazer as informacoes da pagina mae
interface InviteGuestModalProps {
    modalClose: () => void //uma funcao que nao retorna nada
    isSendEmailRequest: string[] //uma funcao que nao retorna um array de string
    addNewEmailToInvite: (event: FormEvent<HTMLFormElement>) => void 
    removeEmailFromInvites: (email: string) => void //uma funcao que nao retorna nada, mas recebe um email como parametro
}

function InvitGuestModal({modalClose, isSendEmailRequest, addNewEmailToInvite,removeEmailFromInvites}: InviteGuestModalProps ){
        return (
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
                                    <X onClick={() => removeEmailFromInvites(email)} className="size-4 text-red-300" />
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
                        <Button  type="submit" btn_color_variant="btn_primary">
                            Convidar
                            <Plus className="size-5 text-blue-950"/>
                        </Button>

                        
                    </form>

                </div>
            </div>
        );
};


export default InvitGuestModal;