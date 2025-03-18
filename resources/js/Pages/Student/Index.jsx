import AuthLayout from '@/Layouts/AuthLayout';
import { Head, Link, router } from '@inertiajs/react';
import StudentCard from './Partials/StudentCard';
// import { StudentModal } from './Partials/StudentModal';
import TableCaption from '@/Components/TableCaption';
import TableHead from '@/Components/TableHead';
import TableRow from '@/Components/TableRow';
import TableWrapper from '@/Components/TableWrapper';
import { Badge } from '@/shadcn/ui/badge';
import { Dot, Ellipsis, Pencil, Trash2 } from 'lucide-react';
import studentImg from '/public/assets/user.jpg';

import ScrollIndicator from '@/Components/ScrollIndicator';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/shadcn/ui/dropdown-menu';
import StudentModal from './Partials/StudentModal';
import StudentPagination from './Partials/StudentPagination';

export default function Index({ students, noOfStudent }) {
    const transformName = (name) => {
        return '@' + name.split(' ').slice(1).join('_').toLowerCase();
    };

    const handleStudentDelete = (e, student) => {
        e.preventDefault();
        if (confirm('Are you sure you want to delete?')) {
            router.delete(route('students.destroy', student));
        }
    };

    return (
        <AuthLayout>
            <Head title="All Students" />
            <ScrollIndicator />
            <div className="mb-5 mt-10">
                <h2 className="font-poppins text-2xl font-semibold hover:underline">
                    <Link href="/students">
                        Total Students
                        <span className="ms-2 rounded-full border border-blue-300 bg-blue-100 px-2.5 py-1 text-base font-medium text-blue-800">
                            {noOfStudent}
                        </span>
                    </Link>
                </h2>
                <div className="mdhidden mt-5 grid w-full gap-x-5 gap-y-5 sm:grid-cols-2 md:gap-x-5 lg:grid-cols-4 lg:gap-x-8">
                    <StudentCard name="BE-2019" count={120} />
                    <StudentCard name="BE-2020" count={120} />
                    <StudentCard name="BE-2021" count={120} />
                    <StudentCard name="BE-2022" count={120} />
                </div>
            </div>

            <TableWrapper>
                <table className="w-full overflow-x-auto bg-white text-sm dark:text-gray-400 rtl:text-right">
                    <TableCaption>
                        <div className="font-poppins flex items-center">
                            <span className="">Student Lists</span>
                            <span className="ms-2 rounded-full border border-blue-300 bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-800">
                                For Academic Years
                            </span>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <a
                                href={route('students.export-excel')}
                                className="max-w-fit rounded-lg bg-primary-purple px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none sm:w-auto"
                            >
                                Export Excel
                            </a>
                            <Link
                                href={route('students.create')}
                                className="rounded-lg bg-primary-purple px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none sm:w-auto"
                            >
                                Create
                            </Link>
                        </div>
                    </TableCaption>

                    <TableHead>
                        <tr className="border border-y-gray-200 text-left">
                            <th scope="col" className="py-3 ps-5 md:px-6">
                                Name
                            </th>
                            <th
                                scope="col"
                                className="hidden px-6 py-3 sm:table-cell md:hidden xl:table-cell"
                            >
                                Roll Number
                            </th>
                            <th
                                scope="col"
                                className="hidden px-6 py-3 lg:table-cell"
                            >
                                Email Address
                            </th>
                            <th
                                scope="col"
                                className="py-3 md:hidden md:px-6 lg:table-cell"
                            >
                                Major
                            </th>
                            <th
                                scope="col"
                                className="hidden px-6 py-3 md:table-cell"
                            >
                                Status
                            </th>

                            <th
                                scope="col"
                                className="px-5 py-3 sm:px-6 md:px-10"
                            >
                                Actions
                            </th>
                        </tr>
                    </TableHead>

                    <tbody>
                        {students.data.map((student) => (
                            <TableRow
                                key={student.id}
                                className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
                            >
                                <th
                                    scope="row"
                                    className="flex items-center whitespace-nowrap py-4 ps-5 text-left text-gray-900 dark:text-white md:px-6"
                                >
                                    <img
                                        className="hidden h-10 w-10 rounded-full md:inline-block"
                                        src={studentImg}
                                        alt="Jese image"
                                    />
                                    <div className="md:ps-3">
                                        <div className="">{student.name}</div>
                                        <p className="hidden font-normal text-gray-500 sm:inline-block md:hidden lg:inline-block">
                                            {transformName(student.name)}
                                        </p>
                                        <p className="font-normal text-gray-500 sm:hidden md:inline-block lg:hidden">
                                            {student.email.split('@')[0]}
                                        </p>
                                    </div>
                                </th>
                                <td className="hidden px-6 py-1.5 uppercase sm:table-cell md:hidden xl:table-cell">
                                    {student.email.split('@')[0]}
                                </td>
                                <td className="hidden px-6 py-1.5 md:table-cell">
                                    {student.email}
                                </td>
                                <td className="px-3 py-1.5 md:hidden md:px-6 lg:table-cell">
                                    {student.major.name}
                                </td>
                                <td className="hidden px-6 py-1.5 lg:table-cell">
                                    <Badge className="rounded-full bg-green-100 py-0 pe-3 ps-0 text-black dark:bg-green-400">
                                        <Dot size={28} />
                                        <span>{student.status}</span>
                                    </Badge>
                                </td>
                                <td className="ps-8 sm:hidden">
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
                                <td className="sm:tabel-cell absolute mt-5 hidden place-items-center gap-x-2 sm:flex xl:ps-10">
                                    <StudentModal student={student} />
                                    <Link
                                        href={route('students.edit', student)}
                                        className="font-medium text-yellow-600 hover:underline dark:text-yellow-500"
                                    >
                                        <Pencil />
                                    </Link>
                                    <form
                                        onSubmit={(e) =>
                                            handleStudentDelete(e, student)
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
                <StudentPagination students={students} />
            </TableWrapper>
        </AuthLayout>
    );
}
