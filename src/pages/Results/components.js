import React from 'react';
import styled from 'styled-components';
import LinearProgress from '@material-ui/core/LinearProgress';

const GraphBoxWrapper = styled.div`
	margin: auto;
	display: grid;
	font-family: roboto, sans-serif;
	color: grey;
	height: 15vh;
	grid-template-columns: 20% auto ;
	grid-template-rows: 20% auto auto;
`;

const Number = styled.div`
	font-weight: bold;
	color: lightsalmon;
	text-align: left;
`;

const Meter = styled.div`
	align-self: center;
	display: inline;
	grid-row-start: 2;
	grid-column-start: 2;
`;

const Title = styled.div`
	padding: 10px;
	font-weight: bold;
	align-self: center;
	text-align: left;
	text-decoration: underline;
`;

const Definition = styled.div`
	padding: 10px;
	grid-column-end: span 2;
	text-align: left;
	grid-row-start: 3;
`;

const Bar = styled(({ ...other }) => (
	<LinearProgress {...other} classes={{ colorPrimary: 'colorPrimary', barColorPrimary: 'barColorPrimary' }} />
))`
	&.colorPrimary {
		background-color: lightgrey;
	}

	.barColorPrimary {
		background-color: lightsalmon;
	}
`;

export class GraphBox extends React.Component {
	render() {
	  return (
		<GraphBoxWrapper>
			<Title>{this.props.title}:</Title>
			<Number>{this.props.value}</Number>
			<Meter>
				<Bar
					value={this.props.value * 20}
					variant='determinate'
					/>
			</Meter>
			<Definition>
					{this.props.body}
			</Definition>
		</GraphBoxWrapper>
	  );
	}
}
