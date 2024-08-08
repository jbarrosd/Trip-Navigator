import { Calendar, Clock, Tag, X } from "lucide-react";
import Button from "../../components/Button/button";
import { api } from "../../lib/axios";
import { useParams } from "react-router-dom";
import { FormEvent } from "react";






 
interface CreatActivityModalProps{
    closeCreateAtctivyModal: () => void
   }

function CreatActivityModal({closeCreateAtctivyModal}: CreatActivityModalProps) {
    const { tripId } = useParams();


  async function createActivity(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = new FormData(event.currentTarget)

    const title = data.get("title")?.toString();
    const occurs_at = data.get("occurs_at")?.toString();
    
   

    /*console.log( {title, occurs_at})*/
    
    await api.post(`/trips/${tripId}/activities`, {
      title,
      occurs_at,
    })

   window.document.location.reload()
  }

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
                        

           
            <form onSubmit={createActivity} className="space-y-3" >
            
                <div className="h-14  px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                    <Tag className="text-zinc-400 size-5"/>
                    <input type="text" name="title" placeholder="Digite a atividade que deseja fazer" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
                </div>

                <div className="h-14 flex-1 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                     <Calendar className="text-zinc-400 size-5" />
                        <input
                        type="datetime-local"
                        name="occurs_at"
                        placeholder="Data e horário da atividade"
                        className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                        />
                </div>
                {/* 
                <div className="flex items-center gap-2">
                    <div className="h-14 flex-1 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                        <Calendar className="text-zinc-400 size-5"/>
                        <input type="date" name="occurs_at" placeholder="Data atividade" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 [color-schema:dark]" />
                    
                    </div>

                    <div className="h-14 w-36 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                        <Clock className="text-zinc-400 size-5"/>
                        <input type="time" name="occurs_at" placeholder="Horário" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 [color-schema:dark]" />
                    </div>
                </div>
                */}
                
               
                <Button btn_color_variant="btn_primary" btn_size="full">
                    Salvar Atividade
                </Button>
                  
            </form>

        </div>
 </div>
    );

};


export default CreatActivityModal;