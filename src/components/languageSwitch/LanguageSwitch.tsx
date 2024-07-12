import { Switch } from '@ark-ui/react';
import './LanguageSwitch.scss';
export const LanguageSwitch = ({ langs }: { langs: string[] }) => (
	<Switch.Root>
		<Switch.Control>
			<Switch.Thumb />
		</Switch.Control>
		<div className='labels'>
			<Switch.Label>{langs[0]}</Switch.Label>
			<Switch.Label>{langs[1]}</Switch.Label>
		</div>
		<Switch.HiddenInput />
	</Switch.Root>
);
