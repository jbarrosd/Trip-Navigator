import { Calendar, Clock, Tag, X } from "lucide-react";
import React from "react";

 
interface CreatActivityModalProps{
    closeCreateAtctivyModal: () => void
   }

function CreatActivityModal({closeCreateAtctivyModal}: CreatActivityModalProps) {
    
    return(
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
        {/*qunado quiser colocar ma valor que nao existe no taiwind */}
        <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
            
            <div className="space-y-2">
                
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold">Cadastrar Atividade</h2>
                    <button onClick={closeCreateAtctivyModal}>
                        <X className="size-5 text-red-300"/>
                    </button>
                </div>

                <p className=" text-sm text-zinc-400">Todos os convidados podem visualizar as atividades.</p>
                                
            </div>
                        

           
            <form className="space-y-3" >
            
                <div className="h-14  px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                    <Tag className="text-zinc-400 size-5"/>
                    <input type="text" name="title" placeholder="Digite a atividade que deseja fazer" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
                </div>

                {/* 
                    <div className="h-14 flex-1 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                        <Calendar className="text-zinc-400 size-5"/>
                        <input type="datetime-local" name="occurs_at" placeholder="Data e horário da atividade" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 [color-schema:dark]" />
                    </div>
                */}

                <div className="flex items-center gap-2">
                    <div className="h-14 flex-1 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                        <Calendar className="text-zinc-400 size-5"/>
                        <input type="date" name="occurs_at" placeholder="Data atividade" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 [color-schema:dark]" />
                    </div>

                    <div className="h-14 w-36 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                        <Clock className="text-zinc-400 size-5"/>
                        <input type="time" name="Hours" placeholder="Horário" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 [color-schema:dark]" />
                    </div>
                </div>

                
                {/*button type="submit"  é pra quando clicar no butao o onSubmit no form entender a que foi clicado */}
                <button type="submit" className="bg-blue-400 w-full justify-center text-blue-950 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-blue-300 " >
                    Salvar Atividade
                </button>
            </form>

        </div>
 </div>
    );

};


export default CreatActivityModal;