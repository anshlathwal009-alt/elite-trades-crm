import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import { BLOG_PAGE, BLOG_POSTS, IMAGES } from "../config/content.en";

const POST_IMAGES = [
  IMAGES.kitchenProject,
  IMAGES.mayfairProject,
  IMAGES.knightsbridgeProject,
  IMAGES.extensionProject,
];

export default function Blog() {
  const h = BLOG_PAGE.hero;
  const featured = BLOG_POSTS[0];
  const rest = BLOG_POSTS.slice(1);

  return (
    <div>
      <PageHero eyebrow={h.eyebrow} line1={h.headlineLine1} line2={h.headlineLine2} />

      {/* Featured post */}
      <section className="section-padding" style={{ paddingBottom: 0 }}>
        <div className="content-max">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              to={`/blog/${featured.slug}`}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center overflow-hidden"
              style={{ backgroundColor: "var(--color-surface)", borderRadius: "var(--radius-xl)" }}
            >
              <div className="lg:col-span-7 overflow-hidden">
                <img
                  src={POST_IMAGES[0]}
                  alt={featured.title}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  style={{ height: "clamp(280px, 30vw, 420px)" }}
                />
              </div>
              <div className="lg:col-span-5 p-6 lg:p-10">
                <span
                  className="eyebrow mb-3 inline-block"
                  style={{ color: "var(--color-accent-warm)" }}
                >
                  {featured.category}
                </span>
                <h2
                  className="font-display text-h3 mb-3"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {featured.title}
                </h2>
                <p
                  className="font-body mb-4"
                  style={{ fontSize: 15, color: "var(--color-text-secondary)", lineHeight: 1.7 }}
                >
                  {featured.excerpt}
                </p>
                <span
                  className="font-body text-sm font-medium inline-flex items-center gap-1 group-hover:text-[var(--color-accent-warm)] transition-colors"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  Read more <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                </span>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Post grid */}
      <section className="section-padding">
        <div className="content-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="group block"
                >
                  <div className="overflow-hidden" style={{ borderRadius: "var(--radius-md) var(--radius-md) 0 0" }}>
                    <img
                      src={POST_IMAGES[i + 1]}
                      alt={post.title}
                      className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      style={{ height: 240 }}
                      loading="lazy"
                    />
                  </div>
                  <div className="pt-4">
                    <span className="eyebrow mb-2 inline-block" style={{ color: "var(--color-accent-warm)" }}>
                      {post.category}
                    </span>
                    <h3
                      className="font-body text-base font-medium mb-2"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      {post.title}
                    </h3>
                    <p
                      className="font-body text-sm mb-3"
                      style={{ color: "var(--color-text-secondary)", lineHeight: 1.6 }}
                    >
                      {post.excerpt}
                    </p>
                    <span
                      className="font-body text-sm inline-flex items-center gap-1 group-hover:text-[var(--color-accent-warm)] transition-colors"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      Read more <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection condensed />
    </div>
  );
}