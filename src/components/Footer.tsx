const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section
      id="contact"
      className="flex flex-col py-12 lg:py-28 items-center bg-primary"
    >
      <p className="lg:text-base text-sm text-center text-white font-light font-noto-sans">
        &copy; {currentYear} Connor Park. All Rights Reserved.
      </p>
      <p className="lg:text-base text-sm text-center text-white font-light font-noto-sans mt-2">
        Built using Next.js, TypeScript, and Tailwind CSS. Deployed on Vercel.
      </p>
    </section>
  );
};

export default Footer;
