import { atom, selector} from 'recoil'

export const todoatom = atom({
    key:"todoatom",
    default:[]
});

export const filteratom = atom({
    key: "filteratom",
    default:[]
});
 
export const filteredtodos = selector({
    key:" filteredlist",
    get: ({ get})=>{
        const todos= get(todoatom);
        const filter = get(todofilter);
        return todos.filter(x=> x.title.includes( filter)|| x.description.includes( filter));
    }
})
