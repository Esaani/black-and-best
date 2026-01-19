'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import * as Popover from '@radix-ui/react-popover'
import { HiChevronDown } from 'react-icons/hi'
import { cn } from '@/lib/utils'

const gallerySlugs = [
  'wedding',
  'studioshoots',
  'beautyshoots',
  'hairshoots',
  'maternityshoots',
  'lifestyleshoots',
  'prebirthdays',
  'boudoir',
  'productshoots',
  'home',
  'location-shoot'
]

const rateCardTypes = [
  { id: 1, slug: 'ghanaratecard', title: 'GHANA RATECARD' },
  { id: 2, slug: 'usaratecard', title: 'USA RATECARD' },
  { id: 3, slug: 'videoratecard', title: 'VIDEO RATECARD' },
]

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const pathname = usePathname()

  const closeMenu = () => {
    setIsOpen(false)
    setIsAnimating(false)
  }

  return (
    <div className="z-[600] h-full flex w-full select-none">
      <div className="flex flex-col items-center justify-center">
        <div className="z-[650] bg-inherit fixed top-6 right-6">
          <div className="flex w-6 items-center justify-end">
            <div
              className="group flex h-6 w-6 cursor-pointer flex-col items-center justify-between"
              onClick={() => {
                if (isAnimating) {
                  setIsAnimating(false)
                  setIsOpen(false)
                } else {
                  setIsAnimating(true)
                  setIsOpen(true)
                }
              }}
            >
              <span
                className={cn(
                  'h-[2px] w-full transform cursor-pointer rounded-lg bg-black mix-blend-difference transition duration-300 ease-in-out',
                  isAnimating && 'translate-y-2.5 rotate-45 bg-black'
                )}
              />
              <span
                className={cn(
                  'h-[2px] w-full transform cursor-pointer rounded-lg bg-black mix-blend-difference transition duration-300 ease-in-out',
                  isAnimating ? 'hidden w-0' : 'w-full'
                )}
              />
              <span
                className={cn(
                  'h-[2px] w-full transform cursor-pointer rounded-lg bg-black mix-blend-difference transition duration-300 ease-in-out',
                  isAnimating && '-translate-y-3 -rotate-45 bg-black'
                )}
              />
            </div>
          </div>
        </div>
        <div>
          <AnimatePresence>
            {isOpen && (
              <div className="fixed z-[600] h-screen w-screen top-0 left-0 bg-primary-100">
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -10, opacity: 0 }}
                  className="relative h-screen w-full"
                >
                  <div className="font-PolySansNeutral relative flex h-full flex-col justify-between">
                    <div className="h-16 flex flex-col items-start justify-end border-b border-dashed border-accent-100/40">
                      <Link href="/" onClick={closeMenu} className="py-4 pl-4">
                        <h1 className="nav-link text-xl">Black & Best</h1>
                      </Link>
                    </div>
                    <div className="h-full border-b border-dashed border-accent-100/40">
                      <div className="w-full h-full grid grid-cols-2">
                        <Link
                          href="/"
                          onClick={closeMenu}
                          className="h-full flex flex-col items-center justify-center border-r border-dashed border-accent-100/40"
                        >
                          <h1 className="nav-link">Home</h1>
                        </Link>
                        <Link
                          href="/store"
                          onClick={closeMenu}
                          className="h-full flex flex-col items-center justify-center"
                        >
                          <h1 className="nav-link">Store</h1>
                        </Link>
                      </div>
                    </div>
                    <div className="h-full border-b border-dashed border-accent-100/40">
                      <div className="w-full h-full grid grid-cols-2">
                        <Link
                          href="/gallery"
                          onClick={closeMenu}
                          className="h-full flex flex-col items-center justify-center border-r border-dashed border-accent-100/40"
                        >
                          <h1 className="nav-link">Gallery</h1>
                        </Link>
                        <Link
                          href="/ratecards"
                          onClick={closeMenu}
                          className="h-full flex flex-col items-center justify-center"
                        >
                          <h1 className="nav-link">Ratecards</h1>
                        </Link>
                      </div>
                    </div>
                    <div className="border-b border-dashed border-accent-100/40 h-full w-full">
                      <Link
                        href="/bookme"
                        onClick={closeMenu}
                        className="h-full flex flex-col items-center justify-center"
                      >
                        <h1 className="nav-link">Book Me</h1>
                      </Link>
                    </div>
                    <div className="h-full border-b border-dashed border-accent-100/40">
                      <div className="w-full h-full grid grid-cols-2">
                        <Link
                          href="/support/faqs"
                          onClick={closeMenu}
                          className="h-full flex flex-col items-center justify-center border-r border-dashed border-accent-100/40"
                        >
                          <h1 className="nav-link">FAQs</h1>
                        </Link>
                        <Link
                          href="/support/terms"
                          onClick={closeMenu}
                          className="h-full flex flex-col items-center justify-center"
                        >
                          <h1 className="nav-link">Terms</h1>
                        </Link>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <h1 className="font-PolySansBulky pt-10 pb-4 text-center text-sm leading-none text-accent-100">
                        © {new Date().getFullYear()} Black & Best
                      </h1>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav className="fixed flex flex-col items-center top-0 z-[450] w-full">
      <div className="relative flex w-full max-w-7xl justify-between py-3 px-4">
        <div className="fixed md:top-4 md:right-4 md:left-4 top-2 right-2 left-2 flex flex-col items-center">
          <div className="flex flex-row items-center justify-between max-w-7xl w-full md:px-4">
            <div className="flex flex-row items-center justify-between py-3 w-full px-4 border border-accent-100/20 bg-primary-100 bg-opacity-30 backdrop-blur-lg backdrop-filter rounded-md">
              <div className="flex items-center space-x-2 z-[60]">
                <div className="nav-link-logo">
                  <Link href="/" className="">
                    <h1 className="nav-link text-xl">Black & Best</h1>
                  </Link>
                </div>
              </div>
              <div className="relative flex">
                <div className="hidden items-center space-x-4 md:flex">
                  <div>
                    <Link href="/store">
                      <h1 className="nav-link">Store</h1>
                    </Link>
                  </div>
                  <Popover.Root>
                    <Popover.Trigger className="nav-link flex items-center gap-1">
                      Gallery <HiChevronDown className="w-4 h-4" />
                    </Popover.Trigger>
                    <Popover.Portal>
                      <Popover.Content
                        className="z-[500] w-72 rounded-md border border-accent-100/20 bg-primary-100 p-4 shadow-md mt-3"
                        sideOffset={4}
                      >
                        <div className="grid grid-cols-2 gap-3">
                          {gallerySlugs.map((slug) => (
                            <Link
                              key={slug}
                              href={`/gallery/${slug}`}
                              className="flex items-center justify-center hover:text-accent-100 p-2 rounded border-2 border-accent-100/20 hover:border-accent-100 hover:duration-700 hover:transition-colors"
                            >
                              <h1 className="capitalize text-sm">{slug.replace('-', ' ')}</h1>
                            </Link>
                          ))}
                        </div>
                        <Popover.Arrow className="fill-primary-100" />
                      </Popover.Content>
                    </Popover.Portal>
                  </Popover.Root>
                  <Popover.Root>
                    <Popover.Trigger className="nav-link flex items-center gap-1">
                      Rate Cards <HiChevronDown className="w-4 h-4" />
                    </Popover.Trigger>
                    <Popover.Portal>
                      <Popover.Content
                        className="z-[500] w-72 rounded-md border border-accent-100/20 bg-primary-100 p-4 shadow-md mt-3"
                        sideOffset={4}
                      >
                        <div className="grid gap-3">
                          {rateCardTypes.map((type) => (
                            <Link
                              key={type.id}
                              href={`/ratecards/${type.slug}`}
                              className="flex items-center justify-center hover:text-accent-100 p-2 rounded border-2 border-accent-100/20 hover:border-accent-100 hover:duration-700 hover:transition-colors"
                            >
                              <h1 className="capitalize text-sm">{type.title}</h1>
                            </Link>
                          ))}
                        </div>
                        <Popover.Arrow className="fill-primary-100" />
                      </Popover.Content>
                    </Popover.Portal>
                  </Popover.Root>
                  <div className="hidden px-4 md:flex md:flex-col">
                    <Link href="/support">
                      <h1 className="nav-link">Support</h1>
                    </Link>
                  </div>
                  <div className="hidden px-4 md:flex md:flex-col">
                    <Link href="/bookme">
                      <h1 className="nav-link">Book Me</h1>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden z-[600]">
          <MobileMenu />
        </div>
      </div>
    </nav>
  )
}

