const movies = [
    {
        id: crypto.randomUUID(),
        cover: 'avatar.png',
        title: 'Avatar',
        description:
            'A paraplegic Marine is sent to the moon Pandora on a unique mission and becomes torn between following his orders and protecting the world he feels is his home.',
        genre: 'Sci-Fi',
        rating: 4,
        price: '12.99',
    },
    {
        id: crypto.randomUUID(),
        cover: 'iron-man.png',
        title: 'Iron Man',
        description:
            'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.',
        genre: 'Action',
        rating: 4,
        price: '14.99',
    },
    {
        id: crypto.randomUUID(),
        cover: 'marriage-strory.jpg',
        title: 'Marriage Story',
        description:
            "Noah Baumbach's incisive and compassionate look at a marriage breaking up and a family staying together.",
        genre: 'Drama',
        rating: 4,
        price: '10.99',
    },
    {
        id: crypto.randomUUID(),
        cover: 'once-in-ho.jpg',
        title: 'Once Upon a Time in Hollywood',
        description:
            "A faded television actor and his stunt double strive to achieve fame and success in the final years of Hollywood's Golden Age in 1969 Los Angeles.",
        genre: 'Comedy-Drama',
        rating: 4,
        price: '13.99',
    },
    {
        id: crypto.randomUUID(),
        cover: 'pain-and-gain.jpg',
        title: 'Pain & Gain',
        description:
            'A trio of bodybuilders in Florida get caught up in an extortion ring and a kidnapping scheme that goes terribly wrong.',
        genre: 'Action-Comedy',
        rating: 3,
        price: '9.99',
    },
    {
        id: crypto.randomUUID(),
        cover: 'parasite.jpg',
        title: 'Parasite',
        description:
            'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',
        genre: 'Thriller',
        rating: 5,
        price: '15.99',
    },
];

export function getAllMovies() {
    return movies;
}
