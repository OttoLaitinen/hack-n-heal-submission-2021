import {
	AbsoluteFill,
	interpolate,
	Sequence,
	spring,
	useCurrentFrame,
	useVideoConfig,
	Video,
} from 'remotion';
import styled, {ThemeProvider} from 'styled-components';
import vid1 from './assets/vid1.webm';
import vid2 from './assets/vid2.webm';
import vid3 from './assets/vid3.webm';
import theme from './styles/theme';
export const Scene4: React.FC = () => {
	const {fps, durationInFrames, width, height} = useVideoConfig();
	const frame = useCurrentFrame();

	const phase1 = spring({
		fps,
		from: 0,
		to: 1,
		frame: frame - 60,
		config: {
			mass: 2,
			damping: 200,
		},
	});

	const phase1offset = interpolate(phase1, [0, 1], [-1000, 0], {
		extrapolateRight: 'clamp',
	});

	const phase2 = spring({
		fps,
		from: 0,
		to: 1,
		frame: frame - 510,
		config: {
			mass: 2,
			damping: 200,
		},
	});

	const phase2offset = interpolate(phase2, [0, 1], [-1000, 0], {
		extrapolateRight: 'clamp',
	});

	const phase3 = spring({
		fps,
		from: 0,
		to: 1,
		frame: frame - (510 + 360),
		config: {
			mass: 2,
			damping: 200,
		},
	});

	const phase3offset = interpolate(phase3, [0, 1], [-1000, 0], {
		extrapolateRight: 'clamp',
	});

	return (
		<ThemeProvider theme={theme}>
			<AbsoluteFill style={{backgroundColor: theme['grey-50']}}>
				<Sequence from={0} durationInFrames={510} name="vid1">
					<Video src={vid1} style={{height: 1080, position: 'absolute'}} />
				</Sequence>
				<Sequence from={510} durationInFrames={360} name="vid2">
					<Video src={vid2} style={{height: 1080, position: 'absolute'}} />
				</Sequence>
				<Sequence from={510 + 360} durationInFrames={Infinity} name="vid3">
					<Video src={vid3} style={{height: 1080, position: 'absolute'}} />
				</Sequence>
				<Wrapper width={width} height={height}>
					<TextBox
						style={{
							transform: `translate(${phase1offset}px, 0)`,
						}}
					>
						Easy to register
					</TextBox>
					<TextBox
						style={{
							transform: `translate(${phase2offset}px, 0)`,
						}}
					>
						Daily questionnaire
					</TextBox>
					<TextBox
						style={{
							transform: `translate(${phase3offset}px, 0)`,
						}}
					>
						Simple assesment
					</TextBox>
				</Wrapper>
			</AbsoluteFill>
		</ThemeProvider>
	);
};

const Wrapper = styled.div<{width: number; height: number}>`
	position: absolute;
	width: ${(props) => props.width / 2 - 200}px;
	height: ${(props) => props.height}px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
`;

const TextBox = styled.div`
	background-color: ${(props) => props.theme['grey-50']};
	color: ${(props) => props.theme['grey-800']};
	font-family: 'Nunito';
	font-weight: 600;
	font-size: 72px;
	padding: 16px 32px;
	border-radius: 0 16px 16px 0;
	margin-bottom: 48px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
`;
