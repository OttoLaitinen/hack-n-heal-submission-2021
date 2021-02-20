import {
	AbsoluteFill,
	Img,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import styled, {ThemeProvider} from 'styled-components';
import olli from './assets/olli.jpg';
import otto from './assets/otto.jpeg';
import logo from './assets/vacci-set.png';
import theme from './styles/theme';

const PICTURE_SIZE = 200

const Profile: React.FC<{
	style: Object;
	name: string;
	image: string;
	dir: 'left' | 'right';
}> = ({style = {}, name, image, dir}) => {
	/* const s = {left: 'auto', right: 'auto', top: '128px'};

	if (dir === 'left') s['left'] = '100px';
	else s['right'] = '100px'; */

	return (
		<ProfileWrapper style={{...style}}>
			<Img
				src={image}
				style={{
					width: PICTURE_SIZE,
					height: PICTURE_SIZE,
					borderRadius: '100%',
				}}
			/>
			<ProfileText>{name}</ProfileText>
		</ProfileWrapper>
	);
};

const ProfileWrapper = styled.div<{style: Object}>`
	display: flex;
	position: absolute;
	bottom: 36px;
	flex-direction: column;
`;

const ProfileText = styled.div`
	color: ${(props) => props.theme['grey-800']};
	font-family: 'Nunito';
	font-weight: 600;
	font-size: 32px;
	margin-top: 16px;
	text-align: center;
`;

export const Scene6 = () => {
	const {width, height, fps} = useVideoConfig();
	const frame = useCurrentFrame();

	const offsetSpring = spring({
		fps,
		from: 0,
		to: 1,
		frame: frame,
		config: {
			mass: 2,
			damping: 200,
		},
	});

	const offset = interpolate(offsetSpring, [0, 1], [height, 0], {
		extrapolateRight: 'clamp',
	});

	const profileOffsetSpring = spring({
		fps,
		from: 0,
		to: 1,
		frame: frame - 45,
		config: {
			mass: 2,
			damping: 200,
		},
	});

	const profileOffset = interpolate(profileOffsetSpring, [0, 1], [-PICTURE_SIZE, width / 3], {
		extrapolateRight: 'clamp',
	});

	const profile2OffsetSpring = spring({
		fps,
		from: 0,
		to: 1,
		frame: frame - 45,
		config: {
			mass: 2,
			damping: 200,
		},
	});

	const profile2Offset = interpolate(
		profile2OffsetSpring,
		[0, 1],
		[-PICTURE_SIZE, width / 3],
		{
			extrapolateRight: 'clamp',
		}
	);

	return (
		<ThemeProvider theme={theme}>
			<AbsoluteFill
				style={{backgroundColor: theme['grey-50'], justifyContent: 'center'}}
			>
				<AbsoluteFill
					style={{
						height: height / 2,
						justifyContent: 'flex-end',
						alignItems: 'center',
						paddingBottom: '32px',
						transform: `translateY(${-offset}px)`,
					}}
				>
					<Img style={{width: '300px'}} src={logo} />
				</AbsoluteFill>
				<AbsoluteFill
					style={{
						height: height / 2,
						top: height / 2,
						justifyContent: 'flex-start',
						alignItems: 'center',
						paddingTop: '32px',
						transform: `translateY(${offset}px)`,
					}}
				>
					<Text>Post vaccine comfort</Text>
				</AbsoluteFill>
				<Profile
					dir="left"
					name="Olli Warro"
					image={olli}
					style={{left: `${profileOffset}px`}}
				/>
				<Profile
					dir="right"
					name="Otto Laitinen"
					image={otto}
					style={{right: `${profile2Offset}px`}}
				/>
			</AbsoluteFill>
		</ThemeProvider>
	);
};

const Text = styled.div<{subtitle?: boolean}>`
	color: ${(props) => props.theme['primary-400']};
	font-family: 'Nunito';
	font-weight: 800;
	font-size: ${(props) => (props.subtitle ? 64 : 128)}px;
	padding: 8px 32px;
	margin-bottom: 16px;
	text-align: center;
	border-radius: 100px;
`;
