import { Link } from '@inertiajs/react';

export default function Overview({ noOfFaculty, noOfStudent, noOfCourse }) {
    const stats = [
        {
            title: 'Faculties',
            count: noOfFaculty,
            path: route('faculties.index'),
            icon: '/assets/dashboard/overview-faculty.svg',
            bgColor: 'bg-gradient-to-l from-[#6D5394] to-[#3B2C55]',
        },
        {
            title: 'Students',
            count: noOfStudent,
            path: route('students.index'),
            icon: '/assets/dashboard/overview-student.svg',
            bgColor: 'bg-gradient-to-l from-[#6D5394] to-[#3B2C55]',
        },
        {
            title: 'Courses',
            count: noOfCourse,
            path: route('courses.index'),
            icon: '/assets/dashboard/overview-course.svg',
            bgColor: 'bg-gradient-to-l from-[#6D5394] to-[#3B2C55]',
        },
    ];

    return (
        <section className="my-2">
            <div className="space-y-4">
                <header className="flex items-center justify-between">
                    <h2 className="font-poppins text-2xl font-bold text-gray-900 dark:text-white">
                        Overview
                    </h2>
                    <Link
                        href="#"
                        className="font-poppins font-medium text-[#925FE2] transition-colors hover:text-[#925FE2]/80 focus:underline focus:outline-none dark:text-purple-300 dark:hover:text-purple-400"
                    >
                        View More
                    </Link>
                </header>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {stats.map((stat) => (
                        <Link
                            key={stat.title}
                            href={stat.path}
                            className={`relative overflow-hidden rounded-xl ${stat.bgColor} p-5 text-white shadow-md transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2`}
                        >
                            <div className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 hover:opacity-100" />
                            <div className="relative flex items-center gap-4">
                                <img
                                    src={stat.icon}
                                    alt={`${stat.title} icon`}
                                    className="h-10 w-10 object-contain"
                                />
                                <div>
                                    <h3 className="font-poppins text-sm font-medium uppercase tracking-wide">
                                        {stat.title}
                                    </h3>
                                    <p className="mt-1 font-poppins text-2xl font-bold">
                                        {stat.count}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
