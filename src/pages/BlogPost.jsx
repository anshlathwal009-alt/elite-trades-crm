import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import ButtonPrimary from "../components/ButtonPrimary";
import CTASection from "../components/CTASection";
import { BLOG_POSTS, IMAGES } from "../config/content.en";

const POST_IMAGES = [
  IMAGES.kitchenProject,
  IMAGES.mayfairProject,
  IMAGES.knightsbridgeProject,
  IMAGES.extensionProject,
];

export default function BlogPost() {
  const { slug } = useParams();
  const postIndex = BLOG_POSTS.findIndex((p) => p.slug === slug);
  const post = BLOG_POSTS[postIndex];

  if (!post) {
    return (
      <div className="section-padding" style={{ paddingTop: 160 }}>
        <div className="content-max text-center">
          <h1 className="font-display text-h2" style={{ color: "var(--color-text-primary)" }}>
            Post not found
          </h1>
          <Link to="/blog" className="font-body text-sm mt-4 inline-block" style={{ color: "var(--color-accent-warm)" }}>
            ← Back to blog
          </Link>
        </div>
      </div>
    );
  }

  const paragraphs = post.body.split("\n\n");

  return (
    <div>
      {/* Hero */}
      <section style={{ paddingTop: 120 }}>
        <div className="content-max px-5 md:px-10 lg:px-20">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 font-body text-sm mb-6"
            style={{ color: "var(--color-text-muted)" }}
          >
            <ArrowLeft size={14} /> Back to blog
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="eyebrow mb-3 inline-block" style={{ color: "var(--color-accent-warm)" }}>
              {post.category}
            </span>
            <h1 className="font-display text-h1 mb-6" style={{ color: "var(--color-text-primary)", maxWidth: "var(--content-narrow)" }}>
              {post.title}
            </h1>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8"
        >
          <img
            src={POST_IMAGES[postIndex] || POST_IMAGES[0]}
            alt={post.title}
            className="w-full object-cover"
            style={{ height: "clamp(300px, 40vw, 500px)" }}
          />
        </motion.div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="content-max" style={{ maxWidth: "var(--content-narrow)" }}>
          {paragraphs.map((para, i) => (
            <div key={i}>
              <p
                className="font-body mb-6"
                style={{ fontSize: 17, color: "var(--color-text-secondary)", lineHeight: 1.8 }}
              >
                {para}
              </p>
              {/* Inline CTA after first paragraph */}
              {i === 0 && (
                <div
                  className="p-8 my-10 text-center"
                  style={{ backgroundColor: "var(--color-bg-secondary)", borderRadius: "var(--radius-xl)" }}
                >
                  <p className="font-body text-base mb-4" style={{ color: "var(--color-text-primary)", fontWeight: 500 }}>
                    Working on a similar project?
                  </p>
                  <ButtonPrimary href="/contact">
                    Request a free assessment →
                  </ButtonPrimary>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <CTASection condensed />
    </div>
  );
}