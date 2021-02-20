import {
	AbsoluteFill,
	Img,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import styled from 'styled-components';
import theme from './styles/theme';

export const IconNText: React.FC<{
	text: string;
	text2?: string;
	icon: string;
	sceneLength: number
}> = ({text, text2, icon, sceneLength}) => {
	const {width, fps} = useVideoConfig();
	const frame = useCurrentFrame();

	const comeIn = spring({
		fps,
		from: 0,
		to: 1,
		frame: frame,
		config: {
			mass: 2,
			damping: 200,
		},
	});

	const goOut = spring({
		fps,
		from: 0,
		to: 1,
		frame: frame - (sceneLength - 30),
		config: {
			mass: 2,
			damping: 200,
		},
	});

	const RtoM = interpolate(comeIn, [0, 1], [width, 0], {
		extrapolateRight: 'clamp',
	});

	const MtoL = interpolate(goOut, [0, 1], [0, width], {
		extrapolateRight: 'clamp',
	});

	return (
		<AbsoluteFill
			style={{
				backgroundColor: theme['grey-50'],
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Img
				style={{
					width: '450px',
					marginBottom: '32px',
					transform: `translateX(${RtoM - MtoL}px)`,
				}}
				src={icon}
			/>
			<Text style={{transform: `translateX(${-RtoM + MtoL}px)`}}>{text}</Text>
			{text2 && (
				<Text style={{transform: `translateX(${-RtoM + MtoL}px)`}}>
					{text2}
				</Text>
			)}
		</AbsoluteFill>
	);
};

const Text = styled.div`
	color: ${(props) => props.theme['primary-500']};
	font-family: 'Nunito';
	font-weight: 800;
	font-size: 88px;
	padding: 8px 32px;
	margin-bottom: 16px;
	text-align: center;
	border-radius: 100px;
`;
