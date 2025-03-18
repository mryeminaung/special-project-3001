import TableCaption from '@/Components/TableCaption';
import TableHead from '@/Components/TableHead';
import TableRow from '@/Components/TableRow';
import TableWrapper from '@/Components/TableWrapper';
import AuthLayout from '@/Layouts/AuthLayout';
import { Badge } from '@/shadcn/ui/badge';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/shadcn/ui/dropdown-menu';
import { Head, Link, router } from '@inertiajs/react';
import { Ellipsis, Pencil, Trash2 } from 'lucide-react';
import FacultyCard from './Partials/FacultyCard';
import FacultyModal from './Partials/FacultyModal';
import FacultyPagination from './Partials/FacultyPagination';
import facultyImg from '/public/assets/user.jpg';
import ScrollIndicator from '@/Components/ScrollIndicator';
import { useSidebar } from '@/shadcn/ui/sidebar';

export default function Index({
    faculties = [],
    noOfFaculty,
    noOfProfessor,
    noOfAssistProf,
    noOfLecturer,
    noOfAssistLect,
}) {
    const handleFacultyDelete = (e, faculty) => {
        e.preventDefault();
        if (confirm('Are you sure you want to delete?')) {
            router.delete(route('faculties.destroy', faculty));
        }
    };

    return (
        <AuthLayout>
            <Head title="All Faculties" />
            <ScrollIndicator />
            <div className="mb-5 mt-10">
                <h2 className="font-poppins text-2xl font-semibold hover:underline">
                    <Link href="/faculties">
                        Total Faculties
                        <span className="ms-2 rounded-full border border-blue-300 bg-blue-100 px-2.5 py-1 text-base font-medium text-blue-800">
                            {noOfFaculty}
                        </span>
                    </Link>
                </h2>
                <div className="mt-5 grid gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-5 xl:grid-cols-4 xl:gap-x-10">
                    <FacultyCard
                        url="?rank=Professor"
                        name="Professor"
                        count={noOfProfessor}
                    />
                    <FacultyCard
                        url="?rank=Associate Professor"
                        name="Associate Professor"
                        count={noOfAssistProf}
                    />
                    <FacultyCard
                        url="?rank=Lecturer"
                        name="Lecturer"
                        count={noOfLecturer}
                    />
                    <FacultyCard
                        url="?rank=Assistant Lecturer"
                        name="Assistant Lecturer"
                        count={noOfAssistLect}
                    />
                </div>
            </div>

            <TableWrapper>
                <table className="w-full overflow-x-auto bg-white text-left text-sm dark:text-gray-400 rtl:text-right">
                    <TableCaption>
                        <div className="font-poppins flex items-center">
                            <span className="">Faculty Lists</span>
                            <span className="ms-2 rounded-full border border-blue-300 bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-800">
                                Faculty of Computer Science
                            </span>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <a
                                href={route('faculties.export-excel')}
                                className="max-w-fit rounded-lg bg-primary-purple px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none sm:w-auto"
                            >
                                Export Excel
                            </a>
                            <Link
                                href={route('faculties.create')}
                                className="rounded-lg bg-primary-purple px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none sm:w-auto"
                            >
                                Create
                            </Link>
                        </div>
                    </TableCaption>

                    <TableHead>
                        <tr className="border border-y-gray-200">
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th
                                scope="col"
                                className="hidden px-6 py-3 sm:table-cell"
                            >
                                Email Address
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 sm:hidden lg:table-cell"
                            >
                                Department
                            </th>
                            <th
                                scope="col"
                                className="hidden px-6 py-3 xl:table-cell"
                            >
                                Courses
                            </th>
                            <th
                                scope="col"
                                className="py-3 pr-5 text-left sm:px-6 sm:pr-0"
                            >
                                Actions
                            </th>
                        </tr>
                    </TableHead>

                    <tbody>
                        {faculties.data.map((faculty) => (
                            <TableRow key={faculty.id}>
                                <td className="flex items-center px-6 py-2 text-gray-900 dark:text-white sm:py-4 md:whitespace-nowrap">
                                    <img
                                        className="hidden h-10 w-10 rounded-full sm:inline-block"
                                        src={facultyImg}
                                        alt="Jese image"
                                    />
                                    <div className="sm:ps-3">
                                        <p className="">{faculty.name}</p>
                                        <div className="font-normal text-gray-400">
                                            {faculty.rank.title}
                                        </div>
                                    </div>
                                </td>
                                <td className="hidden px-6 sm:table-cell sm:py-1.5">
                                    {faculty.email}
                                </td>
                                <td className="px-6 py-1.5 sm:hidden">
                                    {faculty.department.dept_code}
                                </td>
                                <td className="hidden px-6 py-1.5 lg:table-cell">
                                    {faculty.department.name}
                                </td>
                                <td className="hidden space-y-1 px-6 py-1.5 xl:table-cell">
                                    {faculty.courses.length > 0 ? (
                                        faculty.courses.map((course) => (
                                            <Badge
                                                key={course.id}
                                                className="me-2 rounded-full border border-[#925FE2] bg-[#925FE2]/40 px-2.5 py-0.5 text-xs font-semibold text-[#3D2E58]"
                                            >
                                                {course.course_code}
                                            </Badge>
                                        ))
                                    ) : (
                                        <Badge className="rounded-full bg-[#925FE2]/40 px-2.5 py-0.5 text-xs font-semibold text-[#3D2E58]">
                                            N/A
                                        </Badge>
                                    )}
                                </td>
                                <td className="sm:hidden">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger
                                            asChild
                                            className="cursor-pointer"
                                        >
                                            <Ellipsis size={32} />
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className="mr-20 bg-white dark:bg-primary-purple md:ml-8 md:mr-0">
                                            <DropdownMenuItem>
                                                View
                                            </DropdownMenuItem>
                                            <hr />
                                            <DropdownMenuItem>
                                                Edit
                                            </DropdownMenuItem>
                                            <hr />
                                            <DropdownMenuItem>
                                                Delete
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </td>
                                <td className="sm:tabel-cell hidden justify-start gap-x-2 px-6 py-1.5 sm:flex">
                                    <FacultyModal faculty={faculty} />
                                    <Link
                                        href={route('faculties.edit', faculty)}
                                        className="font-medium text-yellow-600 hover:underline dark:text-yellow-500"
                                    >
                                        <Pencil />
                                    </Link>
                                    <form
                                        onSubmit={(e) =>
                                            handleFacultyDelete(e, faculty)
                                        }
                                    >
                                        <button
                                            type="submit"
                                            className="font-medium text-red-600 hover:underline dark:text-red-500"
                                        >
                                            <Trash2 />
                                        </button>
                                    </form>
                                </td>
                            </TableRow>
                        ))}
                    </tbody>
                </table>
                <FacultyPagination faculties={faculties} />
            </TableWrapper>
        </AuthLayout>
    );
}
