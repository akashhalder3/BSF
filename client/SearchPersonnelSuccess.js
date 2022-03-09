import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography, Button } from "@material-ui/core";
import jsPDF from "jspdf";
import "jspdf-autotable";

const useStyles = makeStyles({
    table: {
      minWidth: '650',
      fontFamily: 'arial',
      borderCollapse: 'collapse',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    td: {
        border: '1px solid #dddddd',
        textAlign: 'left',
        padding: '8px'
      },
      
      tr: {
        backgroundColor: '#dddddd',
      },

      page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
      },

      section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
      }
  });



export default function SearchPersonnelSuccess() {
    const classes = useStyles();

    console.log(globalvalues.fullName)

    const [count, setCount] = useState(0);
    useEffect(() => {
        const timeout = setTimeout(() => 
        {      
            setCount(1);    
            
            
        }, 
        3000); 
    },[]);

    function handlePDF(){
      const doc = new jsPDF();
      //define the columns we want and their titles
    const tableColumn = ["Details", "Values"];
    const tableRows = [];
    for(var key in global.globalvalues){

      var temp = [key, global.globalvalues[key]];
      tableRows.push(temp);
        
       // count++;
    }
     // startY is basically margin-top
    doc.autoTable(tableColumn, tableRows, { startY: 20 });

    const date = Date().split(" ");
        // we use a date string to generate our filename.
    const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
        // ticket title. and margin-top + margin-left
    doc.text("BSF Personnel", 14, 15);
        // we define the name of our PDF file.
    doc.save(`report_${dateStr}.pdf`); 
     }

     
    
    return (
        <div component={Paper}>
            
            <p>{Date().toLocaleString()}</p>
            
            <Typography variant="h6" component="h2" align="center">Person Details</Typography>
            <table className={classes.table} aria-label="simple table">
                    <tr>
                        <td className={classes.td}>Name</td>
                        <td className={classes.td}>{globalvalues.fullName}</td>
                    </tr>
                    <tr>
                        <td className={classes.td}>Hash</td>
                        <td className={classes.td}>{globalvalues.irla}</td>
                    </tr>
                    <tr>
                        <td className={classes.td}>Mobile</td>
                        <td className={classes.td}>{globalvalues.mobile}</td>
                    </tr>
                    <tr>
                        <td className={classes.td}>Email</td>
                        <td className={classes.td}>{globalvalues.email}</td>
                    </tr>
                    <tr>
                        <td className={classes.td}>Unit</td>
                        <td className={classes.td}>{globalvalues.unit}</td>
                    </tr>
                    <tr>
                        <td className={classes.td}>Rank</td>
                        <td className={classes.td}>{globalvalues.rank}</td>
                    </tr>
                    <tr>
                        <td className={classes.td}>Parent Unit</td>
                        <td className={classes.td}>{globalvalues.parentunit}</td>
                    </tr>
                    <tr>
                        <td className={classes.td}>Rank Held Since</td>
                        <td className={classes.td}>{globalvalues.rankhs}</td>
                    </tr>
                    <tr>
                        <td className={classes.td}>Appointment</td>
                        <td className={classes.td}>{globalvalues.appointment}</td>
                    </tr>
                    <tr>
                        <td className={classes.td}>Date of Join in BSF</td>
                        <td className={classes.td}>{globalvalues.dojg}</td>
                    </tr>
                    <tr>
                        <td className={classes.td}>Status in BSF</td>
                        <td className={classes.td}>{globalvalues.sbsf}</td>
                    </tr>
                    
            </table>
            <div>
            <Button 
            onClick={handlePDF} 
            variant="contained" 
            color="secondary" 
            align='center'
            style={{ margin : "2rem" }}
            >
            Download PDF

            </Button>
            </div>
        </div>
        
        
        
    )
}

