interface RightPointingArrowSVGProps {
  className?: string;
  width?: string;
  opacity?: string;
}

export const RightPointingArrowSVG = ({
  className,
  width = "60",
  opacity = "0.3",
}: RightPointingArrowSVGProps) => {
  return (
    <svg
      className={className}
      width={width}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.5 45L37.5 30L22.5 15"
        stroke="black"
        strokeOpacity={opacity}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
