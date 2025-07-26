interface ResumeSectionProps {
  title: string
  children: React.ReactNode
  className?: string
  icon?: string
}

export function ResumeSection({ title, children, className = "", icon }: ResumeSectionProps) {
  return (
    <section className={`mb-8 print:mb-6 ${className}`}>
      <h2 className="text-2xl font-bold text-foreground mb-4 print:text-black print:text-xl flex items-center gap-2 print:break-after-avoid">
        {icon && <span className="print:hidden">{icon}</span>}
        {title}
      </h2>
      <div className="print:text-gray-800">
        {children}
      </div>
    </section>
  )
}

interface ExperienceItemProps {
  title: string
  company: string
  period: string
  description?: string
  achievements?: string[]
  className?: string
}

export function ExperienceItem({ title, company, period, description, achievements, className = "" }: ExperienceItemProps) {
  return (
    <div className={`mb-6 print:mb-4 print:break-inside-avoid ${className}`}>
      <h3 className="text-lg font-semibold text-foreground print:text-black">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 print:text-gray-700 font-medium">{company}</p>
      <p className="text-sm text-gray-500 dark:text-gray-400 print:text-gray-600 mb-2">{period}</p>
      {description && (
        <p className="text-gray-700 dark:text-gray-300 print:text-gray-800 mb-2">{description}</p>
      )}
      {achievements && achievements.length > 0 && (
        <ul className="text-gray-600 dark:text-gray-300 print:text-gray-800 space-y-1">
          {achievements.map((achievement, index) => (
            <li key={index} className="text-sm">• {achievement}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

interface SkillCategoryProps {
  title: string
  skills: string[]
  className?: string
}

export function SkillCategory({ title, skills, className = "" }: SkillCategoryProps) {
  return (
    <div className={`print:break-inside-avoid ${className}`}>
      <h3 className="font-semibold text-lg mb-3 print:text-black">{title}</h3>
      <ul className="space-y-1 text-gray-600 dark:text-gray-300 print:text-gray-800">
        {skills.map((skill, index) => (
          <li key={index} className="text-sm">• {skill}</li>
        ))}
      </ul>
    </div>
  )
}

interface AwardItemProps {
  title: string
  description: string
  year?: string
  className?: string
}

export function AwardItem({ title, description, year, className = "" }: AwardItemProps) {
  return (
    <li className={`print:break-inside-avoid ${className}`}>
      <strong className="print:text-black">{title}</strong>
      {year && <span className="text-gray-500 print:text-gray-600 text-sm ml-1">({year})</span>}
      : <span className="print:text-gray-800">{description}</span>
    </li>
  )
}

interface PublicationItemProps {
  title: string
  journal: string
  year: string
  description?: string
  className?: string
}

export function PublicationItem({ title, journal, year, description, className = "" }: PublicationItemProps) {
  return (
    <li className={`print:break-inside-avoid ${className}`}>
      <strong className="print:text-black">{journal} ({year})</strong>
      {title && <span className="print:text-gray-800">: {title}</span>}
      {description && <div className="text-sm text-gray-600 dark:text-gray-400 print:text-gray-700 mt-1">{description}</div>}
    </li>
  )
}
