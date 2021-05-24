import React, {Component} from "react";

interface IState {
    "sub" : string;
};
 interface IProps {

 };

 class State extends Component<IProps,IState>{
     constructor(props : IProps){
         super(props);
         this.state = {
             sub : "React"
         }
     };

     myFun = () =>{
        this.setState({
            sub : "React changed"
        })
     };

     render(){

        return (
            <React.Fragment>
                <h1> {this.state.sub}</h1>
                <button onClick={this.myFun}>Change</button>
            </React.Fragment>
        )
     }
 }

 export default State;