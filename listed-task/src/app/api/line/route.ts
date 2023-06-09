import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const data = {
    labels: [0, "Week 1", "Week 2", "Week 3", "Week 4", ""],
    datasets: [
      {
        label: "Guest",
        data: [200, 300, 200, 300, 200, 400, 500],
        borderColor: "#EE8484",
        tension: 0.5,
      },
      {
        label: "User",
        data: [100, 400, 120, 400, 200, 250, 400],
        borderColor: "#98D89E",
        tension: 0.5,
      },
    ],
  };

  return NextResponse.json(data);
}
