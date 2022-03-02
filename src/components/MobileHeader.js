import React from 'react';
import { Header, Image } from 'flotiq-components-react';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Logo from '../assets/blog-logo.svg';

const MobileHeader = ({ additionalClass, headerText1, headerText2, headerText3 }) => (
    <Disclosure as="nav" className={['md:hidden', ...additionalClass].join(' ')}>
        {({ open }) => (
            <>
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between">
                        <div className="flex">
                            <div className="flex-shrink-0 flex items-center bg-primary px-12 py-8">
                                <Image url={Logo} additionalClasses={['h-10']} />
                            </div>
                        </div>
                        <div className="flex flex-col justify-center font-bold uppercase">
                            <Header
                                className="p-0 !text-xl tracking-widest leading-none"
                                text={headerText1}
                            />
                            <Header
                                className="p-0 !text-xl tracking-widest leading-none"
                                text={headerText2}
                            />
                            <Header
                                className="p-0 !text-xl tracking-widest leading-none"
                                text={headerText3}
                            />
                        </div>
                        <div className="flex items-center md:hidden px-4">
                            {/* Mobile menu button */}
                            <Disclosure.Button
                                className="inline-flex items-center justify-center p-2 rounded-md
                                            text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none
                                            focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                            >
                                <span className="sr-only">Open main menu</span>
                                {open ? (
                                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                                ) : (
                                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                )}
                            </Disclosure.Button>
                        </div>
                    </div>
                </div>

                <Disclosure.Panel className="md:hidden">
                    <div className="p-5">
                        Menu items here
                    </div>
                </Disclosure.Panel>
            </>
        )}
    </Disclosure>
);

export default MobileHeader;
