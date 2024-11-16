"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Building } from "lucide-react";

const useExpandable = (initialState = false) => {
  const [isExpanded, setIsExpanded] = useState(initialState);
  const toggle = () => setIsExpanded(!isExpanded);
  return { isExpanded, toggle };
};

export default function Experience() {
  const { isExpanded, toggle } = useExpandable();

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold tracking-tight">Work Experience</h2>

      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-gray-200 p-2 rounded-full">
                <Building className="w-8 h-8 text-gray-500" />
              </div>
              <div>
                <CardTitle className="text-xl font-bold">Cron Labs</CardTitle>
                {/* <Badge variant="secondary" className="mt-1"> */}
                Junior Software Developer
                {/* </Badge> */}
              </div>
            </div>
            <CardDescription className="text-right">
              <time dateTime="2024-07" className="font-medium">
                July 2024
              </time>{" "}
              -{" "}
              <time dateTime="2024-11" className="font-medium">
                Present
              </time>
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="space-y-2">
            {/* <Button
                        variant="ghost"
                        onClick={toggle}
                        aria-expanded={isExpanded}
                        aria-controls="achievements-content"
                        className="w-full justify-between"
                        >
                        <span className="font-medium">Key Achievements</span>
                        {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                        </Button> */}
            {/* <div
                            id="achievements-content"
                            className={`space-y-2 text-sm overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-96' : 'max-h-0'
                                }`}
                        >
                            <ul className="list-disc list-inside space-y-2">
                                <li>
                                    Led development of SmartGrow project features using MySQL, Django, and DRF, achieving 20% increase in user satisfaction.
                                    Implemented logistics system with file handling and server-side pagination, reducing duplicate entries by 50%.
                                </li>
                                <li>
                                    Integrated Metrc API for real-time strain data synchronization, reducing data discrepancies by 30%.
                                    Delivered 3 end-to-end features and managed iOS deployment for React Native application.
                                </li>
                            </ul>
                        </div> */}
          </div>

          <div className="flex flex-wrap gap-2">
            {["Django", "Django REST ", "Python", "React Js", "MySQL"].map(
              (skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="transition-colors font-bold text-blue-500 dark:text-blue-400 duration-200 hover:bg-primary hover:text-primary-foreground"
                >
                  {skill}
                </Badge>
              )
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
