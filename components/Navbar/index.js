import Image from "next/image"
import Link from "next/link"

import {
	lastMinutes,
	quatation,
	purpleTag,
	logo,
	tiktok,
	telegram,
	twitter,
	instagram,
	facebook,
} from "./assets"

export default function Navbar() {
	return (
		<>
			<nav className="rosh flex flex-row justify-between" name="nav-top-part">

					<div className="mt-4">
						<Image width="180px" height="45px" src={lastMinutes} />
					</div>

					<div className="mt-4">
						<Image width="180px" height="45px" src={quatation} />
					</div>

					<div className="mt-4">
						<Image width="180px" height="45px" src={purpleTag} />
					</div>

				<div className="block">
					
					<div className="flex-initial flex flex-row-reverse items-center justify-center py-3 px-1">

						<Link href="/" description='open myFavorit panel'>
							<a className="whitespace-nowrap px-2">המועדפים שלי</a>
						</Link>

						<Link href="/" description='standart link'>
							<a className="whitespace-nowrap px-2">צימרים בצפון</a>
						</Link>

						<Link href="/" description='standart link'>
							<a className="whitespace-nowrap px-2">צימרים לזוגות</a>
						</Link>

						<Link href="/" description='standart link'>
							<a className="whitespace-nowrap px-2">צימרים למשפחות</a>
						</Link>

						<Link href="/" description='switch to english'>
							<a className="whitespace-nowrap px-2">English</a>
						</Link>

					</div>

					<div className="flex-initial flex items-center justify-center py-0 px-1">

						<Link href="/">
							<a className="whitespace-nowrap px-2">צרו קשר</a>
						</Link>

						<Link href="/">
							<a className="whitespace-nowrap px-2">פרסמו אצלנו</a>
						</Link>

						<Link href="https://bit.ly/3rpJfAC">
							<a className="whitespace-nowrap px-2">
								<Image
									src={tiktok}
									alt="צימר בטיקטוק"
									width={26}
									height={26}
								/>
							</a>
						</Link>

						<Link href="https://t.me/zimmercoil">
							<a className="whitespace-nowrap px-2">
								<Image
									src={telegram}
									alt="צימר בטלגרם"
									width={26}
									height={26}
								/>
							</a>
						</Link>

						<Link href="https://twitter.com/zimmer_co_il">
							<a className="whitespace-nowrap px-2">
								<Image
									src={twitter}
									alt="צימר בטוויטר"
									width={26}
									height={26}
								/>
							</a>
						</Link>

						<Link href="https://www.instagram.com/zimmer.co.il/">
							<a className="whitespace-nowrap px-2">
								<Image
									src={instagram}
									alt="צימר באינסטגרם"
									width={26}
									height={26}
								/>
							</a>
						</Link>

						<Link href="https://www.facebook.com/zimmer.co.il">
							<a className="whitespace-nowrap px-2">
								<Image
									src={facebook}
									alt="צימר בפייסבוק"
									width={26}
									height={26}
								/>
							</a>
						</Link>

					</div>

				</div>

				<div className="mr-12">
					<Image width="85px" height="67px" src={logo.src} />
				</div>

			</nav>
		</>
	)
}
