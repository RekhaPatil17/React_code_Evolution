import React,{Component} from 'react';
import ComponentF from './ComponentF';  
import UserContext from './components/userContext';
class ComponentE extends Component {
    static contextType = UserContext

  render() {
    return (  
        
        <div>
            Component E context value {this.context}

                  <ComponentF / >

        </div>
    );
  }
}

{/* ComponentE.contextType = UserContext */}
export default ComponentE; 




