import {Sequence} from 'remotion';
import {Scene1} from './Scene1';
import {Scene2} from './Scene2';
import {Scene3} from './Scene3';
import {Scene4} from './Scene4';
import {Scene5} from './Scene5';
import {Scene6} from './Scene6';

const S1_LENGTH = 250;
const S2_LENGTH = 750;
const S3_LENGTH = 300;
const S4_LENGTH = 960;
const S5_LENGTH = 900;
const S6_LENGTH = 150 + 291;
export const TOTAL_LENGTH =
	S1_LENGTH + S2_LENGTH + S3_LENGTH + S4_LENGTH + S5_LENGTH + S6_LENGTH;

export const Main = () => {
	return (
		<>
			<Sequence from={0} durationInFrames={S1_LENGTH} name="S1">
				<Scene1 />
			</Sequence>

			<Sequence from={S1_LENGTH} durationInFrames={S2_LENGTH} name="S2">
				<Scene2 />
			</Sequence>

			<Sequence
				from={S1_LENGTH + S2_LENGTH}
				durationInFrames={S3_LENGTH}
				name="S3"
			>
				<Scene3 />
			</Sequence>

			<Sequence
				from={S1_LENGTH + S2_LENGTH + S3_LENGTH}
				durationInFrames={S4_LENGTH}
				name="S4"
			>
				<Scene4 />
			</Sequence>

			<Sequence
				from={S1_LENGTH + S2_LENGTH + S3_LENGTH + S4_LENGTH}
				durationInFrames={S5_LENGTH}
				name="S5"
			>
				<Scene5 />
			</Sequence>

			<Sequence
				from={S1_LENGTH + S2_LENGTH + S3_LENGTH + S4_LENGTH + S5_LENGTH}
				durationInFrames={S6_LENGTH}
				name="S6"
			>
				<Scene6 />
			</Sequence>
		</>
	);
};
