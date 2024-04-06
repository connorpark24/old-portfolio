const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section id="contact" className="py-12 lg:py-24 bg-primary w-screen">
      <div className="flex flex-col items-center w-3/4 gap-y-2 mx-auto">
        <p className="lg:text-base text-sm text-white font-light font-noto-sans text-center">
          &copy; {currentYear} Connor Park. All Rights Reserved.
        </p>
        <p className="lg:text-base text-sm text-white font-light  font-noto-sans text-center">
          Built using Next.js, TypeScript, and Tailwind CSS. Deployed on Vercel.
        </p>
      </div>
    </section>
  );
};

export default Footer;
