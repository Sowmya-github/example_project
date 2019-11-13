import React,{Component} from 'react';
//import ItemsGrid from './itemsgrid';

class App extends Component{

  constructor(){
    super();
    this.state={
      items:[]
    
    };
  }

  
  async componentWillMount(){
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(res => res.json())
    // .then((data) => {
    //   this.setState({ items: data })
    //  // console.log(this.state.itemlist)
    // });

   // const url="https://jsonplaceholder.typicode.com/users";
   const url="https://jsonplaceholder.typicode.com/photos?albums=1" ;
   const response=await fetch(url);
    const data=await response.json();
    this.setState({
      items:data
    })
    console.log(this.state.items)
    
  }

  render(){
    var { items}=this.state;
   
    return(
      <div className="App">
        <ul>
            {items.map(item=>(
              <li className="personcard" key={item.id}>
                Name:{item.name} | Email:{item.email} |Address:{item.address.street}
              </li>
            ))};
        </ul>
        
      </div>
    );
  }
}

export default App;
