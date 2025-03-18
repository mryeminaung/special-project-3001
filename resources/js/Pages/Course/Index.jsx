import TableCaption from '@/Components/TableCaption';
import TableHead from '@/Components/TableHead';
import TableRow from '@/Components/TableRow';
import TableWrapper from '@/Components/TableWrapper';
import AuthLayout from '@/Layouts/AuthLayout';

import ScrollIndicator from '@/Components/ScrollIndicator';
import { Head, Link, router } from '@inertiajs/react';
import { Pencil, Trash2 } from 'lucide-react';
import CourseCard from './Partials/CourseCard';
import CourseModal from './Partials/CourseModal';
import CoursePagination from './Partials/CoursePagination';
import CourseType from './Partials/CourseType';

export default function Index({
    courses,
    noOfCSECourses,
    noOfECECourses,
    noOfBothCourses,
    totalCourses,
}) {
    const handleCourseDelete = (e, course) => {
        e.preventDefault();
        if (confirm('Are you sure you want to delete this course?')) {
            router.delete(route('courses.destroy', course), {
                preserveScroll: true,
            });
        }
    };

    return (
        <AuthLayout>
            <Head title="All Courses" />
            <ScrollIndicator />
            <div className="mb-5 mt-9">
                <h2 className="font-poppins text-2xl font-semibold hover:underline">
                    <Link href="/courses">
                        Total Courses
                        <span className="ms-2 rounded-full border border-blue-300 bg-blue-100 px-2.5 py-1 text-base font-medium text-blue-800">
                            {totalCourses}
                        </span>
                    </Link>
                </h2>

                <div className="mt-5 grid w-full gap-x-4 gap-y-4 sm:grid-cols-2 md:grid-cols-2 md:gap-x-7 lg:grid-cols-3 xl:gap-x-10 2xl:grid-cols-5">
                    <CourseCard
                        url="?program=cse and ece"
                        name="CSE and ECE"
                        count={noOfBothCourses}
                    />
                    <CourseCard
                        url="?program=cse"
                        name="CSE"
                        count={noOfCSECourses}
                    />
                    <CourseCard
                        url="?program=ece"
                        name="ECE"
                        count={noOfECECourses}
                    />
                </div>
            </div>

            <TableWrapper>
                <table className="w-full overflow-x-auto bg-white text-left text-sm dark:text-gray-400 rtl:text-right">
                    <TableCaption>
                        <div className="font-poppins flex items-center">
                            <span className="">Course Lists</span>
                            <span className="ms-2 rounded-full border border-blue-300 bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-800">
                                Courses Information
                            </span>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <a
                                href={route('courses.export-excel')}
                                className="max-w-fit rounded-lg bg-primary-purple px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none sm:w-auto"
                            >
                                Export Excel
                            </a>
                            <Link
                                href={route('courses.create')}
                                className="rounded-lg bg-primary-purple px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none sm:w-auto"
                            >
                                Create
                            </Link>
                        </div>
                    </TableCaption>

                    <TableHead>
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Course Code
                            </th>
                            <th
                                scope="col"
                                className="hidden px-6 py-3 md:table-cell"
                            >
                                Course Name
                            </th>
                            <th
                                scope="col"
                                className="hidden px-6 py-3 lg:table-cell"
                            >
                                Course Type
                            </th>
                            <th
                                scope="col"
                                className="hidden px-6 py-3 lg:table-cell"
                            >
                                Credit
                            </th>
                            <th
                                scope="col"
                                className="hidden px-6 py-3 sm:table-cell"
                            >
                                Program
                            </th>
                            <th scope="col" className="hidden px-6 py-3">
                                Instructor
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </TableHead>

                    <tbody>
                        {courses.data.map((course) => (
                            <TableRow key={course.id}>
                                <td className="px-6 py-4">
                                    {course.course_code}
                                </td>
                                <td className="hidden px-6 py-4 md:table-cell">
                                    {course.title}
                                </td>
                                <td className="hidden px-6 py-4 lg:table-cell">
                                    <CourseType course={course} />
                                </td>
                                <td className="hidden px-6 py-4 lg:table-cell">
                                    {course.credit}
                                </td>
                                <td className="hidden px-6 py-4 sm:table-cell">
                                    {course.program.name}
                                </td>
                                <td className="hidden px-6 py-4">
                                    {course.faculty.name}
                                </td>
                                <td className="flex gap-x-2 px-6 py-4">
                                    <CourseModal course={course} />
                                    <Link
                                        href={route('courses.edit', course)}
                                        className="font-medium text-yellow-600 hover:underline dark:text-yellow-500"
                                    >
                                        <Pencil />
                                    </Link>
                                    <form
                                        onSubmit={(e) =>
                                            handleCourseDelete(e, course)
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
                <CoursePagination courses={courses} />
            </TableWrapper>
        </AuthLayout>
    );
}
