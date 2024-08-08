import { Calendar, MapPin, Settings2 } from "lucide-react";
import Button  from "../../components/Button/button";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { format } from "date-fns";

interface Trip {
    id: string;
    destination: string;
    starts_at: string;
    ends_at: string;
    is_confirmed: boolean
  }


function DestinationAndDateHeader(){

    const { tripId } = useParams()
    //para salvar os dados da viagem
    const [trip, setTrip] = useState<Trip | undefined>()
  
    //so vai executar quando o tripID tiver mudanca
    useEffect(() => {
      api.get(`trips/${tripId}`).then(response => setTrip(response.data.trip))
    }, [tripId]);

    const displayedDate = trip ? format(trip.starts_at, "dd'/'MM").concat(' até ').concat(format(trip.ends_at, "dd'/'MM"))
    : null;
  
    return(
        <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <MapPin className="size-5 text-zinc-400" />
                    <span className=" text-zinc-100">{trip?.destination}</span>
                </div>

                <div className="flex items-center gap-5">
                    <div className="flex items-center gap-2">
                        <Calendar className="size-5 text-zinc-400" />
                        <span className=" text-zinc-100">{displayedDate}</span>
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