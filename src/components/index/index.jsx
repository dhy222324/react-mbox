import React from 'react';
import {inject,observer} from "mobx-react";
@inject("indexReducer","listReducer") 
@observer
class Index extends React.Component{
    render(){
        console.log(this.props);
        let {name,price,num,add,countPrice}=this.props.indexReducer;
        let {uname}=this.props.listReducer;

        return (
            <div>
               <h1>Index</h1>
               <div>
                   种类:{name}
               </div>
               <div>
                   价格:{price}
               </div>
               <div>
                   数量:{num}
               </div>
               <div>
                   总价:{countPrice}
               </div>
               <button onClick={add.bind(this)}>add</button>
               {uname}
            </div>
        )
    }
}
export default Index;