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
		console.log("HI");
		if(gesture.shape == this.shapes[this.index]){
			console.log("Correct!")
			this.nextShape();
		}
		else{
			console.log("Expected: " + this.shapes[this.index] + " but got " + gesture.shape);
		}
	    this.setState({
	    	recognize: false,
	    });
		this.clearCanvas();
	}

	nextShape(){
		this.index = this.shapes.length - 1 == this.index ? 0 : ++this.index;
		this.setState({
			shape: this.shapes[this.index],
		});
	}

	check(){
		this.setState({
			recognize: true,
		});
	}

	clearCanvas(){
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