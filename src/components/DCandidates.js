import React,{useState,useEffect} from 'react'
import {connect} from 'react-redux'
import *as actions from "../actions/dCandidate"
import { Grid, TableContainer, Table } from '@material-ui/core'
import DCandidateForm from '../components/DCandidateForm'

const DCandidates = (props) => {
    /*  const[x,setX]=useState(0)
     setX(5) */
    useEffect(() => {
        props.fetchAllDCandidates()

    }, [])//componentDidMount
    return (
     /*  <Grid container>
        <Grid item xs={6}>
            <DCandidateForm/>
        </Grid>
        <Grid item xs={6}>
            <TableContainer>


            </TableContainer>
            
        </Grid>
      </Grid> */
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
