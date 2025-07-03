import React from 'react';

const page = () => {
  return (
    <div className=" text-black py-24 flex justify-center bg-[#9d9b9b] min-h-screen">
      <div className="px-6 bg-white py-8 mx-3  shadow-[0_0_10px_rgba(0,0,0,0.5)] p-10 h-[1123px] w-[794px]">
        <h3 className="font-bold text-2xl text-center border-b-2 pb-4 border-gray-400">
          Cancellation Policy for Digital Products
        </h3>

        <div className="mt-6 space-y-4 text-md leading-relaxed">
          <p>
            Thank you for purchasing our products at <strong>Criscoconsulting.in</strong>, operated by <strong>Ordnungskraft IT Advisory Private Limited</strong>.
          </p>

          <p>
            We offer a cancellation option for all purchases made on our website or any other sales channels. If you are not satisfied with the product you have purchased, you can cancel the order and request a refund.
          </p>

          <p>
            You are eligible for a full reimbursement within <strong>14 calendar days</strong> of your purchase.
          </p>

          <p>
            After the 14-day period, you will no longer be eligible to cancel the order or request a refund. We encourage our customers to try the product (or service) within the first two weeks after their purchase to ensure it fits their needs.
          </p>

          <p>
            All refunds after cancellation will be processed in <strong>INR</strong> as per the exchange rate on the day of processing.
          </p>

          <p>
            If you have any additional questions or would like to request a refund, please contact us at{' '}
            <a href="mailto:support@multark.com" className="text-blue-600 underline">
              support@multark.com
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
