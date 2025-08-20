import Link from "next/link";
import Image from "next/image";
import SearchOp from "../common/SearchOp";
import { ShoppingCart } from "lucide-react";
import { Avatar, Badge, Button } from "antd";

export default function SearchHeader() {
  return (
    <header className="my-3 w-full h-[90px]">
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
        <div className="flex items-center justify-end gap-5 ">
          <div className="flex items-center gap-3">
            <Link href={"/login"} className="text-[14px] font-[600]">
              Login
            </Link>
            <span className="text-[14px] font-[600] text-gray-600">|</span>
            <Link href={"/register"} className="text-[14px] font-[600]">
              Register
            </Link>

            <div className="ml-3">
              <Badge count={0} showZero>
                <Button
                  size="large"
                  className="h-[45px] w-[45px] !border-2"
                  icon={<ShoppingCart strokeWidth={1.5} />}
                />
              </Badge>
            </div>
            <div className="border-2 border-gray-300 rounded-full ml-2">
              <Avatar
                shape="circle"
                size="large"
                src="/images/user-avatar-01.png"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
