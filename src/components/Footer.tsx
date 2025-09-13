import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="relative">
        <div className="container">
          <div className="grid grid-cols-5 gap-5 pb-3">
            <div>
              <h3 className="text-[17px] font-semibold text-gray-800 py-4 cursor-default">
                Contact Us
              </h3>
              <p>East Razabazar, Farmgate, Dhaka-1215</p>
              <p>support@gogoshop.com</p>
              <p>+8801515641499</p>
              <div>Ai Chat</div>
            </div>
            <div className="flex flex-col">
              <h3 className="text-[17px] font-semibold text-gray-800 py-4 cursor-default">
                Quick Links
              </h3>
              <Link href={"#"}>Privacy Policy</Link>
              <Link href={"#"}>Refund Policy</Link>
              <Link href={"#"}>Terms of Service</Link>
              <Link href={"#"}>Shipping Policy</Link>
              <Link href={"#"}>Policy for Buyers</Link>
              <Link href={"#"}>Policy for Sellers</Link>
            </div>
            <div className="flex flex-col">
              <h3 className="text-[17px] font-semibold text-gray-800 py-4 cursor-default">
                Information
              </h3>
              <Link href={"#"}>Privacy Policy</Link>
              <Link href={"#"}>Refund Policy</Link>
              <Link href={"#"}>Terms of Service</Link>
              <Link href={"#"}>Shipping Policy</Link>
              <Link href={"#"}>Policy for Buyers</Link>
              <Link href={"#"}>Policy for Sellers</Link>
            </div>
            <div className="flex flex-col">
              <h3 className="text-[17px] font-semibold text-gray-800 py-4 cursor-default">
                Your Account
              </h3>
              <Link href={"#"}>Privacy Policy</Link>
              <Link href={"#"}>Refund Policy</Link>
              <Link href={"#"}>Terms of Service</Link>
              <Link href={"#"}>Shipping Policy</Link>
              <Link href={"#"}>Policy for Buyers</Link>
              <Link href={"#"}>Policy for Sellers</Link>
            </div>
            <div className="flex flex-col">
              <h3 className="text-[17px] font-semibold text-gray-800 py-4 cursor-default">
                Find Product
              </h3>
              <Link href={"#"}>Privacy Policy</Link>
              <Link href={"#"}>Refund Policy</Link>
              <Link href={"#"}>Terms of Service</Link>
              <Link href={"#"}>Shipping Policy</Link>
              <Link href={"#"}>Policy for Buyers</Link>
              <Link href={"#"}>Policy for Sellers</Link>
            </div>
          </div>
        </div>
        <Image
          src="/illustration/footer-bg.png"
          alt="footer background"
          fill
          className="absolute right-0 bottom-0 object-contain object-right-bottom -z-10"
          priority
        />
        <div className="bg-[#EF224E]">
          <div className="container">
            <div className="flex justify-between items-center text-gray-800 py-3">
              <div>Social Links</div>
              <div>All Right</div>
              <div>Logo</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
