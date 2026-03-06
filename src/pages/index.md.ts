import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const markdownContent = `# Sarwar Alam

Full Stack Developer & Team Lead. 8+ years building lead distribution systems, SaaS platforms, and scalable web applications.

## Navigation

- [About](/about.md)
- [Recent Posts](/posts.md)
- [Archives](/archives.md)
- [RSS Feed](/rss.xml)

## Links

- Twitter: [@sarwaralambd](https://twitter.com/sarwaralambd)
- GitHub: [@p1xel007](https://github.com/p1xel007)
- LinkedIn: [sarwar-dev](https://linkedin.com/in/sarwar-dev)
- Upwork: [mdsarwaralam3](https://www.upwork.com/freelancers/mdsarwaralam3)
- Email: hi@sarwar.bd

---

*This is the markdown-only version of sarwar.bd. Visit [sarwar.bd](https://sarwar.bd) for the full experience.*`;

  return new Response(markdownContent, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
