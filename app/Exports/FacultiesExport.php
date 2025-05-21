<?php
namespace App\Exports;

use App\Models\Faculty;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;

class FacultiesExport implements FromCollection, WithMapping, WithHeadings
{
    /**
     * @return \Illuminate\Support\Collection
     */
    public function collection()
    {
        return Faculty::select(['name', 'phone_number', 'email', 'rank_id', 'department_id'])->with(['rank:id,title', 'department:id,name'])->get();
    }

    public function map($faculty): array
    {
        return [
            $faculty->name,
            $faculty->rank->title,
            $faculty->email,
            $faculty->phone_number,
            $faculty->department->name,
        ];
    }

    public function headings(): array
    {
        return ['Name', 'Role', 'Email', 'Phone Number', 'Department'];
    }
}
