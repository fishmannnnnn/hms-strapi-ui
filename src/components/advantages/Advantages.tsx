import styles from './Advantages.module.scss';
import Image from 'next/image';
import FilledButton from '../filledButton/FilledButton';
const Advantages = () => {
	return (
		<section className={styles.container}>
			<h2>
				<span>Ключ к успешной доставке</span> выставочных грузов
			</h2>
			<div className={styles.containerTop}>
				<p>
					Комплексный подход ХМС Экспо к выстраиванию схем логистики
					гарантирует своевременную доставку грузов на мероприятия и
					позволяет нашим клиентам минимально вовлекаться в процесс
					транспортировки.
				</p>
				<div className={styles.btn}>
					<FilledButton text='Доставить груз' />
				</div>
			</div>
			<div className={styles.containerBottom}>
				<div className={styles.gridItem} id={styles.item1}>
					<Image
						className={styles.itemBg}
						src='/advantages/hms-bg.avif'
						alt='image'
						width='0'
						height='0'
						sizes='100vw'
					/>
					<div className={styles.counter}>1</div>
					<div className={styles.content}>
						<h3>
							Полное коммерческое <br /> предложение
						</h3>
						<p>Комплексная ставка «под ключ»</p>
					</div>
				</div>
				<div className={styles.gridItem} id={styles.item2}>
					<Image
						className={styles.itemBg}
						src='/advantages/consulting-bg.avif'
						alt='image'
						width='0'
						height='0'
						sizes='100vw'
					/>
					<div className={styles.counter}>2</div>
					<div className={styles.content}>
						<h3>Консультирование</h3>
						<p>Информирование о необходимой документации</p>
					</div>
				</div>
				<div className={styles.gridItem} id={styles.item3}>
					<Image
						className={styles.itemBg}
						src='/advantages/warehouse-bg.avif'
						alt='image'
						width='0'
						height='0'
						sizes='100vw'
					/>
					<div className={styles.counter}>3</div>
					<div className={styles.content}>
						<h3>Складские услуги</h3>
						<p>Хранение и обработка груза</p>
					</div>
				</div>
				<div className={styles.gridItem} id={styles.item4}>
					<Image
						className={styles.itemBg}
						src='/advantages/blue-bg.avif'
						alt='image'
						width='0'
						height='0'
						sizes='100vw'
					/>
					<div className={styles.counter}>4</div>
					<div className={styles.content}>
						<h3>Таможенное оформление</h3>
						<p>
							временный ввоз, реэкспорт, временный вывоз, 
							реимпорт, импорт, экспорт, Карнет АТА
						</p>
					</div>
				</div>
				<div className={styles.gridItem} id={styles.item5}>
					<Image
						className={styles.itemBg}
						src='/advantages/blue-bg2.avif'
						alt='image'
						width='0'
						height='0'
						sizes='100vw'
					/>
					<div className={styles.counter}>5</div>
					<div className={styles.content}>
						<h3>Международная транспортировка</h3>
						<p>Доставка грузов различными видами транспорта</p>
					</div>
				</div>
				<div className={styles.gridItem} id={styles.item6}>
					<Image
						className={styles.itemBg}
						src='/advantages/warehouse-bg2.avif'
						alt='image'
						width='0'
						height='0'
						sizes='100vw'
					/>
					<div className={styles.counter}>6</div>
					<div className={styles.content}>
						<h3>Услуги на выставках</h3>
						<p>
							Погрузо-разгрузочные работы, <br /> распаковка и упаковка
							грузов, хранение тары.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Advantages;
