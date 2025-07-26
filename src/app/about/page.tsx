import { 
  ResumeSection, 
  ExperienceItem, 
  SkillCategory, 
  AwardItem, 
  PublicationItem 
} from '@/components/ResumeSection'

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
        <h1 className="text-4xl font-bold text-foreground mb-8 print:text-black print:text-3xl">
          Satoru Akita
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 print:text-gray-800 print:text-lg">
          AI Camera & Edge Sensing Platform Engineer at Sony Semiconductor Solutions Corporation
        </p>
        
        <ResumeSection title="Summary" icon="🧠">
          <p className="print:text-gray-800">
            Engaged in the design, development, and deployment of systems utilizing AI cameras.
            Experienced in both semiconductor processes and software engineering.
            Currently focused on expanding edge AI sensing platforms and creating impactful technical solutions.
          </p>
        </ResumeSection>

        <ResumeSection title="Experience" icon="💼">
          <ExperienceItem
            title="AI Camera & Edge Sensing Platform Engineer (AITRIOS Platform)"
            company="Sony Semiconductor Solutions Corporation"
            period="Apr 2019 – Present"
            achievements={[
              "Proposing and deploying AI camera solutions by Edge Sensing Platform",
              "Supporting technical development of AI-based systems by customers",
              "Developed and released sample applications and tools for AI cameras",
              "Created developer documentation, led hands-on workshops, and gathered feedback from partner companies"
            ]}
          />
        </ResumeSection>

        <ResumeSection title="Education" icon="🎓">
          <ExperienceItem
            title="M.Eng. in Robotics"
            company="Tohoku University"
            period="Apr 2017 – Mar 2019"
            achievements={[
              "Researched MEMS strain sensors using magnetostrictive materials",
              "Attended intensive training programs for security and machine learning",
              "Participated in SecHack365 - NICT's cybersecurity talent development program",
              "Internships at Sony, Mercari, and B.U.G."
            ]}
          />
          
          <ExperienceItem
            title="B.Eng. in Mechanical & Aerospace Engineering"
            company="Tohoku University"
            period="Apr 2013 – Mar 2017"
            achievements={[
              "Studied mechanical engineering, including mechanics, fluid dynamics, control systems, and thermodynamics",
              "Research in molecular robotics using DNA and nanotechnology",
              "Many hands-on projects (rockets, robots, hardware prototyping)"
            ]}
          />
        </ResumeSection>

        <ResumeSection title="Awards & Recognition" icon="🏆">
          <ul className="space-y-3 print:text-gray-800">
            <AwardItem
              title="BIOMOD 2015 – Grand Prize (World Champion)"
              description="Awarded 1st place globally for designing a synthetic molecular robot using DNA"
              year="2015"
            />
            <AwardItem
              title="NASA Space Apps Challenge Tokyo – Winner"
              description="Developed AI-powered hazard mapping system for disaster prediction"
              year="2018"
            />
            <AwardItem
              title="iCAN'14 – 3rd Place Worldwide"
              description="Presented a wearable haptic navigation system using microfluidic tactile displays"
              year="2014"
            />
            <AwardItem
              title="SXSW (2018)"
              description="Selected to exhibit as part of a Japanese delegation and awarded a corporate prize for AI-powered life log camera concept"
              year="2018"
            />
          </ul>
        </ResumeSection>

        <ResumeSection title="Publications" icon="📚">
          <ul className="space-y-3 print:text-gray-800">
            <PublicationItem
              journal="Small Journal"
              year="2017"
              title="Research on MEMS sensors and magnetostrictive materials"
              description="Advanced research in sensor technologies and materials science"
            />
            <PublicationItem
              journal="Micromachines Journal"
              year="2020"
              title="Advanced sensor technologies and applications"
              description="Comprehensive study on modern sensor implementations"
            />
          </ul>
        </ResumeSection>

        <ResumeSection title="Technical Skills" icon="💻">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
            <SkillCategory
              title="Programming Languages"
              skills={[
                "Python (AI/ML, Data Analysis)",
                "JavaScript/TypeScript",
                "C/C++ (Embedded Systems)",
                "MATLAB/Simulink"
              ]}
            />
            <SkillCategory
              title="AI & Machine Learning"
              skills={[
                "TensorFlow/PyTorch",
                "Computer Vision (OpenCV)",
                "Edge AI Deployment",
                "Deep Learning"
              ]}
            />
            <SkillCategory
              title="Hardware & Systems"
              skills={[
                "MEMS Sensor Design",
                "Embedded Systems",
                "IoT Platform Development",
                "Semiconductor Processes"
              ]}
            />
            <SkillCategory
              title="Development & Tools"
              skills={[
                "Git/GitHub",
                "Docker/Kubernetes",
                "AWS/Cloud Platforms",
                "Unity (Game Development)"
              ]}
            />
          </div>
        </ResumeSection>

        <ResumeSection title="Languages" icon="🌐">
          <ul className="print:text-gray-800 space-y-1">
            <li><strong className="print:text-black">Japanese</strong>: Native</li>
            <li><strong className="print:text-black">English</strong>: Proficient (Technical communication, International conferences)</li>
          </ul>
        </ResumeSection>

        <div className="print:hidden mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">📞 Contact Information</h3>
          <p className="text-gray-600 dark:text-gray-300">
            For collaboration opportunities or questions, feel free to reach out through my portfolio contact form or connect with me on professional networks.
          </p>
        </div>
      </div>
    </div>
  )
}
