import React from 'react'
import UNISWAPP1 from './assets/UNISWAP1.webp'
import UNISWAPP2 from './assets/UNISWAPP2.webp'
import ERC20 from './assets/ERC20.webp'
import TAILWIND from './assets/Tailwind.jpg'
import FLEXBOX from './assets/Flexbox.jpg'
import { CardContents } from '@/components/home/HomeTypes'
import ContentPreview from '../global/ContentPreview'

const publishedContentPreview: CardContents[] = [
    {
        url: 'https://medium.com/block-magnates/uniswap-v2-the-power-of-the-amm-b53bb60450be',
        title: 'Uniswap V2: The Power of the AMM',
        description: (
            <p>
                Part 2 of an exploration into Uniswap, a powerhouse of DeFi. In
                this article I explore the Governance and liquidity aspects of
                the protocol.
            </p>
        ),
        date: 'May 26th 2023',
        image: UNISWAPP2,
        tags: ['AMM', 'Web3', 'Uniswap'],
    },
    {
        url: 'https://medium.com/block-magnates/uniswap-v2-the-power-of-the-amm-e565bd3f3ac1',
        title: 'Uniswap V2: The Power of the AMM',
        description: (
            <p>
                Part 1 of an exploration into Uniswap, specifically focusing on
                the mechanics of how AMMs/DEXs work. Great introduction into
                DeFi and the benefits of DeFi for anyone new to the space.
            </p>
        ),
        date: 'May 19th 2023',
        image: UNISWAPP1,
        tags: ['AMM', 'Web3', 'Uniswap'],
    },
    {
        url: 'https://medium.com/@lewis1broadhurst/erc20-what-why-5b300dff5aa6',
        title: 'ERC20: What & Why?',
        description: (
            <p>
                A dive into the history of ERC20 tokens, how they came into
                existence, what they acheive, and why they are an important
                standard in the crypto space.
            </p>
        ),
        date: 'May 12th 2023',
        image: ERC20,
        tags: ['ERC20', 'Web3', 'ETH'],
    },
    {
        url: 'https://www.youtube.com/watch?v=ZZir6e-iG0g',
        title: 'Flexbox Tutorial',
        description: (
            <p>
                Still struggling to center that div? Flexbox to the rescue!
                Flexbox is a powerful model which simplifies website structure
                and is an essential component of modern CSS. In this tutorial I
                recreate a section of the IMBD website, solely focusing on
                flexbox.
            </p>
        ),
        date: 'Aug 15th 2022',
        image: FLEXBOX,
        tags: ['Flexbox', 'CSS', 'UI'],
    },
    {
        url: 'https://www.youtube.com/watch?v=_I9V0rIOP_8',
        title: 'Tailwind CSS Tutorial',
        description: (
            <p>
                Ever found yourself overwriting CSS styling by adding another
                CSS class to an already bloated CSS file with higher
                specificity, whilst not being able to touch the old class in
                case of a website wide disaster? `!important` everything and
                hope for the best? Say hello to Tailwind, a utility first CSS
                framework, where you write CSS within your HTML/HTML equivalent
                file. In this 90min tutorial, I recreate a basic website from my
                bootcamp using HTML, Tailwind, and a little JS.
            </p>
        ),
        date: 'Aug 5th 2022',
        image: TAILWIND,
        tags: ['Tailwind', 'CSS', 'UI'],
    },
]

const ContentView = () => {
    const contentToRender = publishedContentPreview.map(pc => (
        <ContentPreview
            key={pc.date}
            url={pc.url}
            title={pc.title}
            description={pc.description}
            image={pc.image}
            date={pc.date}
            tags={pc.tags}
        />
    ))

    return (
        <section className="flex flex-col gap-10 p-10 lg:p-0 lg:w-full">
            <section className="flex flex-col gap-2 text-justify">
                <h2 className="text-2xl self-start">Content</h2>

                <section className="flex flex-col gap-5 text-justify">
                    <p className="text-slate-400">
                        Since becoming a software engineer I have created a
                        range of content, ranging from{' '}
                        <span className="text-slate-200">
                            YouTube tutorials
                        </span>{' '}
                        and informative{' '}
                        <span className="text-slate-200">
                            blogs on Web3 technologies
                        </span>
                        . I've found it to be a great learning experience for my
                        own development, and hopefully has allowed others to
                        gain understanding of the topics I have covered.
                    </p>

                    <section className="text-slate-400">
                        Check out my&nbsp;
                        <a
                            href="https://medium.com/@lewis1broadhurst"
                            target="_blank"
                            className="text-orange-400"
                        >
                            Blog&nbsp;
                        </a>
                        and&nbsp;
                        <a
                            href="https://www.youtube.com/channel/UCv8iDXiyBoaNRtPmFt-fOYw"
                            target="_blank"
                            className="text-orange-400"
                        >
                            YouTube&nbsp;
                        </a>
                        videos below.
                    </section>
                </section>
            </section>

            <section className="flex flex-col gap-5">{contentToRender}</section>
        </section>
    )
}

export default ContentView
