import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";
export default function FeverTokens() {
  const tasks = [
    {
      text: "Demonstrated mastery in modern front-end technologies, ensuring high-quality user interfaces and user experiences. ",
      keywords: ["high-quality user interfaces"],
    },
    {
      text: "Proficient in implementing efficient algorithms and data structures to optimize web applications.",
      keywords: ["VivaTech2022 event"],
    },
    {
      text: "Successfully completed multiple projects, showcasing the ability to apply front-end skills in practical scenarios.",
      keywords: ["completed multiple projects"],
    },
    {
      text: "Adept at presenting project outcomes clearly within team settings, facilitating seamless communication and collaboration.",
      keywords: ["communication and collaboration."],
    },
    {
      text: "Skilled in using GitHub for project showcasing, version control, and collaborative development.",
      keywords: ["GitHub"],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Front-End Developer Trainee{" "}
            {/* <span className="text-AAsecondary"></span> */}
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            May - Nov 2021
          </span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            // set text size on style attribute
            style={{ fontSize: "0.6rem" }}
            onClick={() =>
              window.open("https://www.masaischool.com/", "_blank")
            }
          >
            www.masaischool.com
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
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
