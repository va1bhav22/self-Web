import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function TrouveTavoie() {
  const tasks = [
    {
      text: "Spearheaded and implemented a new design user workflow system for the Front-End Architecture of a complex web application, enhancing user interaction and overall performance.",
      keywords: ["Front-End Architecture"],
    },
    {
      text: "Worked with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, React.js and Vercel.",
      keywords: ["React.js", "Vercel"],
    },
    {
      text: "Interfaced with developers on a daily basis, providing technological expertise.",
      keywords: [],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Front-End Developer
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            Aug 2022 - March 2023
          </span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://thinkzytech.com/", "_blank")}
          >
            www.thinkzytech.com
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(
                      item.text,
                      item.keywords
                    ),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
