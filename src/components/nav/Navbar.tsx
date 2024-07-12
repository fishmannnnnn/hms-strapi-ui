'use client';
import styles from './Navbar.module.scss';
import { motion } from 'framer-motion';
import { MouseEventHandler, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { NAV_LINKS } from '@/constants';
import TextButton from '@/components/textButton/TextButton';
import OutlinedButton from '@/components/outlinedButton/OutlinedButton';
import { LanguageSwitch } from '@/components/languageSwitch/LanguageSwitch';

const variants = {
	hidden: { y: '-100%', opacity: 0 },
	visible: { y: 0, opacity: 1 },
	exit: { y: '-100%', opacity: 0 },
};

const Nav = () => {
	const [showMenu, setShowMenu] = useState(false);
	const navEl = useRef(null);
	const openMenu: MouseEventHandler<HTMLDivElement> = () => {
		setShowMenu(true);
		// if(navEl.current !== null){
		// 	(navEl.current as HTMLElement).style.height = '0px';
		// }
	};
	const closeMenu: MouseEventHandler<HTMLDivElement> = () => {
		setShowMenu(false);
	};
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
						<div className={styles.navSwitch}>
							<LanguageSwitch langs={['RU', 'EN']} />
						</div>
					</div>
					<div className={styles.contactButton}>
						<OutlinedButton text='Связаться с нами' />
					</div>
					<div className={styles.phoneIcon}>
						<svg
							width='14'
							height='14'
							viewBox='0 0 14 14'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M13.2499 10.075V11.95C13.2506 12.1241 13.2149 12.2964 13.1452 12.4558C13.0755 12.6153 12.9732 12.7585 12.8449 12.8762C12.7167 12.9938 12.5653 13.0834 12.4004 13.1392C12.2355 13.195 12.0608 13.2157 11.8874 13.2C9.96422 12.9908 8.11688 12.3336 6.49365 11.2812C4.98354 10.3217 3.70323 9.04136 2.74365 7.53125C1.6876 5.90065 1.03028 4.04432 0.824897 2.1125C0.809279 1.93967 0.829819 1.76547 0.88521 1.60101C0.940601 1.43655 1.02963 1.28543 1.14663 1.15726C1.26362 1.0291 1.40603 0.926693 1.56477 0.856576C1.72351 0.786459 1.89511 0.750163 2.06865 0.75H3.94365C4.24696 0.747014 4.54102 0.854424 4.771 1.05221C5.00098 1.24999 5.1512 1.52465 5.19365 1.825C5.27258 2.42508 5.41935 3.01427 5.63115 3.58125C5.71524 3.80495 5.73344 4.04807 5.68359 4.2818C5.63374 4.51553 5.51794 4.73007 5.3499 4.9L4.55615 5.69375C5.44587 7.25847 6.74143 8.55403 8.30615 9.44375L9.0999 8.65C9.26983 8.48196 9.48437 8.36616 9.7181 8.31631C9.95183 8.26646 10.1949 8.28466 10.4186 8.36875C10.9856 8.58055 11.5748 8.72732 12.1749 8.80625C12.4785 8.84908 12.7558 9.002 12.954 9.23593C13.1522 9.46986 13.2575 9.76848 13.2499 10.075Z'
								stroke='white'
								strokeWidth='1.5'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</div>
					<div
						className={
							!showMenu
								? styles.menuButton
								: styles.closeMenuButton
						}
						onClick={!showMenu ? openMenu : closeMenu}>
						{!showMenu ? (
							<>
								<motion.span
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									transition={{ delay: 0.2 }}>
									Меню
								</motion.span>

								<svg
									width='11'
									height='12'
									viewBox='0 0 11 12'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										stroke='#B72743'
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M1 2.167h9M1 6h9M1 9.833h9'
									/>
								</svg>
							</>
						) : (
							<svg
								width='15'
								height='16'
								viewBox='0 0 15 16'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									stroke='#B72743'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='m1.5 2 12 12m-12 0 12-12'
								/>
							</svg>
						)}
					</div>
				</div>
			</div>
			<ul className={styles.links}>
				{NAV_LINKS.map((link) => (
					<li key={link.key}>
						<Link href={link.href}>
							<TextButton text={link.title} />
						</Link>
					</li>
				))}
			</ul>
			{showMenu ? (
				<motion.div
					className={styles.linksMobileContainer}
					initial='hidden'
					animate='visible'
					exit='exit'
					variants={variants}
					transition={{ duration: 0.3 }}>
					<ul className={styles.linksMobile}>
						{NAV_LINKS.map((link) => (
							<li key={link.key}>
								<Link href={link.href}>
									<div className={styles.mobileLink}>
										<p>{link.title}</p>
										<svg
											width='11'
											height='12'
											viewBox='0 0 11 12'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M0.292893 9.79289C-0.0976311 10.1834 -0.0976311 10.8166 0.292893 11.2071C0.683418 11.5976 1.31658 11.5976 1.70711 11.2071L0.292893 9.79289ZM11 1.5C11 0.947715 10.5523 0.5 10 0.5L1 0.5C0.447715 0.5 2.8711e-07 0.947715 2.8711e-07 1.5C2.8711e-07 2.05228 0.447715 2.5 1 2.5L9 2.5L9 10.5C9 11.0523 9.44772 11.5 10 11.5C10.5523 11.5 11 11.0523 11 10.5L11 1.5ZM1.70711 11.2071L10.7071 2.20711L9.29289 0.792893L0.292893 9.79289L1.70711 11.2071Z'
												fill='#74A0CE'
											/>
										</svg>
									</div>
								</Link>
							</li>
						))}
					</ul>
					<div className={styles.navFooter}>
						<div className={styles.navMobileContacts}>
							<div className={styles.navEmail}>
								operations@hms-expo.ru
							</div>
							<div className={styles.navPhone}>
								+7(499)322-33-61
							</div>
						</div>
						<div className={styles.navSwitch}>
							<LanguageSwitch langs={['RU', 'EN']} />
						</div>
					</div>
				</motion.div>
			) : (
				<></>
			)}
		</nav>
	);
};

export default Nav;
