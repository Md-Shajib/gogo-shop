"use client";
import { Avatar, Badge, GetProps, Input, Select, Space } from "antd";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const { Search } = Input;

const options = [
  { value: "mens-watches", label: "Men's" },
  { value: "womens-watches", label: "Women's" },
  { value: "kids-watches", label: "Kids'" },
  { value: "by-material", label: "By Material" },
  { value: "by-occasion", label: "By Occasion" },
  { value: "brands", label: "Top Brands" },
  { value: "brands2", label: "Top Brands 2" },
  { value: "watch", label: "Watch" },
];

type SearchProps = GetProps<typeof Input.Search>;

const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
  console.log(info?.source, value);

export default function TopNav() {
  return (
    <nav className="flex items-center bg-gray-300 h-[70px]">
      <div className="w-1/6 flex justify-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          GoGo-Shop
        </Link>
      </div>
      <div className="w-3/6 flex justify-center">
        <Space
          direction="vertical"
          className="border border-green-600 rounded-md p-1 bg-white shadow-md"
        >
          <Space.Compact>
            <Select
              defaultValue="Top Brands"
              options={options}
              style={{ width: 120, border: "none", boxShadow: "none" }}
              variant="borderless"
              className="!border-r !border-gray-300"
            />
            <Search
              variant="borderless"
              placeholder="input search text"
              onSearch={onSearch}
              style={{ width: 300, border: "none", boxShadow: "none" }}
            />
          </Space.Compact>
        </Space>
      </div>
      <div className="w-2/6">
        <div>
            <Badge count={5}>
          <Avatar shape="square" size="large"><ShoppingCart className="text-black" /></Avatar>
        </Badge>
        </div>
        <div>
            
        </div>
        
      </div>
    </nav>
  );
}
