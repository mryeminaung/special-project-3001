import ExamCard from './Partials/ExamCard';

export default function Exams({ exams, courseInfo }) {
    return (
        <div className="flex flex-wrap items-center gap-5 max-md:justify-center">
            {Object.entries(exams).map(([semesterId]) => (
                <ExamCard
                    key={semesterId}
                    semesterId={semesterId}
                    courseInfo={courseInfo}
                />
            ))}
        </div>
    );
}
