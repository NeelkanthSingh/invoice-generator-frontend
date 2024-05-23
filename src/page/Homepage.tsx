import { SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/clerk-react"
// import CreateInvoice from "./CreateInvoice"

const Homepage = () => {
  return (
    <>
      <SignedIn>
        <div className="flex flex-col min-h-screen">
          <header className="flex justify-between p-4 border-b-2">
            <div><a href="#">Invoice Generator</a></div>
            <SignOutButton />
          </header>
          <div className="flex flex-1 justify-around">
            <button>Create Invoice</button>
            <button>Search Invoices</button>
          </div>
          <footer>
            <div className="flex justify-center">© 2024 SKV Fire Associate. All rights reserved.</div>
            {/* <CreateInvoice as="Hello" safas="World"/> */}
          </footer>
        </div>
      </SignedIn>
      <SignedOut>
        <div className="flex flex-col min-h-screen justify-center">
          <SignInButton />
        </div>
      </SignedOut>
    </>
  )
}

export default Homepage