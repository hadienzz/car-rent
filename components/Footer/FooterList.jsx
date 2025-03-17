import Link from "next/link"

const FooterList = ({ title, list }) => {
    return (
        <ul>
            <h1 className="text-xl text-[#1A202C] font-semibold">{title}</h1>
            {list.map((item, idx) => (
                <li key={idx}><Link className="text-[#90A3BF] font-medium" href={item.url} target='blank' >{item.name}</Link>
                </li>
            ))}
        </ul>
    )
}

export default FooterList