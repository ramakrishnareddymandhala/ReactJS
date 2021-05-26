import { Avatar, Paper, Table, TableCell, TableContainer, TableHead, TableRow, Typography } from "@material-ui/core";
import React, {Component} from "react";


interface IState{};
interface IProps{
    key1:string;
    key2:number;
    key3:any[];
    key4:any;
};

class Third extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    };

    render(){
        return(
            <React.Fragment>

                <Typography variant="h4" color="secondary" >{this.props.key1}</Typography>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>SNo</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Rating</TableCell>
                                <TableCell>Image</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableHead>
                            {this.props.key3.map((element,index)=>(
                                <TableRow key={index}>
                                    <TableCell>{index}</TableCell>
                                    <TableCell>{element.name}</TableCell>
                                    <TableCell>{element.rating}</TableCell>
                                    <TableCell><Avatar src={element.image}></Avatar> </TableCell>
                                </TableRow>
                            ))}
                        </TableHead>
                    </Table>

                </TableContainer>
                {this.props.key1}
                {this.props.key2}
                l{JSON.stringify(this.props.key3)}
                {this.props.key4}
            </React.Fragment>
        )
    }
}

export default Third;