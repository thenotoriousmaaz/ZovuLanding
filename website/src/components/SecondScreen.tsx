"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import dynamic from "next/dynamic";
const TabletsCanvas = dynamic(() => import("@/components/TabletsCanvas"), { ssr: false });
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SecondScreen() {
    const ref = useRef<HTMLDivElement | null>(null);
    const inView = useInView(ref, { amount: 0.4, once: true });
    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [inView, controls]);

    return (
        <section ref={ref} className="relative mx-auto flex min-h-screen w-full max-w-[1600px] flex-col items-center justify-start gap-10 bg-white px-10 py-16 text-center text-neutral-900">
            <motion.h2
                initial={{ opacity: 0, y: 12 }}
                animate={controls}
                variants={{ visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.5 }}
                className="mt-2 text-3xl font-normal tracking-wide bg-gradient-to-r from-[#0F0E47] to-[#3D3ADB] bg-clip-text text-transparent sm:text-4xl md:text-5xl lg:text-6xl"
            >
                ZOVU OS
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={controls}
                variants={{ visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="-mt-3 text-lg font-normal text-neutral-600 sm:text-xl md:text-2xl lg:text-3xl"
            >
                One Centralized System.
                <br />
                Starting from €0
            </motion.p>
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={controls}
                variants={{ visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.4, delay: 0.2 }}
            >
                <Button asChild className="rounded-none bg-[#3D3ADB] px-8 py-6 text-lg text-white hover:bg-[#3D3ADB]">
                    <Link href="/signup">JOIN FOR €0</Link>
                </Button>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                variants={{ visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative mt-2 w-full"
            >
                <TabletsCanvas />
            </motion.div>
        </section>
    );
}


