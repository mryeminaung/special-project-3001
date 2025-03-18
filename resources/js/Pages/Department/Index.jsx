import TableCaption from '@/Components/TableCaption';
import TableHead from '@/Components/TableHead';
import TableRow from '@/Components/TableRow';
import TableWrapper from '@/Components/TableWrapper';
import AuthLayout from '@/Layouts/AuthLayout';
import { Head, Link, router } from '@inertiajs/react';
import { Pencil, Trash2 } from 'lucide-react';
import DepartmentCard from './Partials/DepartmentCard';

export default function Index({ departments, noOfDepartments }) {
    const handleDeptDelete = (e, department) => {
        e.preventDefault();
        router.delete(route('departments.destroy', department));
    };

    return (
        <AuthLayout>
            <Head title="All Departments" />
            <div className="mb-5 mt-10">
                <h2 className="font-poppins text-2xl font-bold">
                    Total Departments
                    <span className="ms-2 rounded-full border border-blue-300 bg-blue-100 px-2.5 py-1 text-base font-medium text-blue-800">
                        {noOfDepartments}
                    </span>
                </h2>
                <div className="mt-5 hidden grid-cols-4 justify-between gap-x-8">
                    <DepartmentCard name="Computer Science" count={10} />
                    <DepartmentCard name="Computing" count={3} />
                    <DepartmentCard name="Information Science" count={6} />
                    <DepartmentCard name="Technology Science" count={5} />
                </div>
            </div>

            <TableWrapper>
                <table className="font-inter w-full bg-white text-left text-sm dark:text-gray-400 rtl:text-right">
                    <TableCaption>
                        <div className="font-poppins flex items-center">
                            <span className="">Department Lists</span>
                            <span className="ms-2 rounded-full border border-blue-300 bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-800">
                                Departments Information
                            </span>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <a
                                href={route('departments.export-excel')}
                                className="w-full rounded-lg bg-primary-purple px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none sm:w-auto"
                            >
                                Export Excel
                            </a>
                            <Link
                                href={route('faculties.create')}
                                className="w-full rounded-lg bg-primary-purple px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none sm:w-auto"
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
                            <th scope="col" className="px-6 py-3">
                                Department Code
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Actions
                            </th>
                        </tr>
                    </TableHead>

                    <tbody>
                        {departments.map((department) => (
                            <TableRow key={department.id}>
                                <td className="px-6 py-1.5">
                                    {department.name}
                                </td>
                                <td className="px-6 py-1.5">
                                    {department.dept_code}
                                </td>

                                <td className="flex justify-start gap-x-4 px-6 py-1.5">
                                    <Link
                                        href={route(
                                            'departments.edit',
                                            department,
                                        )}
                                        className="font-medium text-yellow-600 hover:underline dark:text-yellow-500"
                                    >
                                        <Pencil />
                                    </Link>
                                    <form
                                        onSubmit={(e) =>
                                            handleDeptDelete(
                                                e,
                                                handleDeptDelete,
                                            )
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
            </TableWrapper>
        </AuthLayout>
    );
}
