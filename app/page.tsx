import SocialButtons from "@/components/buttons/social-buttons";
import Footer from "@/components/footer";
import Technologies from "@/components/technologies";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import { Badge } from "@/components/ui/badge";

export default function Page() {
    return (
        <main className="max-w-4xl mx-auto border-x-2 border-dashed flex flex-col gap-y-6">
            {/* header */}
            <div className="flex flex-row items-center justify-between p-4">
                <div>
                    <h1 className="font-bold text-3xl text-blue-400">Sumanth JM</h1>
                    <p className="text-base text-muted-foreground">Software Developer</p>
                </div>
                <SocialButtons />
            </div>

            {/* about me */}
            <div className="px-4">
                <h2 className="font-bold text-md border-b border-dashed pb-1">About Me</h2>
                <p className="text-base mt-4">
                    Hey there, I'm Sumanth JM, a software developer based from Bangalore, India.
                    Currently learning GoLang and DevOps.
                </p>
            </div>

            {/* experience */}
            <div className="flex flex-col gap-y-2 px-4">
                <h2 className="font-bold text-md border-b border-dashed pb-1">Experience</h2>
                <Experience />
            </div>

            {/* technologies */}
            <div className="flex flex-col gap-y-2 px-4">
                <h2 className="font-bold text-md border-b border-dashed pb-1">Technologies</h2>
                <Technologies />
            </div>

            {/* projects */}
            <div className="flex flex-col gap-y-2 px-4 mb-8">
                <h2 className="font-bold text-md border-b border-dashed pb-1">Projects</h2>
                <Projects />
            </div>

            {/* footer */}
            <Footer />
        </main>
    );
}


