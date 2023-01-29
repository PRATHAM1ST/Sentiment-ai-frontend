import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function useNotification(){
    const [notification, setNotification] = useState(null);

    useEffect(()=>{
        if(notification && notification !== {} && notification !== null){
            if(notification.status !== 404){
                toast(notification.message);
                setNotification()
            }
        }

    }, [notification])

    return setNotification
}