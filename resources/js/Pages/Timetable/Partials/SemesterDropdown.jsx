import { Button } from '@/shadcn/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/shadcn/ui/dropdown-menu';
import { Link } from '@inertiajs/react';

export default function SemesterDropdown({ selectedSemesterName, semesters }) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button className="flex max-w-max items-center justify-between">
                    {selectedSemesterName}
                    <svg
                        className="ms-3 h-2.5 w-2.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="m1 1 4 4 4-4"
                        />
                    </svg>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-44 bg-white dark:bg-main-purple dark:text-white sm:mr-8">
                {semesters.map((semester) => (
                    <DropdownMenuItem key={semester.id} asChild>
                        <Link
                            href={`?semester_id=${semester.id}`}
                            className="px-4 py-2 text-sm hover:cursor-pointer hover:bg-platinum dark:hover:bg-primary-purple/50"
                        >
                            {semester.name}
                        </Link>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
