<?php

namespace App\Http\Controllers;

use App\Exports\RoomsExport;
use App\Http\Requests\Room\RoomRequest;
use App\Models\Room;
use App\Models\RoomType;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;

class RoomController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $noOfTypeA = Room::where('room_type_id', 1)->count();
        $noOfTypeB = Room::where('room_type_id', 2)->count();
        $filteredRooms = Room::filter(request(['room_type']))->with(['roomType'])->paginate(8)->withQueryString();

        return Inertia::render('Room/Index', ['rooms' => $filteredRooms, 'noOfTypeA' => $noOfTypeA, 'noOfTypeB' => $noOfTypeB]);
    }

    public function exportExcel()
    {
        $fileName = 'rooms-' . now()->format('d-m-Y') . '.xlsx';
        return Excel::download(new RoomsExport, $fileName);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $roomTypes = RoomType::all();
        return Inertia::render('Room/Create', ['roomTypes' => $roomTypes]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(RoomRequest $request)
    {
        Room::create($request->validated());
        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Room $room)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Room $room)
    {
        $roomTypes = RoomType::all();

        return Inertia::render('Room/Edit', ['room' => $room, 'roomTypes' => $roomTypes]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(RoomRequest $request, Room $room)
    {
        $room->update($request->validated());
        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Room $room)
    {
        $room->delete();
        return redirect()->back();
    }
}
