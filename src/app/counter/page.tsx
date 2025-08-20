"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { decrement, increment } from "@/store/slices/counterSlice";
import { Button } from "antd";
import Link from "next/link";

export default function TestPage() {
  // const counters = useSelector((state:any) => state.counters);
  const counters = useAppSelector((state) => state.counters);
  const dispatch = useAppDispatch();

  console.log("test counter", counters);

  return (
    <div className="w-fit mx-auto mt-10 bg-gray-200 p-5 rounded-md">
      <h1>Test Page</h1>
      {counters.map((c) => (
        <div key={c.id} className="mt-5">
          <p>Counter {c.id}: {c.value}</p>
          <Button onClick={() => dispatch(increment(c.id))} className="mr-2 mt-2">Increment</Button>
          <Button onClick={() => dispatch(decrement(c.id))} className="mr-2 mt-2">Decrement</Button>
        </div>
      ))}
      <Link href={"/"}>Go to Home</Link>
    </div>
  );
}
