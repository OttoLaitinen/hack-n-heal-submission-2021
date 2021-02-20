import {AbsoluteFill, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import styled, {ThemeProvider} from 'styled-components';
import theme from './styles/theme';

const Title: React.FC<{title: string; delayS: number; subtitle?: boolean}> = ({
	title,
	delayS,
	subtitle = false,
}) => {
	const {fps, durationInFrames, width, height} = useVideoConfig();
	const frame = useCurrentFrame();

	const progress = spring({
		fps,
		from: 0,
		to: 1,
		frame: frame - delayS * 30,
		config: {
			mass: 4,
			damping: 200,
		},
	});

	return (
		<TextPill subtitle={subtitle} style={{opacity: progress}}>
			{title}
		</TextPill>
	);
};

export const Scene1 = () => {
	const {width, height} = useVideoConfig();
	const frame = useCurrentFrame();

	return (
		<ThemeProvider theme={theme}>
			<AbsoluteFill
				style={{backgroundColor: theme['grey-50'], justifyContent: 'center'}}
			>
				<Title delayS={0} title="COVID-19 Vaccinations" />
				<Title subtitle delayS={1} title="Hack & Heal 2021" />
			</AbsoluteFill>
		</ThemeProvider>
	);
};

const TextPill = styled.div<{subtitle: boolean}>`
	color: ${(props) => props.theme['primary-500']};
	font-family: 'Nunito';
	font-weight: 800;
	font-size: ${(props) => (props.subtitle ? 64 : 128)}px;
	padding: 8px 32px;
	margin-bottom: 16px;
	text-align: center;
	border-radius: 100px;
`;
