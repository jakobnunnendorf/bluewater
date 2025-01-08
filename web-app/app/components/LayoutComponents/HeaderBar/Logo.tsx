import React from "react";
import Image from "next/image";
import Link from "next/link";
type Props = {
  isBg?: boolean;
};
const Logo: React.FC<Props> = ({ isBg = true }) => {
  return (
    <Link href="/#hero-section">
      <Image
        src={
          isBg ? "/BlueWater Studios Logo.png" : "/BlueWater Studios Logo.png"
        }
        width={85}
        height={45}
        alt="Blue Interiors Logo"
      />
    </Link>
  );
};

export default Logo;
