import React, {Component} from "react";
import Second from "./Second";

interface IState{
    key1:string;
    key2:number;
    key3:any[];
    name:string;
};
interface IProps{

};

class First extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
        this.state = {
            key1 : "Welcome to RK",
            key2:100,
            key3:[{"name":"Shirt","price":100,"rating":2.5,"image":"https://ashokitworkshop.s3.ap-south-1.amazonaws.com/p1.jpg"},
            {"name":"Polo Shirt","price":200,"rating":2.5,"image":"https://ashokitworkshop.s3.ap-south-1.amazonaws.com/p2.jpg"},
            {"name":"American Shirt","price":300,"rating":2.5,"image":"https://ashokitworkshop.s3.ap-south-1.amazonaws.com/p3.jpg"},
            {"name":"Pant","price":400,"rating":2.5,"image":"https://ashokitworkshop.s3.ap-south-1.amazonaws.com/p4.jpg"},
            {"name":"Pant1","price":500,"rating":2.5,"image":"https://ashokitworkshop.s3.ap-south-1.amazonaws.com/p5.jpg"}],
            name: "Rama Kirshna"
        
        }
    };
    changeName = (arg1:string):void => {

        this.setState({
            name : arg1
        })
    };

    render(){
        return(
            <React.Fragment>
                <h1>{this.state.name}</h1>
                <Second key1={this.state.key1}
                key2={this.state.key2} key3={this.state.key3}
                modifyName={this.changeName}> Sending direct data</Second>
            </React.Fragment>
        )
    }
};

export default First;