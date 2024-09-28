import { atom, selector} from 'recoil'

export const todoatom = atom({
    key:"todoatom",
    default:[]
});

export const filteratom = atom({
    key: "filteratom",
    default:[]
});
 
export const filteredlist = selector({
    key:" filteredlist",
    get: ({ get})=>{
        
    }
})
