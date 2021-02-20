import {Sequence} from 'remotion';
import analytics from './assets/analytics.png';
import folder from './assets/folder.png';
import shield from './assets/shield.png';
import {IconNText} from './IconNText';

const SCENE_DURATION = 300;

export const Scene5: React.FC = () => {
	return (
		<>
			<Sequence from={0} durationInFrames={SCENE_DURATION} name="shield">
				<IconNText
					text="Security is taken seriously."
					icon={shield}
					text2="Of course."
					sceneLength={SCENE_DURATION}
				/>
			</Sequence>
			<Sequence
				from={SCENE_DURATION}
				durationInFrames={SCENE_DURATION}
				name="shield"
			>
				<IconNText
					text="The gathered data helps in future research."
					icon={analytics}
					sceneLength={SCENE_DURATION}
				/>
			</Sequence>
			<Sequence
				from={2 * SCENE_DURATION}
				durationInFrames={SCENE_DURATION}
				name="shield"
			>
				<IconNText
					text="Our databases are GDPR compliant."
					icon={folder}
					sceneLength={SCENE_DURATION}
				/>
			</Sequence>
		</>
	);
};
