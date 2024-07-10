import styles from './Navbar.module.scss';
import Image from 'next/image';
import TextButton from '../textButton/TextButton';
import OutlinedButton from '../outlinedButton/OutlinedButton';
const Nav = () => {
	return (
		<nav className={styles.nav}>
			<div className={styles.navContainer}>
				<Image
					className={styles.imgLogo}
					src={'/hms-logo.svg'}
					alt='logo'
					width={70}
					height={50}
				/>
				<div className={styles.navContainerRight}>
					<div className={styles.navContacts}>
						<div className={styles.navEmail}>
							operations@hms-expo.ru
						</div>
						<div className={styles.navPhone}>+7(499)322-33-61</div>
						<div className={styles.navSwitch}>RU/EN</div>
					</div>
					<OutlinedButton text='Связаться с нами' />
				</div>
			</div>
			<div className={styles.links}>
				<TextButton text='Компания' />
				<TextButton text='Процесс' />
				<TextButton text='Статистика' />
				<TextButton text='Кейсы' />
				<TextButton text='Клиенты' />
				<TextButton text='Благодарственные письма' />
				<TextButton text='Команда' />
			</div>
		</nav>
	);
};

export default Nav;
