import styles from './OutlinedButton.module.scss';
const OutlinedButton = ({text}:{text: string}) => {
  return (
		<button className={styles.button}>
			<div className={styles.buttonText}>{text}</div>
			<svg
				width='11'
				height='12'
				viewBox='0 0 11 12'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<path
					d='M0.292893 9.79289C-0.0976311 10.1834 -0.0976311 10.8166 0.292893 11.2071C0.683418 11.5976 1.31658 11.5976 1.70711 11.2071L0.292893 9.79289ZM11 1.5C11 0.947715 10.5523 0.5 10 0.5L1 0.5C0.447715 0.5 2.8711e-07 0.947715 2.8711e-07 1.5C2.8711e-07 2.05228 0.447715 2.5 1 2.5L9 2.5L9 10.5C9 11.0523 9.44772 11.5 10 11.5C10.5523 11.5 11 11.0523 11 10.5L11 1.5ZM1.70711 11.2071L10.7071 2.20711L9.29289 0.792893L0.292893 9.79289L1.70711 11.2071Z'
					fill='#B72743'
				/>
			</svg>
		</button>
  );
}
export default OutlinedButton