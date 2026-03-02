// import Image from "next/image";

// export default function HeroSection({
//   title,
//   description,
//   image,
//   priority = false,
// }) {
//   return (
//     <section className="bg-[#f5f6f8]">
//       <div className="max-w-9xl mx-auto px-4 lg:px-20 py-20 lg:py-28">
//         <div className="grid lg:grid-cols-2 items-center">
//           {/* LEFT CONTENT */}
//           <div className="space-y-8">
//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight bg-[linear-gradient(94.31deg,#3e3df3_0.73%,#ff007c_97.24%)] bg-clip-text text-transparent">
//               {title}
//             </h1>

//             <p className="text-gray-600 text-lg leading-relaxed max-w-5xl">
//               {description}
//             </p>
//           </div>

//           {/* RIGHT IMAGE */}
//           <div className="hidden lg:flex justify-center lg:justify-end">
//             <Image
//               src={image}
//               alt="Hero Image"
//               width={550}
//               height={550}
//               priority={priority}
//               className="w-full max-w-[520px] h-auto"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import Image from "next/image";

export default function HeroSection({
  title,
  description,
  image,
  priority = false,
}) {
  return (
    <section className="py-[100px] min-h-[90vh]">
      <div className="max-w-[90%] mx-auto h-full">
        <div className="grid lg:grid-cols-12 items-center min-h-[85vh]">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-7 flex items-center">
            <div className="flex flex-col justify-between h-full">
              <div>
                <h1
                  className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight
                bg-[linear-gradient(94.31deg,#3e3df3_0.73%,#ff007c_97.24%)]
                bg-clip-text text-transparent"
                >
                  {title}
                </h1>

                <p className="text-gray-500 py-6 text-lg lg:text-xl max-w-5xl leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          </div>

          {/* <div
            className="hidden lg:block lg:col-span-5 min-h-[85vh]
            bg-contain bg-right bg-no-repeat"
            style={{ backgroundImage: `url(${image})` }}
          /> */}
          {/* RIGHT IMAGE */}
          <div className="hidden lg:flex lg:col-span-5 items-center justify-end min-h-[85vh]">
            <div className="relative w-full h-full flex items-center justify-end">
              <Image
                src={image}
                alt="Hero Image"
                width={700}
                height={700}
                priority={priority}
                className="object-contain max-h-[85vh] w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
