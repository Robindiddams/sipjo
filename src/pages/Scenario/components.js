import React from 'react';
import styled from 'styled-components';
import { Label } from '../../components/General';
import Traits from '../../static_data/en_trait_definitions';
import { SlideBox } from '../Eval/components';

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
