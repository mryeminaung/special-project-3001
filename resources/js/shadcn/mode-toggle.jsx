import { MonitorCog, Moon, Sun } from 'lucide-react';

import { useTheme } from '@/shadcn/theme-provider';
import { Button } from '@/shadcn/ui/button';
import { useEffect, useState } from 'react';

export default function ModeToggle({ className }) {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <>
            {mounted && (
                <div
                    className={`flex space-x-2 rounded-full border border-gray-300 px-2 dark:text-white ${className}`}
                >
                    <Button
                        variant="ghost"
                        size="icon"
                        className={`rounded-full hover:bg-slate-400 ${
                            theme == 'light' ? 'bg-slate-400' : ''
                        }`}
                        onClick={() => setTheme('light')}
                    >
                        <Sun className="h-[1.2rem] w-[1.2rem]" />
                        <span className="sr-only">Light</span>
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        className={`rounded-full hover:bg-slate-400 ${
                            theme == 'system' ? 'bg-slate-400' : ''
                        }`}
                        onClick={() => setTheme('system')}
                    >
                        <MonitorCog className="h-[1.2rem] w-[1.2rem]" />
                        <span className="sr-only">System</span>
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        className={`rounded-full hover:bg-slate-400 ${
                            theme == 'dark' ? 'bg-slate-400 text-black' : ''
                        }`}
                        onClick={() => setTheme('dark')}
                    >
                        <Moon className="h-[1.2rem] w-[1.2rem]" />
                        <span className="sr-only">Dark</span>
                    </Button>
                </div>
            )}
        </>
    );
}
