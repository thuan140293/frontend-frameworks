import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

import CenterAlign from "@/components/CenterAlign";
import { frameworks } from "@/constants/index";

const handleClickFramework = (key: string) => {
  console.log('key', key)
}

const Home = () => {
  return (
    <CenterAlign>
      <div className="grid grid-cols-3 gap-6">
        {frameworks.map((framework, index) => (
          <Card
            key={index}
            className={cn("w-[380px] h-[300px] cursor-pointer")}
            onClick={() => handleClickFramework(framework.key)}
          >
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                {React.cloneElement(framework.icon, {
                  style: { fill: framework.fillColor },
                  className: "w-8 h-8 mr-2",
                })}
                {framework.title}
              </CardTitle>
              <CardDescription>{framework.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{framework.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </CenterAlign>
  );
};

export default Home;
