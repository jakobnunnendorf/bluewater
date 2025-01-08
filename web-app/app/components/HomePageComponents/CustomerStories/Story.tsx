import React from 'react';
import Image from "next/image";

function Story({src}: {src: string}) {
    return (
        <Image src={src} height={600} width={400} alt=""/>
    );
}

export default Story;