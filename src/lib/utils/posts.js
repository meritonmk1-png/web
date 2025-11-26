export const fetchMarkdownPosts = async () => {
    const allPostFiles = import.meta.glob('/src/posts/*.md');
    const iterablePostFiles = Object.entries(allPostFiles);

    const allPosts = await Promise.all(
        iterablePostFiles.map(async ([path, resolver]) => {
            const { metadata } = await resolver();
            const postPath = path.slice(11, -3); // remove '/src/posts/' and '.md'
            // or better, just use the filename as slug
            const slug = path.split('/').pop().slice(0, -3);

            return {
                meta: metadata,
                path: postPath,
                slug: slug
            };
        })
    );

    return allPosts.sort((a, b) => {
        return new Date(b.meta.date) - new Date(a.meta.date);
    });
};
