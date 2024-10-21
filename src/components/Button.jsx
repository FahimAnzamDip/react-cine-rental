import cn from '../utils/cn';

export default function Button({ children, className, href = '#', onSmash }) {
    return (
        <a
            onClick={onSmash}
            className={cn(
                'bg-primary flex items-center justify-center gap-2 rounded-lg px-5 py-2 text-sm font-semibold text-[#171923]',
                className,
            )}
            href={href}
        >
            {children}
        </a>
    );
}
