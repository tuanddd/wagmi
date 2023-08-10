import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'
import { SOCIAL_LINKS } from '~constants'
import { Icon } from '@iconify/react'
import classNames from 'classnames'

const NavLink = (props: any) => {
  return (
    <Link
      href={props.href}
      className={classNames(
        'flex items-center py-2 px-3 bg-transparent rounded-md group hover:text-mochi-500',
        props.className,
      )}
    >
      {props.children}
    </Link>
  )
}

const NavLinks = ({ className }: { className: string }) => (
  <div
    className={classNames([
      'flex items-center justify-end space-x-2',
      className,
    ])}
  >
    <NavLink href="/comics" className="text-mochi-500">
      Comic List
    </NavLink>
    <NavLink href="/about">About</NavLink>
  </div>
)

export const Navbar = () => {
  return (
    <Fragment>
      <nav className="relative z-20 bg-transparent">
        <div className="flex gap-y-5 items-center py-5 px-6 mx-auto max-w-7xl md:px-12">
          <Link className="flex gap-x-3 items-center" href="/comics">
            <>
              <Image
                src="/logo.svg"
                alt="Logo"
                width={143}
                height={24}
                className="block"
              />
            </>
          </Link>
          <NavLinks className="flex-1" />
        </div>
        <div className="bg-black font-[YanoneKaffeesatz-Bold] text-lg text-white uppercase flex flex-col md:flex-row items-center justify-center h-auto md:h-10">
          <div className="">
            A webcomic so money-related, it&apos;ll make you cry
          </div>
          <Image
            src="/assets/neko-4.png"
            height={72}
            width={72}
            alt="cry sticker"
            className="mx-0 md:mx-6 h-12 w-12 md:h-[72px] md:w-[72px]"
          />
          <div className="flex gap-4 items-center">
            follow us:
            <a
              href={SOCIAL_LINKS.TWITTER_LINK}
              target="_blank"
              rel="noreferrer"
            >
              <Icon icon="mdi:twitter" className="w-4 h-4 text-white" />
            </a>
            <a href={SOCIAL_LINKS.DISCORD} target="_blank" rel="noreferrer">
              <Icon icon="ic:baseline-discord" className="w-4 h-4 text-white" />
            </a>
            <a href={SOCIAL_LINKS.TELEGRAM} target="_blank" rel="noreferrer">
              <Icon
                icon="ic:baseline-telegram"
                className="w-4 h-4 text-white"
              />
            </a>
            <a href={SOCIAL_LINKS.GITBOOK} target="_blank" rel="noreferrer">
              <Icon
                icon="simple-icons:gitbook"
                className="w-4 h-4 text-white"
              />
            </a>
          </div>
        </div>
      </nav>
    </Fragment>
  )
}
