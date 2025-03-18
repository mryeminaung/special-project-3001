export default function CourseType({ course }) {
    return (
        <span
            className={`me-2 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                course.course_type.name === 'Core'
                    ? 'border border-red-300 bg-red-100 text-red-800'
                    : course.course_type.name === 'Elective'
                      ? 'border border-green-300 bg-green-100 text-green-800'
                      : course.course_type.name === 'Lab'
                        ? 'border border-orange-300 bg-orange-100 text-orange-800'
                        : ''
            }`}
        >
            {course.course_type.name}
        </span>
    );
}
