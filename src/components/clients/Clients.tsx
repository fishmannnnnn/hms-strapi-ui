import styles from './Clients.module.scss';
import Image from 'next/image';
const Clients = () => {
  return (
		<section className={styles.container}>
			<h2>
				Наши <span>клиенты</span>
			</h2>
			<div className={styles.block}>
				<div className={styles.blockItem}>
					<Image
						className={styles.img}
						src='/clients/elephant.avif'
						width={150}
						height={28}
						alt='elephants'
					/>
				</div>
				<div className={styles.blockItem}>
					<Image
						className={styles.img}
						src='/clients/GFE.avif'
						width={150}
						height={41}
						alt='GFE'
					/>
				</div>
				<div className={styles.blockItem}>
					<Image
                        className={styles.img}
						src='/clients/expocenter.avif'
						width={98}
						height={70}
						alt='expocenter'
					/>
				</div>
				<div className={styles.blockItem} id={styles.negus}>
					<Image
                        className={styles.img}
						src='/clients/negus.avif'
						width={69}
						height={99}
						alt='negus'
					/>
				</div>
				<div className={styles.blockItem}>
					<Image
                        className={styles.img}
						src='/clients/white.avif'
						width={150}
						height={37}
						alt='white'
					/>
				</div>
				<div className={styles.blockItem}>
					<Image
                        className={styles.img}
						src='/clients/granat.avif'
						width={81}
						height={70}
						alt='granat'
					/>
				</div>
				<div className={styles.blockItem}>
					<Image
                        className={styles.img}
						src='/clients/navka.avif'
						width={104}
						height={70}
						alt='navka'
					/>
				</div>
				<div className={styles.blockItem}>
					<Image
                        className={styles.img}
						src='/clients/crocus.avif'
						width={150}
						height={25}
						alt='crocus'
					/>
				</div>
			</div>
		</section>
  );
}
export default Clients