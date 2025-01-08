import React from "react";

interface Result {
  metric: string;
  result: string;
}

function Metric({ result }: { result: Result }) {
  return (
    <div className="grid h-24 w-24 place-content-center rounded-xl border p-8 text-center md:h-32 md:w-32">
      <h4 className="pb-2 font-bold">{result.metric}</h4>
      <h5 className="text-green-500">{result.result}</h5>
    </div>
  );
}

function ResultsPanel() {
  return (
    <div className="pb-10 pt-20">
      <h2 className="pb-8 text-center font-fat text-4xl font-bold">
        Our average client&apos;s results
      </h2>
      <h3 className="pb-16 text-center font-fat text-3xl font-bold opacity-65">
        (Numbers are not real yet)
      </h3>
      <ul className="mx-auto grid w-fit grid-cols-2 gap-6 pb-16 md:grid-cols-5">
        {results.map((result, index) => {
          return (
            <li key={index}>
              <Metric result={result} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ResultsPanel;

const results: Result[] = [
  {
    metric: "SEO Ranking",
    result: "+13%",
  },
  {
    metric: "Traffic",
    result: "+15%",
  },
  {
    metric: "Speed",
    result: "+25%",
  },
  {
    metric: "Watch time",
    result: "+780%",
  },
  {
    metric: "Bounce Rate",
    result: "-15%",
  },
  {
    metric: "Leads",
    result: "+70%",
  },
  {
    metric: "Cost per Acquisition",
    result: "-20%",
  },
  {
    metric: "New Clients",
    result: "+10%",
  },
  {
    metric: "Revenue",
    result: "+8%",
  },
  {
    metric: "ROI Time",
    result: "3 Mo",
  },
];
