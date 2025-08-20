import Link from "next/link";

export default function TopHeader() {
  return (
    <header className="py-2 border-b border-gray-100 shadow bg-gray-50 mb-1">
      <div className="container flex items-center justify-between">
        <p className="text-[13px]">
          Limited-Time Offers: Mid-Summer Season Sale Live Now -{" "}
          <Link href="/">SHOP NOW</Link>
        </p>
        <ul className="flex items-center gap-3 ">
          <li>
            <Link href="/">Store Locator</Link>
          </li>
          <li>
            <Link href="/">Order Tracking</Link>
          </li>
          <li>
            <Link href="/">
              USD $
            </Link>
          </li>
          <li>
            <Link href="/">
              English
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
