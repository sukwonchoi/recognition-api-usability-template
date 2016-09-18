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
		// Correct
		console.log(gesture);
		if (gesture.shape == this.state.shape) {
			if (this.index == this.shapes.length - 1) {
				window.alert('Yaaaaay you win!!!  :D :D');
				this.index = -1;
			}else {
				window.alert('Nice one, you got it!');
			}
			// TODO - increment shape
			this.index++;
			this.setState({
				shape: this.shapes[this.index]
			});
		} else {
			window.alert('Even my grand kids could draw that...');
		}

		// Wrong

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
		var style = {
			border: '1px solid black',
		}
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
							style={style}
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