import React from "react"
function Footer() {
  return (
    <footer className="container mx-auto py-1 max-w-full fixed bottom-0 bg-[#141E27]">
      <p className="text-xs text-center text-[#EEEDDE] w-full font-adlam">
        &copy; {new Date().getFullYear()} Venteux. All Rights Reserved.
      </p>
    </footer>
  )
}
export default Footer
