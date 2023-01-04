import Container from "./container";
import LogoWhite from "../public/img/logo-white.webp";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="py-14 bg-[#e66328] text-white">
      <Container>
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="text-center">
            <div className="mb-2">
              <Image src={LogoWhite} alt="" width="240px" height="42px" />
            </div>
            <p className="mb-2 font-medium tracking-[.025em] leading-[1.6]">
              Join the Circular Fashion Revolution.
            </p>
          </div>
          <div className="hidden md:flex justify-around w-full">
            <div>
              <h1 className="text-[21px] leading-[25px] tracking-[.5px] font-bold mb-6">
                ABOUT
              </h1>
              <ul>
                <li className="py-1">
                  <Link href="">
                    <a className="text-[13px] leading-[16px] font-medium">
                      About us
                    </a>
                  </Link>
                </li>
                <li className="py-1">
                  <a className="text-[13px] leading-[16px] font-medium">
                    Our story
                  </a>
                </li>
                <li className="py-1">
                  <Link href="">
                    <a className="text-[13px] leading-[16px] font-medium">
                      For charities
                    </a>
                  </Link>
                </li>
                <li className="py-1">
                  <Link href="">
                    <a className="text-[13px] leading-[16px] font-medium">
                      For retailers
                    </a>
                  </Link>
                </li>
                <li className="py-1">
                  <Link href="">
                    <a className="text-[13px] leading-[16px] font-medium">
                      Help
                    </a>
                  </Link>
                </li>
                <li className="py-1">
                  <Link href="">
                    <a className="text-[13px] leading-[16px] font-medium">
                      Contact us
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="text-[21px] leading-[25px] tracking-[.5px] font-bold mb-6">
                MORE INFO
              </h1>
              <ul>
                <li className="py-1">
                  <Link href="">
                    <a className="text-[13px] leading-[16px] font-medium">
                      Return an item
                    </a>
                  </Link>
                </li>
                <li className="py-1">
                  <Link href="">
                    <a className="text-[13px] leading-[16px] font-medium">
                      Return a ThriftBag
                    </a>
                  </Link>
                </li>
                <li className="py-1">
                  <Link href="">
                    <a className="text-[13px] leading-[16px] font-medium">
                      Refund Policy
                    </a>
                  </Link>
                </li>
                <li className="py-1">
                  <Link href="">
                    <a className="text-[13px] leading-[16px] font-medium">
                      Privacy
                    </a>
                  </Link>
                </li>
                <li className="py-1">
                  <Link href="">
                    <a className="text-[13px] leading-[16px] font-medium">
                      Terms of Service
                    </a>
                  </Link>
                </li>
                <li className="py-1">
                  <Link href="">
                    <a className="text-[13px] leading-[16px] font-medium">
                      Shipping Policy
                    </a>
                  </Link>
                </li>
                <li className="py-1">
                  <Link href="">
                    <a className="text-[13px] leading-[16px] font-medium">
                      Billing Ts&Cs
                    </a>
                  </Link>
                </li>
                <li className="py-1">
                  <Link href="">
                    <a className="text-[13px] leading-[16px] font-medium">
                      Refund policy
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="text-[21px] leading-[25px] tracking-[.5px] font-bold mb-6">
                Shop
              </h1>
              <ul>
                <li className="py-1">
                  <Link href="">
                    <a className="text-[13px] leading-[16px] font-medium">
                      Re-sell
                    </a>
                  </Link>
                </li>
                <li className="py-1">
                  <Link href="">
                    <a className="text-[13px] leading-[16px] font-medium">
                      Women
                    </a>
                  </Link>
                </li>
                <li className="py-1">
                  <Link href="">
                    <a className="text-[13px] leading-[16px] font-medium">
                      Men
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-[15px] leading-[21px] font-medium">
              © Thrifter Inc. All Rights Reserved
            </h3>
          </div>
        </div>
      </Container>
    </div>
  );
};
