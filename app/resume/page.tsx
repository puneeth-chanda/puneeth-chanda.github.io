"use client"

import { useEffect } from "react"

export default function ResumePage() {
  useEffect(() => {
    document.title = "Resume - Puneeth Chanda"
  }, [])

  return (
    <div className="container page animate__animated animate__fadeIn" style={{ marginTop: 140 }}>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h1 className="line-after">Resume</h1>
          <p className="lead mb-4">
            Professional background and experience in software development.
          </p>

          <div className="card mb-5">
            <div className="card-body p-4">
              <h2 className="h4 mb-3">Professional Experience</h2>
              <div className="mb-4">
                <h3 className="h5 mb-1">Chargebee</h3>
                <p className="text-muted small mb-2">Software Developer | 2022 - Present</p>
                <ul className="small">
                  <li>Develop and maintain web applications using JavaScript, Node.js, and related technologies</li>
                  <li>Collaborate with cross-functional teams to deliver high-quality software solutions</li>
                  <li>Implement responsive designs and ensure cross-browser compatibility</li>
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="h5 mb-1">Previous Experience</h3>
                <p className="text-muted small mb-2">Various Projects | 2018 - 2022</p>
                <ul className="small">
                  <li>Developed Python-based applications including OCR systems and Telegram bots</li>
                  <li>Built full-stack solutions with AWS services and GraphQL</li>
                  <li>Created portfolio projects showcasing technical skills and problem-solving abilities</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card mb-5">
            <div className="card-body p-4">
              <h2 className="h4 mb-3">Education</h2>
              <div>
                <h3 className="h5 mb-1">Bachelor of Technology</h3>
                <p className="text-muted small">Engineering Discipline | 2014 - 2018</p>
              </div>
            </div>
          </div>

          <div className="card mb-5">
            <div className="card-body p-4">
              <h2 className="h4 mb-3">Technical Skills</h2>
              <div className="row">
                <div className="col-md-6">
                  <h3 className="h6 mb-2">Languages</h3>
                  <ul className="small">
                    <li>JavaScript / TypeScript</li>
                    <li>Python</li>
                    <li>Java</li>
                    <li>Node.js</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <h3 className="h6 mb-2">Frameworks & Tools</h3>
                  <ul className="small">
                    <li>React / Next.js</li>
                    <li>Vue.js</li>
                    <li>AWS Services</li>
                    <li>GraphQL</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-5">
            <div className="card-body p-4">
              <h2 className="h4 mb-3">Projects</h2>
              <div className="mb-3">
                <h3 className="h5 mb-1">rmvAds</h3>
                <p className="small text-muted mb-1">Python, Spotify API</p>
                <p className="small">A simple way to avoid listening to Spotify ads for non-premium users using Spotify API.</p>
              </div>

              <div className="mb-3">
                <h3 className="h5 mb-1">OCR System</h3>
                <p className="small text-muted mb-1">Python, google-cloud-vision</p>
                <p className="small">Scans video or image in real-time in front of a camera and checks if what is needed is present, then sends a message.</p>
              </div>

              <div>
                <h3 className="h5 mb-1">Schedule Bot</h3>
                <p className="small text-muted mb-1">Python, GraphQL, Telegram API</p>
                <p className="small">Telegram bot that sends the respective schedule for the day fetched from the database.</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <a
              href="/assets/resume.pdf"
              download
              className="btn btn-primary btn-lg px-5"
              onClick={(e) => {
                if (!document.getElementById('resume-pdf')) {
                  e.preventDefault();
                  alert('Resume PDF file not found. Please add your resume PDF to the assets folder.');
                }
              }}
            >
              Download Resume PDF
            </a>
            <p className="text-muted small mt-2">
              PDF file required in assets/resume.pdf
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
