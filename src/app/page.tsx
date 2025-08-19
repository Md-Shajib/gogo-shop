import { useAppSelector } from "@/store/hooks";

export default function Home() {
  const counters = useAppSelector((state) => state.counters);
  return (
    <div>
      <p className="text-3xl">Hello</p>
    </div>
  );
}
