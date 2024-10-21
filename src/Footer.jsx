export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="mt-8 py-6 md:py-8">
            <div className="container mx-auto">
                <p className="text-center text-sm text-black/30 dark:text-[#EEEEEE]/60">
                    Copyright © {currentYear} | All rights reserved by Learn
                    with Sumit
                </p>
            </div>
        </footer>
    );
}
