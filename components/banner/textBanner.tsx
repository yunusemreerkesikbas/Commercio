import React from 'react';
import Link from "next/link";
import {BsTelephone} from "react-icons/bs"
import {AiOutlineMail} from "react-icons/ai"
import {AiOutlineInstagram} from "react-icons/ai"
import {AiOutlineYoutube} from "react-icons/ai"
import {AiOutlineFacebook} from "react-icons/ai"
import {AiOutlineTwitter} from "react-icons/ai"

export default function TextBannerComponent() {

    return (
        <div className="text-banner-top container py-5 items-center text-white">
            <div className="text-banner font-bold">
                <ul className="flex gap-3 justify-between">
                    <div className="flex items-center gap-3">
                        <li className="flex gap-2 items-center ">
                            <BsTelephone aria-setsize={30} />
                            <Link href="tel:2255550118" className="text-sm">(225) 555-0118</Link>
                        </li>
                        <li className="flex gap-2 items-center text-xs">
                            <AiOutlineMail/>
                            <Link href="mailto:michelle.rivera@example.com" className="text-sm">michelle.rivera@example.com</Link>
                        </li>
                    </div>
                    <div>
                        <li>
                            <span className="font-bold text-sm">Follow Us  and get a chance to win 80% off</span>
                        </li>
                    </div>
                    <div className="flex gap-2 items-center">
                        <span className="text-sm">Follow Us  :</span>
                        <li><AiOutlineInstagram/></li>
                        <li><AiOutlineYoutube/></li>
                        <li><AiOutlineFacebook/></li>
                        <li><AiOutlineTwitter/></li>
                    </div>

                </ul>
            </div>

        </div>
    );

}

