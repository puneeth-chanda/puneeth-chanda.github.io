"use client"

import { useState } from "react"
import Link from "next/link"
import SocialLink from "@/components/SocialLink"
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi"

export default function HomePage() {
  const [avatarSrc, setAvatarSrc] = useState("/assets/avatar-1.webp")

  const swapAvatar = () => {
    setAvatarSrc((prev) =>
      prev === "/assets/avatar-1.webp" ? "/assets/avatar-2.webp" : "/assets/avatar-1.webp"
    )
  }

  return (
    <div className="row mx-0 home-row">
      <div className="col-md-4">
        <img
          src={avatarSrc}
          id="avatar-img"
          alt="Puneeth Chanda Memoji"
          onMouseEnter={swapAvatar}
          onMouseLeave={swapAvatar}
        />
      </div>

      <div className="col-md-8">
        <h1 className="intro animate__animated animate__fadeInUp animate__fast">
          Hi &#x1F44B;,
          <br />
          I&apos;m Puneeth Chanda.
        </h1>

        <div className="col-md-10 info">
          {/* Software developer passionate about solving real-life problems with tech. */}
          {/* Software Engineer building AI-powered onboarding tools and automation platforms */}
          {/* Generative AI specialist crafting intelligent agent solutions for enterprise workflows */}
          <br />
          <br />
          <Link
            href="/projects"
            className="btn btn-primary action-btn animate__animated animate__wobble animate__delay-4s animate__fast"
          >
            View Projects
          </Link>

          <Link href="/contact" className="btn btn-primary action-btn">
            Get In Touch
          </Link>

          <Link
            href="/resume"
            className="btn btn-outline-primary action-btn ms-2"
          >
            Download Resume
          </Link>

          <div className="social-icons animate__animated animate__fadeInUp animate__delay-1s">
            <SocialLink to="http://github.com/puneeth2001" label="GitHub">
              <FiGithub />
            </SocialLink>
            <SocialLink to="https://www.linkedin.com/in/puneeth-chanda-2001/" label="LinkedIn">
              <FiLinkedin />
            </SocialLink>
            <SocialLink to="https://twitter.com/ChandaPuneeth" label="Twitter">
              <FiTwitter />
            </SocialLink>
            <SocialLink to="mailto:chandapuneeth@gmail.com" label="Email">
              <FiMail />
            </SocialLink>
          </div>
        </div>
      </div>
    </div>
  )
}
