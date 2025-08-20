'use client'
import { Button } from 'antd';
import { Search } from "lucide-react";

export default function SearchOption() {
  return (
    <div className="search w-[400px] bg-gray-200 rounded-md flex items-center shadow-sm px-2 border border-gray-300 hover:shadow-md focus-within:border-red-500 transition-all duration-300">
      <input
        type="text"
        placeholder="Search here..."
        className="p-2 w-full h-[45px] bg-transparent outline-none"
      />
      {/* <Search size={20} /> */}
      <Button type="text" shape="circle">{<Search size={15} />}</Button>
    </div>
  );
}
