import { TypographyH2 } from "../text/h2";
import { TypographyP } from "../text/p";
import { WobbleCard } from "../ui/wobble-card";
import Image, { StaticImageData } from "next/image";

interface BaseProps {
  containerClassNames?: string;
  colSpan?: string;
  cardTitle?: string;
  titleClassNames?: string;
  description?: string;
  descriptionClassNames?: string;
  children?: React.ReactNode;
}

interface NoImageProps extends BaseProps {
  image?: false;
  src?: undefined;
  alt?: undefined;
  imageClassNames?: string;
}

interface ImageProps extends BaseProps {
  image: true;
  src: string | StaticImageData;
  alt: string;
  imageClassNames?: string;
}

type Props = NoImageProps | ImageProps;

const WobbleCardReusable = ({
  colSpan = "col-span-1 lg:col-span-2",
  containerClassNames,
  cardTitle = "Default Title",
  titleClassNames = "",
  description = "Default description",
  descriptionClassNames = "",
  children,
  image = false,
  src,
  alt,
  imageClassNames = "",
}: Props) => {
  return (
    <WobbleCard
      containerClassName={`bg-custom-text-muted/80 ${colSpan} ${containerClassNames}`}
      className=""
    >
      <TypographyH2
        className={`text-left text-balance text-base md:text-xl text-white lg:text-3xl font-semibold tracking-[-0.015em] text-custom-muted ${titleClassNames}`}
      >
        {cardTitle}
      </TypographyH2>
      <TypographyP className={`text-left ${descriptionClassNames}`}>
        {description}
      </TypographyP>
      {children}
      {image && src && alt && (
        <Image
          src={src}
          alt={alt}
          className={`rounded-sm mt-4 object-cover ${imageClassNames}`}
        />
      )}
    </WobbleCard>
  );
};

export default WobbleCardReusable;