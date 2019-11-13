import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class ItemsGrid extends Component{
    constructor(){
        super();
        this.state={
            items:[]
        }
    }
      
     
  
    
    
    render(){
        console.log(this.state.items)
        return(
            <div className="container">
        <div className="col-xs-12">
        <h3>My Item list</h3>
     
    
         {items.map((item, index) => {
             return (
             <div>{item.items}</div>
                
                
             );
         }
        //   <div className="card">
        //     <div className="card-body">
        //       <h5 className="card-title">{item.title}</h5>
        //       <h6 className="card-subtitle mb-2 text-muted">
           
        //       </h6>
        //     </div>
        //   </div>
        )}  
        </div>
       </div>
    );

    }
}
export default ItemsGrid;