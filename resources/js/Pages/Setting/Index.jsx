import AuthLayout from '@/Layouts/AuthLayout';
import { Avatar, AvatarFallback, AvatarImage } from '@/shadcn/ui/avatar';
import { Button } from '@/shadcn/ui/button';
import { Card, CardContent } from '@/shadcn/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shadcn/ui/tabs';
import { Head, useForm, usePage } from '@inertiajs/react';
import { Camera, Cog, LogOut, Mail, User } from 'lucide-react';
import ChangePassword from './Partials/ChangePassword';
import PersonalInfo from './Partials/PersonalInfo';
import UserPreference from './Partials/UserPreference';
import admin from '/public/assets/admin2.jpg';

export default function Index() {
    const {
        auth: { user },
    } = usePage().props;
    const { post } = useForm();

    return (
        <AuthLayout>
            <Head title="Settings" />
            <div className="mt-12 rounded-2xl border border-white bg-white p-8 pt-10 shadow-md dark:bg-main-purple">
                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-bold">My Profile</h1>
                        <form
                            onSubmit={() => {
                                post(route('logout'));
                            }}
                        >
                            <Button
                                type="submit"
                                variant="secondary"
                                className="bg-main-purple text-white hover:bg-main-purple/90 dark:bg-primary-purple"
                                size="sm"
                            >
                                <LogOut className="h-4 w-4" />
                                Logout
                            </Button>
                        </form>
                    </div>

                    <div className="flex flex-col gap-y-5 md:gap-x-5 lg:flex-row">
                        <Card className="bg-platinum/50 dark:bg-primary-purple/20 lg:max-h-fit lg:w-2/5">
                            <CardContent className="p-6">
                                <div className="flex flex-col items-center gap-6 sm:flex-row lg:flex-col">
                                    <div className="relative">
                                        <Avatar className="h-24 w-24">
                                            <AvatarImage
                                                src={admin}
                                                alt={user.name}
                                            />
                                            <AvatarFallback>MT</AvatarFallback>
                                        </Avatar>
                                        <Button
                                            size="icon"
                                            variant="secondary"
                                            className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full"
                                        >
                                            <Camera className="h-4 w-4" />
                                            <span className="sr-only">
                                                Change profile picture
                                            </span>
                                        </Button>
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-semibold">
                                            {user.name}
                                        </h2>
                                        <p className="text-sm text-muted-foreground">
                                            Pro-Rector
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            {user.email}
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Tabs defaultValue="personal" className="w-full">
                            <TabsList className="flex w-full flex-col gap-y-2 sm:grid sm:grid-cols-3 sm:gap-0">
                                <TabsTrigger
                                    value="personal"
                                    className="flex w-full items-center justify-start sm:justify-center"
                                >
                                    <User className="mr-2 h-4 w-4 shrink-0" />
                                    <span className="text-sm">
                                        Personal Info
                                    </span>
                                </TabsTrigger>
                                <TabsTrigger
                                    value="security"
                                    className="flex w-full items-center justify-start sm:justify-center"
                                >
                                    <Mail className="mr-2 h-4 w-4 shrink-0" />
                                    <span className="text-sm">Security</span>
                                </TabsTrigger>
                                <TabsTrigger
                                    value="preferences"
                                    className="flex w-full items-center justify-start sm:justify-center"
                                >
                                    <Cog className="mr-2 h-4 w-4 shrink-0" />
                                    <span className="text-sm">Preferences</span>
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent
                                value="personal"
                                className="mt-5 space-y-4 sm:mt-4"
                            >
                                <PersonalInfo />
                            </TabsContent>

                            <TabsContent
                                value="security"
                                className="mt-2 space-y-4 sm:mt-4"
                            >
                                <ChangePassword />
                            </TabsContent>

                            <TabsContent
                                value="preferences"
                                className="mt-2 space-y-4 sm:mt-4"
                            >
                                <UserPreference />
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </div>
        </AuthLayout>
    );
}
