import { Button } from '@/shadcn/ui/button';
import { Card, CardContent, CardHeader } from '@/shadcn/ui/card';
import { Input } from '@/shadcn/ui/input';
import { Label } from '@/shadcn/ui/label';

export default function ChangePassword() {
    return (
        <Card className="dark:bg-primary-purple/20">
            <CardHeader>
                <h3 className="text-lg font-semibold">Change Password</h3>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input
                        id="current-password"
                        className="dark:border-white dark:bg-main-purple"
                        type="password"
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input
                        id="new-password"
                        className="dark:border-white dark:bg-main-purple"
                        type="password"
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="confirm-password">
                        Confirm New Password
                    </Label>
                    <Input
                        id="confirm-password"
                        className="dark:border-white dark:bg-main-purple"
                        type="password"
                    />
                </div>
                <Button>Change Password</Button>
            </CardContent>
        </Card>
    );
}
