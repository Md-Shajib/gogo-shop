"use client";

import Banner from "@/components/Banner";
import UserLayout from "./layout/UserLayout";

// import { useAppDispatch } from "@/store/hooks";
// import { useSelector } from "react-redux";

export default function Home() {
  // const counters = useSelector((state) => state?.counters);
  // const dispatch = useAppDispatch();

  return (
    <UserLayout>
      <Banner />
    </UserLayout>
  );
}
