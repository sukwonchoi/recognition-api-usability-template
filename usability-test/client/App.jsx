import React, { Component } from 'react';

import RecognitionCanvas from 'recognition-canvas';
import { Button, ButtonToolbar, Col, FormControl, FormGroup, Grid, Row } from 'react-bootstrap';


export default class App extends Component {
	
	constructor(){
		super();
		this.clearCanvas = this.clearCanvas.bind(this);
		this.clearCanvasHandler = this.clearCanvasHandler.bind(this);
		this.recognitionHandler = this.recognitionHandler.bind(this);
		this.nextShape = this.nextShape.bind(this);
		this.check = this.check.bind(this);


		//List of shapes to use in game.
		this.shapes = ["O", "H", "exclamation", "five-point star", "arrowhead"];
		this.index = 0;
		this.state={
			shape: this.shapes[this.index],
			clearRecognitionCanvas: false,
			recognize: false,
		}

	}

	clearCanvasHandler(){
		this.setState({
			clearRecognitionCanvas: false,
		});
	}

	recognitionHandler(gesture){

		/* 
		 * TODO: determine if recognized shape matches the desired shape. 
		 * Use Alert() function to tell the user if the drawn shape is correct or wrong.
		 * Call clearCanvas() after recognition.
		 */

		this.clearCanvas();
	}

	nextShape(){
		this.setState({
			shape: this.shapes[this.index],
		});
	}


	generateNewShape(){

		var shape = null;
		

		this.setState({
			shape: shape,
		});
	}

	check(){
		/* TODO: Logic to create condition if the shape drawn is correct */
		this.setState({
			recognize: true,
		});

	}

	clearCanvas(){
		/* TODO: Logic to clear the RecognitionCanvas */
		this.setState({
			clearRecognitionCanvas: true,
		});
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