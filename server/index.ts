import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!!");
});

app.get("/line", (req, res) => {
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
  res.json(data);
});

app.get("/pie", (req, res) => {
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
  res.json(data);
});

app.get("/schedule", (req, res) => {
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
  res.send(data);
});

const port = 3001;

app.listen(port, () => console.log(`App listening on port: ${port}`));
