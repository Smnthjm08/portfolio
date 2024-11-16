import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building } from "lucide-react";

export default function Experience() {
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
          <div className="space-y-2"></div>

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
