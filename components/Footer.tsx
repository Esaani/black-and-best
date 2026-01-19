import Link from 'next/link'
import { FaWhatsapp, FaInstagram, FaYoutube } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'

const socialLinks = [
  {
    id: 1,
    name: 'WhatsApp',
    link: 'https://wa.me/233241775252',
    icon: FaWhatsapp,
  },
  {
    id: 2,
    name: 'Instagram',
    link: 'https://www.instagram.com/blackandbestmedia/',
    icon: FaInstagram,
  },
  {
    id: 3,
    name: 'TikTok',
    link: 'https://www.tiktok.com/@blackandbestmedia',
    icon: null, // Custom SVG for TikTok
  },
  {
    id: 4,
    name: 'Youtube',
    link: 'https://www.youtube.com/channel/UCfdd1iRYV-H7zwR3A_b3WPQ',
    icon: FaYoutube,
  },
  {
    id: 5,
    name: 'Mail',
    link: 'mailto:blackandbestmedia@gmail.com',
    icon: HiMail,
  },
]

const footerLinks = [
  { id: 1, title: 'Home', link: '/' },
  { id: 3, title: 'Store', link: '/store' },
  { id: 4, title: 'Studio', link: '/studio' },
  { id: 5, title: 'Gallery', link: '/gallery' },
  { id: 6, title: 'Contact', link: '/contact' },
  { id: 7, title: 'Terms', link: '/support/terms' },
]

export default function Footer() {
  return (
    <footer className="w-full border-t border-accent-100/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Black & Best</h2>
            <p className="text-sm text-gray-600">
              Professional photography & video production Company.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <Link href={link.link} className="nav-link text-sm">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                if (social.name === 'TikTok') {
                  return (
                    <a
                      key={social.id}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 flex items-center justify-center"
                      aria-label={social.name}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z" />
                      </svg>
                    </a>
                  )
                }
                const Icon = social.icon
                return Icon ? (
                  <a
                    key={social.id}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center"
                    aria-label={social.name}
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                ) : null
              })}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-accent-100/20 text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Black & Best. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

