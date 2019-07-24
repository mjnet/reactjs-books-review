import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';

const Content = styled.div`
	width: 100%;
	height: 540px;
	background-color: #e5eef5;
	padding-top: 76px;
	padding-left: 40px;
	padding-right: 40px;
`;

const Title = styled.div`
	text-align: center;
	font-family: Roboto;
	font-size: 24px;
	font-weight: bold;
	text-transform: uppercase;
	padding-bottom: 50px;
`;

const InputArea = styled.div`padding-bottom: 25px;`;
const LabelX = styled.mark`
	background: transparent;
	font-size: 1em;
	color: ${(props) => (props.required ? 'red' : '#2d5c59')};
`;

const SignButton = styled.button`
	background: ${(props) => (props.primary ? '#2d5c59' : '#e5eef5')};
	color: ${(props) => (props.primary ? '#e5eef5' : '#2d5c59')};
	padding: ${(props) => (props.primary ? '0.4em 1.5em' : '0.25em 1em')};
	font-size: ${(props) => (props.primary ? '1.2em' : '1em')};

	border: 2px solid #2d5c59;
	border-radius: 1px;
`;
const UppercaseButton = (props) => <button {...props} children={props.children.toUpperCase()} />;

const SignInput = styled.input`
	padding: 0.5em;
	margin: 0em;
	color: #3a3a3a;
	background: white;
	border: 2px solid #e0e0e0;
	border-radius: 0px;
	width: 100%;
`;

const SignElse = styled.div`
	margin-top: 10px;
	padding-top: 20px;
	border-top: 1px solid #e0e0e0;
	width: 100%;
`;

export default class SigninForm extends React.Component {
	_emailInput = React.createRef();
	_passwordInput = React.createRef();

	render() {
		return (
			<Col
				span={12}
				style={{
					verticalAlign: 'top'
				}}
			>
				<Content>
					<Title>LOG IN. START SEARCHING.</Title>

					<InputArea>
						<LabelX>
							Email<LabelX required>*</LabelX>
						</LabelX>
						<SignInput
							ref={this._emailInput}
							placeholder="Email"
							onMouseEnter={() => {
								this._emailInput.current.focus();
							}}
						/>
					</InputArea>
					<InputArea>
						<LabelX>
							Password<LabelX required>*</LabelX>
						</LabelX>
						<SignInput
							ref={this._passwordInput}
							type="password"
							onMouseEnter={() => {
								this._passwordInput.current.focus();
							}}
						/>
					</InputArea>
					<InputArea>
						<SignButton as={UppercaseButton} primary>
							sign in
						</SignButton>
					</InputArea>

					<SignElse>
						<Row style={{ 'padding-bottom': '20px' }}>
							<Col span={15}>Need to create an sccount?</Col>
							<Col span={9} style={{ 'text-align': 'right' }}>
								<SignButton as={UppercaseButton}>sign up</SignButton>
							</Col>
						</Row>

						<Row style={{ 'padding-bottom': '20px' }}>
							<Col span={15}>Forgot your password?</Col>
							<Col span={9} style={{ 'text-align': 'right' }}>
								<SignButton as={UppercaseButton}>recovery</SignButton>
							</Col>
						</Row>
					</SignElse>
				</Content>
			</Col>
		);
	}
}
