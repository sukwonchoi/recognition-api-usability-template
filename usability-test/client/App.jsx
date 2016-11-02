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

		if(gesture.shape == this.shapes[this.index]){
			alert("correct!!!");
			this.nextShape();
		}
		else{
			alert("Incorrect");
		}
	    this.setState({
	    	recognize: false,
	    });

		this.clearCanvas();
	}

	nextShape(){
		
		if(this.shapes.length - 1 == this.index) {
			this.index = 0;
		} else {
			this.index++;
		}

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
						<RecognitionCanvas
							width={String(screen.width * 0.8)}
							height={String(screen.height * 0.5)}
							doRecognition={this.state.recognize}
							doClearCanvas={this.state.clearRecognitionCanvas}
							clearCanvasHandler={this.clearCanvasHandler}
							recognitionHandler={this.recognitionHandler}
							recognitionUsingTimeout={false}
							enabledGestures={this.shapes}
						/>


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