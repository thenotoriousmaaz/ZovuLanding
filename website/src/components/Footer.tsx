export default function Footer() {
    return (
        <footer className="mt-20 w-full bg-neutral-50 py-10 text-neutral-700">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row">
                <div className="text-sm">
                    <span className="font-semibold text-[#0F0E47]">ZOVU</span> © {new Date().getFullYear()}
                </div>
                <nav className="flex gap-6 text-xs">
                    <a href="#" className="hover:underline">Privacy</a>
                    <a href="#" className="hover:underline">Terms</a>
                    <a href="#" className="hover:underline">Contact</a>
                </nav>
            </div>
        </footer>
    );
}




