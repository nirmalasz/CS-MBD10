
import Link from "next/link";

export default function Category() {
  return (
    <div className="bg-[#111825] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-200">Collections</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            <div className="group relative">
              <img
                src="https://i.pinimg.com/736x/7c/c1/1a/7cc11a5c668fe70447993eb71b617d8d.jpg"
                alt="nayeontop"
                className="w-full rounded-lg bg-[#111825] object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-[2/1] lg:aspect-square"
              />
              <h3 className="mt-6 text-sm text-gray-500">
                <Link href="/">
                  <span className="absolute inset-0" />
                  Clothes
                </Link>
              </h3>
              <p className="text-base font-semibold text-gray-200">
                Cute Top
              </p>
            </div>
            <div className="group relative">
              <img
                src="https://i.pinimg.com/736x/cb/7d/0f/cb7d0fcba52f90db988c3efc51f1f2e9.jpg"
                alt="soccer mommy ily"
                className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-[2/1] lg:aspect-square"
              />
              <h3 className="mt-6 text-sm text-gray-500">
                <Link href="/">
                  <span className="absolute inset-0" />
                  Entertainment
                </Link>
              </h3>
              <p className="text-base font-semibold text-gray-200">
                Hot Vinyl
              </p>
            </div>
            <div className="group relative">
              <img
                src="https://i.pinimg.com/1200x/da/69/3b/da693b6ed7924e270484e26bce0d511a.jpg"
                alt="gpu ganteng."
                className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-[2/1] lg:aspect-square"
              />
              <h3 className="mt-6 text-sm text-gray-500">
                <Link href="/">
                  <span className="absolute inset-0" />
                  Computer
                </Link>
              </h3>
              <p className="text-base font-semibold text-gray-200">
                GPU Ganteng
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
