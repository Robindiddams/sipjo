import React from 'react';
import styled from 'styled-components';
import Slider from '@material-ui/lab/Slider';

const SlideWrapper = styled.div`
	margin: auto;
	display: flex;
	flex-direction: column;
	padding-top: 20px;
	margin-bottom: 20px;
`;

const MinMax = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding-bottom: 10px;
`;

const TextPart = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 80%;
	align-self: center;
	justify-content: space-between;
	font-family: roboto, sans-serif;
	color: grey;
`;

const Meter = styled.div`
	width: 80%;
	align-self: center;
`;

const Title = styled.div`
	font-weight: bold;
	text-decoration: underline;
`;

const Body = styled.div`
	padding: 10px;
`;

const FancySlidyBoy = styled(({ ...other }) => (
	<Slider {...other} classes={{ trackBefore: 'trackBefore', track: 'track' }} />
))`
	&.trackBefore {
		background-color: lightsalmon !important;
		color: lightsalmon !important;
	}

	&.track {
		background-color: lightsalmon !important;
	}
`;

export class SlideBox extends React.Component {
	state = {
		value: 3,
	}
	render() {
	  return (
		<SlideWrapper>
			<TextPart>
				<Title>
					{this.props.title}
				</Title>
				<Body>
					{this.props.body}
				</Body>
			</TextPart>
			<Meter>
				<MinMax>
					<div>1</div> 
					<div>2</div> 
					<div>3</div> 
					<div>4</div> 
					<div>5</div> 
				</MinMax>
				<FancySlidyBoy
					value={this.state.value}
					// aria-labelledby="label"
					onChange={(_, value) => {this.setState({value})}}
					onDragEnd={() => this.props.onUpdate(this.state.value)}
					min={1}
					max={5}
					step={0.01}
				/>
			</Meter>
		</SlideWrapper>
	  );
	}
}
