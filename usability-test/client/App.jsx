import React, { Component } from 'react';

import RecognitionCanvas from 'recognition-canvas';
import { Button, ButtonToolbar, Col, FormControl, FormGroup, Grid, Row } from 'react-bootstrap';


export default class App extends Component {
	
	constructor(){
		super();
		this.state={
				shape: "null",
				/* TODO: Define the initial state of the components */
		}
	}

	generateNewShape(){

		var shape = null;
		
		/* TODO: set shape to be a randomly generated shape of available gestures */

		this.setState({
			shape: shape,
		});
	}

	check(){
		/* TODO: Logic to create condition if the shape drawn is correct */
		clearCanvas();

		if(true){
			generateNewShape();
			alert("Correct!");
		}else{
			alert("Wrong!");
		}
	}

	clearCanvas(){
		/* TODO: Logic to clear the RecognitionCanvas */

	}



	render(){
		return(
			<div className="container">
				<Grid>
					
					<Row>
						<TextArea shape={ this.state.shape }/>
					</Row>

					<Row>
					{/* RecognitionCanvas goes here */}
					</Row>

					<Row>
						<Col xs={6} md={4} mdOffset={5}>
							<ButtonToolbar>
								<Button bsStyle="primary" onClick={ this.check }>Check</Button>
								<Button bsStyle="danger" onClick={ this.clearCanvas }>Clear</Button>
							</ButtonToolbar>
						</Col>
					</Row>

				</Grid>

			</div>
			);
	}
}



class TextArea extends Component {

	render(){
		return(
			<FormGroup controlId="formControlsTextarea">
				<FormControl componentClass="textarea" placeholder={ this.props.shape } />
			</FormGroup>
		);
	}
}