import React from 'react';
import { Button, Header, Image, Paragraph, PoweredByFlotiq } from 'flotiq-components-react';
import Logo from '../assets/blog-logo.svg';

const socialIcons = {
    social: [
        {
            name: 'Github',
            href: 'https://github.com/flotiq',
            icon: (props) => (
                <svg fill="gray" viewBox="0 0 24 24" {...props}>
                    <path fillRule="evenodd" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" clipRule="evenodd" />
                </svg>
            ),
        },
        {
            name: 'Discord',
            href: 'https://discord.com/invite/FwXcHnX',
            icon: (props) => (
                <svg fill="gray" {...props}>
                    <path fillRule="evenodd" d="M12 0c-6.626 0-12 5.372-12 12 0 6.627 5.374 12 12 12 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm3.248 18.348l-.371-1.295.896.833.847.784 1.505 1.33v-12.558c0-.798-.644-1.442-1.435-1.442h-9.38c-.791 0-1.435.644-1.435 1.442v9.464c0 .798.644 1.442 1.435 1.442h7.938zm-1.26-3.206l-.462-.567c.917-.259 1.267-.833 1.267-.833-.287.189-.56.322-.805.413-.35.147-.686.245-1.015.301-.672.126-1.288.091-1.813-.007-.399-.077-.742-.189-1.029-.301-.161-.063-.336-.14-.511-.238l-.028-.016-.007-.003-.028-.016-.028-.021-.196-.119s.336.56 1.225.826l-.469.581c-1.547-.049-2.135-1.064-2.135-1.064 0-2.254 1.008-4.081 1.008-4.081 1.008-.756 1.967-.735 1.967-.735l.07.084c-1.26.364-1.841.917-1.841.917l.413-.203c.749-.329 1.344-.42 1.589-.441l.119-.014c.427-.056.91-.07 1.414-.014.665.077 1.379.273 2.107.672 0 0-.553-.525-1.743-.889l.098-.112s.959-.021 1.967.735c0 0 1.008 1.827 1.008 4.081 0 0-.573.977-2.142 1.064zm-.7-3.269c-.399 0-.714.35-.714.777 0 .427.322.777.714.777.399 0 .714-.35.714-.777 0-.427-.315-.777-.714-.777zm-2.555 0c-.399 0-.714.35-.714.777 0 .427.322.777.714.777.399 0 .714-.35.714-.777.007-.427-.315-.777-.714-.777z" clipRule="evenodd" />
                </svg>
            ),
        },
        {
            name: 'YouTube',
            href: 'https://www.youtube.com/channel/UC4wpV-D9mIt1JjN_g_iyXXw',
            icon: (props) => (
                <svg fill="gray" viewBox="0 0 24 24" {...props}><path fillRule="evenodd" d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.441 16.892c-2.102.144-6.784.144-8.883 0-2.276-.156-2.541-1.27-2.558-4.892.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0 2.277.156 2.541 1.27 2.559 4.892-.018 3.629-.285 4.736-2.559 4.892zm-6.441-7.234l4.917 2.338-4.917 2.346v-4.684z" clipRule="evenodd" /></svg>
            ),
        },
        {
            name: 'Twitter',
            href: 'https://twitter.com/flotiq',
            icon: (props) => (
                <svg fill="gray" viewBox="0 0 24 24" {...props}>
                    <path fillRule="evenodd" d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" clipRule="evenodd" />
                </svg>
            ),
        },
        {
            name: 'Facebook',
            href: 'https://www.facebook.com/flotiq',
            icon: (props) => (
                <svg fill="gray" viewBox="0 0 24 24" {...props}>
                    <path fillRule="evenodd" d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" clipRule="evenodd" />
                </svg>
            ),
        },
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/company/flotiq/',
            icon: (props) => (
                <svg fill="gray" viewBox="0 0 24 24" {...props}>
                    <path fillRule="evenodd" d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" clipRule="evenodd" />
                </svg>
            ),
        },
        {
            name: 'Reddit',
            href: 'https://www.reddit.com/r/flotiq/',
            icon: (props) => (
                <svg fill="gray" viewBox="0 0 24 24" {...props}>
                    <path fillRule="evenodd" d="M14.238 15.348c.085.084.085.221 0 .306-.465.462-1.194.687-2.231.687l-.008-.002-.008.002c-1.036 0-1.766-.225-2.231-.688-.085-.084-.085-.221 0-.305.084-.084.222-.084.307 0 .379.377 1.008.561 1.924.561l.008.002.008-.002c.915 0 1.544-.184 1.924-.561.085-.084.223-.084.307 0zm-3.44-2.418c0-.507-.414-.919-.922-.919-.509 0-.923.412-.923.919 0 .506.414.918.923.918.508.001.922-.411.922-.918zm13.202-.93c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-5-.129c0-.851-.695-1.543-1.55-1.543-.417 0-.795.167-1.074.435-1.056-.695-2.485-1.137-4.066-1.194l.865-2.724 2.343.549-.003.034c0 .696.569 1.262 1.268 1.262.699 0 1.267-.566 1.267-1.262s-.568-1.262-1.267-1.262c-.537 0-.994.335-1.179.804l-2.525-.592c-.11-.027-.223.037-.257.145l-.965 3.038c-1.656.02-3.155.466-4.258 1.181-.277-.255-.644-.415-1.05-.415-.854.001-1.549.693-1.549 1.544 0 .566.311 1.056.768 1.325-.03.164-.05.331-.05.5 0 2.281 2.805 4.137 6.253 4.137s6.253-1.856 6.253-4.137c0-.16-.017-.317-.044-.472.486-.261.82-.766.82-1.353zm-4.872.141c-.509 0-.922.412-.922.919 0 .506.414.918.922.918s.922-.412.922-.918c0-.507-.413-.919-.922-.919z" clipRule="evenodd" />
                </svg>
            ),
        },
    ],
};

const HomepageSidebar = ({
    headerText1, headerText2, headerText3, subheaderText, paragraphText, buttonLabel,
}) => (
    <div className="bg-white flex flex-col justify-between">
        <div>
            <div>
                <div className="hidden md:flex items-center justify-center bg-primary py-20 lg:py-28">
                    <Image url={Logo} additionalClasses={['h-20 lg:h-24']} />
                </div>
            </div>
            <div className="flex flex-col px-10 py-5 md:py-24 font-bold">
                <div className="hidden md:block">
                    <Header className="p-0 !text-3xl lg:!text-4xl tracking-widest mb-1 uppercase" text={headerText1} />
                    <Header className="p-0 !text-3xl lg:!text-4xl tracking-widest mb-1 uppercase" text={headerText2} />
                    <Header className="p-0 !text-3xl lg:!text-4xl tracking-widest uppercase" text={headerText3} />
                </div>
                <Header className="mt-5 md:mt-14 !text-base lg:!text-lg !font-normal" text={subheaderText} level={4} />
                <Paragraph className="mt-8 md:mt-10 !text-sm lg:!text-base !font-light" text={paragraphText} />
                <Button
                    label={buttonLabel}
                    size="lg"
                    rounded="none"
                    additionalClasses={['w-fit mx-auto md:mx-0 py-5 lg:!px-14 mt-10']}
                />
            </div>
        </div>
        <div>
            <div className="mt-8 mb-8 md:mb-0 flex justify-center space-x-2">
                {socialIcons.social.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className="text-gray hover:text-secondary p-2 bg-light-gray rounded-lg"
                    >
                        <span className="sr-only">{item.name}</span>
                        <item.icon className="h-5 w-5 lg:h-6 md:w-6 hover:text-secondary" aria-hidden="true" />
                    </a>
                ))}
            </div>
            <div className="hidden md:flex justify-between items-center w-full
            px-5 py-5 mt-7 md:mt-15 rounded-t-xl bg-light-gray"
            >
                <PoweredByFlotiq />
                <p className="text-center text-sm font-light">
                    Copyright &copy; Flotiq 2022
                </p>
            </div>

        </div>
    </div>
);

export default HomepageSidebar;
