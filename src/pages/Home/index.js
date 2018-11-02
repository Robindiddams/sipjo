import React, { Component } from 'react';
import {
	Card,
	StartButton,
	Title,
	Text,
	Hr,
} from './components';


export default class Home extends Component {
	render() {
		return (
			<React.Fragment>
				<Card>
					<Title>
						Welcome!
					</Title>
					<Text>
						This is a test that christina made up and it's super fun!
						I'll type some more things so that xtina can see what it looks like to have a lot of text.
						I might even add some <strong>text formatting</strong>, who knows.
					</Text>
					<Hr/>
					<Text>
						Look I even added a divider! wow! Everything a girl could ask for IMO.
						Well I'm hungry so ill add more to this later.
					</Text>
					<StartButton href='/test'>
						Start
					</StartButton>
				</Card>
			</React.Fragment>
		);
	}
}