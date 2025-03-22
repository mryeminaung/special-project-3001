export default function InvigilationTeams({ exam }) {
    const removeHonorifics = (name) => {
        return name.replace(/^(Daw|U)\s+/i, '');
    };

    // Group duties by room_number
    const groupedDuties = exam?.exam_duties?.reduce((acc, duty) => {
        const room = duty.room_number;
        if (!acc[room]) acc[room] = [];
        acc[room].push(duty);
        return acc;
    }, {});

    return (
        <>
            {/* Invigilation Teams */}
            <div className="space-y-6">
                {Object.entries(groupedDuties || {}).map(([room, duties]) => (
                    <div key={room} className="rounded-lg border p-4">
                        <h3 className="mb-3 text-lg font-semibold">
                            Room {room}
                        </h3>
                        <ul className="space-y-2">
                            {duties.map((duty, index) => (
                                <li
                                    key={index}
                                    className="flex items-center gap-3 rounded-md p-2 transition-all hover:scale-105 hover:bg-gray-50 dark:hover:bg-primary-purple"
                                >
                                    <span
                                        className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium ${
                                            duty.role.name === 'Invigilator'
                                                ? 'bg-green-100 text-green-800'
                                                : 'bg-yellow-100 text-yellow-800'
                                        }`}
                                    >
                                        {removeHonorifics(
                                            duty.faculty.name,
                                        ).charAt(0)}
                                    </span>
                                    <div>
                                        <p className="text-gray-800 dark:text-white">
                                            {duty.faculty.name}
                                        </p>
                                        <p className="text-sm text-gray-500 dark:text-white">
                                            {duty.role.name}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </>
    );
}
