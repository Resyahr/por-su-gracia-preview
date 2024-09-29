const MapEmbed = ({ src, title }: { src: string; title: string }) => {
  return (
    <iframe
      className="w-full h-[300px] lg:h-full rounded-lg"
      src={src}
      loading="lazy"
      allowFullScreen
      title={title}
    ></iframe>
  );
};

export default MapEmbed;
