export default function Banner() {
  return (
    <div className="relative bg-gray-900">
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <video
          src="https://diorama.dam-broadcast.com/pm_11872_1348_1348698-0aiq9x4whu-ori.webm" 
          autoPlay
          loop
          muted
          className="h-full w-full object-cover object-center"
        ></video>
      </div>
      
      <div aria-hidden="true" className="absolute inset-0 bg-gray-900/60" />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center sm:py-40 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Roses are Red
        </h1>
        
        <p className="mt-4 max-w-2xl text-lg text-gray-100 sm:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus incidunt quaerat, doloribus nulla ipsum esse repudiandae a in provident error repellendus eos quis amet consequuntur exercitationem libero mollitia quisquam officiis!
        </p>
      </div>
    </div>
  );
}