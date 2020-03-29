import React from 'react';
import Rotas from './rotas'
import Navbar from  '../components/navbar'
import 'bootswatch/dist/flatly/bootstrap.css'
import '../custom.css'

class App extends React.Component {
  state ={
    nome:""
  }  
  render(){
    return (
      <>
        <Navbar/>
        <div className="container">
        
          <Rotas />
          
        </div>
      </>
    );
  }
  
}

export default App;
