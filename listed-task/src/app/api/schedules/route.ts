import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const data = [
    {
      id: 1,
      title: "Meeting with suppliers at Kutu Bali",
      time: "14:00-15:00",
      place: "at Sunset Road, Kutu Bali",
      borderColor: "green",
    },
    {
      id: 2,
      title: "Check operation at Giga Factory 1",
      time: "18:00-20:00",
      place: "at Central Jakarta",
      borderColor: "violet",
    },
  ];

  return NextResponse.json(data);
}
