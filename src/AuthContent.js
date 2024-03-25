import * as React from 'react';
import {request} from "../axios_helper"

export default class AuthContent extends React.component{
    constructor(props){
        super(props)
        this.state = {
            data: []
        };
    };

    ComponentDidMount(){
        request(
            "GET",
            "/messages",
            {}
        ),then((response) =>{
            this.setState({data: response.data})
        });
    };

    render(){
    };

}