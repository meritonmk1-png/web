export const prerender = true;

export async function entries() {
    const posts = import.meta.glob('../../../posts/*.md');
    const slugs = Object.keys(posts).map(path => {
        const slug = path.split('/').pop().slice(0, -3);
        return { slug };
    });
    return slugs;
}

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
