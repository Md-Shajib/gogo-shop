import Link from "next/link";

export default function TopNav(){
    return(
        <nav className="bg-gray-800 text-white p-4">
            <ul className="flex justify-around">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}