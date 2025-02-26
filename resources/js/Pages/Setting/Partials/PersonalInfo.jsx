import { Button } from '@/shadcn/ui/button';
import { Card, CardContent, CardHeader } from '@/shadcn/ui/card';
import { Input } from '@/shadcn/ui/input';
import { Label } from '@/shadcn/ui/label';

export default function PersonalInfo() {
    return (
        <Card className="dark:bg-primary-purple/20">
            <CardHeader>
                <h3 className="text-lg font-semibold">Personal Information</h3>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                        id="name"
                        className="dark:border-white dark:bg-main-purple"
                        defaultValue="Dr. Myat Thuzar Tun"
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                        id="email"
                        type="email"
                        className="dark:border-white dark:bg-main-purple"
                        defaultValue="myat_thuzar_tun@miit.edu.mm"
                    />
                </div>
                <Button>Update Profile</Button>
            </CardContent>
        </Card>
    );
}
