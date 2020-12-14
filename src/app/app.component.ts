import { Component, OnInit } from "@angular/core";
import { ChartOptions, ChartType, ChartDataSets } from "chart.js";
import { Label } from "ng2-charts";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [
        {
          gridLines: {
            display: true
          },
          ticks: {
            display: true, //this removed the labels on the x-axis
            beginAtZero: true
          }
        }
      ],
      yAxes: [
        {
          gridLines: {
            display: false
          },
          ticks: {
            display: false //this removed the labels on the x-axis
          }
        }
      ]
    }
  };
  public barChartLabels: Label[] = [" "];
  public barChartType: ChartType = "horizontalBar";
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [20], label: "Series A" },
    { data: [30], label: "Series B" },
    { data: [10], label: "Series B" }
  ];

  constructor() {}

  ngOnInit() {}
}
