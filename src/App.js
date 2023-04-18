import React, { Component } from 'react'
import './App.css'
import {Alert,Button} from 'react-bootstrap';
export default class App extends Component {
    constructor(props){
        super(props)
        this.state={
        }
    }
    render() {
        return (
            <div><Alert variant='info'>Test MSG <Alert.Link href='#'>Home</Alert.Link></Alert>
                <Button variant='info' size=''>click</Button>
            </div>

            

        )
    }
}
