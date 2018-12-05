import React from 'react';
import styled from 'styled-components';
import {
  Label,
  SelectBox,
} from '../../components/General';
import Traits from '../../static_data/en_trait_definitions';
import { SlideBox } from '../Eval/components';
import MenuItem from '@material-ui/core/MenuItem';

export const Article = styled.div`
	margin:10px;
	text-align: left;
`;

export const ArticleBox = styled.div`
	margin-left: 10%;
	margin-right: 10%;
	margin-top: 20px;
	margin-bottom: 20px;
  padding: 20px;
  border: 1px solid lightgrey;
`;

const Bold = styled.span`
	font-weight: bold;
	color: lightsalmon;
`;

const RateBoxWrapper = styled.div`
	margin-top:10vh;
`;

const QuestionWrapper = styled.div`
  margin: 10vh;
  // display:flex;
`;

export class RateBox extends React.Component {
  render() {
    return (
    <RateBoxWrapper>
      <Label>Please rate <Bold>{this.props.subject}</Bold>.</Label>
      { Traits.map((trait, i) => (<SlideBox
        key={i}
        onUpdate={ (value) => { this.props.onAnswer(value, trait); } }
        title={ trait.name }
        body={ trait.definiton }
      />))}
    </RateBoxWrapper>
    );
  }
}

export const Question = props => (
		<QuestionWrapper>
      <Label>Which of the two do you relate to most?</Label>
      <SelectBox
        label={props.label}
        value={props.value}
        onChange={props.onChange}
      >
        {props.items.map((item) => { return(<MenuItem key={item} value={item}>{item}</MenuItem>);})}
      </SelectBox>
		</QuestionWrapper>
);
