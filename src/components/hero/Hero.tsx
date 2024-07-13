import styles from './Hero.module.scss';
import FilledButton from '../filledButton/FilledButton';
const Hero = () => {
	return (
		<div className={styles.container}>
			<div className={styles.containerTop}>
				<p>
					<span>Выставочная логистика с ХМС Экспо</span>: Премиальный
					Сервис для Вашего Успеха
				</p>
				<div className={styles.containerTopRight}>
					<p>
						Доставим ваш груз в любую точку мира на любое
						мероприятие.
					</p>
					<FilledButton text='Доставить груз' />
				</div>
			</div>
			<div className={styles.containerBottom}>
				<div className={styles.block} id={styles.planeBlock}>
                    <div className={styles.blockIcon} id={styles.circleWhite}></div>
                </div>
				<div className={styles.block} id={styles.truckBlock}>
                    <div className={styles.blockIcon} id={styles.circleBlue}></div>
                </div>
				<div className={styles.block} id={styles.accessibilityBlock}>
                    <div className={styles.blockIcon} id={styles.circleRed}></div>
                </div>
			</div>
		</div>
	);
};
export default Hero;
