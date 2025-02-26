import TableCaption from '@/Components/TableCaption';
import TableHead from '@/Components/TableHead';
import TableRow from '@/Components/TableRow';
import TableWrapper from '@/Components/TableWrapper';
import AuthLayout from '@/Layouts/AuthLayout';

export default function ExamTimetable({ exams, semester }) {
    return (
        <AuthLayout>
            <div className="mt-12">
                <TableWrapper>
                    <table className="w-full overflow-x-auto bg-white text-left text-sm dark:text-gray-400 rtl:text-right">
                        <TableCaption>
                            <div className="flex items-center">
                                <span className="">Exam Timetable</span>
                                <span className="ms-2 rounded-full bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-800">
                                    {semester.name}
                                </span>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <a
                                    href={route('courses.export-excel')}
                                    className="max-w-fit rounded-lg bg-primary-purple px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none sm:w-auto"
                                >
                                    Export As Excel
                                </a>
                            </div>
                        </TableCaption>

                        <TableHead>
                            <tr>
                                <th scope="col" className="hidden px-6 py-3">
                                    Batch
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Course Code
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Course Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Course Type
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Date
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Exam Time
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Program
                                </th>
                            </tr>
                        </TableHead>
                        <tbody>
                            {exams.map((exam, index) => (
                                <TableRow key={exam.id}>
                                    <td
                                        scope="row"
                                        className="hidden whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                                    >
                                        BE-2019
                                    </td>
                                    <td
                                        scope="row"
                                        className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                                    >
                                        {exam.course_code}
                                    </td>
                                    <td
                                        scope="row"
                                        className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                                    >
                                        {exam.title}
                                    </td>
                                    <td
                                        scope="row"
                                        className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                                    >
                                        <span
                                            className={`me-2 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                                exam.course_type_id == '1'
                                                    ? 'bg-red-100 text-red-800'
                                                    : exam.course_type_id == '2'
                                                      ? 'bg-green-100 text-green-800'
                                                      : exam.course_type_id ==
                                                          '3'
                                                        ? 'bg-orange-100 text-orange-800'
                                                        : ''
                                            }`}
                                        >
                                            {exam.course_type_id == '1'
                                                ? 'Core'
                                                : exam.course_type_id == '2'
                                                  ? 'Elective'
                                                  : exam.course_type_id == '3'
                                                    ? 'Lab'
                                                    : ''}
                                        </span>
                                    </td>
                                    <td
                                        scope="row"
                                        className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                                    >
                                        {exam.exam_date}
                                    </td>
                                    <td
                                        scope="row"
                                        className="whitespace-nowrap px-6 py-4 text-center font-medium text-gray-900 dark:text-white"
                                    >
                                        {exam.exam_time_id == 1 ? 'AM' : 'PM'}
                                    </td>
                                    <td
                                        scope="row"
                                        className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                                    >
                                        {exam.program.name}
                                    </td>
                                </TableRow>
                            ))}
                        </tbody>
                    </table>
                </TableWrapper>
            </div>
        </AuthLayout>
    );
}
