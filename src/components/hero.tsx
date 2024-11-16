"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Hero() {
  return (
    <div className="flex flex-col min-h-[24vh] justify-center items-center py-8 space-y-6 px-4">
      <div className="flex flex-row items-center gap-4 md:gap-6">
        <div className="flex flex-col items-start space-y-3 md:space-y-4">
          <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent animate-gradient">
            Sumanth JM
          </h1>
          <p className="text-sm md:text-base font-semibold text-muted-foreground text-left max-w-md">
            Junior Software Developer |{" "}
            <span className="relative">
              I love Building things and Listening to Music!{" "}😁
            </span>
          </p>
        </div>
        <Avatar className="w-20 h-20 md:w-32 md:h-32 border-2 border-primary/20">
          <AvatarImage 
            src="https://github.com/shadcn.png" 
            alt="Sumanth JM" 
            className="object-cover"
          />
          <AvatarFallback className="text-xl md:text-2xl">JM</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}