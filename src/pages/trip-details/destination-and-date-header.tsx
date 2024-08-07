import { Calendar, MapPin, Settings2 } from "lucide-react";

function DestinationAndDateHeader(){
    return(
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
    );
};


export default DestinationAndDateHeader;