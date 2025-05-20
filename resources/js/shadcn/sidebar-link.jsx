import { useSidebar } from '@/shadcn/ui/sidebar';
import { Link, usePage } from '@inertiajs/react';

export default function SideBarLink({ routeLink, icon, routeName }) {
    const { url } = usePage();
    const { open } = useSidebar();

    const isActive = url.startsWith('/' + routeName.toLowerCase());

    return (
        <li>
            <Link
                href={routeLink}
                className={`mb-2 me-2 inline-flex items-center rounded-full text-center text-sm font-medium transition-all duration-200 ease-in-out hover:bg-white hover:text-[#925FE2] focus:outline-none ${open ? 'w-[170px] px-5 py-2.5' : 'px-2.5 py-2.5'} ${isActive ? 'bg-white text-[#925FE2]' : ''}`}
            >
                {icon}
                {open && <span className="pl-3">{routeName}</span>}
            </Link>
        </li>
    );
}
