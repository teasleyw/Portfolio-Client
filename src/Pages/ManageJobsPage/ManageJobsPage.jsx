import React, { useState, useEffect,useContext } from 'react';
import Header from "../../Components/Header/Header.jsx"
import {ManageJobsContainer,JobContainer,JobItem,JobContainerTitle,ManageJobsTitle} from "./ManageJobsStyled"
import axios from 'axios';
import {getAuthToken,request} from "../../axiosHelper.js"
import ManageJobs from "../ManageJobs/ManageJobs"
const ManageJobsPage = ({customerData,dispatch,userId}) => {

     return(
     <div style={{overflow: "hidden"}}>
     <Header customerData={customerData} dispatch={dispatch}/>
     <ManageJobsContainer>
         <ManageJobsTitle> Manage Jobs </ManageJobsTitle>
         <JobContainer>
            <ManageJobs customerData={customerData} dispatch={dispatch} userId={1}/>
         </JobContainer>
     </ManageJobsContainer>
     </div>
     )
}
export default ManageJobsPage