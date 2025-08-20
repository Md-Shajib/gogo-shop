'use client'
import { Button } from 'antd';
import { Search } from "lucide-react";

export default function SearchOp() {
  return (
    <div className="search w-[400px] bg-gray-100 rounded-md flex items-center shadow-sm px-2">
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
