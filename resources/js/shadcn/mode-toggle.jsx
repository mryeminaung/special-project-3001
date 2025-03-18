import { useTheme } from '@/shadcn/theme-provider';
import { Button } from '@/shadcn/ui/button';
import { MonitorCog, Moon, Sun } from 'lucide-react';
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
                    className={`flex space-x-1 rounded-full border border-gray-300 p-1 dark:border-gray-600 ${className}`}
                >
                    <Button
                        variant="ghost"
                        size="icon"
                        className={`rounded-full transition-all duration-300 ease-in-out hover:bg-primary-purple hover:text-white ${
                            theme === 'light'
                                ? 'scale-110 bg-primary-purple text-white shadow-lg shadow-primary-purple/30'
                                : 'text-gray-500 hover:text-white dark:text-gray-400'
                        }`}
                        onClick={() => setTheme('light')}
                    >
                        <Sun className="h-[1.2rem] w-[1.2rem] transition-transform duration-300 ease-in-out hover:rotate-12" />
                        <span className="sr-only">Light</span>
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        className={`rounded-full transition-all duration-300 ease-in-out hover:bg-primary-purple hover:text-white ${
                            theme === 'system'
                                ? 'scale-110 bg-primary-purple text-white shadow-lg shadow-primary-purple/30'
                                : 'text-gray-500 hover:text-white dark:text-gray-400'
                        }`}
                        onClick={() => setTheme('system')}
                    >
                        <MonitorCog className="h-[1.2rem] w-[1.2rem] transition-transform duration-300 ease-in-out hover:rotate-12" />
                        <span className="sr-only">System</span>
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        className={`rounded-full transition-all duration-300 ease-in-out hover:bg-primary-purple hover:text-white ${
                            theme === 'dark'
                                ? 'scale-110 bg-primary-purple text-white shadow-lg shadow-primary-purple/30'
                                : 'text-gray-500 hover:text-white dark:text-gray-400'
                        }`}
                        onClick={() => setTheme('dark')}
                    >
                        <Moon className="h-[1.2rem] w-[1.2rem] transition-transform duration-300 ease-in-out hover:rotate-12" />
                        <span className="sr-only">Dark</span>
                    </Button>
                </div>
            )}
        </>
    );
}
