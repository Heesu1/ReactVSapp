import React,{useState,useEffect} from 'react'
import {connect} from 'react-redux'
import *as actions from "../actions/dCandidate"
import { Grid, TableContainer, Table, TableHead, TableCell, TableRow, TableBody } from '@material-ui/core'
import DCandidateForm from '../components/DCandidateForm'

const DCandidates = (props) => {
    /*  const[x,setX]=useState(0)
     setX(5) */
    useEffect(() => {
        props.fetchAllDCandidates()

    }, [])//componentDidMount
    return (
      <Grid container>
        <Grid item xs={6}>
            <DCandidateForm/>
        </Grid>
        <Grid item xs={6}>
            <TableContainer>
                <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name:</TableCell>
                                <TableCell>Mobile:</TableCell>
                                <TableCell>Blood Group:</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                props.dCandidateList.map((record,index)=>{
                                    return(<TableRow key={index}>
                                        <TableCell>{record.fullName}</TableCell>
                                        <TableCell>{record.mobile}</TableCell>
                                        <TableCell>{record.bloodGroup}</TableCell>
                                    </TableRow>

                                    )
                                })
                            }
                        </TableBody>

                </Table>
                


            </TableContainer>
            
        </Grid>
      </Grid>
    );
}

const mapStateToProps = state => ({
    dCandidateList: state.dCandidate.list
})

const mapActionToProps = {
    fetchAllDCandidates: actions.fetchAll
}

//connect()returns another function a s a parameter to that function
export default connect(mapStateToProps, mapActionToProps)(DCandidates)
