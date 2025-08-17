import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 Vandana. All rights reserved.</p>
      <div className="socials">
        <a href="https://github.com/Vandana-Ss" target="_blank" rel="noopener noreferrer">
          <FaGithub size={20} />
        </a>
        <a href="https://www.linkedin.com/in/sattaru-vandana-sree-365b55229/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={20} />
        </a>
        <a href="mailto:sreevandanas2002@gmail.com">
          <FaEnvelope size={20} />
        </a>
      </div>
    </footer>
  )
}

export default Footer
