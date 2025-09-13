import Footer from "@/components/Footer";
import CategoryNav from "@/components/Header/CategoryNav";
import SearchHeader from "@/components/Header/SearchHeader";
import TopHeader from "@/components/Header/TopHeader";

interface UserLayoutProps {
  isFooter?: boolean;
  children: React.ReactNode;
}

export default function UserLayout({
  isFooter = true,
  children,
}: UserLayoutProps) {
  return (
    <>
      <div
        className={`${
          isFooter
            ? "flex flex-col h-screen w-full min-w-0 justify-between"
            : ""
        }`}
      >
        <div>
          <div>
            <TopHeader />
            <SearchHeader />
            <CategoryNav />
          </div>
          {children}
        </div>

        {isFooter && <Footer />}
      </div>
    </>
  );
}
