import { Link2, Plus } from "lucide-react"
import React from "react"


function ImportantsLinks(){

    return(
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
    )
}

export default ImportantsLinks