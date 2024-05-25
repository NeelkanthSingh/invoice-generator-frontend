interface Items {
  productDescription: string,
  hsnCode: number,
  quantity: number,
  rate: number
}

interface Props {
  selfCompany: {
    name: string,
    address: string,
    mobileNumber: number,
    gstNumber: string
  },
  billedToCompany: {
    name: string,
    address: string,
    mobileNumber: number,
    gstNumber: string
  },
  shippedToCompany: {
    name: string,
    address: string,
    mobileNumber: number,
    gstNumber: string
  },
  invoiceDetails: {
    invoiceNumber: number,
    invoiceDate: Date,
    state: string
  },
  bankDetails: {
    name: string,
    address: string,
    accountNumber: number,
    ifscCode: string
  },
  termAndConditions: {
    termAndconditions: string[]
  },
  taxPercentage: {
    sgst: number,
    cgst: number
  }
  items: Items[]
}

const CreateInvoice = (props: Props) => {
  function getTotalAmount(): number {
    let total: number = 0;

    for(let i:number = 0; i<props.items.length; i++){
      total = total + props.items[i].rate * props.items[i].quantity;
    }

    return total;
  }

  function getPayableAmount(totalAmount: number): number {
    let payableAmount:number = 0;

    let totatTaxPercentage:number = (props.taxPercentage.cgst + props.taxPercentage.sgst);

    payableAmount = (totalAmount * (100 + totatTaxPercentage))/100;

    return parseFloat(payableAmount.toFixed(2));
  }

  return (
<div className="flex font-mono text-sm font-thin flex-col min-h-screen bg-yellow-50 text-zinc-700">
      <div className="mx-12 my-4">
          <div className="flex justify-between items-center">
              <div>
                <div>{props.selfCompany.name}</div>
                <div>{props.selfCompany.address}</div>
                <div>{props.selfCompany.mobileNumber}</div>
                <div>GSTIN: {props.selfCompany.gstNumber}</div>
              </div>
              <div className="font-semibold text-5xl">Invoice</div>
          </div>
          <div className="mt-8 flex justify-between items-center">
            <div>
              <div>
                <div className="font-semibold">Billed to:</div>
                <div>{props.billedToCompany.name}</div>
                <div>{props.billedToCompany.address}</div>
                <div>{props.billedToCompany.mobileNumber}</div>
                <div>GSTIN: {props.billedToCompany.gstNumber}</div>
              </div>
              <div>
                <div className="mt-4 font-semibold">Shipped to:</div>
                <div>{props.shippedToCompany.name}</div>
                <div>{props.shippedToCompany.address}</div>
                <div>{props.shippedToCompany.mobileNumber}</div>
                <div>GSTIN: {props.shippedToCompany.gstNumber}</div>
              </div>
            </div>
            <div>
              <div className="text-right">
                <div className="font-semibold">Invoice details:</div>
                <div>Invoice No: {props.invoiceDetails.invoiceNumber}</div>
                <div>Invoice date: {props.invoiceDetails.invoiceDate.getDate()}</div> 
                <div>State: {props.invoiceDetails.state}</div> 
              </div>
              <div className="mt-4 text-right">
                <div className="font-semibold">Bank details:</div>
                <div>{props.bankDetails.name}</div>
                <div>{props.bankDetails.address}</div> 
                <div>Acc No: {props.bankDetails.accountNumber}</div> 
                <div>IFSC Code: {props.bankDetails.ifscCode}</div>
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
                {props.items.map((item, index) => (
                  <tr>
                    <td headers="slno" className="border-s-[1px] p-1">{index+1}</td>
                    <td headers="pd" className="border-s-[1px] p-1">{item.productDescription}</td>
                    <td headers="hsn" className="border-s-[1px] p-1">{item.hsnCode}</td>
                    <td headers="qty" className="border-s-[1px] p-1">{item.quantity}</td>
                    <td headers="rate" className="border-s-[1px] p-1">{item.rate}</td>
                    <td headers="amt" className="border-s-[1px] p-1">{item.rate * item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grid grid-flow-col">
              <div className="mt-4 w-[340px]">
                <div className="font-semibold mb-1">Term & Conditions:</div>
                {props.termAndConditions.termAndconditions.map((conditions) => (
                  <div>{conditions}</div>
                ))}
              </div>
            <div className="flex flex-col items-start">
              <div className="my-4 font-semibold">
              <table className="w-full border-collapse">
                <tbody>
                  <tr>
                    <th className="p-1 text-left">Total Amount</th>
                    <td className="border-s-[2px] p-2 text-left">{getTotalAmount()}</td>
                  </tr>
                  <tr>
                    <th className="p-1 text-left">Add SGST</th>
                    <td className="border-s-[2px] p-2 text-left">{props.taxPercentage.sgst}%</td>
                  </tr>
                  <tr>
                    <th className="p-1 text-left">Add CGST</th>
                    <td className="border-s-[2px] p-2 text-left">{props.taxPercentage.cgst}%</td>
                  </tr>
                  <tr className="border-separate border-t-2">
                    <th className="p-1 text-left">Payable Amount</th>
                    <td className="border-s-[2px] p-2 text-left">{getPayableAmount(getTotalAmount())}</td>
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