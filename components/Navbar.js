"use client"
import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

import { ModeToggle } from './Theme-button'; // Corrected casing to match the actual file name
import LoadingBar from 'react-top-loading-bar';
import { usePathname } from 'next/navigation';
import { context } from '@/app/context/ThemeContext';




const Navbar = () => {

    const [progress, setprogress] = useState(0)
    const pathname = usePathname()

    let { theme } = useContext(context)


    useEffect(() => {
        setprogress(30)

        setTimeout(() => {
            setprogress(70)
        }, 100);

        setTimeout(() => {
            setprogress(100)
        }, 400);


    }, [pathname])




    useEffect(() => {
        setTimeout(() => {
            setprogress(0)
        }, 500);
    }, [])


    return (
        <nav className="p-4 bg-background/50 sticky top-0 backdrop-blur border-b ">
            <LoadingBar
                color="#f11946"
                progress={progress}
                onLoaderFinished={() => setprogress(0)}
            />
            <div className="container mx-auto flex justify-between items-center">
                <Link href={"/"}>
                    <div className="text-lg font-bold">
                        AI-assisted-blog
                    </div>
                </Link>
                <div className="hidden md:flex space-x-4 items-center">
                    <Link href="/" className="hover:scale-105 hover:font-semibold transition-transform duration-300">Home</Link>
                    <Link href="/about" className="hover:scale-105 hover:font-semibold transition-transform duration-300">About</Link>
                    <Link href="/blog" className="hover:scale-105 hover:font-semibold transition-transform duration-300">Blog</Link>
                    <Link href="/contact" className="hover:scale-105 hover:font-semibold transition-transform duration-300">Contact</Link>
                    <div className='flex items-center'>
                        <Button className="mx-1" variant="outline">Login</Button>
                        <Button className="mx-1" variant="outline">Signup</Button>
                        <ModeToggle />
                    </div>
                </div>
                <div className=" md:hidden">
                    <span className="mx-2">
                        <ModeToggle />
                    </span>
                    <Sheet>
                        <SheetTrigger>
                            ☰
                        </SheetTrigger>

                        <SheetContent className={theme === "light" ? "bg-white" : "bg-black"}>
                            <SheetHeader>
                                <SheetTitle classname=" font-bold my-4">AI-assisted-blog</SheetTitle>
                                <SheetDescription>
                                    <div className=" flex flex-col gap-6">
                                        <Link href="/">Home</Link>
                                        <Link href="/about"> About</Link>
                                        <Link href="/blog"> Blog</Link>
                                        <Link href="/contact">Contact</Link>
                                    </div>
                                    <Button className="mx-1 text-xs" variant="outline">Login</Button>
                                    <Button className="mx-1 text-xs" variant="outline">Signup</Button>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;