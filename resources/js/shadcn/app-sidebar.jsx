import {
    Sidebar,
    SidebarContent,
    SidebarHeader,
    SidebarMenuButton,
    useSidebar,
} from '@/shadcn/ui/sidebar';
import { Link } from '@inertiajs/react';
import {
    BookOpenText,
    CirclePlus,
    Clock,
    ContactRound,
    Grid2x2,
    Layers,
    LayoutDashboard,
    Settings,
    Users,
} from 'lucide-react';
import { useEffect } from 'react';
import SideBarLink from './sidebar-link';
import miitLogo from '/public/assets/miit_logo.png';

const SideBarMenu = [
    {
        routeLink: route('dashboard'),
        routeName: 'Dashboard',
        icon: <LayoutDashboard />,
    },
    {
        routeLink: route('timetables.index'),
        routeName: 'Timetables',
        icon: <Clock />,
    },
    {
        routeLink: route('students.index'),
        routeName: 'Students',
        icon: <Users />,
    },
    {
        routeLink: route('courses.index'),
        routeName: 'Courses',
        icon: <BookOpenText />,
    },
    {
        routeLink: route('departments.index'),
        routeName: 'Departments',
        icon: <Grid2x2 />,
    },
    {
        routeLink: route('rooms.index'),
        routeName: 'Rooms',
        icon: <Layers />,
    },
    {
        routeLink: route('faculties.index'),
        routeName: 'Faculties',
        icon: <ContactRound />,
    },
    {
        routeLink: route('settings.index'),
        routeName: 'Settings',
        icon: <Settings />,
    },
];

export function AppSidebar({ ...props }) {
    const { open, state, isMobile, openMobile, setOpen, setOpenMobile } =
        useSidebar();

    useEffect(() => {
        localStorage.setItem('sidebarState', 'expanded');
        localStorage.setItem('sidebarOpen', true);
    }, []);

    useEffect(() => {
        if (!isMobile) {
            localStorage.setItem('sidebarState', state);
            localStorage.setItem('sidebarOpen', open);
        } else {
            // reset the collapsed icon state
            setOpen(true);
        }
    }, [state, isMobile]);

    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader
                className={`overflow-hidden bg-[#282336] pt-6 ${open && 'px-6'} `}
            >
                {open ? (
                    <Link href="/" className="rounded-2xl bg-white py-1">
                        <img
                            src="https://lms.miit.edu.mm/pluginfile.php/1/core_admin/logo/0x200/1684573304/miit_logo_wordmark_small.png"
                            className="mx-auto h-16 transition-all"
                            alt="MIIT"
                        />
                    </Link>
                ) : (
                    <Link href="/">
                        <img
                            src={miitLogo}
                            className="mx-auto h-14 rounded-full bg-white transition-all"
                            alt="MIIT"
                        />
                    </Link>
                )}
            </SidebarHeader>
            <SidebarContent className="sidebar bg-main-purple">
                <ul className="space-y-1 px-4 py-8 pt-10 text-center text-white">
                    <li className="mb-14">
                        <Link
                            href={route('timetables.add')}
                            className={`text-[#925FE2 mb-2 me-2 inline-flex items-center rounded-full bg-white text-center text-sm font-medium text-[#925FE2] transition-all ease-in-out hover:text-[#925FE2] focus:outline-none ${open ? 'w-[170px] px-3 py-1' : 'mt-4 px-1 py-1'}`}
                        >
                            <CirclePlus
                                size={40}
                                className="fill-primary-purple text-white"
                            />
                            {open && <span className="pl-3">Time-table</span>}
                        </Link>
                    </li>

                    {SideBarMenu.map((menu) => (
                        <SidebarMenuButton asChild key={menu.routeLink}>
                            <SideBarLink {...menu} />
                        </SidebarMenuButton>
                    ))}
                </ul>
            </SidebarContent>
        </Sidebar>
    );
}
