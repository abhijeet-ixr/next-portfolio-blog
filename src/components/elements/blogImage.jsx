import Image from 'next/image';

export default function BlogImage(props) {
  return (
    <Image
      width={900}
      height={500}
      className="mx-auto aspect-auto"
      alt={props.alt}
      {...props}
    />
  );
}
