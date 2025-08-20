"use client";

import { Button } from "antd";
import { increment, decrement } from "@/store/slices/counterSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useSelector } from "react-redux";
import Link from "next/link";

export default function Home() {
  const counters = useSelector((state:any) => state.counters);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div className="container">
        
      </div>
    </div>
  );
}
