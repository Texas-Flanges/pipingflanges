import React from 'react';
export default function BlogPage() {
  const posts = [
    {
      slug: '/types-of-flanges-in-piping',
      title: 'Types of Flanges in Piping: A Guide to Common and Specialty Designs',
      date: 'Jan 31, 2026',
      excerpt: 'Comprehensive guide to common and specialty piping flanges, including weld neck, slip-on, blind, socket weld, lap joint, and threaded flanges. Learn about their applications and choose the right type for your system.'
    },
    {
      slug: '/pressure-ratings-for-piping-flanges',
      title: 'Understanding Pressure Ratings for Piping Flanges',
      date: 'Jul 28, 2024',
      excerpt: 'Explore how pressure ratings are determined, understand different pressure classes (150, 300, 600, 900, 1500+), and learn how to select the right pressure-rated flange for your application.'
    },
    {
      slug: '/choose-the-right-piping-flange',
      title: 'How to Choose the Right Piping Flange for Your System?',
      date: 'Jul 28, 2024',
      excerpt: 'Learn the key considerations for selecting piping flanges including material selection, pressure and temperature ratings, flange type, and standards compliance.'
    },
    {
      slug: '/piping-flanges-vs-pipe-couplings',
      title: 'Piping Flanges vs. Pipe Couplings: Which is Better?',
      date: 'Jul 28, 2024',
      excerpt: 'Compare piping flanges and pipe couplings across installation, maintenance, leak prevention, and application suitability to determine which is better for your system.'
    },
    {
      slug: '/the-advantages-of-custom-made-piping-flanges',
      title: 'The Advantages of Custom Made Piping Flanges',
      date: 'Jul 28, 2024',
      excerpt: 'Discover the benefits of custom-made piping flanges including tailored fit, material selection, design flexibility, enhanced safety, and cost-effectiveness.'
    },
    {
      slug: '/the-role-of-piping-flanges',
      title: 'The Role of Piping Flanges in Ensuring System Integrity',
      date: 'Jul 26, 2024',
      excerpt: 'Understand the critical role of piping flanges in creating leak-proof connections, facilitating maintenance, accommodating thermal expansion, and providing structural support.'
    }
  ];

  return (
    <div>
      <div className="article-header">
        <h1>Blog</h1>
        <p>Expert insights and guides on piping flanges, selection, and applications</p>
      </div>

      <section className="content-section">
        <h2>Latest Articles</h2>
        <div className="blog-list">
          {posts.map((post) => (
            <div key={post.slug} className="blog-card">
              <h3><a href={post.slug}>{post.title}</a></h3>
              <p className="date">{post.date}</p>
              <p>{post.excerpt}</p>
              <a href={post.slug}>Read More ÃÂ¢ÃÂÃÂ</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
