import axios from "axios";
import { fetchDataRequest,fetchDataSuccess,fetchDataFailure } from "./Takeaction";

export const fetchDataMiddleware= store=> next=>action=>{
    if(action.type==='data/fetchData'){
        store.dispatch(fetchDataRequest());
        axios.get('https://fakestoreapi.com/products').then(response=>{
            store.dispatch(fetchDataSuccess(response.data))
            .catch(error=>{
                store.dispatch(fetchDataFailure(error.message))
            })
        })
    }
    return next(action)
}

