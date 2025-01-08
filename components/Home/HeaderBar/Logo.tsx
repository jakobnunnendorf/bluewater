import React from "react";
import Image from "next/image";
import Link from "next/link";
type Props = {
  dark?: boolean;
};
const Logo: React.FC<Props> = ({ dark = false }) => {
  return (
    <Link href="/#hero-section">
      <Image
        src={dark ? "/images/logo-golden.png" : "/BlueWater Studios Logo.png"}
        width={85}
        height={45}
        alt="Blue Interiors Logo"
      />
    </Link>
  );
};

export default Logo;
