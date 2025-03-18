import ScrollIndicator from '@/Components/ScrollIndicator';
import TableCaption from '@/Components/TableCaption';
import TableHead from '@/Components/TableHead';
import TableRow from '@/Components/TableRow';
import TableWrapper from '@/Components/TableWrapper';
import AuthLayout from '@/Layouts/AuthLayout';
import { Head, Link, router } from '@inertiajs/react';
import { Pencil, Trash2 } from 'lucide-react';
import RoomCard from './Partials/RoomCard';
import RoomPagination from './Partials/RoomPagination';

export default function Index({ rooms, noOfTypeA, noOfTypeB }) {
    const handleRoomDelete = (e, room) => {
        e.preventDefault();
        if (confirm('Are you sure you want to delete?')) {
            router.delete(route('rooms.destroy', room));
        }
    };

    return (
        <AuthLayout>
            <Head title="All Rooms" />
            <div className="sm:hidden">
                <ScrollIndicator />
            </div>
            <div className="mb-5 mt-10">
                <h2 className="font-poppins text-xl font-semibold hover:underline md:text-2xl">
                    <Link href="/rooms">
                        Total Rooms
                        <span className="ms-2 rounded-full border border-blue-300 bg-blue-100 px-2.5 py-1 text-base font-medium text-blue-800">
                            {noOfTypeA + noOfTypeB}
                        </span>
                    </Link>
                </h2>

                <div className="mt-5 grid gap-x-4 gap-y-3 md:grid-cols-3 2xl:grid-cols-5">
                    <RoomCard
                        url="?room_type=Type A"
                        name="Type A"
                        count={noOfTypeA}
                    />
                    <RoomCard
                        url="?room_type=Type B"
                        name="Type B"
                        count={noOfTypeB}
                    />
                </div>
            </div>

            <TableWrapper>
                <table className="font-inter w-full bg-white text-left text-sm dark:text-gray-400 rtl:text-right">
                    <TableCaption>
                        <div className="font-poppins flex items-center">
                            <span className="">Room Lists</span>
                            <span className="ms-2 rounded-full border border-blue-300 bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-800">
                                Rooms Information
                            </span>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <a
                                href={route('rooms.export-excel')}
                                className="w-full rounded-lg bg-primary-purple px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none sm:w-auto"
                            >
                                Export Excel
                            </a>
                            <Link
                                href={route('rooms.create')}
                                className="w-full rounded-lg bg-primary-purple px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none sm:w-auto"
                            >
                                Create
                            </Link>
                        </div>
                    </TableCaption>

                    <TableHead>
                        <tr className="">
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th
                                scope="col"
                                className="hidden px-6 py-3 sm:block"
                            >
                                Type
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Capacity
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Actions
                            </th>
                        </tr>
                    </TableHead>

                    <tbody>
                        {rooms.data.map((room) => (
                            <TableRow key={room.id}>
                                <td className="px-6 py-1.5">{room.name}</td>
                                <td className="hidden px-6 py-1.5 sm:block">
                                    {room.room_type.type}
                                </td>
                                <td className="px-6 py-1.5">
                                    {room.room_type.capacity}
                                </td>
                                <td className="flex justify-start gap-x-4 px-6 py-1.5">
                                    <Link
                                        href={route('rooms.edit', room)}
                                        className="font-medium text-yellow-600 hover:underline dark:text-yellow-500"
                                    >
                                        <Pencil />
                                    </Link>
                                    <form
                                        onSubmit={(e) =>
                                            handleRoomDelete(e, room)
                                        }
                                    >
                                        <button
                                            type="submit"
                                            className="font-medium text-red-600 hover:underline dark:text-red-500"
                                        >
                                            <Trash2 />
                                        </button>
                                    </form>
                                </td>
                            </TableRow>
                        ))}
                    </tbody>
                </table>
                <RoomPagination rooms={rooms} />
            </TableWrapper>
        </AuthLayout>
    );
}
