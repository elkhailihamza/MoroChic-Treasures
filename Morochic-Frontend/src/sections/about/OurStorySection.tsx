import smile_man from "../../images/main/about/front-view-smiley-man-posing.jpg";

export const OurStorySection = () => {
  return (
    <section>
      <div className="flex justify-center flex-wrap lg:gap-7 gap-5 mb-10">
        <div className="flex flex-col items-center justify-center gap-7 md:w-1/2 w-4/5">
          <div className="md:text-[26px] text-[20px] font-medium">
            <h1>Our Story</h1>
          </div>
          <div className="text-center lg:text-[16px] text-[13px]">
            <p>
              In the heart of Morocco, where history whispers through the
              ancient streets, MoroChic was born from a deep love for the
              country's rich cultural heritage.
            </p>
            <br />
            <p>
              Our journey began with a vision to bring the timeless elegance of
              traditional garments to your wardrobe, allowing you to carry a
              piece of Morocco's magic wherever you go.
            </p>
          </div>
        </div>
        <div className="md:block hidden lg:w-[200px] w-[170px]">
          <img
            className="object-cover w-full rounded-lg"
            src={smile_man}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};
