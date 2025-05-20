import { Separator } from '@/shadcn/ui/separator';
import { SidebarTrigger } from '@/shadcn/ui/sidebar';
import { Link, usePage } from '@inertiajs/react';
import facultyImg from '/public/assets/admin2.jpg';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/shadcn/ui/dropdown-menu';
import { useEffect, useState } from 'react';

export default function SiteHeader({ title }) {
    const {
        auth: { user },
    } = usePage().props;
    const [isBlurred, setIsBlurred] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsBlurred(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    /* 
    these two properties will mess up header component
    transition-[width,height] group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12
    */

    return (
        <header
            className={`sticky top-0 z-50 flex items-center gap-2 bg-platinum transition-colors ease-in-out dark:bg-primary-purple/20 ${
                isBlurred
                    ? 'bg-platinum/10 shadow-md backdrop-blur-lg dark:bg-primary-purple/20'
                    : 'shadow-none backdrop-blur-none'
            }`}
        >
            <div className="flex w-full items-center justify-between gap-2 px-4 pb-4 pt-6">
                <div className="flex items-center">
                    <SidebarTrigger className="-ml-1 rounded-full bg-primary-purple text-white dark:bg-white dark:text-primary-purple" />
                    <h2 className="font-poppins text-3xl font-bold capitalize text-gray-900 dark:text-white">
                        Dashboard
                    </h2>
                    {/* <ModeToggle /> */}
                    <Separator orientation="vertical" className="mr-2 h-4" />
                    <h2 className="text-2xl font-semibold">{title}</h2>
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <div className="group relative flex items-center gap-x-3 rounded-full bg-white px-2 py-1.5 transition-all duration-200 hover:bg-gradient-to-r hover:from-white hover:to-purple-50 hover:shadow-lg dark:border-gray-700 dark:bg-main-purple dark:hover:from-gray-800 dark:hover:to-purple-900/20">
                            <span className="sr-only">Open user menu</span>
                            <div className="relative">
                                <img
                                    className="h-11 w-11 rounded-full object-cover transition-all duration-300 group-hover:ring-2 group-hover:ring-primary-purple/20"
                                    src={facultyImg}
                                    alt={`Profile picture of ${user.name}`}
                                />
                                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white bg-green-400 transition-all duration-300 group-hover:scale-110 dark:border-gray-800" />
                            </div>

                            <div className="hidden flex-col items-start pr-5 font-poppins md:flex">
                                <p className="max-w-[150px] truncate text-sm font-medium text-primary-purple transition-colors duration-300 group-hover:text-purple-700 dark:text-purple-200 dark:group-hover:text-purple-100">
                                    {user.name}
                                </p>
                                <span className="text-xs text-gray-500 transition-colors duration-300 group-hover:text-gray-600 dark:text-gray-400 dark:group-hover:text-gray-300">
                                    Pro-Rector
                                </span>
                            </div>

                            <div className="hidden h-5 w-5 items-center justify-center md:flex">
                                <svg
                                    className="text-gray-400 transition-all duration-300 group-hover:rotate-180 group-hover:text-primary-purple dark:text-gray-500 dark:group-hover:text-purple-200"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </div>
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="mr-5 mt-2 w-44 bg-white dark:bg-main-purple md:ml-8 md:mr-0">
                        <DropdownMenuLabel className="px-4 py-1">
                            My Account
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild>
                            <Link
                                className="px-4 py-2 hover:cursor-pointer dark:hover:bg-primary-purple/50"
                                href="/dashboard"
                            >
                                Dashboard
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link
                                className="px-4 py-2 hover:cursor-pointer dark:hover:bg-primary-purple/50"
                                href="/settings"
                            >
                                Settings
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link
                                method="post"
                                className="w-full px-4 py-2 hover:cursor-pointer dark:hover:bg-primary-purple/50"
                                href="/logout"
                            >
                                Logout
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
}
