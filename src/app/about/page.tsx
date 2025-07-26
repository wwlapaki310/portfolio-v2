export default function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="print:hidden mb-6">
        <button 
          onClick={() => window.print()}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          📄 Download as PDF
        </button>
      </div>

      <div className="print:text-black">
        <h1 className="text-4xl font-bold text-foreground mb-8 print:text-black print:text-3xl">About Me</h1>
        <div className="prose prose-lg dark:prose-invert max-w-none print:prose-sm print:prose-black">
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 print:text-gray-800 print:text-lg">
            AI Camera & Edge Sensing Platform Engineer at Sony Semiconductor Solutions Corporation
          </p>
          
          <h2 className="print:text-black">🧠 Summary</h2>
          <p className="print:text-gray-800">
            Engaged in the design, development, and deployment of systems utilizing AI cameras.
            Experienced in both semiconductor processes and software engineering.
            Currently focused on expanding edge AI sensing platforms and creating impactful technical solutions.
          </p>

          <h2 className="print:text-black">💼 Experience</h2>
          <h3 className="print:text-black">Sony Semiconductor Solutions Corporation (Apr 2019 – Present)</h3>
          <p className="print:text-gray-800"><strong>AI Camera & Edge Sensing Platform Engineer (AITRIOS Platform)</strong></p>
          <ul className="print:text-gray-800">
            <li>Proposing and deploying AI camera solutions by Edge Sensing Platform</li>
            <li>Supporting technical development of AI-based systems by customers</li>
            <li>Developed and released sample applications and tools for AI cameras</li>
            <li>Created developer documentation, led hands-on workshops, and gathered feedback from partner companies</li>
          </ul>

          <h2 className="print:text-black">🎓 Education</h2>
          <h3 className="print:text-black">Tohoku University – M.Eng. in Robotics (Apr 2017 – Mar 2019)</h3>
          <ul className="print:text-gray-800">
            <li>Researched MEMS strain sensors using magnetostrictive materials</li>
            <li>Attended intensive training programs for security and machine learning</li>
            <li>Participated in <strong>SecHack365</strong> - NICT's cybersecurity talent development program</li>
            <li>Internships at Sony, Mercari, and B.U.G.</li>
          </ul>

          <h3 className="print:text-black">Tohoku University – B.Eng. in Mechanical & Aerospace Engineering (Apr 2013 – Mar 2017)</h3>
          <ul className="print:text-gray-800">
            <li>Studied mechanical engineering, including mechanics, fluid dynamics, control systems, and thermodynamics</li>
            <li>Research in molecular robotics using DNA and nanotechnology</li>
            <li>Many hands-on projects (rockets, robots, hardware prototyping)</li>
          </ul>

          <h2 className="print:text-black">🏆 Awards & Recognition</h2>
          <ul className="print:text-gray-800">
            <li><strong>BIOMOD 2015 – Grand Prize (World Champion)</strong>: Awarded 1st place globally for designing a synthetic molecular robot using DNA</li>
            <li><strong>NASA Space Apps Challenge Tokyo – Winner</strong>: Developed AI-powered hazard mapping system for disaster prediction</li>
            <li><strong>iCAN'14 – 3rd Place Worldwide</strong>: Presented a wearable haptic navigation system using microfluidic tactile displays</li>
            <li><strong>SXSW (2018)</strong>: Selected to exhibit as part of a Japanese delegation and awarded a corporate prize for AI-powered life log camera concept</li>
          </ul>

          <h2 className="print:text-black">📚 Publications</h2>
          <ul className="print:text-gray-800">
            <li><strong>Small Journal (2017)</strong>: Research on MEMS sensors and magnetostrictive materials</li>
            <li><strong>Micromachines Journal (2020)</strong>: Advanced sensor technologies and applications</li>
          </ul>

          <h2 className="print:text-black">💻 Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
            <div className="print:break-inside-avoid">
              <h3 className="font-semibold text-lg mb-3 print:text-black">Programming Languages</h3>
              <ul className="space-y-1 text-gray-600 dark:text-gray-300 print:text-gray-800">
                <li>• Python (AI/ML, Data Analysis)</li>
                <li>• JavaScript/TypeScript</li>
                <li>• C/C++ (Embedded Systems)</li>
                <li>• MATLAB/Simulink</li>
              </ul>
            </div>
            <div className="print:break-inside-avoid">
              <h3 className="font-semibold text-lg mb-3 print:text-black">AI & Machine Learning</h3>
              <ul className="space-y-1 text-gray-600 dark:text-gray-300 print:text-gray-800">
                <li>• TensorFlow/PyTorch</li>
                <li>• Computer Vision (OpenCV)</li>
                <li>• Edge AI Deployment</li>
                <li>• Deep Learning</li>
              </ul>
            </div>
            <div className="print:break-inside-avoid">
              <h3 className="font-semibold text-lg mb-3 print:text-black">Hardware & Systems</h3>
              <ul className="space-y-1 text-gray-600 dark:text-gray-300 print:text-gray-800">
                <li>• MEMS Sensor Design</li>
                <li>• Embedded Systems</li>
                <li>• IoT Platform Development</li>
                <li>• Semiconductor Processes</li>
              </ul>
            </div>
            <div className="print:break-inside-avoid">
              <h3 className="font-semibold text-lg mb-3 print:text-black">Development & Tools</h3>
              <ul className="space-y-1 text-gray-600 dark:text-gray-300 print:text-gray-800">
                <li>• Git/GitHub</li>
                <li>• Docker/Kubernetes</li>
                <li>• AWS/Cloud Platforms</li>
                <li>• Unity (Game Development)</li>
              </ul>
            </div>
          </div>

          <h2 className="print:text-black">🌐 Languages</h2>
          <ul className="print:text-gray-800">
            <li><strong>Japanese</strong>: Native</li>
            <li><strong>English</strong>: Proficient (Technical communication, International conferences)</li>
          </ul>

          <div className="print:hidden mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">📞 Contact Information</h3>
            <p className="text-gray-600 dark:text-gray-300">
              For collaboration opportunities or questions, feel free to reach out through my portfolio contact form or connect with me on professional networks.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
