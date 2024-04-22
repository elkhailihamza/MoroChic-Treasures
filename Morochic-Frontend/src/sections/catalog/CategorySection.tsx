import { CategoryPill } from "../../components/CategoryPill";

export const CategorySection = () => {
  return (
    <>
      <div className="mt-16">
        <h1 className="text-4xl ms-3">Catalog</h1>
        <hr
          className="mx-auto mt-4"
          style={{ borderBottom: "1.5px solid rgb(203 213 225)" }}
        />
        <div className="flex items-center mt-2">
          <div className="carousel w-full flex mx-5 gap-5">
            <CategoryPill className="carousel-item" text="test" />
            <CategoryPill className="carousel-item" text="test" />
            <CategoryPill className="carousel-item" text="test" />
            <CategoryPill className="carousel-item" text="test" />
            <CategoryPill className="carousel-item" text="test" />
            <CategoryPill className="carousel-item" text="test" />
            <CategoryPill className="carousel-item" text="test" />
            <CategoryPill className="carousel-item" text="test" />
            <CategoryPill className="carousel-item" text="test" />
            <CategoryPill className="carousel-item" text="test" />
            <CategoryPill className="carousel-item" text="test" />
            <CategoryPill className="carousel-item" text="test" />
            <CategoryPill className="carousel-item" text="test" />
            <CategoryPill className="carousel-item" text="test" />
            <CategoryPill className="carousel-item" text="test" />
          </div>
          <span>
            <svg
              width="36"
              height="36"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.375 18.75L15.625 12.5L9.375 6.25"
                stroke="black"
                stroke-opacity="0.3"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </>
  );
};
