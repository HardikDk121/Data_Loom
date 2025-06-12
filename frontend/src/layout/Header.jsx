
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

function Header() {
  const location = useLocation()
  const navigate = useNavigate()
  const name = location.state?.name
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showDialog, setShowDialog] = useState(false)

  useEffect(() => {

    if (!name) {
      setIsLoggedIn(false)
      setShowDialog(true)
    } else {
      setIsLoggedIn(true)
    }
  }, [])

  const handleRedirectToLogin = () => {
    setShowDialog(false)
    navigate('/login') // redirect to login page
  }

  return (
    <>
      <Dialog open={showDialog} onOpenChange={setShowDialog} >
        <DialogContent className="bg-cyan-950 "
          onPointerDownOutside={(e) => e.preventDefault()}
          onInteractOutside={(e) => e.preventDefault()}
        >
          <DialogHeader>
            <DialogTitle className="text-gray-200">Access Denied</DialogTitle>
            <DialogDescription className="text-gray-400">
              You must be logged in to view this page.
            </DialogDescription>
            <button
              onClick={handleRedirectToLogin}
              className="mt-4 bg-rose-400 text-white px-4 py-2 rounded hover:bg-rose-700"
            >
              Go to Login
            </button>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <header className="col-span-12 row-span-1 flex gap-8">
        <img src="/assets/images/logo-cropped.png" alt="" className="w-32 self-start" />
        {name && (
          <h1 className="text-2xl font-bold mb-4 text-center text-gray-300  ">{name} </h1>)}
      </header>
    </>
  );
}
export default Header;
