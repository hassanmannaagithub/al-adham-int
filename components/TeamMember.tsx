
import Image from 'next/image';

interface TeamMemberProps {
  name: string;
  position: string[];
  image: string;
}

export default function TeamMember({ name, position, image }: TeamMemberProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 w-64 h-64 relative overflow-hidden">
        <Image
          src={image}
          alt={name}
          className="rounded-full grayscale"
          width={320}
          height={320}
          style={{ objectFit: 'cover' }}
        />
      </div>
      <h2 className="text-2xl font-bold text-center">{name}</h2>
      <div className="w-[10.5rem] h-1 bg-orange-500 my-1"></div>
      <div className="text-center">
        {position.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
}