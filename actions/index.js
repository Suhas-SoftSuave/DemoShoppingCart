export function addItem(state) {
    return {
       type: 'ADD_ITEM',
        state:state
    }
 }


 export function setQty(value,param) {
     return {
         type: 'ADD_QTY',
         qtyValue:value,
         param:param
     }
 }

export function delItem(index) {
    return {
        type:'DEL_ITEM',
         defindex:index,
    } 
}

export function checkOut(){
    return {
        type:'CHECKOUT'
    }
}