import {Composition} from 'remotion';
import shield from './assets/shield.png';
import {IconNText} from './IconNText';
import {Main, TOTAL_LENGTH} from './Main';
import {Scene1} from './Scene1';
import {Scene2} from './Scene2';
import {Scene3} from './Scene3';
import {Scene4} from './Scene4';
import {Scene5} from './Scene5';
import {Scene6} from './Scene6';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="IconNText"
				component={IconNText}
				durationInFrames={180}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					text: 'Security is taken seriously,',
					icon: shield,
					text2: 'of course.',
				}}
			/>
			<Composition
				id="Scene1"
				component={Scene1}
				durationInFrames={180}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Scene2"
				component={Scene2}
				durationInFrames={180}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Scene3"
				component={Scene3}
				durationInFrames={180}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Scene4"
				component={Scene4}
				durationInFrames={960}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Scene5"
				component={Scene5}
				durationInFrames={450}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Scene6"
				component={Scene6}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Main"
				component={Main}
				durationInFrames={TOTAL_LENGTH}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};
