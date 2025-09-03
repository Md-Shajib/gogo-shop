"use client";
import { Button } from "antd";
import { AlignLeft, ChevronDown, ChevronUp, Rocket } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function CategoryNav() {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const toggleCategory = () => {
    setCategoryOpen(!categoryOpen);
  };
  return (
    <nav className="bg-[#f9fafb] pb-2">
      <div className="container">
        <div className="flex justify-between items-center gap-5">
          <div>
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
          </div>

          <div className="flex items-center gap-3">
            <Link href={"/"}>
              <Button type="link" className="!text-[15px] !font-semibold tracking-wide">
                Smartwatches
              </Button>
            </Link>
            <Link href={"/"}>
              <Button type="link" className="!text-[15px] !font-semibold tracking-wide">
                Luxury
              </Button>
            </Link>
            <Link href={"/"}>
              <Button type="link" className="!text-[15px] !font-semibold tracking-wide">
                Casual
              </Button>
            </Link>
            <Link href={"/"}>
              <Button type="link" className="!text-[15px] !font-semibold tracking-wide">
                Analog
              </Button>
            </Link>
            <Link href={"/"}>
              <Button type="link" className="!text-[15px] !font-semibold tracking-wide">
                Digital
              </Button>
            </Link>
            <Link href={"/"}>
              <Button type="link" className="!text-[15px] !font-semibold tracking-wide">
                Chronograph
              </Button>
            </Link>
            <Link href={"/"}>
              <Button type="link" className="!text-[15px] !font-semibold tracking-wide">
                Kids
              </Button>
            </Link>
            <Link href={"/"}>
              <Button type="link" className="!text-[15px] !font-semibold tracking-wide">
                Diving Watches
              </Button>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Rocket size={17} />
            <span>Free International Delivery</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
