import React, {Component} from "react";
import axios from "axios";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@material-ui/core";
import classes from "*.module.css";

interface IState{
  res : any;
}
interface IProps{
  

}
class App extends Component<IProps,IState>{

  constructor(props : IProps){
    super(props);

    this.state = {
      res : []
    }
  }

  componentDidMount(){
    axios.get("https://www.trackcorona.live/api/countries").then((posRes) => {
      this.setState({
        res : posRes.data.data
      })
    }).catch((error) => {
      console.log(error)
  });
  }

  render(){
    return(
      <React.Fragment>
        <Typography variant="h6" id="tableTitle" component="div">
          Corna live status
        </Typography>

        <TableContainer component={Paper} >
        <Table stickyHeader aria-label="sticky table">
        <caption>A basic table example with a caption</caption>
                  <TableHead>
                    <TableRow>
                        
                        <TableCell>Country Name</TableCell>
                        <TableCell>TotalCases</TableCell>
                        <TableCell>Dead</TableCell>
                        <TableCell>Recovered</TableCell>
                        <TableCell>Last Updated</TableCell>
                        <TableCell>County Code</TableCell>
                        <TableCell>Latitude</TableCell>
                      
                    </TableRow>
                  </TableHead>
                  <TableBody>
                       {this.state.res.map((element:any)=>(
                          <TableRow>
                            
                             <TableCell>{element.location}</TableCell>
                             <TableCell>{element.confirmed}</TableCell>
                             <TableCell>{element.dead}</TableCell>
                             <TableCell>{element.recovered}</TableCell>
                             <TableCell>{element.updated}</TableCell>
                             <TableCell>{element.country_code}</TableCell>
                             <TableCell>{element.latitude}</TableCell>
                           
                          </TableRow>
                       ))}
                  </TableBody>
                </Table>
        </TableContainer>
      </React.Fragment>
      
    )
  }
}

export default App;