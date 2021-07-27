import Image from "next/image"
import Link from "next/link"

import {
  headercontact,
  header99,
  logonewzimmer,
  logo,
  xicontiktokpc,
  xicontelegrampc,
  xicontwitterpc,
  xiconinstagrampc,
  xiconfacebookpc,
} from "./assets"

export default function Navbar() {
  return (
    <>
      <div className="rosh flex flex-row justify-between">
        <div className="item-1">
          <Image width="180px" height="45px" src={headercontact.src} />
        </div>
        <div className="item-1">
          <Image width="180px" height="45px" src={header99.src} />
        </div>
        <div className="item-1">
          <Image width="180px" height="45px" src={logonewzimmer.src} />
        </div>
        <div className="block">
          <div class="flex-initial flex flex-row-reverse items-center justify-center py-3 px-1">
            <Link href="/">
              <a className="whitespace-nowrap px-2">המועדפים שלי</a>
            </Link>
            <Link href="/">
              <a className="whitespace-nowrap px-2">צימרים בצפון</a>
            </Link>
            <Link href="/">
              <a className="whitespace-nowrap px-2">צימרים לזוגות</a>
            </Link>
            <Link href="/">
              <a className="whitespace-nowrap px-2">צימרים למשפחות</a>
            </Link>
            <Link href="/">
              <a className="whitespace-nowrap px-2">English</a>
            </Link>
          </div>

          <div class="flex-initial flex items-center justify-center py-3 px-1">
            <Link href="/">
              <a className="whitespace-nowrap px-2">צרו קשר</a>
            </Link>

            <Link href="/">
              <a className="whitespace-nowrap px-2">פרסמו אצלנו</a>
            </Link>

            <Link href="https://bit.ly/3rpJfAC">
              <a className="whitespace-nowrap px-2">
                <Image
                  src={xicontiktokpc}
                  alt="צימר בטיקטוק"
                  width={26}
                  height={26}
                />
              </a>
            </Link>

            <Link href="https://t.me/zimmercoil">
              <a className="whitespace-nowrap px-2">
                <Image
                  src={xicontelegrampc}
                  alt="צימר בטלגרם"
                  width={26}
                  height={26}
                />
              </a>
            </Link>

            <Link href="https://twitter.com/zimmer_co_il">
              <a className="whitespace-nowrap px-2">
                <Image
                  src={xicontwitterpc}
                  alt="צימר בטוויטר"
                  width={26}
                  height={26}
                />
              </a>
            </Link>

            <Link href="https://www.instagram.com/zimmer.co.il/">
              <a className="whitespace-nowrap px-2">
                <Image
                  src={xiconinstagrampc}
                  alt="צימר באינסטגרם"
                  width={26}
                  height={26}
                />
              </a>
            </Link>

            <Link href="https://www.facebook.com/zimmer.co.il">
              <a className="whitespace-nowrap px-2">
                <Image
                  src={xiconfacebookpc}
                  alt="צימר בפייסבוק"
                  width={26}
                  height={26}
                />
              </a>
            </Link>
          </div>
        </div>
        <div className="item-14">
          <Image width="85px" height="67px" src={logo.src} />
        </div>
      </div>
    </>
  )
}
