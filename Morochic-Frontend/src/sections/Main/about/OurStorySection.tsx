import smile_man from "../../../images/main/about/front-view-smiley-man-posing.jpg";

export const OurStorySection = () => {
  return (
    // <section>
    //   <div className="flex lg:justify-evenly justify-center gap-5">
    //     <div className="flex flex-col items-center justify-center gap-5 md:w-3/6 w-4/5">
    //       <div className="mt-5 mb-5">
    //         <h1 className="text-[26px] font-medium">Our Story</h1>
    //       </div>
    //       <div className="text-center lg:text-[16px] text-[13px] mb-16">
    //         <p>
    //           In the heart of Morocco, where history whispers through the
    //           ancient streets, MoroChic was born from a deep love for the
    //           country's rich cultural heritage.
    //         </p>
    //         <br />
    //         <p>
    //   Our journey began with a vision to bring the timeless elegance of
    //   traditional garments to your wardrobe, allowing you to carry a
    //   piece of Morocco's magic wherever you go.
    //         </p>
    //       </div>
    //     </div>
    //     <div className="md:block hidden w-1/5">
    //       <img
    //         className="object-fill xl:w-[215px] md:w-[165px] w-[150px] rounded-lg"
    //         src={smile_man}
    //         alt=""
    //       />
    //     </div>
    //   </div>
    // </section>
    <div className="flex gap-3">
      <div className="md:w-4/5 max-w-4/5 text-justify">
        <h2 className="md:text-2xl text-xl font-medium underline">
          Our Story:
        </h2>
        <div className="mt-7 md:text-base text-sm">
          <p>
            In the heart of Morocco, where history whispers through the ancient
            streets, MoroChic was born from a deep love for the country's rich
            cultural heritage.
          </p>
          <p className="mt-4">
            Our journey began with a vision to bring the timeless elegance of
            traditional garments to your wardrobe, allowing you to carry a piece
            of Morocco's magic wherever you go.
          </p>
        </div>
      </div>
      <div className="md:block hidden md:w-1/5">
        <img
          className="object-fill w-80 rounded-lg"
          src={smile_man}
          alt="Smiling man"
        />
      </div>
    </div>
  );
};
