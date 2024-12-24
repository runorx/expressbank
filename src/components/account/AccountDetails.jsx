// import moment from "moment";
// import React from "react";
// import { FcRating } from "react-icons/fc";

// export const AccountDetails = ({ account }) => {
//   return (
//     <div className="flex items-center justify-center flex-col gap-4 px-6 py-8 my-10 bg-blue-200 border-y-4 border-blue-800 rounded shadow">
//       <h3 className="w-full flex items-center text-xl my-5 p-3 text-left font-bold   text-blue-900 bg-slate-50 rounded shadow-md">
//         <FcRating className="mr-1" size={35} />
//         Account Details:-
//       </h3>

//       <div className="w-full flex justify-between items-center flex-col  lg:flex-row gap-2 lg:gap-0 p-3  text-white text-center font-semibold bg-blue-500 border-r-4 border-blue-800 rounded shadow">
//         <p className="w-full lg:w-auto bg-slate-900  px-4 py-2 rounded-md">
//           Account ID
//         </p>
//         <span className="w-full lg:w-auto text-slate-900 bg-white  px-4 py-2 rounded-md">
//           {account._id}
//         </span>
//       </div>

//       <div className="w-full flex justify-between items-center flex-col  lg:flex-row gap-2 lg:gap-0 p-3  text-white text-center font-semibold bg-blue-500 border-r-4 border-blue-800 rounded shadow">
//         <p className="w-full lg:w-auto bg-slate-900  px-4 py-2 rounded-md">
//           Created At
//         </p>
//         <span className="w-full lg:w-auto text-slate-900 bg-white px-4 py-2 rounded-md">
//           {moment(account.createdAt).format("DD MMMM YYYY")}
//         </span>
//       </div>

//       <div className=" w-full flex justify-between items-center flex-col  lg:flex-row gap-2 lg:gap-0 p-3  text-white text-center font-semibold bg-blue-500 border-r-4 border-blue-800 rounded shadow">
//         <p className=" w-full lg:w-auto bg-slate-900  px-4 py-2 rounded-md">
//           Balance
//         </p>
//         <span className="w-full lg:w-auto text-slate-900 bg-white px-4 py-2 rounded-md">
//           {new Intl.NumberFormat("en-US", {
//             style: "currency",
//             currency: "USD",
//           }).format(account.balance)}
//         </span>
//       </div>

//       <div className="w-full flex justify-between items-center flex-col  lg:flex-row gap-2 lg:gap-0 p-3  text-white text-center font-semibold bg-blue-500 border-r-4 border-blue-800 rounded shadow">
//         <p className="w-full lg:w-auto bg-slate-900  px-4 py-2 rounded-md">
//           OutGoing Transcations
//         </p>
//         <span className="w-full lg:w-auto text-slate-900 bg-white  px-4 py-2 rounded-md">
//           {account.out.length > 0
//             ? new Intl.NumberFormat("en-US", {
//                 style: "currency",
//                 currency: "USD",
//               }).format(
//                 account.out.reduce(
//                   (totalAmount, log) => (totalAmount += log.balance_transfered),
//                   0
//                 )
//               )
//             : new Intl.NumberFormat("en-US", {
//                 style: "currency",
//                 currency: "USD",
//               }).format(0)}
//         </span>
//       </div>

//       <div className="w-full flex justify-between items-center flex-col  lg:flex-row gap-2 lg:gap-0 p-3  text-white text-center font-semibold bg-blue-500 border-r-4 border-blue-800 rounded shadow">
//         <p className="w-full lg:w-auto bg-slate-900  px-4 py-2 rounded-md">
//           Incoming Transcations
//         </p>
//         <span className="w-full lg:w-auto text-slate-900 bg-white  px-4 py-2 rounded-md">
//           {account.in.length > 0
//             ? new Intl.NumberFormat("en-US", {
//                 style: "currency",
//                 currency: "USD",
//               }).format(
//                 account.in.reduce(
//                   (totalAmount, log) => (totalAmount += log.balance_transfered),
//                   0
//                 )
//               )
//             : new Intl.NumberFormat("en-US", {
//                 style: "currency",
//                 currency: "USD",
//               }).format(0)}
//         </span>
//       </div>

//       <div className="w-full flex justify-between items-center flex-col  lg:flex-row gap-2 lg:gap-0 p-3  text-white text-center font-semibold bg-blue-500 border-r-4 border-blue-800 rounded shadow">
//         <p className="w-full lg:w-auto bg-slate-900  px-4 py-2 rounded-md">
//           Deposit Amount
//         </p>
//         <span className="w-full lg:w-auto text-slate-900 bg-white  px-4 py-2 rounded-md">
//           {account.deposit_logs.length > 0
//             ? new Intl.NumberFormat("en-US", {
//                 style: "currency",
//                 currency: "USD",
//               }).format(
//                 account.deposit_logs.reduce(
//                   (totalAmount, log) => (totalAmount += log.depositted_amount),
//                   0
//                 )
//               )
//             : new Intl.NumberFormat("en-US", {
//                 style: "currency",
//                 currency: "USD",
//               }).format(0)}
//         </span>
//       </div>

//       <div className="w-full flex justify-between items-center flex-col  lg:flex-row gap-2 lg:gap-0 p-3  text-white text-center font-semibold bg-blue-500 border-r-4 border-blue-800 rounded shadow">
//         <p className="w-full lg:w-auto bg-slate-900  px-4 py-2 rounded-md">
//           Withdrawal Amount
//         </p>
//         <span className="w-full lg:w-auto text-slate-900 bg-white  px-4 py-2 rounded-md">
//           {account.withdraw_logs.length > 0
//             ? new Intl.NumberFormat("en-US", {
//                 style: "currency",
//                 currency: "USD",
//               }).format(
//                 account.withdraw_logs.reduce(
//                   (totalAmount, log) => (totalAmount += log.withdrawed_amount),
//                   0
//                 )
//               )
//             : new Intl.NumberFormat("en-US", {
//                 style: "currency",
//                 currency: "USD",
//               }).format(0)}
//         </span>
//       </div>
//     </div>
//   );
// };



import React from "react";
import moment from "moment";

export const AccountDetails = ({ account }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 my-10 bg-white border border-gray-300 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-navy-900 mb-6 border-b pb-2">
        Account Details
      </h3>

      {/* Account Detail Items */}
      {[
        { label: "Account ID", value: account._id },
        { 
          label: "Created At", 
          value: moment(account.createdAt).format("DD MMMM YYYY") 
        },
        { 
          label: "Balance", 
          value: new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(account.balance) 
        },
        { 
          label: "Outgoing Transactions", 
          value: account.out.length > 0 
            ? new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(
                account.out.reduce(
                  (total, log) => total + log.balance_transfered,
                  0
                )
              )
            : "$0.00"
        },
        { 
          label: "Incoming Transactions", 
          value: account.in.length > 0 
            ? new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(
                account.in.reduce(
                  (total, log) => total + log.balance_transfered,
                  0
                )
              )
            : "$0.00"
        },
        { 
          label: "Deposit Amount", 
          value: account.deposit_logs.length > 0 
            ? new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(
                account.deposit_logs.reduce(
                  (total, log) => total + log.depositted_amount,
                  0
                )
              )
            : "$0.00"
        },
        { 
          label: "Withdrawal Amount", 
          value: account.withdraw_logs.length > 0 
            ? new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(
                account.withdraw_logs.reduce(
                  (total, log) => total + log.withdrawed_amount,
                  0
                )
              )
            : "$0.00"
        },
      ].map((detail, index) => (
        <div
          key={index}
          className="flex justify-between items-center bg-navy-50 text-navy-900 px-4 py-3 mb-4 rounded-md"
        >
          <span className="font-medium">{detail.label}</span>
          <span className="text-right">{detail.value}</span>
        </div>
      ))}
    </div>
  );
};
