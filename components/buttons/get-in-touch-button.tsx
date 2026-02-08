import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function GetInTouchButton({ className }: { className?: string }) {
    return (
        <Button
            className={cn(
                "group p-1 bg-primary text-white font-medium flex gap-2 justify-between items-center max-w-4xl rounded-full ps-5 h-auto border-0",
                className
            )}
            size={"sm"}
        >
            <Link
                href="/contact"
                className="flex items-center gap-3 text-primary-foreground text-sm font-medium"
            >
                Get In Touch
                <div className="p-2 bg-background rounded-full group-hover:rotate-45 transition-transform duration-300 ease-in-out">
                    <Icon
                        className="text-foreground"
                        icon="lucide:arrow-up-right"
                        width={16}
                        height={16}
                    />
                </div>
            </Link>
        </Button>
    );
}