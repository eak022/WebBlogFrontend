import React from 'react'

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-300 text-base-content p-4 mt-auto">
    <aside>
      <p> © {new Date().getFullYear()} Software Engineering, NPRU. All rights reserved.</p>
    </aside>
  </footer>
  )
}

export default Footer