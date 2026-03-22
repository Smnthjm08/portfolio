import { Button } from "@/components/ui/button";
import Image from "next/image";

const SocialButtons = () => {
  return (
    <div className="flex items-center justify-center gap-3 flex-wrap w-full sm:w-auto">

      <Button
        variant="outline"
        type="button"
        className="rounded-lg hover:scale-120 transition-all duration-300"
      >
        <Image
          src="https://images.shadcnspace.com/assets/svgs/icon-github.svg"
          alt="github icon"
          width={16}
          height={16}
          className="dark:hidden"
        />
        <Image
          src="https://images.shadcnspace.com/assets/svgs/icon-github-white.svg"
          alt="github icon"
          height={16}
          width={16}
          className="hidden dark:block"
        />
      </Button>



      <Button
        variant="outline"
        type="button"
        className="rounded-lg hover:scale-120 transition-all duration-300"
      >
        <Image
          src="./linkedin.svg"
          alt="linkedin icon"
          width={16}
          height={16}
        />
      </Button>

      <Button
        variant="outline"
        type="button"
        className="rounded-lg hover:scale-120 transition-all duration-300"
      >
        <Image
          src="./discord.svg"
          alt="discord icon"
          width={16}
          height={16}
        />
      </Button>

    </div>
  );
};

export default SocialButtons;
