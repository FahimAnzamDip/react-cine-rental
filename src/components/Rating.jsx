import Star from '../assets/icons/star.svg';

export default function Rating({ value }) {
    return (
        <div className="mb-5 flex items-center space-x-1">
            {Array(value)
                .fill()
                .map((_, index) => (
                    <img
                        key={index}
                        src={Star}
                        width={14}
                        height={14}
                        alt="Star"
                    />
                ))}
        </div>
    );
}
