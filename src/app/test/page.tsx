"use client";

import { Button } from "antd";
import { increment, decrement } from "@/store/slices/counterSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

export default function TestPage() {
  const counters = useAppSelector((state) => state.counters);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>Test Page</h1>
      {counters.map((c) => (
        <div key={c.id}>
          <p>Counter {c.id}: {c.value}</p>
          <Button onClick={() => dispatch(increment(c.id))}>Increment</Button>
          <Button onClick={() => dispatch(decrement(c.id))}>Decrement</Button>
        </div>
      ))}
    </div>
  );
}
