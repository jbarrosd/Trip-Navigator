import { CircleCheck } from "lucide-react";

function Activities(){
    return (
            <div className="space-y-8">
                <div className="space-y-2.5">
                    <div className="flex gap-2 items-baseline">
                        <span className="text-xl text-zinc-300 font-semibold">Dia 17</span>
                        <span className="text-xs text-zinc-500">Sabado</span>
                    </div>
                    <p className="text-zinc-500 text-sm">Nenhuma atividade cadastrada nessa data.</p>



                    <div className="flex gap-2 items-baseline">
                        <span className="text-xl text-zinc-300 font-semibold">Dia 18</span>
                        <span className="text-xs text-zinc-500">Domingo</span>
                    </div>
                    <div className="space-y-2.5">
                        <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                            <CircleCheck className="size-5 text-blue-300"/>
                            <span className="text-zinc-100">Praia com amigos</span>
                            <span className="text-zinc-400 ml-auto">08:00hrs</span>
                        </div>
                                
                        <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                            <CircleCheck className="size-5 text-blue-300"/>
                            <span className="text-zinc-100">Café e jogar bola</span>
                            <span className="text-zinc-400 ml-auto">16:00hrs</span>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Activities;