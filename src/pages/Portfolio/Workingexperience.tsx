const PawIcon = () => (
  <svg className="w-4 h-4 text-emerald-500" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9C22.1 9 23 9.9 23 11C23 12.1 22.1 13 21 13C19.9 13 19 12.1 19 11C19 9.9 19.9 9 21 9ZM3 9C4.1 9 5 9.9 5 11C5 12.1 4.1 13 3 13C1.9 13 1 12.1 1 11C1 9.9 1.9 9 3 9ZM19 14.5C19.8 14.5 20.5 15.2 20.5 16C20.5 16.8 19.8 17.5 19 17.5C18.2 17.5 17.5 16.8 17.5 16C17.5 15.2 18.2 14.5 19 14.5ZM5 14.5C5.8 14.5 6.5 15.2 6.5 16C6.5 16.8 5.8 17.5 5 17.5C4.2 17.5 3.5 16.8 3.5 16C3.5 15.2 4.2 14.5 5 14.5ZM12 18C15.5 18 18.5 19.5 18.5 21.5V22H5.5V21.5C5.5 19.5 8.5 18 12 18Z" />
  </svg>
)

const SkillBar = ({ skill, percentage }: { skill: string; percentage: number }) => (
  <div className="mb-6">
    <div className="flex items-center justify-between mb-2">
      <span className="text-gray-700 font-medium text-sm uppercase tracking-wide">{skill}</span>
      <div className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">{percentage}%</div>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div
        className="bg-emerald-500 h-2 rounded-full transition-all duration-300 ease-out"
        style={{ width: `${percentage}%` }}
      />
    </div>
  </div>
)

export default function WorkingExperience() {
  const earlyYearsJobs = [
    "Animal Care Attendants",
    "Veterinary Technicians/Technologists",
    "Groomers",
    "Pet Trainers/Behaviorists",
    "Pet Sitters/Walkers",
    "Animal Rescue Workers",
  ]

  const skills = [
    { skill: "PETS CARE", percentage: 90 },
    { skill: "VETERINARY CARE", percentage: 60 },
    { skill: "SMALL PET CARE", percentage: 80 },
    { skill: "VETERINARY CARE", percentage: 95 },
  ]

  return (
    <section className="max-w-6xl  mx-auto px-6 py-12">
      {/* Main Header */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-blue-800 mb-6">Working Experience</h2>
        <p className="text-gray-600 leading-relaxed text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
          totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia magni dolores
          eos qui ratione voluptatem sequi nesciunt Ut enim ad minim veniam.
        </p>
      </div>

      {/* Two Column Layout */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Early Years Section */}
        <div>
          <h3 className="text-3xl font-bold text-blue-800 mb-4">Early Years</h3>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna.
          </p>

          <div className="space-y-4">
            {earlyYearsJobs.map((job, index) => (
              <div key={index} className="flex items-center gap-3">
                <PawIcon />
                <span className="text-gray-700">{job}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Skills Section */}
        <div>
          <h3 className="text-3xl font-bold text-blue-800 mb-8">Professional Skills</h3>

          <div>
            {skills.map((skillData, index) => (
              <SkillBar key={index} skill={skillData.skill} percentage={skillData.percentage} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
