export const load = async ({ params }) => {
    const post = await import(`../../../posts/${params.slug}.md`);
    const { title, date, excerpt, tags, readTime } = post.metadata;
    const content = post.default;

    return {
        content,
        title,
        date,
        excerpt,
        tags,
        readTime
    };
};
