import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function useNotification(){
    const [notification, setNotification] = useState(null);

    useEffect(()=>{
        if(notification && notification !== {} && notification !== null){
            switch(notification.status){
                case(404):
                    toast(notification.message);
            }

        }

    }, [notification])

    return setNotification
}