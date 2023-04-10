const Background = () => {
  const path = process.env.PUBLIC_URL;
  return (
    <div className="absolute">
      <video
        className="object-cover h-screen w-screen"
        autoPlay={true}
        controls={false}
        loop={true}
        muted={true}
        playsInline={true}
      >
        <source src={`${path}/videos/3.mp4`} type="video/mp4"></source>
      </video>
    </div>
  );
};
export default Background;
