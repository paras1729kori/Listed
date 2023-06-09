import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const data = {
    labels: ["May-June 2021", "May-June 2021", "May-June 2021"],
    datasets: [
      {
        label: "Percentage: ",
        data: [14, 31, 55],
        backgroundColor: ["#EE8484", "#F6DC7D", "#98D89E"],
      },
    ],
  };

  return NextResponse.json(data);
}
