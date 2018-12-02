import React, { Component } from 'react';
import {
	Text,
	Article,
	ConsentInputWrapper
} from './components';
import {
	Page,
	Title,
	NextButton,
	TextBox,
} from '../../components/General';


export default class Consent extends Component {
	state = {
		value: '',
	}
	render() {
		return (
			<React.Fragment>
				<Page>
					<Title>
						Informed Consent
					</Title>
					<Text>
						Please Read the following document:
					</Text>
					<Article>
						You are invited to participate in a research study on self-image and personality assessment. You must be at least 18 years of age to be eligible for participation.<br/>
					</Article>
					<Article>
						<u>Procedure To Be Followed​:</u> Participants will complete a self-evaluation that covers the six personality traits this experiment measures. Afterwards, they will take a short personality questionnaire, which should take no more than 12 minutes to complete. Then, participants will be shown a video of two people interacting and will be asked to evaluate both people in the video according to the same six personality traits as before. After this, participants will be debriefed about the experiment and will have any questions they have be answered at this time.
					</Article>
					<Article>
						<u>Confidentiality​:</u> All of the participant responses will be kept confidential and will not be viewed by anyone except the researchers directly involved in the study. Responses will be kept for 1 year and then destroyed.
					</Article>
					<Article>
						<u>Potential Risks or Discomforts​:</u> This experiment has no expected risks.
					</Article>
					<Article>
						<u>Potential Benefits​:</u> Participation in this study will provide an opportunity to learn more about personality and the traits that contribute to it. This study will also provide a chance to partake in psychological research.
					</Article>
					<Article>
						<u>Freedom to Withdraw​:</u> Please note that your participation is not required and you are free to withdraw from the study at any point without consequence.
					</Article>
					<Article>
						For additional questions about the study, please contact either:<br/>
						Christina Knaak at 916-904-6755 or christina.knaak@mymail.champlain.edu <br/>Dr. Gary A. Baker at 802-865-5459 or gbaker@champlain.edu
					</Article>
					<Article>
						I have read and understand this information, all of my questions have been answered, and I give my consent to participate.	
					</Article>
					<ConsentInputWrapper>
						<TextBox
							label='Full name'
							onChange={(event) => {
								this.setState({value: event.target.value})
							}}
							size='10em'
						/>
					</ConsentInputWrapper>
					{ this.state.value !== '' ? <NextButton onClick={() => {
						sessionStorage.setItem(this.props.name, JSON.stringify({ name: this.state.value }));
						this.props.nextPage();
					}}> 
						I have read and I consent
					</NextButton> : <NextButton disabled>I have read and I consent</NextButton>}
				</Page>
			</React.Fragment>
		);
	}
}