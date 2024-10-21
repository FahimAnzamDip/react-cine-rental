export function getImageUrl(name) {
    return new URL(`../assets/images/movie_covers/${name}`, import.meta.url)
        .href;
}
