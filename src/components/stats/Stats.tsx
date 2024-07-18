import styles from './Stats.module.scss';
import classNames from 'classnames';
import FilledButton from '../filledButton/FilledButton';
import Image from 'next/image';
const Stats = () => {
	return (
		<section className={styles.container}>
			<div className={styles.gridContainer}>
				<div className={styles.gridItem} id={styles.item1}>
					<div className={classNames(styles.icon, styles.iconBlue)}>
						<svg
							width='20'
							height='20'
							viewBox='0 0 20 20'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M11.5548 2.29937L13.1388 5.49347C13.3548 5.93807 13.9308 6.36466 14.4168 6.44566L17.287 6.92716C19.1231 7.23586 19.5551 8.57866 18.232 9.90346L16 12.1535C15.622 12.5342 15.415 13.2695 15.532 13.796L16.171 16.5814C16.675 18.7864 15.514 19.6387 13.5789 18.4867L10.8878 16.8802C10.4018 16.5904 9.60081 16.5904 9.1058 16.8802L6.41653 18.4867C4.49048 19.6387 3.32045 18.7765 3.82447 16.5814L4.46348 13.796C4.58049 13.2695 4.37348 12.5342 3.99547 12.1535L1.76341 9.90346C0.450282 8.57776 0.873292 7.23586 2.70844 6.92716L5.57951 6.44566C6.05652 6.36466 6.63254 5.93807 6.84854 5.49347L8.43258 2.29937C9.2966 0.566876 10.6997 0.566876 11.5548 2.29937Z'
								stroke='white'
								strokeWidth='1.5'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</div>
					<p>10 000+ тонн грузов</p>
				</div>
				<div className={styles.gridItem}>
					<Image
						className={styles.itemBg}
						src='/stats/item2.avif'
						alt='image'
						width='0'
						height='0'
						sizes='100vw'
					/>
					<div className={classNames(styles.icon, styles.iconRed)}>
						<svg
							width='20'
							height='20'
							viewBox='0 0 20 20'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M11.5548 2.29937L13.1388 5.49347C13.3548 5.93807 13.9308 6.36466 14.4168 6.44566L17.287 6.92716C19.1231 7.23586 19.5551 8.57866 18.232 9.90346L16 12.1535C15.622 12.5342 15.415 13.2695 15.532 13.796L16.171 16.5814C16.675 18.7864 15.514 19.6387 13.5789 18.4867L10.8878 16.8802C10.4018 16.5904 9.60081 16.5904 9.1058 16.8802L6.41653 18.4867C4.49048 19.6387 3.32045 18.7765 3.82447 16.5814L4.46348 13.796C4.58049 13.2695 4.37348 12.5342 3.99547 12.1535L1.76341 9.90346C0.450282 8.57776 0.873292 7.23586 2.70844 6.92716L5.57951 6.44566C6.05652 6.36466 6.63254 5.93807 6.84854 5.49347L8.43258 2.29937C9.2966 0.566876 10.6997 0.566876 11.5548 2.29937Z'
								stroke='white'
								strokeWidth='1.5'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</div>
					<p>600+ мероприятий</p>
				</div>
				<div className={styles.gridItem}>
					<Image
						className={styles.itemBg}
						src='/stats/item3.avif'
						alt='image'
						width='0'
						height='0'
						sizes='100vw'
					/>
					<div className={classNames(styles.icon, styles.iconRed)}>
						<svg
							width='20'
							height='20'
							viewBox='0 0 20 20'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M11.5548 2.29937L13.1388 5.49347C13.3548 5.93807 13.9308 6.36466 14.4168 6.44566L17.287 6.92716C19.1231 7.23586 19.5551 8.57866 18.232 9.90346L16 12.1535C15.622 12.5342 15.415 13.2695 15.532 13.796L16.171 16.5814C16.675 18.7864 15.514 19.6387 13.5789 18.4867L10.8878 16.8802C10.4018 16.5904 9.60081 16.5904 9.1058 16.8802L6.41653 18.4867C4.49048 19.6387 3.32045 18.7765 3.82447 16.5814L4.46348 13.796C4.58049 13.2695 4.37348 12.5342 3.99547 12.1535L1.76341 9.90346C0.450282 8.57776 0.873292 7.23586 2.70844 6.92716L5.57951 6.44566C6.05652 6.36466 6.63254 5.93807 6.84854 5.49347L8.43258 2.29937C9.2966 0.566876 10.6997 0.566876 11.5548 2.29937Z'
								stroke='white'
								strokeWidth='1.5'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</div>
					<p>1500+ клиентов</p>
				</div>
				<div className={styles.gridItem} id={styles.item4}>
					<div className={classNames(styles.icon, styles.iconWhite)}>
						<svg
							width='20'
							height='20'
							viewBox='0 0 20 20'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M11.5548 2.29937L13.1388 5.49347C13.3548 5.93807 13.9308 6.36466 14.4168 6.44566L17.287 6.92716C19.1231 7.23586 19.5551 8.57866 18.232 9.90346L16 12.1535C15.622 12.5342 15.415 13.2695 15.532 13.796L16.171 16.5814C16.675 18.7864 15.514 19.6387 13.5789 18.4867L10.8878 16.8802C10.4018 16.5904 9.60081 16.5904 9.1058 16.8802L6.41653 18.4867C4.49048 19.6387 3.32045 18.7765 3.82447 16.5814L4.46348 13.796C4.58049 13.2695 4.37348 12.5342 3.99547 12.1535L1.76341 9.90346C0.450282 8.57776 0.873292 7.23586 2.70844 6.92716L5.57951 6.44566C6.05652 6.36466 6.63254 5.93807 6.84854 5.49347L8.43258 2.29937C9.2966 0.566876 10.6997 0.566876 11.5548 2.29937Z'
								stroke='#B72743'
								strokeWidth='1.5'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</div>
					<p>100+ стран мира</p>
				</div>
			</div>
			<div className={styles.flexContainer}>
				<h2>
					Ваши грузы в <span>надежных руках!</span>
				</h2>
				<p>
					Груз будет доставлен вовремя и в полной сохранности,
					благодаря многолетнему опыту и тщательному подходу ХМС Экспо
					к каждому проекту.
				</p>
				<div className={styles.btn}>
					<FilledButton text='Доставить груз' />
				</div>
			</div>
		</section>
	);
};
export default Stats;
