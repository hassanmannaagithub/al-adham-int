import Image from "next/image";
import { getBlurDataUrl } from "@/utils/imageUtils";

interface TeamMemberProps {
  name: string;
  position: string[];
  image: string;
  imageSize?: "small" | "medium" | "large"; // Optional size prop
}

export default function TeamMember({
  name,
  position,
  image,
  imageSize = "large",
}: TeamMemberProps) {
  // Map the size options to actual dimensions
  const sizes = {
    small: { container: "w-48 h-48", dimensions: 192 },
    medium: { container: "w-64 h-64", dimensions: 256 },
    large: { container: "w-80 h-80", dimensions: 320 },
  };

  const { container, dimensions } = sizes[imageSize];

  return (
    <div className="flex flex-col items-center">
      <div className={`mb-4 relative overflow-hidden ${container}`}>
        <Image
          src={image}
          alt={name}
          className="rounded-full grayscale"
          width={dimensions}
          height={dimensions}
          style={{ objectFit: "cover" }}
          blurDataURL={getBlurDataUrl(dimensions, dimensions)}
          placeholder="blur"
        />
      </div>
      <h2 className="text-team-member-name font-bold text-center mt-1">
        {name}
      </h2>
      <div className="w-52 h-1 bg-orange-500"></div>
      <div className="text-center text-144 leading-tight mt-2">
        {position.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
}
