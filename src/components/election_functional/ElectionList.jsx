import React from "react";
import ElectionItem from "./ElectionItem";

export default function ElectionList(props) {
  let election = [
    {
      id: 1,
      name: "Head of Kyiv",
      startDate: "20.02.2020",
      endDate: "25.02.2020",
    },
    {
      id: 2,
      name: "President",
      startDate: "23.04.2024",
      endDate: "31.09.2025",
    },
  ];

  return (
    <ul>
      {election.map((elect) => {
        return (
          <ElectionItem
            name={elect.name}
            startDate={elect.startDate}
            endDate={elect.endDate}
          />
        );
      })}
    </ul>
  );
}
