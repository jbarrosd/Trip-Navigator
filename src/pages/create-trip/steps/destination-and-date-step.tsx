import { ArrowRight, Calendar, MapPin, Settings2, X } from "lucide-react";
import Button from "../../../components/Button/button";
import { useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

interface DestinationAndDateStepProps{
    isInputOpen: boolean;
    inputClose: () => void;
    inputOpen: () => void;
    setDestination: (destination: string) => void;
    setEventStartAndEndDates: (dates: DateRange | undefined) => void;
    eventStartAndEndDates: DateRange | undefined;
}

function DestinationAndDateStep({isInputOpen, inputClose, inputOpen,  setDestination, setEventStartAndEndDates, eventStartAndEndDates}: DestinationAndDateStepProps){

  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  //const [eventStartAndEndDates, setEventStartAndEndDates] = useState<DateRange | undefined>()


  function openDatePicker(){
    return setIsDatePickerOpen(true);
  };

  function closeDatePicker(){
    return setIsDatePickerOpen(false);
  };

  const displayedDate = eventStartAndEndDates && eventStartAndEndDates.from && eventStartAndEndDates.to 
  ? format(eventStartAndEndDates.from, "dd'/'MM").concat(' até ').concat(format(eventStartAndEndDates.to, "dd'/'MM"))
  : null;


    return (
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
                
                <div className=" flex items-center gap-2 flex-1">
                  <MapPin  className=" size-5 text-zinc-400"/>
                  {/*disabled={isInputOpen}, butao desabilitado caso o input esteja open */}
                  <input disabled={isInputOpen} type="text" placeholder="Para onde gostaria de ir?" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" 
                    onChange={event => setDestination(event.target.value)}
                  />
                </div>


                <button onClick={openDatePicker} disabled={isInputOpen} className=" flex items-center gap-2 text-left">
                  <Calendar  className=" size-5 text-zinc-400"/>
                  
                    <span  className="text-lg text-zinc-400 w-40">
                      {displayedDate || "Quando?"}
                    </span>
                </button>

                {isDatePickerOpen && (
                    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
                      <div className=" rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">     
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <h2 className="text-lg font-semibold">Selecione a data</h2>
                              <button onClick={closeDatePicker}>
                                <X className="size-5 text-red-300"/>
                              </button>
                            </div>
                          </div>
      
                          <DayPicker mode="range" selected={eventStartAndEndDates} onSelect={setEventStartAndEndDates} />
                      </div>
                    </div>
                )}    
               

                <div className="w-px h-6 bg-zinc-800"/>


                {isInputOpen ? (
                 
                  <Button onClick={inputClose} btn_color_variant="btn_primary">
                    Alterar local/data
                    <Settings2 /> 
                  </Button>
                  
                
                  ) : (
                      /*onClick={InputOpen} significa que quando o butao é apertado vai fazer  */
                   

                    <Button onClick={inputOpen} btn_color_variant="btn_primary">
                      Continuar
                      <ArrowRight className="size-5 text-blue-950"/>
                    </Button>

                    )
                } 
              
            </div>
    )
}

export default DestinationAndDateStep;