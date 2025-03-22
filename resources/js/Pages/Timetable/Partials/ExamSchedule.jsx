import { router, useForm } from '@inertiajs/react';
import ExamCourse from './ExamCourse';
import ExamDate from './ExamDate';

export default function ExamSchedule({ courses, semesterIdFromUrl }) {
    const { data: examData, setData: setExamData } = useForm({
        semester_id: semesterIdFromUrl,
        exam_date: '',
        exam_time_id: 1,
    });

    const { data: courseData, setData: setCourseData } = useForm(
        courses.map((course) => ({
            course_id: course.id,
            no_students: '',
            program_id: course.program.id,
        })),
    );

    const handleCourseChange = (e, index) => {
        const updatedCourseData = courseData.map((course, i) => {
            const { name, value } = e.target;
            return i === index ? { ...course, [name]: value } : course;
        });

        setCourseData(updatedCourseData);
    };

    const handleExamDataChange = (e) => {
        const { name, value } = e.target;

        setExamData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const calculateEndDate = () => {
        if (!examData.exam_date) return '';

        const startDate = new Date(examData.exam_date);
        startDate.setDate(startDate.getDate() + courses.length - 1);
        return startDate.toISOString().split('T')[0];
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedCourseData = courseData.map((course, index) => {
            const examDate = new Date(examData.exam_date);
            examDate.setDate(examDate.getDate() + index);
            return {
                ...course,
                exam_date: examDate.toISOString().split('T')[0], // Format as "YYYY-MM-DD"
            };
        });

        const mergedData = updatedCourseData.map((course) => ({
            ...examData,
            ...course,
        }));

        router.post(route('timetables.store'), mergedData, {
            preserveState: true,
        });
    };

    return (
        <div className="mt-5">
            <form
                onSubmit={handleSubmit}
                method="post"
                className="grid grid-cols-1 gap-y-5 xl:grid-cols-5 xl:gap-x-5"
            >
                <ExamDate
                    handleExamDataChange={handleExamDataChange}
                    calculateEndDate={calculateEndDate}
                    examData={examData}
                    setExamData={setExamData}
                />

                <ExamCourse
                    courses={courses}
                    courseData={courseData}
                    handleCourseChange={handleCourseChange}
                />
            </form>
        </div>
    );
}
