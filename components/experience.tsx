const experiences = [
    {
        role: "Software Developer",
        company: "Cron Labs",
        location: "Bangalore, India",
        duration: "July 2024 – Present",
        description: [
            "Delivered 12+ end-to-end features for the SmartGrow project using MySQL, React, Django, and Django Rest Framework; key contributions include a Custom Routine Creation feature and dependent routine linkage, enabling cascading data flow between tasks and reducing task management time by 30%.",
            "Integrated the Metrc API for plants, plant batches, and strains, based on client feedback that manual updates to “OK Metrc” took 30–40 minutes; reduced syncing time to 5–10 minutes, improving operational efficiency by 50% and minimizing manual errors.",
            "Developed a scalable Invoice Extraction Platform leveraging LLMs to transform unstructured invoices into structured data, implementing RBAC and secure authentication, and building RESTful APIs with optimized queries, debounced searches, and API pagination, reducing API calls and improving data load times by 30%."
        ]
    },
    {
        role: "Full Stack Developer Intern",
        company: "Varcons Technologies",
        location: "Bangalore, India",
        duration: "Aug 2023 – Sep 2023",
        description: [
            "Implemented 3 client-requested features, including property search filters and interactive maps, using MERN stack, delivering a user-friendly interface with a 95% passing rate during testing.",
            "Followed a Test-Driven Development (TDD) approach using Jest to ensure reliability and quality, leading to a 15% reduction in bugs during the deployment phase."
        ]
    }
];

export default function Experience() {
    return (
        <div className="flex flex-col gap-y-10 w-full mt-4">
            {experiences.map((experience, index) => (
                <div key={index} className="flex flex-col gap-y-3">
                    <div className="flex flex-row items-center justify-between">
                        <div>
                            <h3 className="font-semibold text-lg">{experience.role}</h3>
                            <p className="text-sm font-medium text-muted-foreground">{experience.company}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-sm font-medium">{experience.duration}</p>
                            <p className="text-xs text-muted-foreground">{experience.location}</p>
                        </div>
                    </div>

                    <ul className="list-disc list-outside ml-4 flex flex-col gap-y-2">
                        {experience.description.map((point, i) => (
                            <li key={i} className="text-sm leading-relaxed">
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
