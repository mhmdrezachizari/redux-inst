const INISTIAL_STATE = [
    {name :'iphone12' , price:12000},
    {name :'iphone13' , price:13000},
    {name :'iphone14' , price:14000},
    {name :'iphone15' , price:15000},
    {name :'iphone16' , price:16000},
    {name :'iphone17' , price:17000},
]
const MobileStoreReducer = (state = INISTIAL_STATE , action)=>{
    switch (action.type) {
        case 'BUY_PHONE':
            return [...state, {name: action.name , price: action.price}]
        default:
            return state
    }

}
export default MobileStoreReducer