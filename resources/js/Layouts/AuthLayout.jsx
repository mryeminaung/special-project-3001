'use client';

import SiteHeader from '@/Components/SiteHeader';
import { AppSidebar } from '@/shadcn/app-sidebar';
import { ThemeProvider } from '@/shadcn/theme-provider';
import { SidebarInset, SidebarProvider } from '@/shadcn/ui/sidebar';
import { AnimatePresence, motion } from 'motion/react';

export default function AuthLayout({ children }) {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <SidebarProvider>
                <AppSidebar />
                <SidebarInset className="bg-platinum dark:bg-main-purple">
                    <SiteHeader />
                    <AnimatePresence mode="wait">
                        <motion.main
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="flex flex-1 flex-col gap-4 bg-platinum px-5 pb-10 transition-all dark:bg-primary-purple/20 dark:text-white xl:px-10"
                        >
                            {children}
                        </motion.main>
                    </AnimatePresence>
                </SidebarInset>
            </SidebarProvider>
        </ThemeProvider>
    );
}
