import {useState} from 'react';
import {
	AbsoluteFill,
	continueRender,
	delayRender,
	Img,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import styled from 'styled-components';
import hospital from './assets/hospital.png';
import people from './assets/man.png';
import pharma from './assets/pharmacy.png';
import theme from './styles/theme';

const ICON_SIZE = 300;

export const Scene2: React.FC = () => {
	const {fps, durationInFrames, width, height} = useVideoConfig();
	const frame = useCurrentFrame();

	const progress1 = spring({
		fps,
		from: 1,
		to: 0,
		frame: frame - 30,
		config: {
			mass: 4,
			damping: 200,
		},
	});

	const progress2 = spring({
		fps,
		from: 1,
		to: 0,
		frame: frame - 8 * 30,
		config: {
			mass: 4,
			damping: 200,
		},
	});

	const progress3 = spring({
		fps,
		from: 1,
		to: 0,
		frame: frame - 15 * 30,
		config: {
			mass: 4,
			damping: 200,
		},
	});

	return (
		<>
			<AbsoluteFill
				style={{backgroundColor: theme['grey-50'], justifyContent: 'center'}}
			>
				<PageTitle>Stakeholders</PageTitle>
				<Row>
					<IconWithText
						text="People"
						icon="people"
						style={{
							transform: `translateY(${progress1 * height}px)`,
							opacity: 1 - progress1,
						}}
					/>
					<IconWithText
						text="Public healthcare"
						icon="hospital"
						style={{
							transform: `translateY(${progress2 * height}px)`,
							opacity: 1 - progress2,
						}}
					/>
					<IconWithText
						text="Pharma companies"
						icon="pharma"
						style={{
							transform: `translateY(${progress3 * height}px)`,
							opacity: 1 - progress3,
						}}
					/>
				</Row>
			</AbsoluteFill>
		</>
	);
};

const IconWithText: React.FC<{
	text: string;
	icon: string;
	style?: object;
}> = ({text, icon, style = {}}) => {
	const [handle] = useState(() => delayRender());
	console.log(icon);

	return (
		<Wrapper key={icon} style={style}>
			<IconWrapper>
				{icon === 'hospital' ? (
					<Img
						key={icon}
						src={hospital}
						style={{
							width: `${ICON_SIZE}px`,
							height: `${ICON_SIZE}px`,
						}}
						onLoad={() => continueRender(handle)}
						onError={() => continueRender(handle)}
					/>
				) : icon === 'people' ? (
					<Img
						key={icon}
						src={people}
						style={{width: `${ICON_SIZE}px`, height: `${ICON_SIZE}px`}}
						onLoad={() => continueRender(handle)}
						onError={() => continueRender(handle)}
					/>
				) : (
					<Img
						key={icon}
						src={pharma}
						style={{width: `${ICON_SIZE}px`, height: `${ICON_SIZE}px`}}
						onLoad={() => continueRender(handle)}
						onError={() => continueRender(handle)}
					/>
				)}
			</IconWrapper>
			<IconText>{text}</IconText>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-left: 64px;
	margin-right: 64px;
`;

const IconWrapper = styled.div`
	height: ${ICON_SIZE}px;
	width: ${ICON_SIZE}px;
	margin-bottom: 16px;
`;

const IconText = styled.div`
	color: ${(props) => props.theme['grey-800']};
	font-family: 'Nunito';
	font-weight: 800;
	font-size: 32px;
`;

const PageTitle = styled.div`
	color: ${(props) => props.theme['grey-800']};
	font-family: 'Nunito';
	font-weight: 800;
	font-size: 64px;

	position: absolute;
	top: 128px;
	width: 100%;
	text-align: center;
`;

const Row = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;
