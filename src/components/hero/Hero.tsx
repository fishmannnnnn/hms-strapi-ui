import styles from './Hero.module.scss';
import Image from 'next/image';
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
					<Image
						className={styles.blockBg}
						src='/plane-bg.avif'
						alt='image'
						width='0'
						height='0'
						sizes='100vw'
					/>
					<div className={styles.blockIcon} id={styles.circleWhite}>
						<svg
							width='18'
							height='20'
							viewBox='0 0 18 20'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M8.88037 10C11.3657 10 13.3804 7.98528 13.3804 5.5C13.3804 3.01472 11.3657 1 8.88037 1C6.39509 1 4.38037 3.01472 4.38037 5.5C4.38037 7.98528 6.39509 10 8.88037 10Z'
								stroke='#B72743'
								stroke-width='1.5'
							/>
							<path
								d='M13.3805 19H2.81992C2.56467 19.0001 2.31232 18.9458 2.07962 18.8409C1.84693 18.736 1.63921 18.5828 1.47026 18.3914C1.30131 18.2001 1.17498 17.975 1.09967 17.7311C1.02435 17.4872 1.00177 17.2301 1.03342 16.9768L1.38442 14.1652C1.46605 13.512 1.7835 12.9111 2.27707 12.4756C2.77065 12.04 3.40634 11.7998 4.06462 11.8H4.38052M13.3805 14.05L14.7305 15.4L16.9805 12.7'
								stroke='#B72743'
								stroke-width='1.5'
								stroke-linecap='round'
								stroke-linejoin='round'
							/>
						</svg>
					</div>
					<div>
						<h3 className={styles.blockTitle}>
							Индивидуальный подход
						</h3>
						<p>
							Персонализированные решения <br />
							для каждого клиента
						</p>
					</div>
				</div>
				<div className={styles.block} id={styles.truckBlock}>
					<Image
						className={styles.blockBg}
						src='/truck-bg.avif'
						alt='image'
						width='0'
						height='0'
						sizes='100vw'
					/>
					<div className={styles.blockIcon} id={styles.circleBlue}>
						<svg
							width='21'
							height='20'
							viewBox='0 0 21 20'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M10.3333 19C11.5151 19 12.6855 18.7672 13.7774 18.3149C14.8693 17.8626 15.8615 17.1997 16.6972 16.364C17.5329 15.5282 18.1959 14.5361 18.6482 13.4442C19.1005 12.3522 19.3333 11.1819 19.3333 10C19.3333 8.8181 19.1005 7.64778 18.6482 6.55585C18.1959 5.46392 17.5329 4.47177 16.6972 3.63604C15.8615 2.80031 14.8693 2.13738 13.7774 1.68508C12.6855 1.23279 11.5151 1 10.3333 1M10.3333 19C9.15136 19 7.98103 18.7672 6.8891 18.3149C5.79717 17.8626 4.80502 17.1997 3.96929 16.364C3.13356 15.5282 2.47063 14.5361 2.01834 13.4442C1.56604 12.3522 1.33325 11.1819 1.33325 10C1.33325 8.8181 1.56604 7.64778 2.01834 6.55585C2.47063 5.46392 3.13356 4.47177 3.96929 3.63604C4.80502 2.80031 5.79717 2.13738 6.8891 1.68508C7.98103 1.23279 9.15136 1 10.3333 1M10.3333 19C13.0943 19 14.2743 13.837 14.2743 10C14.2743 6.163 13.0943 1 10.3333 1M10.3333 19C7.57225 19 6.39225 13.837 6.39225 10C6.39225 6.163 7.57225 1 10.3333 1M1.83325 7H18.8333M1.83325 13H18.8333'
								stroke='white'
								stroke-width='1.5'
								stroke-linecap='round'
								stroke-linejoin='round'
							/>
						</svg>
					</div>
					<div>
						<h3 className={styles.blockTitle}>Надёжность</h3>
						<p>
							Гарантированная <br /> доставка в срок
						</p>
					</div>
				</div>
				<div className={styles.block} id={styles.accessibilityBlock}>
					<Image
						className={styles.blockBg}
						src='/accessibility-bg.avif'
						alt='image'
						width='0'
						height='0'
						sizes='100vw'
					/>
					<div className={styles.blockIcon} id={styles.circleRed}>
						<svg
							width='21'
							height='20'
							viewBox='0 0 21 20'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M1.6665 10C1.6665 11.1819 1.8993 12.3522 2.35159 13.4442C2.80388 14.5361 3.46682 15.5282 4.30254 16.364C5.13827 17.1997 6.13042 17.8626 7.22235 18.3149C8.31428 18.7672 9.48461 19 10.6665 19C11.8484 19 13.0187 18.7672 14.1107 18.3149C15.2026 17.8626 16.1947 17.1997 17.0305 16.364C17.8662 15.5282 18.5291 14.5361 18.9814 13.4442C19.4337 12.3522 19.6665 11.1819 19.6665 10C19.6665 7.61305 18.7183 5.32387 17.0305 3.63604C15.3426 1.94821 13.0535 1 10.6665 1C8.27956 1 5.99037 1.94821 4.30254 3.63604C2.61472 5.32387 1.6665 7.61305 1.6665 10Z'
								stroke='white'
								stroke-width='1.5'
								stroke-linecap='round'
								stroke-linejoin='round'
							/>
							<path
								d='M10.6665 5V10L13.6665 13'
								stroke='white'
								stroke-width='1.5'
								stroke-linecap='round'
								stroke-linejoin='round'
							/>
						</svg>
					</div>
					<div>
						<h3 className={styles.blockTitle}>Доступность 24/7</h3>
						<p>
							Круглосуточная поддержка <br /> и консультации.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Hero;
