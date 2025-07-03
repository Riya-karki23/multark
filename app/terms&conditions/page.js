import React from 'react'

const page = () => {
  return (
    <div className=" text-black  w-[100vw] flex justify-center bg-[#9d9b9b] min-h-screen py-24">
      <div className="px-6 bg-white py-8  mx-3 text-md  shadow-[0_0_10px_rgba(0,0,0,0.5)] p-10 w-[794px]">
       
  <h2 className="text-2xl font-semibold text-center mb-6">
    Terms & Conditions — Applicable from 1st April 2023 (India Office)
  </h2>

  <h3 className="text-lg font-semibold mt-6 mb-2">Sales</h3>
  <p>A sale is considered closed as soon as any of the following occurs:</p>
  <ul className="list-disc list-inside mb-4">
    <li>Verbal Commitment</li>
    <li>WhatsApp Commitment</li>
    <li>Email Commitment</li>
    <li>PO is raised by Client</li>
  </ul>
  <p>
    Client is liable to pay the advance amount to Ordnungskraft IT Advisory Private Limited.
    Failure to do so will result in a 21% weekly interest on the final invoice value.
  </p>

  <h3 className="text-lg font-semibold mt-6 mb-2">Refunds, Cancellation, Termination</h3>
  <p>
    We follow a strict no refund, no cancellation, and no termination policy.
    Payment once received will not be refunded under any condition.
  </p>

  <h3 className="text-lg font-semibold mt-6 mb-2">Disputes</h3>
  <p>
    In case of any dispute related to ERP projects or payments, Ordnungskraft IT Advisory
    Private Limited reserves the right to make the final decision. All disputes fall under
    the no refund, no cancellation & no termination policy.
  </p>

  <h3 className="text-lg font-semibold mt-6 mb-2">Payments</h3>
  <p>
    All payments must be made in the name of <strong>“Ordnungskraft IT Advisory Private Limited”</strong>.
    Payments are non-refundable and must include GST.
  </p>

  <h3 className="text-lg font-semibold mt-6 mb-2">Scope of Work (SOW)</h3>
  <ul className="list-disc list-inside mb-4">
    <li>
      SOW must be submitted by the client via email and approved with “Approved” in the reply email.
    </li>
    <li>
      If no SOW is provided and approved, default ERP is considered final as soon as login credentials are shared.
    </li>
    <li>
      Anything not in the SOW will be charged extra at ₹8,500/hour.
    </li>
    <li>
      Extra work (even unknowingly completed) may be invoiced at any time.
    </li>
  </ul>

  <h3 className="text-lg font-semibold mt-6 mb-2">Software Change or Customization Request (SCR)</h3>
  <p>
    All change/customization requests must be officially emailed. SCRs are:
  </p>
  <ul className="list-disc list-inside mb-4">
    <li>Reviewed by our technical team</li>
    <li>Chargeable at ₹8,500/hour</li>
    <li>Executed only after 100% advance payment</li>
  </ul>
  <p>
    Development, testing, and delivery are handled after mutual approval.
  </p>

  <h3 className="text-lg font-semibold mt-6 mb-2">Software Support</h3>
  <p>
    Post-delivery support includes technical issue resolution and debugging assistance.
  </p>

  <h3 className="text-lg font-semibold mt-6 mb-2">Email Communication</h3>
  <p>
    Clients must respond to any official team email within 1 hour. Delays will be treated under the
    “Delay by Client” policy.
  </p>

  <h3 className="text-lg font-semibold mt-6 mb-2">ERP Project Completion</h3>
  <p>
    The ERP project is considered complete once the client receives login credentials via email.
  </p>

  <h3 className="text-lg font-semibold mt-6 mb-2">
    3rd Party Software, Hardware, IoT, Biometric Devices
  </h3>
  <ul className="list-disc list-inside mb-4">
    <li>
      Integration is only possible if the client provides tested and working APIs.
    </li>
    <li>
      Cost: ₹8,500/hour for integration
    </li>
    <li>
      Unsuccessful integrations will still be charged at ₹4,000/hour for the effort.
    </li>
  </ul>
</div>

    </div>
  )
}

export default page