import { Calendar, MapPin, Settings2 } from "lucide-react";
import Button  from "../../components/Button/button";

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

                
                    <Button btn_color_variant="btn_primary">
                       Alterar local/data
                      <Settings2  className="size-5"/>    
                    </Button>
                  
                </div> 
        </div>
    );
};


export default DestinationAndDateHeader;