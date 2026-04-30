import { useEffect } from "react";

function useOutsideClick()
    {
        
        useEffect( (ref,callback, enabled = true)=>{ 

            if (!enabled)return;
           function handleClick (e){
             if (ref.current && ref.current.contains (e.target)){
                setOpen(false) 
            }
           }
           document.addEventListener("mousedown", handleClick)
           return()=>document.removeEventListener("mousedown", handleClick)

        }, [ref,callback,enabled] )

    }
export default useOutsideClick;