import indexReducer from "../components/index/indexReducer"
import listReducer from "../components/list/listReducer"
class RootStore {
    constructor(){
        this.indexReducer=new indexReducer();
        this.listReducer=new listReducer();
    }
}
export default new RootStore();