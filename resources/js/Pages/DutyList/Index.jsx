import AuthLayout from '@/Layouts/AuthLayout';
import { Head, usePage } from '@inertiajs/react';
import React from 'react';

export default function DutyListIndex() {
    const { groupedDuties} = usePage().props;

    return (
        <AuthLayout>
            <Head title="Duty List" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h1 className="mb-4 text-2xl font-bold">
                                Exam Duty Schedule
                            </h1>

                            {groupedDuties.length > 0 ? (
                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-500">
                                                    No
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-500">
                                                    Name
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-500">
                                                    Date
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-500">
                                                    Time
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-500">
                                                    Subject
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-500">
                                                    Room
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-500">
                                                    Role
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 bg-white">
                                            {groupedDuties.map(
                                                (teacherDuties, index) => (
                                                    <React.Fragment
                                                        key={
                                                            teacherDuties
                                                                .faculty.id
                                                        }
                                                    >
                                                        {teacherDuties.duties.map(
                                                            (
                                                                duty,
                                                                dutyIndex,
                                                            ) => (
                                                                <tr
                                                                    key={`${teacherDuties.faculty.id}-${dutyIndex}`}
                                                                >
                                                                    {dutyIndex ===
                                                                        0 && (
                                                                        <>
                                                                            <td
                                                                                rowSpan={
                                                                                    teacherDuties
                                                                                        .duties
                                                                                        .length
                                                                                }
                                                                                className="whitespace-nowrap px-6 py-4 text-sm text-gray-500"
                                                                            >
                                                                                {index +
                                                                                    1}
                                                                            </td>
                                                                            <td
                                                                                rowSpan={
                                                                                    teacherDuties
                                                                                        .duties
                                                                                        .length
                                                                                }
                                                                                className="whitespace-nowrap px-6 py-4 text-sm text-gray-900"
                                                                            >
                                                                                {
                                                                                    teacherDuties
                                                                                        .faculty
                                                                                        .name
                                                                                }
                                                                            </td>
                                                                        </>
                                                                    )}
                                                                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                                                                        {new Date(
                                                                            duty.date,
                                                                        ).toLocaleDateString()}
                                                                    </td>
                                                                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                                                                        {
                                                                            duty.time
                                                                        }
                                                                    </td>
                                                                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                                                                        {
                                                                            duty.subject
                                                                        }
                                                                    </td>
                                                                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                                                                        {
                                                                            duty.room
                                                                        }
                                                                    </td>
                                                                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                                                                        {
                                                                            duty.role
                                                                        }
                                                                    </td>
                                                                </tr>
                                                            ),
                                                        )}
                                                    </React.Fragment>
                                                ),
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            ) : (
                                <div className="py-8 text-center text-gray-500">
                                    No duty assignments found
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthLayout>
    );
}
