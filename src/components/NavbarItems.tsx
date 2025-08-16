import Link from "next/link";
import { NavCategory } from "@/data/NavCategory";

export default function NavbarItems() {
  return (
    <nav>
      <ul className="flex justify-around items-center bg-gray-200 py-2">
        {NavCategory?.map((category) => (
          <li key={category?.id} className="relative group">
            <Link className="group" href={category?.link}>{category?.name}
             <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
