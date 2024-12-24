// import React from "react";
// import { ReactComponent as OnlineIcon } from "../../../../assets/icons/icon-online.svg";
// import { ReactComponent as OnboardingIcon } from "../../../../assets/icons/icon-onboarding.svg";
// import { ReactComponent as BudgetingIcon } from "../../../../assets/icons/icon-budgeting.svg";
// import { ReactComponent as ApiIcon } from "../../../../assets/icons/icon-api.svg";

// const motivationItems = [
//   {
//     icon: OnlineIcon,
//     title: "Online Banking",
//     subtitle:
//       "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
//   },
//   {
//     icon: BudgetingIcon,
//     title: "Simple Budgeting",
//     subtitle:
//       "See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.",
//   },
//   {
//     icon: OnboardingIcon,
//     title: "Fast Onboarding",
//     subtitle:
//       "We don't do branches. Open your account in minutes online and start taking control of your finances right away.",
//   },
//   {
//     icon: ApiIcon,
//     title: "Open API",
//     subtitle:
//       "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
//   },
// ];

// export default function Motivation() {
//   return (
//     <section id="About" className="py-20 md:py-40 bg-[#0f172a]">
//       <div className="max-w-[1800px] w-full mx-auto flex flex-col justify-center items-center gap-10 px-4 sm:px-10 md:px-12  text-center lg:text-left">
//         <div className="grid lg:grid-cols-2 mb-12 lg:mb-16">
//           <div className="col-span-1">
//             <h2 className="text-3xl font-bold !font-sans lg:text-4xl text-teal-600 pb-5  mb-5">
//               {" "}
//               Discover the Top Reasons to Bank with{" "}
//               <span className="font-extrabold text-orange-500">
//                 E-Bank
//               </span>{" "}
//             </h2>
//             <p className="text-white !font-sans font-light  text-lg leading-5">
//               We leverage Open Banking to turn your bank account into your
//               financial hub. Control your finances like never before.
//             </p>
//           </div>
//         </div>
//         <div className="grid grid-cols-1 gap-9 lg:gap-6 lg:grid-cols-4">
//           {motivationItems.map((item) => (
//             <div key={item.title} className="justify-center">
//               <div className="flex justify-center lg:justify-start">
//                 <item.icon />
//               </div>

//               <h3 className="text-lg font-semibold text-teal-600 py-4 lg:pt-9 lg:pb-6 lg:text-xl lg:font-bold">
//                 {item.title}
//               </h3>
//               <p className="text-white !font-sans text-sm font-light lg:text-base leading-5">
//                 {item.subtitle}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import { CreditCard, Shield, Smartphone } from 'lucide-react'

const features = [
  {
    name: 'Secure Transactions',
    description: 'Our advanced security measures ensure that all your transactions are safe and protected.',
    icon: Shield,
  },
  {
    name: 'Mobile Banking',
    description: 'Access your account anytime, anywhere with our user-friendly mobile app.',
    icon: Smartphone,
  },
  {
    name: 'Multiple Cards',
    description: 'Manage multiple cards from a single account for better financial control.',
    icon: CreditCard,
  },
]

export default function Features() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-navy-blue font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A better way to bank
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Express Bank offers a range of features designed to make your banking experience smooth and efficient.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-navy-blue text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

