import { LogosIconComponent } from "./__logos"

export function LogosComponent() {
  return (
    <div className="flex flex-col w-full h-auto gap-8 py-10 bg-black lg:w-1/2 lg:h-auto rounded-3xl">
      {/* Title here */}
      <div className="flex justify-center gap-1 text-sm font-medium lg:text-xl">
        <span className="text-white">125+ Brands have growth their revenue with</span>
        <span className="px-1 font-serif italic text-black bg-white rounded-full lg:px-2">hugo</span>
      </div>
      {/* Logos Here */}
      <LogosIconComponent />
    </div>
  )
}