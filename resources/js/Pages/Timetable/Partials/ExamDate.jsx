import { Button } from '@/shadcn/ui/button';
import { Input } from '@/shadcn/ui/input';
import { Label } from '@/shadcn/ui/label';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/shadcn/ui/select';

export default function ExamDate({
    examData,
    handleExamDataChange,
    calculateEndDate,
    setExamData,
}) {
    return (
        <>
            <div className="max-h-fit overflow-hidden rounded-lg border dark:border-white lg:col-span-2 xl:col-span-1">
                <div className="flex items-start justify-center bg-gray-300 p-3 text-center text-[15px] font-semibold capitalize text-gray-900">
                    Exam Date and Time
                </div>
                <div className="p-4">
                    <div className="grid gap-y-6">
                        <div className="">
                            <Label
                                htmlFor="first_name"
                                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Exam Start Date
                            </Label>
                            <Input
                                id="first_name"
                                value={examData.exam_date}
                                onChange={handleExamDataChange}
                                type="date"
                                name="exam_date"
                                min="2024-12-01"
                                max="2025-04-30"
                                className="block w-full dark:border-white"
                                required
                            />
                        </div>
                        <div>
                            <Label
                                htmlFor="last_name"
                                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Exam End Date
                            </Label>
                            <Input
                                type="date"
                                name="exam_date"
                                id="last_name"
                                onChange={handleExamDataChange}
                                value={calculateEndDate()}
                                disabled
                                className="block w-full dark:border-white"
                            />
                        </div>
                        <div>
                            <Label
                                htmlFor="exam_time_id"
                                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Exam Time ( AM / PM )
                            </Label>
                            <Select
                                onValueChange={(value) => {
                                    setExamData((prevData) => ({
                                        ...prevData,
                                        exam_time_id: value,
                                    }));
                                }}
                            >
                                <SelectTrigger className="dark:border-white">
                                    <SelectValue placeholder="Select exam time" />
                                </SelectTrigger>

                                <SelectContent className="dark:border-white dark:bg-main-purple">
                                    <SelectItem
                                        className="hover:cursor-pointer"
                                        value={'1'}
                                    >
                                        AM
                                    </SelectItem>
                                    <SelectItem
                                        className="hover:cursor-pointer"
                                        value={'2'}
                                    >
                                        PM
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <Button
                        type="submit"
                        className="mt-4 w-full rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white dark:bg-primary-purple dark:bg-primary-purple/50 dark:hover:bg-primary-purple/90"
                    >
                        Create
                    </Button>
                </div>
            </div>
        </>
    );
}
