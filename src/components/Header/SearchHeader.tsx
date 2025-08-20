import Image from "next/image";
import Link from "next/link";
import SearchOp from "../common/SearchOp";

export default function SearchHeader() {
  return (
    <header className="my-3">
      <div className="container flex items-center justify-between">
        <div className="logo">
          <Link href={"/"}>
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={160}
              height={40}
              className="bg-gray-100"
            />
          </Link>
        </div>
        <div>
          <SearchOp />
        </div>
        <div className="flex items-center justify-end gap-5">
          <div className="flex items-center gap-4">
            <Link
              href={"/login"}
              className="text-[14px] font-[600] !text-gray-600"
            >
              Login
            </Link>
            <span className="text-[14px] font-[600] text-gray-500">|</span>
            <Link
              href={"/register"}
              className="text-[14px] font-[600] !text-gray-600"
            >
              Register
            </Link>
            
          </div>
        </div>
      </div>
    </header>
  );
}
