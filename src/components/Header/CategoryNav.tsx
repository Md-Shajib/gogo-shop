"use client";
import { NavCategory, NavMenu } from "@/data/NavMenu";
import { Button, Dropdown, MenuProps } from "antd";
import { AlignLeft, ChevronDown, ChevronUp, Rocket } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const items: MenuProps["items"] = NavCategory

export default function CategoryNav() {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [current, setCurrent] = useState("brands");
  const toggleCategory = () => {
    setCategoryOpen(!categoryOpen);
  };

  const handleMenuClick = (key: string) => {
    console.log("click ", key);
    setCurrent(key);
  };
  return (
    <nav className="bg-[#f9fafb] pb-2">
      <div className="container">
        <div className="flex justify-between items-center w-full">
          <div className="w-1/5">
            <Dropdown menu={{ items }} trigger={["click"]}>
              <Button
                onClick={toggleCategory}
                icon={<AlignLeft size={17} />}
                iconPosition="start"
                size="large"
                type="primary"
                className="uppercase transition-all duration-500 !text-[14px] !font-semibold"
              >
                SHOP BY CATEGORIES
                {categoryOpen ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </Button>
            </Dropdown>
          </div>

          <div className="flex items-center justify-center gap-9 w-3/5 overflow-x-auto  scrollbar-hide text-[13.5px] font-semibold uppercase tracking-wide">
            {/* <Menu
              subMenuCloseDelay={0.2}
              onClick={handleMenuClick}
              selectedKeys={[current]}
              mode="horizontal"
              items={NavCategory}
              className="w-full justify-around text-[16px] font-semibold !border-none bg-transparent tracking-wide"
            /> */}
            {NavMenu?.map((menu) => (
              <Link
                key={menu?.id}
                href={menu?.link}
                onClick={() => handleMenuClick(menu.key)}
                className="relative group pb-1"
              >
                <span className={`relative group pb-1 ${current === menu.key ? "text-red-500" : ""}`}>
                  {menu?.label}</span>
                <span
                  className={`absolute left-0 bottom-0 h-[2px] bg-red-500 transition-all duration-300 ${current === menu.key ? "w-full" : "w-0 group-hover:w-full"} `}
                />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 justify-end w-1/5">
            <Rocket size={17} />
            <span className="text-[16px]">Free International Delivery</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
