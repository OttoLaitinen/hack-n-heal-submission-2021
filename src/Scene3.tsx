import {
	AbsoluteFill,
	Img,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import phone from './assets/landing.png';
import logo from './assets/vacci-set.png';
import theme from './styles/theme';

export const Scene3: React.FC = () => {
	const {fps, durationInFrames, width, height} = useVideoConfig();
	const frame = useCurrentFrame();

	const imgHeightSpring = spring({
		fps,
		from: 0,
		to: 1,
		frame: frame,
		config: {
			mass: 2,
			damping: 200,
		},
	});

	const imgWidthSpring = spring({
		fps,
		from: 0,
		to: 1,
		frame: frame - 60,
		config: {
			mass: 2,
			damping: 200,
		},
	});

	const imgHeight = interpolate(imgHeightSpring, [0, 1], [height, 0], {
		extrapolateRight: 'clamp',
	});

	const imgWidth = interpolate(imgWidthSpring, [0, 1], [width / 4, 0], {
		extrapolateRight: 'clamp',
	});

	const phoneHeightSpring = spring({
		fps,
		from: 1,
		to: 0,
		frame: frame - 90,
		config: {
			mass: 2,
			damping: 200,
		},
	});

	const phoneHeight = interpolate(phoneHeightSpring, [0, 1], [height, 0], {
		extrapolateRight: 'clamp',
	});

	/* style={{
		transform: `translateY(${progress3 * height}px)`,
		opacity: 1 - progress3,
	}} */

	// Plan: Icon from down to center, then to left.
	// Then, phone from down to center, then to right.

	return (
		<AbsoluteFill
			style={{backgroundColor: theme['grey-50'], justifyContent: 'center'}}
		>
			<AbsoluteFill
				style={{
					width: width / 2,
					justifyContent: 'center',
					alignItems: 'center',
					transform: `translate(${imgWidth}px, ${imgHeight * height}px)`,
				}}
			>
				<Img style={{width: '300px'}} src={logo} />
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					left: width / 2,
					width: width / 2,
					justifyContent: 'center',
					alignItems: 'center',
					transform: `translate(${0}px, ${phoneHeightSpring * -height}px)`,
				}}
			>
				<Img style={{width: '600px'}} src={phone} />
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
