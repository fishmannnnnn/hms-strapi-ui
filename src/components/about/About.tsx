import styles from './About.module.scss';
import Image from 'next/image';
import picture from '/public/about/truck-img.png';
const About = () => {
	return (
		<section className={styles.container}>
			<div className={styles.containerTop}>
				<h2>
					<span>ХМС Экспо</span> в выставочной логистике
				</h2>
				<Image className={styles.img} src={picture} alt='image' />
				<div>
					<p>
						Наша компания работает на рынке выставочной логистики с
						2015 года. Наш уникальный опыт позволяет успешно
						осуществлять доставки грузов в различные страны мира,
						разрабатывая индивидуальные решения для мероприятий
						любой тематики.
					</p>
					<p>
						Благодаря профессиональному подходу мы эффективно решаем
						логистические задачи, быстро адаптируясь к мировым
						тенденциям. Мы сотрудничаем с крупнейшими выставочными
						комплексами РФ и являемся официальным экспедитором МВЦ
						Крокус-Экспо.
					</p>
				</div>
			</div>
			<div className={styles.containerBottom}>
				<div className={styles.pill} id={styles.pill1}>
					Выставки в РФ
				</div>
				<div className={styles.pill} id={styles.pill2}>
					Выставки зарубежом
				</div>
				<div className={styles.pill} id={styles.pill3}>
					Концерты и шоу
				</div>
				<div className={styles.pill} id={styles.pill4}>
					Спортивные мероприятия
				</div>
				<div className={styles.pill} id={styles.pill5}>
					Культурные мероприятия
				</div>
			</div>
		</section>
	);
};
export default About;
