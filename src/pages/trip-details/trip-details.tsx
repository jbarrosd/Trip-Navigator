import { Calendar, CircleCheck, CircleDashed, Link2, MapPin, Plus, Settings2, UserCog } from "lucide-react";

function TripDetails() {
    return (
        <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
            <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <MapPin className="size-5 text-zinc-400" />
                    <span className=" text-zinc-100">Rio de Janeiro, Brasil</span>
                </div>

                <div className="flex items-center gap-5">
                    <div className="flex items-center gap-2">
                        <Calendar className="size-5 text-zinc-400" />
                        <span className=" text-zinc-100">17 a 23 e agosto</span>
                    </div>

                    <div className="w-px h-6 bg-zinc-800"/>

                    <button className="bg-blue-400 text-blue-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-blue-300 ">
                        Alterar local/data
                        <Settings2  className="size-5"/> 
                    </button>
                </div>
            </div>

            <main className=" flex gap-16 px-4">
                <div className="flex-1 space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-3xl font-semibold">Atividades</h2>

                        <button className="bg-blue-400 text-blue-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-blue-300 " >
                            <Plus className="size-5 "/>
                            Cadastrar Atividade
                        </button>
                    </div>

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
                </div>
                
                
                <div className="w-80 space-y-6">
                    <div className="space-y-6">
                        <h2 className="font-semibold text-xl">Links importantes</h2>

                        <div className="space-y-5">

                            <div className="flex items-center justify-between gap-4">
                                <div className="space-y-1.5">
                                    <span className="block font-medium text-zinc-100">Reserva do AirBnB</span>
                                    <a href="#" className="block text-xs text-zinc-400 truncate hover:text-zinc-200">https://reserva-do-AirBnB</a>
                                </div>
                                <Link2 className="text-zinc-400 size-5 shrink-0" />
                            </div>

                            <div className="flex items-center justify-between gap-4">
                                <div className="space-y-1.5">
                                    <span className="block font-medium text-zinc-100">Reserva do AirBnB</span>
                                    <a href="#" className="block text-xs text-zinc-400 truncate hover:text-zinc-200">https://reserva-do-AirBnB</a>
                                </div>
                                <Link2 className="text-zinc-400 size-5 shrink-0" />
                            </div>
                        </div>
                      
                        <button className="bg-blue-400 text-blue-950 w-full justify-center rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-blue-300 ">
                            <Plus className="size-5" /> 
                            Cadastrar novo link
                       </button>
                    </div>

                    <div className="w-full h-px bg-zinc-800"/>

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
                </div>
            </main>
        </div>
    )
}

export default TripDetails;