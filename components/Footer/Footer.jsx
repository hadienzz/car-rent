import FooterList from "./FooterList"

const Footer = () => {
    const AboutLinks = [
        { name: 'How It Works', url: '#' },
        { name: 'Featured', url: '#' },
        { name: 'Partnership', url: '#' },
        { name: 'Business Relation', url: '#' },
    ]

    const CommunityLinks = [
        { name: 'Events', url: '#' },
        { name: 'Blog', url: '#' },
        { name: 'Podcast', url: '#' },
        { name: 'Invite a Friend', url: '#' },
    ]

    const SocialLinks = [
        { name: 'Discord', url: 'https://www.discord.com/hadienzz' },
        { name: 'Instagram', url: 'https://www.instagram.com/hadienzz' },
        { name: 'Twitter', url: 'https://www.twitter.com/dienzzo' },
        { name: 'Facebook', url: 'https://www.facebook.com/hadin.pramiadi' },
    ]

    return (
        <footer className="px-6 py-8 md:px-12 lg:px-16 ">
            <div className="md:px-5">
                <h1 className="font-bold text-2xl text-primary text-[#3563E9]">MORENT</h1>
                <p className="w-[250px] text-sm font-medium text-[#90A3BF] mt-6">Our vision is to provide convenience and help increase your sales business.</p>
            </div>
            <div className="grid grid-cols-2 gap-x-[65px] gap-y-12 mt-12">
                <FooterList title={'About'} list={...AboutLinks} />
                <FooterList title={'Community'} list={...CommunityLinks} />
                <FooterList title={'Social'} list={...SocialLinks} />
            </div>
        </footer>
    )
}

export default Footer