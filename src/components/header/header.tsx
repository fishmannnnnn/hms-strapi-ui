import styles from './header.module.scss';
import Image from 'next/image';

const Header = () => {
	return <header className={styles.header}>
		<Image src={'/hms-logo.png'} alt='logo' width={70} height={50}></Image>
	</header>;
};

export default Header;
