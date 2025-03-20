import { Badge } from '@/shadcn/ui/badge';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
} from '@/shadcn/ui/dialog';
import { Dot, Eye } from 'lucide-react';

export default function StudentModal({ student }) {
    return (
        <Dialog>
            <DialogTrigger
                className="inline-block hover:cursor-pointer xl:hidden"
                asChild
            >
                <Eye className="text-green-500" />
            </DialogTrigger>
            <DialogContent className="rounded-lg p-5 shadow-md dark:bg-main-purple dark:text-white">
                <DialogTitle>
                    <DialogDescription className="text-2xl font-bold text-gray-800 dark:text-white">
                        {student.name}
                    </DialogDescription>
                </DialogTitle>

                <div>
                    <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                        Email
                    </p>
                    <p className="text-lg font-medium text-gray-800 dark:text-white">
                        {student.email}
                    </p>
                </div>
                <div className="grid grid-cols-2">
                    <div>
                        <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                            Roll Number
                        </p>
                        <p className="text-lg font-medium text-gray-800 dark:text-white">
                            {student.email.split('@')[0]}
                        </p>
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                            Major
                        </p>
                        <p className="text-lg font-medium text-gray-800 dark:text-white">
                            {student.major.name}
                        </p>
                    </div>
                </div>
                <div>
                    <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                        Status
                    </p>
                    <Badge className="rounded-full bg-green-300 py-0 pe-3 ps-0 text-black dark:bg-green-400">
                        <Dot size={28} />
                        <span>{student.status}</span>
                    </Badge>
                </div>
                <div>
                    <p className="mb-2 text-sm font-semibold text-gray-500 dark:text-gray-400">
                        Enrolled Courses
                    </p>
                    {student.courses.length > 0 ? (
                        student.courses.map((course) => (
                            <Badge className="rounded-full" key={course.id}>
                                {course.course_code}
                            </Badge>
                        ))
                    ) : (
                        <Badge className="rounded-full">N/A</Badge>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
}
