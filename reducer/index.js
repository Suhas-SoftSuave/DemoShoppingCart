const initalstate = {
    items: [],
    total: 0,
}
const reducer = (state = initalstate, action) => {
    switch (action.type) {
       case 'ADD_ITEM': {
        state = {
            items: state.items?.slice(),
            total: state.total
        }
        if(action.state !== undefined){

            for(let i=0;i<state.items.length;i++){
                if(state.items[i].URL===action.state.URL){
                   state.items[i]={...state.items[i],qty:state.items[i].qty+1} 
                   return ({...state, items: [...state.items]})
                }              
            }         
                let newState = {...action.state,qty:1}
                state.items?.push(newState)              
        }        
        return (state)
       }
       case 'ADD_QTY': {
           let newState={
               items:[...state.items],
               total:state.total
           }
           for(let i=0;i<newState.items.length;i++){
               if(newState.items[i].URL===action.param){                   
                newState.items[i] = {...newState.items[i],qty:action.qtyValue}
               }
           }
           return newState        
       }
       case 'DEL_ITEM': {
           let newState = {
               items:state?.items?.filter((item,index) => index !== action.defindex)
           }     
           if(newState.items===undefined){
               let newA = {
                    items:[]
               }
               return newA
           }
           else{
            return newState
           }
        }   
       default: return state;
    }
 }
 export default reducer;