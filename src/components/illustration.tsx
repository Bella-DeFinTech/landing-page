import Image from "next/image";

export const Illustration = () => {
  return (
    <Image
      src="/assets/illustrations.svg"
      width={601}
      height={515}
      alt="illustration"
      className="hidden 1100:block"
    />
  );
};
