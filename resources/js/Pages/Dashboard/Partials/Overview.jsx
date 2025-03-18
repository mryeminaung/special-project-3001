import OverviewCard from '@/Components/OverviewCard';
import OverviewFaculty from '@/Components/OverviewFaculty';
import { Link } from '@inertiajs/react';

export default function Overview({
    faculties,
    noOfFaculty,
    noOfStudent,
    noOfCourse,
}) {
    const OverviewItems = [
        {
            title: 'Faculties',
            count: noOfFaculty,
            path: route('faculties.index'),
            icon: '/assets/dashboard/overview-faculty.svg',
        },
        {
            title: 'Students',
            count: noOfStudent,
            path: route('students.index'),
            icon: '/assets/dashboard/overview-student.svg',
        },
        {
            title: 'Courses',
            count: noOfCourse,
            path: route('courses.index'),
            icon: '/assets/dashboard/overview-course.svg',
        },
    ];

    return (
        <div className="mb-4 grid grid-cols-1 gap-x-16 rounded-3xl xl:grid-cols-12">
            <div className="mb-12 rounded-3xl lg:col-span-8 xl:mb-0">
                <h2 className="font-poppins mb-4 text-2xl font-bold">
                    Overview
                </h2>
                <div className="grid gap-x-3 gap-y-3 sm:grid-cols-2 md:grid-cols-3 xl:gap-x-3">
                    {OverviewItems.map((overview) => (
                        <OverviewCard
                            key={overview.title}
                            path={overview.path}
                            count={overview.count}
                            icon={overview.icon}
                            title={overview.title}
                        />
                    ))}
                </div>
            </div>
            <div className="mb-4 rounded-3xl lg:col-span-4 xl:mb-0">
                <div className="mb-3 flex justify-between font-semibold">
                    <p className="font-poppins text-2xl font-bold">Faculty</p>
                    <Link
                        href={route('faculties.index')}
                        className="font-poppins text-lg font-semibold text-[#925FE2]"
                    >
                        See all
                    </Link>
                </div>
                <div className="flex flex-wrap gap-4 lg:gap-6">
                    {faculties.data.map((faculty) => (
                        <OverviewFaculty key={faculty.id} />
                    ))}
                </div>
            </div>
        </div>
    );
}
