import { SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/clerk-react"

const Homepage = () => {
  return (
    <>
      <SignedIn>
        <SignOutButton />
          <div>Homepage</div>
      </SignedIn>
      <SignedOut>
          <SignInButton />
      </SignedOut>
    </>
  )
}

export default Homepage