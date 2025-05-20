import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
} from '@/shadcn/ui/dialog';
import { ScrollArea } from '@/shadcn/ui/scroll-area';
import InvigilationTeams from './InvigilationTeams';

export function ExamModal({ exam }) {
    const removeHonorifics = (name) => {
        return name.replace(/^(Daw|U)\s+/i, '');
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="flex items-center hover:cursor-pointer">
                    {exam.exam_duties?.slice(0, 3).map((duty, idx) => (
                        <div
                            key={idx}
                            className={`-mr-3 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white ${
                                duty.role.name === 'Invigilator'
                                    ? 'bg-green-100 text-green-800'
                                    : 'bg-yellow-100 text-yellow-800'
                            }`}
                        >
                            {removeHonorifics(duty.faculty.name).charAt(0)}
                        </div>
                    ))}
                    {exam.exam_duties?.length > 3 && (
                        <div className="-mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-sm text-gray-600">
                            +{exam.exam_duties.length - 3}
                        </div>
                    )}
                </div>
            </DialogTrigger>
            <DialogContent className="rounded-lg bg-white p-5 shadow-md dark:bg-main-purple dark:text-white sm:max-w-[425px]">
                <DialogTitle>
                    {/* Course Header */}
                    <div className="space-y-2 border-b pb-4">
                        <h2 className="text-2xl font-bold text-gray-700 dark:text-white">
                            {exam.course_code}
                        </h2>
                        <p className="text-gray-700 dark:text-white">
                            {exam.title}
                        </p>
                        <DialogDescription>
                            <div className="mt-2 flex gap-4 text-sm font-semibold text-gray-500 dark:text-white">
                                <span>Date: {exam.exam_date}</span>
                                <span>
                                    Time: {exam.exam_time_id == 1 ? 'AM' : 'PM'}
                                </span>
                            </div>
                        </DialogDescription>
                    </div>
                </DialogTitle>

                <ScrollArea state="hidden" className="max-h-[60vh]">
                    <InvigilationTeams exam={exam} />
                </ScrollArea>
            </DialogContent>
        </Dialog>
    );
}
