const BlogPreview = () => {
  return (
    <section
      className="min-h-screen flex flex-col py-16 px-16 bg-gray-50"
      id="blog"
    >
      <div className="mb-14">
        <h1 className="md:text-lg text-base font-light mb-4 font-noto-sans text-primary">
          blog
        </h1>
        <h1 className="lg:text-5xl text-3xl font-bold font-karma text-primary ">
          writing
        </h1>
      </div>

      <div className="grid grid-cols-3 w-full gap-8 ">
        <BlogCard />
      </div>
    </section>
  );
};

const BlogCard = () => {
  return (
    <div className="w-full border-2 h-52 rounded-lg p-6 font-noto-sans">
      <h1 className="text-lg mb-2 text-primary">coming soon...</h1>
      <p className="text-sm text-gray-600 mb-2"></p>
      <p className="text-sm text-gray-600"></p>
    </div>
  );
};

export default BlogPreview;
