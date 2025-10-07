"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";
const TabletsCanvas = dynamic(() => import("@/components/TabletsCanvas"), { ssr: false });
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import SignupModal from "@/components/SignupModal";

export default function SecondScreen() {
    const ref = useRef<HTMLDivElement | null>(null);
    const inView = useInView(ref, { amount: 0.4, once: true });
    const controls = useAnimation();
    const [openSignup, setOpenSignup] = useState(false);

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [inView, controls]);

    return (
        <section ref={ref} className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-start gap-6 bg-white px-4 py-12 text-center text-neutral-900">
            <motion.h2
                initial={{ opacity: 0, y: 12 }}
                animate={controls}
                variants={{ visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.5 }}
                className="mt-2 text-4xl font-medium tracking-wide bg-gradient-to-r from-[#0F0E47] to-[#3D3ADB] bg-clip-text text-transparent sm:text-5xl md:text-6xl"
            >
                ZOVU OS
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={controls}
                variants={{ visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-[0.95rem] font-light text-neutral-600 sm:text-base"
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
                <Button onClick={() => setOpenSignup(true)} className="bg-[#3D3ADB] px-6 text-white hover:bg-[#3D3ADB]">JOIN FOR €0</Button>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                variants={{ visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative mt-10 w-full"
            >
                <TabletsCanvas />
            </motion.div>
            <SignupModal open={openSignup} onClose={() => setOpenSignup(false)} />
        </section>
    );
}


