
const CreateInvoice = () => {
  return (
<div className="flex font-mono text-sm font-thin flex-col min-h-screen bg-yellow-50 text-zinc-700">
      <div className="mx-12 my-4">
          <div className="flex justify-between items-center">
              <div>
                <div>Company's Name</div>
                <div>Company's Address</div>
                <div>Mobile Number</div>
                <div>GSTIN: dfsldfsdf</div>
              </div>
              <div className="font-semibold text-5xl">Invoice</div>
          </div>
          <div className="mt-8 flex justify-between items-center">
            <div>
              <div>
                <div className="font-semibold">Billed to:</div>
                <div>Company's Name</div>
                <div>Company's Address</div>
                <div>Mobile Number</div>
                <div>GSTIN: dfsldfsdf</div>
              </div>
              <div>
                <div className="mt-4 font-semibold">Shipped to:</div>
                <div>Company's Name</div>
                <div>Company's Address</div>
                <div>Mobile Number</div>
                <div>GSTIN: dfsldfsdf</div>
              </div>
            </div>
            <div>
              <div className="text-right">
                <div className="font-semibold">Invoice details:</div>
                <div>Invoice No: 12</div>
                <div>Invoice date: sdfsd</div> 
                <div>State: Uttarpradesh</div> 
              </div>
              <div className="mt-4 text-right">
                <div className="font-semibold">Bank details:</div>
                <div>Bank of India</div>
                <div>Bari Bazar, Maldahiya, Varanasi</div> 
                <div>Acc No: 690130110000070</div> 
                <div>IFSC Code: BKID0006901</div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <table className="w-full border-collapse">
              <tbody>
                <tr>
                  <th id="slno" className="border-s-[1px] p-1 text-left">Sl. No.</th>
                  <th id="pd" className="border-s-[1px] p-1 text-left">Product Description</th>
                  <th id="hsn" className="border-s-[1px] p-1 text-left">HSN Code</th>
                  <th id="qty" className="border-s-[1px] p-1 text-left">Qty.</th>
                  <th id="rate" className="border-s-[1px] p-1 text-left">Rate</th>
                  <th id="amt" className="border-s-[1px] p-1 text-left">Amount</th>
                </tr>
                <tr>
                  <td headers="slno" className="border-s-[1px] p-1">1</td>
                  <td headers="pd" className="border-s-[1px] p-1">Refilling of ABC Type Fire Extinguisher 4kg Capacity Complete</td>
                  <td headers="hsn" className="border-s-[1px] p-1">8424</td>
                  <td headers="qty" className="border-s-[1px] p-1">1</td>
                  <td headers="rate" className="border-s-[1px] p-1">800.00</td>
                  <td headers="amt" className="border-s-[1px] p-1">800.00</td>
                </tr>
                <tr>
                  <td headers="slno" className="border-s-[1px] p-1">1</td>
                  <td headers="pd" className="border-s-[1px] p-1">Refilling of ABC Type Fire Extinguisher 4kg Capacity Complete</td>
                  <td headers="hsn" className="border-s-[1px] p-1">8424</td>
                  <td headers="qty" className="border-s-[1px] p-1">1</td>
                  <td headers="rate" className="border-s-[1px] p-1">800.00</td>
                  <td headers="amt" className="border-s-[1px] p-1">800.00</td>
                </tr>
                <tr>
                  <td headers="slno" className="border-s-[1px] p-1">1</td>
                  <td headers="pd" className="border-s-[1px] p-1">Refilling of ABC Type Fire Extinguisher 4kg Capacity Complete</td>
                  <td headers="hsn" className="border-s-[1px] p-1">8424</td>
                  <td headers="qty" className="border-s-[1px] p-1">1</td>
                  <td headers="rate" className="border-s-[1px] p-1">800.00</td>
                  <td headers="amt" className="border-s-[1px] p-1">800.00</td>
                </tr>
                <tr>
                  <td headers="slno" className="border-s-[1px] p-1">1</td>
                  <td headers="pd" className="border-s-[1px] p-1">Refilling of ABC Type Fire Extinguisher 4kg Capacity Complete</td>
                  <td headers="hsn" className="border-s-[1px] p-1">8424</td>
                  <td headers="qty" className="border-s-[1px] p-1">1</td>
                  <td headers="rate" className="border-s-[1px] p-1">800.00</td>
                  <td headers="amt" className="border-s-[1px] p-1">800.00</td>
                </tr>
                <tr>
                  <td headers="slno" className="border-s-[1px] p-1">1</td>
                  <td headers="pd" className="border-s-[1px] p-1">Refilling of ABC Type Fire Extinguisher 4kg Capacity Complete</td>
                  <td headers="hsn" className="border-s-[1px] p-1">8424</td>
                  <td headers="qty" className="border-s-[1px] p-1">1</td>
                  <td headers="rate" className="border-s-[1px] p-1">800.00</td>
                  <td headers="amt" className="border-s-[1px] p-1">800.00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="grid grid-flow-col">
              <div className="mt-4 w-[340px]">
                <div className="font-semibold mb-1">Term & Conditions:</div>
                <div>1) I/We declare that this invoice shows actual price of the goods and/or the service described and that all particulars are true and correct.</div>
                <div>2) Error & omission expected.</div>
                <div>3) Subject to juridiction of courts in Varanasi.</div>
              </div>
            <div className="flex flex-col items-start">
              <div className="my-4 font-semibold">
              <table className="w-full border-collapse">
                <tbody>
                  <tr>
                    <th className="p-1 text-left">Total Amount</th>
                    <td className="border-s-[2px] p-2 text-left">4000.00</td>
                  </tr>
                  <tr>
                    <th className="p-1 text-left">Add SGST</th>
                    <td className="border-s-[2px] p-2 text-left">9%</td>
                  </tr>
                  <tr>
                    <th className="p-1 text-left">Add CGST</th>
                    <td className="border-s-[2px] p-2 text-left">9%</td>
                  </tr>
                  <tr className="border-separate border-t-2">
                    <th className="p-1 text-left">Payable Amount</th>
                    <td className="border-s-[2px] p-2 text-left">4720.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
              <div>
                <div className="mt-4 font-semibold ">Customer Signature: </div>
                <div className="font-semibold mt-2 ">Authorised Signatory: </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default CreateInvoice