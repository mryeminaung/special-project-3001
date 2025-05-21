import TableCaption from '@/Components/TableCaption';
import TableHead from '@/Components/TableHead';
import TableRow from '@/Components/TableRow';
import TableWrapper from '@/Components/TableWrapper';
import AuthLayout from '@/Layouts/AuthLayout';
import { Badge } from '@/shadcn/ui/badge';
import { Head, usePage } from '@inertiajs/react';
import React from 'react';

export default function DutyListIndex() {
    const { groupedDuties } = usePage().props;

    return (
        <AuthLayout>
            <Head title="Duty List" />
            <div className="mb-5 mt-10">
                <h2 className="font-poppins text-2xl font-bold">
                    Exam Duty Schedule
                    <span className="ms-2 rounded-full border border-blue-300 bg-blue-100 px-2.5 py-1 text-base font-medium text-blue-800">
                        {groupedDuties.length} Teachers
                    </span>
                </h2>
            </div>

            <TableWrapper>
                <table className="w-full overflow-x-auto bg-white text-left text-sm dark:text-gray-400 rtl:text-right">
                    <TableCaption>
                        <div className="flex items-center font-poppins">
                            <span className="">Duty List Overview</span>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <a
                                href={route('dutylist.export-excel')}
                                className="max-w-fit rounded-lg bg-primary-purple px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none sm:w-auto"
                            >
                                Export As Excel
                            </a>
                        </div>
                    </TableCaption>

                    <TableHead>
                        <tr className="border border-y-gray-200 font-poppins">
                            <th scope="col" className="px-6 py-3">
                                No
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Time
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Subject
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Room
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Role
                            </th>
                        </tr>
                    </TableHead>

                    <tbody>
                        {groupedDuties.length > 0 ? (
                            groupedDuties.map((teacherDuties, index) => (
                                <React.Fragment key={teacherDuties.faculty.id}>
                                    {teacherDuties.duties.map(
                                        (duty, dutyIndex) => (
                                            <TableRow
                                                key={`${teacherDuties.faculty.id}-${dutyIndex}`}
                                            >
                                                {dutyIndex === 0 && (
                                                    <>
                                                        <td
                                                            rowSpan={
                                                                teacherDuties
                                                                    .duties
                                                                    .length
                                                            }
                                                            className="px-6 py-4 text-gray-900 dark:text-white"
                                                        >
                                                            {index + 1}.
                                                        </td>
                                                        <td
                                                            rowSpan={
                                                                teacherDuties
                                                                    .duties
                                                                    .length
                                                            }
                                                            className="px-6 py-4 text-gray-900 dark:text-white"
                                                        >
                                                            <div className="flex items-center">
                                                                <div className="sm:ps-3">
                                                                    <p className="font-medium">
                                                                        {
                                                                            teacherDuties
                                                                                .faculty
                                                                                .name
                                                                        }
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </>
                                                )}
                                                <td className="px-6 py-4">
                                                    {new Date(
                                                        duty.date,
                                                    ).toLocaleDateString()}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <Badge className="bg-blue-100 text-blue-800">
                                                        {duty.time}
                                                    </Badge>
                                                </td>
                                                <td className="px-6 py-4">
                                                    {duty.subject}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {duty.room}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <Badge
                                                        className={
                                                            duty.role ===
                                                            'Reserved'
                                                                ? 'bg-yellow-100 text-yellow-800'
                                                                : 'bg-green-100 text-green-800'
                                                        }
                                                    >
                                                        {duty.role}
                                                    </Badge>
                                                </td>
                                            </TableRow>
                                        ),
                                    )}
                                </React.Fragment>
                            ))
                        ) : (
                            <TableRow>
                                <td
                                    colSpan="7"
                                    className="px-6 py-4 text-center text-gray-500"
                                >
                                    No duty assignments found
                                </td>
                            </TableRow>
                        )}
                    </tbody>
                </table>
            </TableWrapper>
        </AuthLayout>
    );
}
