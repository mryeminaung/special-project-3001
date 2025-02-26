import ModeToggle from '@/shadcn/mode-toggle';
import { Card, CardContent, CardHeader } from '@/shadcn/ui/card';
import { Label } from '@/shadcn/ui/label';
import { Switch } from '@/shadcn/ui/switch';
import { useState } from 'react';

export default function UserPreference() {
    const [emailNotifications, setEmailNotifications] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    return (
        <Card className="dark:bg-primary-purple/20">
            <CardHeader>
                <h3 className="text-lg font-semibold">User Preferences</h3>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                        <Label>Email Notifications</Label>
                        <p className="text-sm text-muted-foreground">
                            Receive email updates about your account
                        </p>
                    </div>
                    <Switch
                        checked={emailNotifications}
                        onCheckedChange={setEmailNotifications}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                        <Label>Apperance</Label>
                        <p className="text-sm text-muted-foreground">
                            Select display mode for the interface
                        </p>
                    </div>
                    <ModeToggle />
                    {/* <Switch checked={darkMode} onCheckedChange={setDarkMode} /> */}
                </div>
            </CardContent>
        </Card>
    );
}
