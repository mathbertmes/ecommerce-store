import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return(
    <footer className="bg-white border-t">
      <div className="mx-auto py-10">
        <p className="text-center text-xs text-black">
          &copy; 2024 FakeStoreName, Inc. All rights reserved.
        </p>
        <div className="flex flex-col items-center mt-4 gap-2">
          <div className="flex gap-4">
          <Linkedin />
          <Link href="https://www.linkedin.com/in/matheus-bertemes-96aa97187/">Linkedin</Link>
          </div>
          <div className="flex gap-4">
          <Github />
          <Link href="https://github.com/mathbertmes">Github</Link>
          </div>
          
        </div>
      </div>
    </footer>
  )
}

export default Footer;