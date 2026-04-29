import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:false
      }
    }
  render() {

        return this.state.isLoggedIn && <div>Welcome Rekha</div>


        // conditional rendering approach operator
        // return this.state.isLoggedIn?(
        //     <div>Welcome Rekha</div>
        //     ):(
        //     <div>Welcome Guest</div>
        //     )
        

        // element variables approach
        // let message
        // if(this.state.isLoggedIn){
        //     message = <div>Welcome Rekha</div>
        // }
        // else{
        //     message = <div>Welcome Guest</div>
        // }
        // return <div>{message}</div>


        // short circuit operator approach
        // if(this.state.isLoggedIn){
        //     return (
        //         <div>
        //             Welcome Rekha
        //         </div>
        //     )
        // }
        // else{
        //     return (
        //         <div>
        //             Welcome Guest
        //         </div>
        //     )
        // }
    // return (

    //   <div>
    //     <div>Welcome  Rekha</div>
    //     <div>Welcome  Guest</div>
    //     </div>
    // )
  }
}

export default UserGreeting

