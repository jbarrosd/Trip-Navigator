import { CircleDashed, UserCog } from "lucide-react";


function GuestsEmails(){
    return(
        <div className="space-y-6">
            <h2 className="font-semibold text-xl">Convidados</h2>

            <div className="space-y-5">

                <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1.5">
                        <span className="block font-medium text-zinc-100">Jean Barros </span>
                        <span className="block text-sm text-zinc-400 truncate ">jbarrosdteste@outlook.com</span>
                    </div>
                    <CircleDashed className="text-zinc-400 size-5 shrink-0" />
                </div>

                <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1.5">
                        <span className="block font-medium text-zinc-100">Ryatsui</span>
                        <span className="block text-sm text-zinc-400 truncate ">ryatsui@gmail.com</span>
                    </div>
                    <CircleDashed className="text-zinc-400 size-5 shrink-0" />
                </div>
            </div>
        
            <button className="bg-blue-400 text-blue-950 w-full justify-center rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-blue-300 ">
                <UserCog className="size-5" /> 
                Gerenciar Convidados
            </button>
        </div> 

    );
};

export default GuestsEmails;