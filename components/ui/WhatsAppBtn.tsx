import React from 'react'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa6';

const phone = process.env.PHONE_NUMBER;

function WhatsAppBtn() {
  return (
    <div>
        <Link
            href={`http://wa.me//${phone}`}
            target='_blank'
            rel='noopener noreferrer'
        >
            <FaWhatsapp />
        </Link>
    </div>
  )
}

export default WhatsAppBtn