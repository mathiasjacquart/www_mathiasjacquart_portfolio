import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from "../../assets/images/logo.png"
import "./Header.module.css"

const navigation = [
  { name: 'Accueil', href: '#home', current: false},
  { name: 'Portrait', href: '#portrait', current: false },
  { name: 'Compétences', href: '#skills', current: false },
  { name: 'Portfolio', href: '#portfolio', current: false },
  { name: 'Contact', href: '#contact', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  return (
    <nav>
          <Disclosure as="nav" className="bg-header">
      <div className="sticky top-0 mx-auto  max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          <div className=" inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className=" text-fourtiary group relative inline-flex items-center justify-center rounded-md p-2  hover:bg-secondary  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden " />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-center sm:justify-start">
            <div className="flex flex-shrink-0 items-center mr-8">
              <img
              href='#'
                alt="Mathias JACQUART Logo"
                src={Logo}
                className="h-20 logo w-auto"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex  space-x-4">
                <div>
                {navigation.map((item) => (
                  
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-fourtiary' : 'text-white  ',
                      'rounded-md px-3 py-2 text-lg font-medium font-textPrimary hover-links relative',
                    )}
                  >
                    {item.name}
                  </a>

                ))}
                </div>

                    <div>
                    
                    </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-white hover:bg-secondary hover:text-white',
                'block rounded-md px-3 py-2 text-white font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
    </nav>

  )
}
