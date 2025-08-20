import { Avatar, Badge, Button, Tooltip } from "antd";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SearchOption from "../common/SearchOp";

export default function SearchHeader() {
  return (
    <header className="pt-1 pb-2 w-full  bg-gray-50">
      <div className="container flex items-center justify-between">
        <div className="logo">
          <Link href={"/"}>
            <Image
              src="/images/logo-02.png"
              alt="Logo"
              width={160}
              height={40}
              className="bg-gray-100"
            />
          </Link>
        </div>
        <div>
          <SearchOption />
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
            <Tooltip title="My Profile" color="red">
              <div className="border-2 border-gray-300 rounded-full ml-2 hover:cursor-pointer">
              <Avatar
                shape="circle"
                size="large"
                src="/images/user-avatar-02.png"
              />
            </div>
            </Tooltip>
          </div>
        </div>
      </div>
    </header>
  );
}
