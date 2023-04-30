import React from "react";

const Footer = () => {
  return (
    <div>
      {/* footer */}
      <section className="pt-6 mt-5">
        <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex justify-between gap-2 border-t text-sm text-slate-400">
          <div>
            &copy; 2023 Apurbo Deb Nath <br />Inspiration:
            Sumit Saha.
          </div>
          <div>
            <a
              href="https://youtube.com/learnwithsumit"
              target="_blank"
              rel="noreferrer"
            >
              YouTube Channel
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
