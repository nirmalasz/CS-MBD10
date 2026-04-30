

export default function Product() {
  return (
    <div className="bg-[#111825] relative">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold text-gray-200 py-4">Products</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          <div className="group">
            <img
              src="https://i.pinimg.com/736x/3f/ac/2f/3fac2fd32bf710d04cba38cad069705d.jpg"
              alt="laptop"
              className="aspect-square w-full rounded-lg bg-slate-800 object-cover group-hover:opacity-75 xl:aspect-[7/8]"
            />
            <h3 className="mt-6 text-xl text-gray-200">
                <a href="#">
                  <span className="absolute inset-0"></span>
                  Laptop
                </a>
              </h3>
            <p className="mt-1 text-lg font-semibold text-gray-300">IDR 1.000.000</p>
          </div>
          <div className="group">
            <img
              src="https://i.pinimg.com/736x/c2/da/e7/c2dae73b57f771a3bfc36a73ef927c3a.jpg"
              alt="mouse"
              className="aspect-square w-full rounded-lg bg-slate-800 object-cover group-hover:opacity-75 xl:aspect-[7/8]"
            />
            <h3 className="mt-6 text-xl text-gray-200">
                <a href="#">
                  <span className="absolute inset-0"></span>
                  Mouse
                </a>
              </h3>
            <p className="mt-1 text-lg font-semibold text-gray-300">IDR 50.000</p>
          </div>
          <div className="group">
            <img
              src="https://i.pinimg.com/736x/d6/33/88/d63388939d5f191cfce29caa48392a97.jpg"
              alt="Keyboard"
              className="aspect-square w-full rounded-lg bg-slate-800 object-cover group-hover:opacity-75 xl:aspect-[7/8]"
            />
            <h3 className="mt-6 text-xl text-gray-200">
                <a href="#">
                  <span className="absolute inset-0"></span>
                  Keyboard
                </a>
              </h3>
            <p className="mt-1 text-lg font-semibold text-gray-300">IDR 150.000</p>
          </div>
          <div className="group">
            <img
              src="https://i.pinimg.com/736x/1f/a7/28/1fa7287396de4ed15756e29aa13050e8.jpg"
              alt="monitor"
              className="aspect-square w-full rounded-lg bg-slate-800 object-cover group-hover:opacity-75 xl:aspect-[7/8]"
            />
            <h3 className="mt-6 text-xl text-gray-200">
                <a href="#">
                  <span className="absolute inset-0"></span>
                  Monitor
                </a>
              </h3>
            <p className="mt-1 text-lg font-semibold text-gray-300">IDR 300.000</p>
          </div>
        </div>
      </div>
    </div>
  );
}
