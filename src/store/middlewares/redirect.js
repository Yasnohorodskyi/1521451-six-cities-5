import browserHistory from "../../browser-history";
import {ActionType} from "../action";




export const redirect = (_store) => (next) => (action) => {
  if(action){
    if (action.type === ActionType.REDIRECT_TO_ROUTE) {
      //Тут сделать запись токена и установку свойств

     browserHistory.push(action.payload);
    }
  }

  return next(action);
};
