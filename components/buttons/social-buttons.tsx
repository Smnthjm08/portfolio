import { Button } from "@/components/ui/button";
import Image from "next/image";

const SocialButtons = () => {
  return (
    <div className="flex items-center justify-center gap-4 flex-wrap">

      <Button
        variant="outline"
        type="button"
        className="rounded-lg hover:scale-120 transition-all duration-300"
      >
        <Image
          src="./github.svg"
          alt="github icon"
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
