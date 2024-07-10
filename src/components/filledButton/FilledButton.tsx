import styles from './FilledButton.module.scss';
const FilledButton = ({ text }: { text: string }) => {
	return (
		<button className={styles.button}>
			<div className={styles.buttonText}>{text}</div>
			<div className={styles.icon}>
				<svg
					width='20'
					height='20'
					viewBox='0 0 20 20'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M3 15.5C3 16.0304 3.21071 16.5391 3.58579 16.9142C3.96086 17.2893 4.46957 17.5 5 17.5C5.53043 17.5 6.03914 17.2893 6.41421 16.9142C6.78929 16.5391 7 16.0304 7 15.5C7 14.9696 6.78929 14.4609 6.41421 14.0858C6.03914 13.7107 5.53043 13.5 5 13.5C4.46957 13.5 3.96086 13.7107 3.58579 14.0858C3.21071 14.4609 3 14.9696 3 15.5ZM13 15.5C13 16.0304 13.2107 16.5391 13.5858 16.9142C13.9609 17.2893 14.4696 17.5 15 17.5C15.5304 17.5 16.0391 17.2893 16.4142 16.9142C16.7893 16.5391 17 16.0304 17 15.5C17 14.9696 16.7893 14.4609 16.4142 14.0858C16.0391 13.7107 15.5304 13.5 15 13.5C14.4696 13.5 13.9609 13.7107 13.5858 14.0858C13.2107 14.4609 13 14.9696 13 15.5Z'
						stroke='white'
						stroke-width='1.5'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M3 15.5H1V4.5C1 4.23478 1.10536 3.98043 1.29289 3.79289C1.48043 3.60536 1.73478 3.5 2 3.5H11V15.5M7 15.5H13M17 15.5H19V9.5M19 9.5H11M19 9.5L16 4.5H11'
						stroke='white'
						stroke-width='1.5'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
				</svg>
			</div>
		</button>
	);
};
export default FilledButton;
