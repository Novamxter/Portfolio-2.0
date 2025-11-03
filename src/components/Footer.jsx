import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {
  faSquareLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#AAF1EC] to-[#4992D0] py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        {/* Logo / Name */}
        <h3 className="text-lg font-semibold text-white w-35 drop-shadow-md">
          Mohit's Portfolio
        </h3>

        {/* Links */}
        <nav className="flex space-x-6">
          <a
            href="#about"
            className="text-white/80 hover:text-white transition duration-300"
          >
            About
          </a>
          <a
            href="#skills"
            className="text-white/80 hover:text-white transition duration-300"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-white/80 hover:text-white transition duration-300"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-white/80 hover:text-white transition duration-300"
          >
            Contact
          </a>
        </nav>

        {/* Socials */}
        <div className="flex space-x-6 w-35 justify-end">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-[#333333] hover:scale-110 transition duration-300"
          >
            <Icon icon={faGithub} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-[#0A66C2] hover:scale-110 transition duration-300"
          >
            <Icon icon={faSquareLinkedin} />
          </a>
          <a
            href="mailto:mohit@example.com"
            className="text-white/80 hover:text-[#FFDD00] hover:scale-110 transition duration-300"
          >
            <Icon icon={faEnvelope} />
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-6 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Mohit Kumar. All rights reserved.
      </div>
    </footer>
  );
}
