export const DescriptionSection = () => {
  return (
    <div className="p-10">
      <h1 className="underline text-2xl font-medium">Description:</h1>
      <div className="p-10">
        <p>
          Step into the charm of Morocco with our exquisite traditional dress, a
          captivating blend of heritage and elegance. Crafted with meticulous
          attention to detail, this dress pays homage to the rich cultural
          tapestry of the region. The intricate patterns and vibrant colors tell
          a story of centuries-old traditions, transporting you to the heart of
          Moroccan allure.
        </p>
        <p className="mt-7">
          Indulge in the luxurious feel of high-quality fabric that drapes
          gracefully, enhancing your silhouette. The dress is a harmonious
          fusion of traditional craftsmanship and modern sensibilities, making
          it versatile for various occasions – from festive celebrations to
          cultural events
          <span className="text-blue-600">
            ...<span className="hover:underline cursor-pointer">expand</span>
          </span>
        </p>
      </div>
    </div>
  );
};
