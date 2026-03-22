import SocialButtons from "@/components/buttons/social-buttons";
import Footer from "@/components/footer";
import Technologies from "@/components/technologies";
import Projects from "@/components/projects";
import Experience from "@/components/experience";

export default function Page() {
    return (
        <main className="max-w-4xl mx-auto border-x-2 border-dashed flex flex-col gap-y-6 sm:rounded-xl sm:mt-4 bg-background shadow-sm min-h-screen">
            {/* header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 sm:p-6">
                <div>
                    <h1 className="font-bold text-2xl sm:text-3xl text-blue-400 leading-tight">Sumanth JM</h1>
                    <p className="text-sm sm:text-base text-muted-foreground">Software Developer</p>
                </div>
                <div className="w-full sm:w-auto flex justify-end">
                    <SocialButtons />
                </div>
            </div>

            {/* about me */}
            <div className="px-4">
                <p className="text-sm sm:text-base mt-0">
                    Hey there, I&apos;m Sumanth JM, a software developer based from Bangalore, India.
                    Currently learning Rust and Web3.
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


