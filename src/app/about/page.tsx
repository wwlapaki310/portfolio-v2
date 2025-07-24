export default function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-foreground mb-8">About Me</h1>
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
          AI Camera & Edge Sensing Platform Engineer at Sony Semiconductor Solutions Corporation
        </p>
        
        <h2>🧠 Summary</h2>
        <p>
          Engaged in the design, development, and deployment of systems utilizing AI cameras.
          Experienced in both semiconductor processes and software engineering.
          Currently focused on expanding edge AI sensing platforms and creating impactful technical solutions.
        </p>

        <h2>💼 Experience</h2>
        <h3>Sony Semiconductor Solutions Corporation (Apr 2019 – Present)</h3>
        <p><strong>AI Camera & Edge Sensing Platform Engineer (AITRIOS Platform)</strong></p>
        <ul>
          <li>Proposing and deploying AI camera solutions by Edge Sensing Platform</li>
          <li>Supporting technical development of AI-based systems by customers</li>
          <li>Developed and released sample applications and tools for AI cameras</li>
          <li>Created developer documentation, led hands-on workshops, and gathered feedback from partner companies</li>
        </ul>

        <h2>🎓 Education</h2>
        <h3>Tohoku University – M.Eng. in Robotics (Apr 2017 – Mar 2019)</h3>
        <ul>
          <li>Researched MEMS strain sensors using magnetostrictive materials</li>
          <li>Attended intensive training programs for security and machine learning</li>
          <li>Internships at Sony, Mercari, and B.U.G.</li>
        </ul>

        <h3>Tohoku University – B.Eng. in Mechanical & Aerospace Engineering (Apr 2013 – Mar 2017)</h3>
        <ul>
          <li>Studied mechanical engineering, including mechanics, fluid dynamics, control systems, and thermodynamics</li>
          <li>Research in molecular robotics using DNA and nanotechnology</li>
          <li>Many hands-on projects (rockets, robots, hardware prototyping)</li>
        </ul>

        <h2>🏆 Awards</h2>
        <ul>
          <li><strong>BIOMOD 2015 – Grand Prize (World Champion)</strong>: Awarded 1st place globally for designing a synthetic molecular robot using DNA</li>
          <li><strong>iCAN'14 – 3rd Place Worldwide</strong>: Presented a wearable haptic navigation system using microfluidic tactile displays</li>
          <li><strong>SXSW (2018)</strong>: Selected to exhibit as part of a Japanese delegation and awarded a corporate prize</li>
        </ul>
      </div>
    </div>
  )
}
