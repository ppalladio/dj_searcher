import Link from 'next/link';
import { FaInstagram, FaSoundcloud, FaSpotify } from 'react-icons/fa';

interface IconLinkProps {
    href: string;
    children: React.ReactNode;
}

const IconLink = ({ href, children }: IconLinkProps) => (
    <Link href={href} className="mx-2">
        {children}
    </Link>
);

const Footer = () => {
    return (
        <div className="bg-gray-300 w-full flex flex-row justify-center items-center py-5">
            <IconLink href="https://open.spotify.com/playlist/3pXPBeJLuY4yKfSd8ThGwo?si=89ec3730ad2c4b0d">
                <FaSpotify size={32} />
            </IconLink>
            <IconLink href="https://www.instagram.com/fullfine.services">
                <FaInstagram size={32} />
            </IconLink>
            <IconLink href="https://soundcloud.com/fullfine">
                <FaSoundcloud size={32} />
            </IconLink>
        </div>
    );
};
export default Footer;
