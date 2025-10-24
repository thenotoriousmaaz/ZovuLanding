import Image from "next/image";

export default function TabletsCanvas() {
    return (
        <div className="mx-auto w-full max-w-full px-4">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                    <Image src="/images/Tablet1.png" alt="Tablet 1" fill className="object-cover scale-x-[-1] scale-125" priority />
                </div>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                    <Image src="/images/Tablet2.png" alt="Tablet 2" fill className="object-cover scale-125" />
                </div>
            </div>
        </div>
    );
}


