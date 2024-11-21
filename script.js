const ganttData = {
    chart: {
      dateformat: "mm/dd/yyyy",
      caption: "Event Planning Process",
      theme: "fusion",
      canvasborderalpha: "40",
      ganttlinealpha: "50",
      exportEnabled: 1,
      toolbarButtonScale: 0
    },
    tasks: {
      color: "#5D62B5",
      task: [
        {
          start: "03/07/2018",
          end: "03/17/2018"
        },
        {
          start: "03/14/2018",
          end: "03/28/2018"
        },
        {
          start: "03/15/2018",
          end: "03/31/2018"
        },
        {
          start: "04/02/2018",
          end: "04/12/2018"
        },
        {
          start: "04/12/2018",
          end: "04/30/2018"
        },
        {
          start: "04/20/2018",
          end: "05/06/2018"
        },
        {
          start: "04/30/2018",
          end: "05/10/2018"
        },
        {
          start: "04/30/2018",
          end: "05/25/2018"
        },
        {
          start: "05/04/2018",
          end: "06/05/2018"
        }
      ]
    },
    processes: {
      headertext: "Task",
      headeralign: "left",
      fontsize: "14",
      isbold: "0",
      align: "left",
      process: [
        {
          label: "Define event goals"
        },
        {
          label: "Source venue options"
        },
        {
          label: "Finalize speaker reach out list"
        },
        {
          label: "Compose sponsorship strategy"
        },
        {
          label: "Reach out to sponsors"
        },
        {
          label: "Create social media campaign"
        },
        {
          label: "Reach out to blogs for backlinks"
        },
        {
          label: "Optimize SEO ranking"
        },
        {
          label: "Publish event lead up vlog series"
        }
      ]
    },
    categories: [
      {
        category: [
          {
            start: "03/05/2018",
            end: "03/31/2018",
            label: "March"
          },
          {
            start: "04/01/2018",
            end: "04/30/2018",
            label: "April"
          },
          {
            start: "05/01/2018",
            end: "05/31/2018",
            label: "May"
          },
          {
            start: "06/01/2018",
            end: "06/10/2018",
            label: "June"
          }
        ]
      },
      {
        category: [
          {
            start: "03/05/2018",
            end: "03/11/2018",
            label: "W 1"
          },
          {
            start: "03/12/2018",
            end: "03/18/2018",
            label: "W 2"
          },
          {
            start: "03/19/2018",
            end: "03/25/2018",
            label: "W 3"
          },
          {
            start: "03/26/2018",
            end: "04/01/2018",
            label: "W 4"
          },
          {
            start: "04/02/2018",
            end: "04/08/2018",
            label: "W 5"
          },
          {
            start: "04/09/2018",
            end: "04/15/2018",
            label: "W 6"
          },
          {
            start: "04/16/2018",
            end: "04/22/2018",
            label: "W 7"
          },
          {
            start: "04/23/2018",
            end: "04/29/2018",
            label: "W 8"
          },
          {
            start: "04/30/2018",
            end: "05/06/2018",
            label: "W 9"
          },
          {
            start: "05/07/2018",
            end: "05/13/2018",
            label: "W 10"
          },
          {
            start: "05/14/2018",
            end: "05/20/2018",
            label: "W 11"
          },
          {
            start: "05/21/2018",
            end: "05/27/2018",
            label: "W 12"
          },
          {
            start: "05/28/2018",
            end: "06/03/2018",
            label: "W 13"
          },
          {
            start: "06/04/2018",
            end: "06/10/2018",
            label: "W 14"
          }
        ]
      }
    ]
  };
  
  const candlestickData = {
    chart: {
      caption: "Bitcoin Price",
      subcaption: "Q4-2017",
      numberprefix: "$",
      pyaxisname: "Price (USD)",
      vyaxisname: "Volume traded",
      theme: "fusion",
      showvolumechart: "1",
      vnumberprefix: "$",
      exportEnabled: 1,
      toolbarButtonScale: 0
    },
    categories: [
      {
        category: [
          {
            label: "Oct",
            x: "1"
          },
          {
            label: "Nov",
            x: "32"
          },
          {
            label: "Dec",
            x: "62"
          }
        ]
      }
    ],
    dataset: [
      {
        data: [
          {
            tooltext:
              "<b>Oct 01, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 4341.05,
            high: 4403.74,
            low: 4269.81,
            close: 4403.74,
            volume: 1208210000,
            x: 1
          },
          {
            tooltext:
              "<b>Oct 02, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 4395.81,
            high: 4470.23,
            low: 4377.46,
            close: 4409.32,
            volume: 1431730000,
            x: 2
          },
          {
            tooltext:
              "<b>Oct 03, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 4408.46,
            high: 4432.47,
            low: 4258.89,
            close: 4317.48,
            volume: 1288020000,
            x: 3
          },
          {
            tooltext:
              "<b>Oct 04, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 4319.37,
            high: 4352.31,
            low: 4210.42,
            close: 4229.36,
            volume: 1116770000,
            x: 4
          },
          {
            tooltext:
              "<b>Oct 05, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 4229.88,
            high: 4362.64,
            low: 4164.05,
            close: 4328.41,
            volume: 1161770000,
            x: 5
          },
          {
            tooltext:
              "<b>Oct 06, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 4324.46,
            high: 4413.27,
            low: 4320.53,
            close: 4370.81,
            volume: 1069940000,
            x: 6
          },
          {
            tooltext:
              "<b>Oct 07, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 4369.35,
            high: 4443.88,
            low: 4321.05,
            close: 4426.89,
            volume: 906928000,
            x: 7
          },
          {
            tooltext:
              "<b>Oct 08, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 4429.67,
            high: 4624.14,
            low: 4405.64,
            close: 4610.48,
            volume: 1313870000,
            x: 8
          },
          {
            tooltext:
              "<b>Oct 09, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 4614.52,
            high: 4878.71,
            low: 4564.25,
            close: 4772.02,
            volume: 1968740000,
            x: 9
          },
          {
            tooltext:
              "<b>Oct 10, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 4776.21,
            high: 4922.17,
            low: 4765.1,
            close: 4781.99,
            volume: 1597140000,
            x: 10
          },
          {
            tooltext:
              "<b>Oct 11, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 4789.25,
            high: 4873.73,
            low: 4751.63,
            close: 4826.48,
            volume: 1222280000,
            x: 11
          },
          {
            tooltext:
              "<b>Oct 12, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 4829.58,
            high: 5446.91,
            low: 4822,
            close: 5446.91,
            volume: 2791610000,
            x: 12
          },
          {
            tooltext:
              "<b>Oct 13, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 5464.16,
            high: 5840.3,
            low: 5436.85,
            close: 5647.21,
            volume: 3615480000,
            x: 13
          },
          {
            tooltext:
              "<b>Oct 14, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 5643.53,
            high: 5837.7,
            low: 5591.64,
            close: 5831.79,
            volume: 1669030000,
            x: 14
          },
          {
            tooltext:
              "<b>Oct 15, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 5835.96,
            high: 5852.48,
            low: 5478.61,
            close: 5678.19,
            volume: 1976040000,
            x: 15
          },
          {
            tooltext:
              "<b>Oct 16, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 5687.57,
            high: 5776.23,
            low: 5544.21,
            close: 5725.59,
            volume: 2008070000,
            x: 16
          },
          {
            tooltext:
              "<b>Oct 17, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 5741.58,
            high: 5800.35,
            low: 5472.72,
            close: 5605.51,
            volume: 1821570000,
            x: 17
          },
          {
            tooltext:
              "<b>Oct 18, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 5603.82,
            high: 5603.82,
            low: 5151.44,
            close: 5590.69,
            volume: 2399270000,
            x: 18
          },
          {
            tooltext:
              "<b>Oct 19, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 5583.74,
            high: 5744.35,
            low: 5531.06,
            close: 5708.52,
            volume: 1780540000,
            x: 19
          },
          {
            tooltext:
              "<b>Oct 20, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 5708.11,
            high: 6060.11,
            low: 5627.23,
            close: 6011.45,
            volume: 2354430000,
            x: 20
          },
          {
            tooltext:
              "<b>Oct 21, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 5996.79,
            high: 6194.88,
            low: 5965.07,
            close: 6031.6,
            volume: 2207100000,
            x: 21
          },
          {
            tooltext:
              "<b>Oct 22, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 6036.66,
            high: 6076.26,
            low: 5792.34,
            close: 6008.42,
            volume: 2034630000,
            x: 22
          },
          {
            tooltext:
              "<b>Oct 23, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 6006,
            high: 6075.59,
            low: 5732.47,
            close: 5930.32,
            volume: 2401840000,
            x: 23
          },
          {
            tooltext:
              "<b>Oct 24, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 5935.52,
            high: 5935.52,
            low: 5504.18,
            close: 5526.64,
            volume: 2735700000,
            x: 24
          },
          {
            tooltext:
              "<b>Oct 25, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 5524.6,
            high: 5754.33,
            low: 5397.88,
            close: 5750.8,
            volume: 1966990000,
            x: 25
          },
          {
            tooltext:
              "<b>Oct 26, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 5747.95,
            high: 5976.8,
            low: 5721.22,
            close: 5904.83,
            volume: 1905040000,
            x: 26
          },
          {
            tooltext:
              "<b>Oct 27, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 5899.74,
            high: 5988.39,
            low: 5728.82,
            close: 5780.9,
            volume: 1710130000,
            x: 27
          },
          {
            tooltext:
              "<b>Oct 28, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 5787.82,
            high: 5876.72,
            low: 5689.19,
            close: 5753.09,
            volume: 1403920000,
            x: 28
          },
          {
            tooltext:
              "<b>Oct 29, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 5754.44,
            high: 6255.71,
            low: 5724.58,
            close: 6153.85,
            volume: 2859040000,
            x: 29
          },
          {
            tooltext:
              "<b>Oct 30, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 6114.85,
            high: 6214.99,
            low: 6040.85,
            close: 6130.53,
            volume: 1772150000,
            x: 30
          },
          {
            tooltext:
              "<b>Oct 31, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 6132.02,
            high: 6470.43,
            low: 6103.33,
            close: 6468.4,
            volume: 2311380000,
            x: 31
          },
          {
            tooltext:
              "<b>Nov 01, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 6440.97,
            high: 6767.31,
            low: 6377.88,
            close: 6767.31,
            volume: 2870320000,
            x: 32
          },
          {
            tooltext:
              "<b>Nov 02, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 6777.77,
            high: 7367.33,
            low: 6758.72,
            close: 7078.5,
            volume: 4653770000,
            x: 33
          },
          {
            tooltext:
              "<b>Nov 03, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 7087.53,
            high: 7461.29,
            low: 7002.94,
            close: 7207.76,
            volume: 3369860000,
            x: 34
          },
          {
            tooltext:
              "<b>Nov 04, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 7164.48,
            high: 7492.86,
            low: 7031.28,
            close: 7379.95,
            volume: 2483800000,
            x: 35
          },
          {
            tooltext:
              "<b>Nov 05, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 7404.52,
            high: 7617.48,
            low: 7333.19,
            close: 7407.41,
            volume: 2380410000,
            x: 36
          },
          {
            tooltext:
              "<b>Nov 06, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 7403.22,
            high: 7445.77,
            low: 7007.31,
            close: 7022.76,
            volume: 3111900000,
            x: 37
          },
          {
            tooltext:
              "<b>Nov 07, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 7023.1,
            high: 7253.32,
            low: 7023.1,
            close: 7144.38,
            volume: 2326340000,
            x: 38
          },
          {
            tooltext:
              "<b>Nov 08, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 7141.38,
            high: 7776.42,
            low: 7114.02,
            close: 7459.69,
            volume: 4602200000,
            x: 39
          },
          {
            tooltext:
              "<b>Nov 09, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 7446.83,
            high: 7446.83,
            low: 7101.52,
            close: 7143.58,
            volume: 3226250000,
            x: 40
          },
          {
            tooltext:
              "<b>Nov 10, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 7173.73,
            high: 7312,
            low: 6436.87,
            close: 6618.14,
            volume: 5208250000,
            x: 41
          },
          {
            tooltext:
              "<b>Nov 11, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 6618.61,
            high: 6873.15,
            low: 6204.22,
            close: 6357.6,
            volume: 4908680000,
            x: 42
          },
          {
            tooltext:
              "<b>Nov 12, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 6295.45,
            high: 6625.05,
            low: 5519.01,
            close: 5950.07,
            volume: 8957350000,
            x: 43
          },
          {
            tooltext:
              "<b>Nov 13, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 5938.25,
            high: 6811.19,
            low: 5844.29,
            close: 6559.49,
            volume: 6263250000,
            x: 44
          },
          {
            tooltext:
              "<b>Nov 14, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 6561.48,
            high: 6764.98,
            low: 6461.75,
            close: 6635.75,
            volume: 3197110000,
            x: 45
          },
          {
            tooltext:
              "<b>Nov 15, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 6634.76,
            high: 7342.25,
            low: 6634.76,
            close: 7315.54,
            volume: 4200880000,
            x: 46
          },
          {
            tooltext:
              "<b>Nov 16, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 7323.24,
            high: 7967.38,
            low: 7176.58,
            close: 7871.69,
            volume: 5123810000,
            x: 47
          },
          {
            tooltext:
              "<b>Nov 17, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 7853.57,
            high: 8004.59,
            low: 7561.09,
            close: 7708.99,
            volume: 4651670000,
            x: 48
          },
          {
            tooltext:
              "<b>Nov 18, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 7697.21,
            high: 7884.99,
            low: 7463.44,
            close: 7790.15,
            volume: 3667190000,
            x: 49
          },
          {
            tooltext:
              "<b>Nov 19, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 7766.03,
            high: 8101.91,
            low: 7694.1,
            close: 8036.49,
            volume: 3149320000,
            x: 50
          },
          {
            tooltext:
              "<b>Nov 20, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 8039.07,
            high: 8336.86,
            low: 7949.36,
            close: 8200.64,
            volume: 3488450000,
            x: 51
          },
          {
            tooltext:
              "<b>Nov 21, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 8205.74,
            high: 8348.66,
            low: 7762.71,
            close: 8071.26,
            volume: 4277610000,
            x: 52
          },
          {
            tooltext:
              "<b>Nov 22, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 8077.95,
            high: 8302.26,
            low: 8075.47,
            close: 8253.55,
            volume: 3633530000,
            x: 53
          },
          {
            tooltext:
              "<b>Nov 23, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 8232.38,
            high: 8267.4,
            low: 8038.77,
            close: 8038.77,
            volume: 4225180000,
            x: 54
          },
          {
            tooltext:
              "<b>Nov 24, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 8074.02,
            high: 8374.16,
            low: 7940.93,
            close: 8253.69,
            volume: 5058610000,
            x: 55
          },
          {
            tooltext:
              "<b>Nov 25, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 8241.71,
            high: 8790.92,
            low: 8191.15,
            close: 8790.92,
            volume: 4342060000,
            x: 56
          },
          {
            tooltext:
              "<b>Nov 26, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 8789.04,
            high: 9522.93,
            low: 8775.59,
            close: 9330.55,
            volume: 5475580000,
            x: 57
          },
          {
            tooltext:
              "<b>Nov 27, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 9352.72,
            high: 9818.35,
            low: 9352.72,
            close: 9818.35,
            volume: 5653320000,
            x: 58
          },
          {
            tooltext:
              "<b>Nov 28, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 9823.43,
            high: 10125.7,
            low: 9736.3,
            close: 10058.8,
            volume: 6348820000,
            x: 59
          },
          {
            tooltext:
              "<b>Nov 29, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 10077.4,
            high: 11517.4,
            low: 9601.03,
            close: 9888.61,
            volume: 11568800000,
            x: 60
          },
          {
            tooltext:
              "<b>Nov 30, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 9906.79,
            high: 10801,
            low: 9202.05,
            close: 10233.6,
            volume: 8310690000,
            x: 61
          },
          {
            tooltext:
              "<b>Dec 01, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 10198.6,
            high: 11046.7,
            low: 9694.65,
            close: 10975.6,
            volume: 6783120000,
            x: 62
          },
          {
            tooltext:
              "<b>Dec 02, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 10978.3,
            high: 11320.2,
            low: 10905.1,
            close: 11074.6,
            volume: 5138500000,
            x: 63
          },
          {
            tooltext:
              "<b>Dec 03, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 11082.7,
            high: 11858.7,
            low: 10862,
            close: 11323.2,
            volume: 6608310000,
            x: 64
          },
          {
            tooltext:
              "<b>Dec 04, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 11315.4,
            high: 11657.2,
            low: 11081.8,
            close: 11657.2,
            volume: 6132410000,
            x: 65
          },
          {
            tooltext:
              "<b>Dec 05, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 11685.7,
            high: 12032,
            low: 11604.6,
            close: 11916.7,
            volume: 6895260000,
            x: 66
          },
          {
            tooltext:
              "<b>Dec 06, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 11923.4,
            high: 14369.1,
            low: 11923.4,
            close: 14291.5,
            volume: 12656300000,
            x: 67
          },
          {
            tooltext:
              "<b>Dec 07, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 14266.1,
            high: 17899.7,
            low: 14057.3,
            close: 17899.7,
            volume: 17950700000,
            x: 68
          },
          {
            tooltext:
              "<b>Dec 08, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 17802.9,
            high: 18353.4,
            low: 14336.9,
            close: 16569.4,
            volume: 21136000000,
            x: 69
          },
          {
            tooltext:
              "<b>Dec 09, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 16523.3,
            high: 16783,
            low: 13674.9,
            close: 15178.2,
            volume: 13911300000,
            x: 70
          },
          {
            tooltext:
              "<b>Dec 10, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 15168.4,
            high: 15850.6,
            low: 13226.6,
            close: 15455.4,
            volume: 13433300000,
            x: 71
          },
          {
            tooltext:
              "<b>Dec 11, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 15427.4,
            high: 17513.9,
            low: 15404.8,
            close: 16936.8,
            volume: 12153900000,
            x: 72
          },
          {
            tooltext:
              "<b>Dec 12, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 16919.8,
            high: 17781.8,
            low: 16571.6,
            close: 17415.4,
            volume: 14603800000,
            x: 73
          },
          {
            tooltext:
              "<b>Dec 13, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 17500,
            high: 17653.1,
            low: 16039.7,
            close: 16408.2,
            volume: 12976900000,
            x: 74
          },
          {
            tooltext:
              "<b>Dec 14, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 16384.6,
            high: 17085.8,
            low: 16185.9,
            close: 16564,
            volume: 13777400000,
            x: 75
          },
          {
            tooltext:
              "<b>Dec 15, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 16601.3,
            high: 18154.1,
            low: 16601.3,
            close: 17706.9,
            volume: 14310000000,
            x: 76
          },
          {
            tooltext:
              "<b>Dec 16, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 17760.3,
            high: 19716.7,
            low: 17515.3,
            close: 19497.4,
            volume: 12740600000,
            x: 77
          },
          {
            tooltext:
              "<b>Dec 17, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 19475.8,
            high: 20089,
            low: 18974.1,
            close: 19140.8,
            volume: 13314600000,
            x: 78
          },
          {
            tooltext:
              "<b>Dec 18, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 19106.4,
            high: 19371,
            low: 18355.9,
            close: 19114.2,
            volume: 14839500000,
            x: 79
          },
          {
            tooltext:
              "<b>Dec 19, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 19118.3,
            high: 19177.8,
            low: 17275.4,
            close: 17776.7,
            volume: 16894500000,
            x: 80
          },
          {
            tooltext:
              "<b>Dec 20, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 17760.3,
            high: 17934.7,
            low: 16077.7,
            close: 16624.6,
            volume: 22149700000,
            x: 81
          },
          {
            tooltext:
              "<b>Dec 21, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 16642.4,
            high: 17567.7,
            low: 15342.7,
            close: 15802.9,
            volume: 16516600000,
            x: 82
          },
          {
            tooltext:
              "<b>Dec 22, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 15898,
            high: 15943.4,
            low: 11833,
            close: 13831.8,
            volume: 22198000000,
            x: 83
          },
          {
            tooltext:
              "<b>Dec 23, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 13948.7,
            high: 15603.2,
            low: 13828.8,
            close: 14699.2,
            volume: 13086000000,
            x: 84
          },
          {
            tooltext:
              "<b>Dec 24, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 14608.2,
            high: 14626,
            low: 12747.7,
            close: 13925.8,
            volume: 11572300000,
            x: 85
          },
          {
            tooltext:
              "<b>Dec 25, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 13995.9,
            high: 14593,
            low: 13448.9,
            close: 14026.6,
            volume: 10664700000,
            x: 86
          },
          {
            tooltext:
              "<b>Dec 26, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 14036.6,
            high: 16461.2,
            low: 14028.9,
            close: 16099.8,
            volume: 13454300000,
            x: 87
          },
          {
            tooltext:
              "<b>Dec 27, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 16163.5,
            high: 16930.9,
            low: 15114.3,
            close: 15838.5,
            volume: 12487600000,
            x: 88
          },
          {
            tooltext:
              "<b>Dec 28, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 15864.1,
            high: 15888.4,
            low: 13937.3,
            close: 14606.5,
            volume: 12336500000,
            x: 89
          },
          {
            tooltext:
              "<b>Dec 29, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 14695.8,
            high: 15279,
            low: 14307,
            close: 14656.2,
            volume: 13025500000,
            x: 90
          },
          {
            tooltext:
              "<b>Dec 30, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 14681.9,
            high: 14681.9,
            low: 12350.1,
            close: 12952.2,
            volume: 14452600000,
            x: 91
          },
          {
            tooltext:
              "<b>Dec 31, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
            open: 12897.7,
            high: 14377.4,
            low: 12755.6,
            close: 14156.4,
            volume: 12136300000,
            x: 92
          }
        ]
      }
    ]
  };
  
  const bubbleData = {
    chart: {
      caption: "AdWords Campaign Analysis",
      subcaption: "Conversions as % of total",
      xaxisname: "# Conversions",
      yaxisname: "Cost Per Conversion",
      numberprefix: "$",
      theme: "fusion",
      plottooltext: "$name : Share of total conversion: $zvalue%",
      exportEnabled: 1,
      toolbarButtonScale: 0
    },
    categories: [
      {
        verticallinealpha: "20",
        category: [
          {
            label: "0",
            x: "0"
          },
          {
            label: "1500",
            x: "1500",
            showverticalline: "1"
          },
          {
            label: "3000",
            x: "3000",
            showverticalline: "1"
          },
          {
            label: "4500",
            x: "4500",
            showverticalline: "1"
          },
          {
            label: "6000",
            x: "6000",
            showverticalline: "1"
          }
        ]
      }
    ],
    dataset: [
      {
        data: [
          {
            x: "5540",
            y: "16.09",
            z: "30.63",
            name: "Campaign 1"
          },
          {
            x: "4406",
            y: "12.74",
            z: "24.36",
            name: "Campaign 2"
          },
          {
            x: "1079",
            y: "15.79",
            z: "5.97",
            name: "Campaign 3"
          },
          {
            x: "1700",
            y: "8.27",
            z: "9.4",
            name: "Campaign 4"
          },
          {
            x: "853",
            y: "15.89",
            z: "4.71",
            name: "Campaign 5"
          },
          {
            x: "1202",
            y: "10.74",
            z: "6.65",
            name: "Campaign 6"
          },
          {
            x: "2018",
            y: "6.14",
            z: "11.16",
            name: "Campaign 7"
          },
          {
            x: "413",
            y: "19.83",
            z: "2.28",
            name: "Campaign 8"
          },
          {
            x: "586",
            y: "13.96",
            z: "3.24",
            name: "Campaign 9"
          },
          {
            x: "184",
            y: "15.82",
            z: "1.02",
            name: "Campaign 10"
          },
          {
            x: "311",
            y: "5.83",
            z: "1.72",
            name: "Campaign 11"
          },
          {
            x: "35",
            y: "10.76",
            z: "0.19",
            name: "Campaign 12"
          },
          {
            x: "55",
            y: "2.73",
            z: "0.3",
            name: "Campaign 13"
          },
          {
            x: "6",
            y: "21.22",
            z: "0.03",
            name: "Campaign 14"
          }
        ]
      }
    ]
  };
  
  const sunburstData = {
    chart: {
      caption: "World population, 2017",
      subcaption:
        "Click on the segments to Drill-down for region-wise population distribution",
      showplotborder: "1",
      theme: "fusion",
      exportEnabled: 1,
      toolbarButtonScale: 0
    },
    data: [
      {
        id: "0.0",
        parent: "",
        name: "The World",
        value: 7542011839
      },
      {
        id: "1.3",
        parent: "0.0",
        name: "Asia",
        value: 4503248822
      },
      {
        id: "1.1",
        parent: "0.0",
        name: "Africa",
        value: 1256268025
      },
      {
        id: "1.2",
        parent: "0.0",
        name: "America",
        value: 1006801064
      },
      {
        id: "1.4",
        parent: "0.0",
        name: "Europe",
        value: 743253404
      },
      {
        id: "1.5",
        parent: "0.0",
        name: "Oceanic",
        value: 32440524
      },
      {
        id: "2.1",
        parent: "1.1",
        name: "Eastern Africa",
        value: 422036243
      },
      {
        id: "3.1",
        parent: "2.1",
        name: "Ethiopia",
        value: 104957438
      },
      {
        id: "3.2",
        parent: "2.1",
        name: "Tanzania",
        value: 57310019
      },
      {
        id: "3.3",
        parent: "2.1",
        name: "Kenya",
        value: 49699862
      },
      {
        id: "3.4",
        parent: "2.1",
        name: "Uganda",
        value: 42862958
      },
      {
        id: "3.5",
        parent: "2.1",
        name: "Mozambique",
        value: 29668834
      },
      {
        id: "3.6",
        parent: "2.1",
        name: "Madagascar",
        value: 25570895
      },
      {
        id: "3.7",
        parent: "2.1",
        name: "Malawi",
        value: 18622104
      },
      {
        id: "3.8",
        parent: "2.1",
        name: "Zambia",
        value: 17094130
      },
      {
        id: "3.9",
        parent: "2.1",
        name: "Zimbabwe",
        value: 16529904
      },
      {
        id: "3.10",
        parent: "2.1",
        name: "Somalia",
        value: 14742523
      },
      {
        id: "3.11",
        parent: "2.1",
        name: "South Sudan",
        value: 12575714
      },
      {
        id: "3.12",
        parent: "2.1",
        name: "Rwanda",
        value: 12208407
      },
      {
        id: "3.13",
        parent: "2.1",
        name: "Burundi",
        value: 10864245
      },
      {
        id: "3.14",
        parent: "2.1",
        name: "Eritrea",
        value: 5068831
      },
      {
        id: "3.15",
        parent: "2.1",
        name: "Mauritius",
        value: 1265138
      },
      {
        id: "3.16",
        parent: "2.1",
        name: "Djibouti",
        value: 956985
      },
      {
        id: "3.17",
        parent: "2.1",
        name: "Réunion",
        value: 876562
      },
      {
        id: "3.18",
        parent: "2.1",
        name: "Comoros",
        value: 813912
      },
      {
        id: "3.19",
        parent: "2.1",
        name: "Mayotte",
        value: 253045
      },
      {
        id: "3.20",
        parent: "2.1",
        name: "Seychelles",
        value: 94737
      },
      {
        id: "2.5",
        parent: "1.1",
        name: "Western Africa",
        value: 371990119
      },
      {
        id: "3.42",
        parent: "2.5",
        name: "Nigeria",
        value: 190886311
      },
      {
        id: "3.43",
        parent: "2.5",
        name: "Ghana",
        value: 28833629
      },
      {
        id: "3.44",
        parent: "2.5",
        name: "Côte Ivoire",
        value: 24294750
      },
      {
        id: "3.45",
        parent: "2.5",
        name: "Niger",
        value: 21477348
      },
      {
        id: "3.46",
        parent: "2.5",
        name: "Burkina Faso",
        value: 19193382
      },
      {
        id: "3.47",
        parent: "2.5",
        name: "Mali",
        value: 18541980
      },
      {
        id: "3.48",
        parent: "2.5",
        name: "Senegal",
        value: 15850567
      },
      {
        id: "3.49",
        parent: "2.5",
        name: "Guinea",
        value: 12717176
      },
      {
        id: "3.50",
        parent: "2.5",
        name: "Benin",
        value: 11175692
      },
      {
        id: "3.51",
        parent: "2.5",
        name: "Togo",
        value: 7797694
      },
      {
        id: "3.52",
        parent: "2.5",
        name: "Sierra Leone",
        value: 7557212
      },
      {
        id: "3.53",
        parent: "2.5",
        name: "Liberia",
        value: 4731906
      },
      {
        id: "3.54",
        parent: "2.5",
        name: "Mauritania",
        value: 4420184
      },
      {
        id: "3.55",
        parent: "2.5",
        name: "The Gambia",
        value: 2100568
      },
      {
        id: "3.56",
        parent: "2.5",
        name: "Guinea-Bissau",
        value: 1861283
      },
      {
        id: "3.57",
        parent: "2.5",
        name: "Cabo Verde",
        value: 546388
      },
      {
        id: "3.58",
        parent: "2.5",
        name: "Saint Helena, Ascension and Tristan da Cunha",
        value: 4049
      },
      {
        id: "2.3",
        parent: "1.1",
        name: "North Africa",
        value: 233603574
      },
      {
        id: "3.30",
        parent: "2.3",
        name: "Egypt",
        value: 97553151
      },
      {
        id: "3.31",
        parent: "2.3",
        name: "Algeria",
        value: 41318142
      },
      {
        id: "3.32",
        parent: "2.3",
        name: "Sudan",
        value: 40533330
      },
      {
        id: "3.33",
        parent: "2.3",
        name: "Morocco",
        value: 35739580
      },
      {
        id: "3.34",
        parent: "2.3",
        name: "Tunisia",
        value: 11532127
      },
      {
        id: "3.35",
        parent: "2.3",
        name: "Libya",
        value: 6374616
      },
      {
        id: "3.36",
        parent: "2.3",
        name: "Western Sahara",
        value: 552628
      },
      {
        id: "2.2",
        parent: "1.1",
        name: "Central Africa",
        value: 163494885
      },
      {
        id: "3.21",
        parent: "2.2",
        name: "Democratic Republic of the Congo",
        value: 81339988
      },
      {
        id: "3.22",
        parent: "2.2",
        name: "Angola",
        value: 29784193
      },
      {
        id: "3.23",
        parent: "2.2",
        name: "Cameroon",
        value: 24053727
      },
      {
        id: "3.24",
        parent: "2.2",
        name: "Chad",
        value: 14899994
      },
      {
        id: "3.25",
        parent: "2.2",
        name: "Congo",
        value: 5260750
      },
      {
        id: "3.26",
        parent: "2.2",
        name: "Central African Republic",
        value: 4659080
      },
      {
        id: "3.27",
        parent: "2.2",
        name: "Gabon",
        value: 2025137
      },
      {
        id: "3.28",
        parent: "2.2",
        name: "Equatorial Guinea",
        value: 1267689
      },
      {
        id: "3.29",
        parent: "2.2",
        name: "Sao Tome and Principe",
        value: 204327
      },
      {
        id: "2.4",
        parent: "1.1",
        name: "South America",
        value: 65143204
      },
      {
        id: "3.37",
        parent: "2.4",
        name: "South Africa",
        value: 56717156
      },
      {
        id: "3.38",
        parent: "2.4",
        name: "Namibia",
        value: 2533794
      },
      {
        id: "3.39",
        parent: "2.4",
        name: "Botswana",
        value: 2291661
      },
      {
        id: "3.40",
        parent: "2.4",
        name: "Lesotho",
        value: 2233339
      },
      {
        id: "3.41",
        parent: "2.4",
        name: "Swaziland",
        value: 1367254
      },
      {
        id: "2.9",
        parent: "1.2",
        name: "South America",
        value: 424393617
      },
      {
        id: "3.98",
        parent: "2.9",
        name: "Brazil",
        value: 209288278
      },
      {
        id: "3.99",
        parent: "2.9",
        name: "Colombia",
        value: 49065615
      },
      {
        id: "3.100",
        parent: "2.9",
        name: "Argentina",
        value: 44271041
      },
      {
        id: "3.101",
        parent: "2.9",
        name: "Peru",
        value: 32165485
      },
      {
        id: "3.102",
        parent: "2.9",
        name: "Venezuela",
        value: 31977065
      },
      {
        id: "3.103",
        parent: "2.9",
        name: "Chile",
        value: 18054726
      },
      {
        id: "3.104",
        parent: "2.9",
        name: "Ecuador",
        value: 16624858
      },
      {
        id: "3.105",
        parent: "2.9",
        name: "Bolivia",
        value: 11051600
      },
      {
        id: "3.106",
        parent: "2.9",
        name: "Paraguay",
        value: 6811297
      },
      {
        id: "3.107",
        parent: "2.9",
        name: "Uruguay",
        value: 3456750
      },
      {
        id: "3.108",
        parent: "2.9",
        name: "Guyana",
        value: 777859
      },
      {
        id: "3.109",
        parent: "2.9",
        name: "Suriname",
        value: 563402
      },
      {
        id: "3.110",
        parent: "2.9",
        name: "French Guiana",
        value: 282731
      },
      {
        id: "3.111",
        parent: "2.9",
        name: "Falkland Islands",
        value: 2910
      },
      {
        id: "2.8",
        parent: "1.2",
        name: "Northern America",
        value: 361207811
      },
      {
        id: "3.93",
        parent: "2.8",
        name: "United States",
        value: 324459463
      },
      {
        id: "3.94",
        parent: "2.8",
        name: "Canada",
        value: 36624199
      },
      {
        id: "3.95",
        parent: "2.8",
        name: "Bermuda",
        value: 61349
      },
      {
        id: "3.96",
        parent: "2.8",
        name: "Greenland",
        value: 56480
      },
      {
        id: "3.97",
        parent: "2.8",
        name: "Saint Pierre and Miquelon",
        value: 6320
      },
      {
        id: "2.7",
        parent: "1.2",
        name: "Central America",
        value: 177316317
      },
      {
        id: "3.85",
        parent: "2.7",
        name: "Mexico",
        value: 129163276
      },
      {
        id: "3.86",
        parent: "2.7",
        name: "Guatemala",
        value: 16913503
      },
      {
        id: "3.87",
        parent: "2.7",
        name: "Honduras",
        value: 9265067
      },
      {
        id: "3.88",
        parent: "2.7",
        name: "El Salvador",
        value: 6377853
      },
      {
        id: "3.89",
        parent: "2.7",
        name: "Nicaragua",
        value: 6217581
      },
      {
        id: "3.90",
        parent: "2.7",
        name: "Costa Rica",
        value: 4905769
      },
      {
        id: "3.91",
        parent: "2.7",
        name: "Panama",
        value: 4098587
      },
      {
        id: "3.92",
        parent: "2.7",
        name: "Belize",
        value: 374681
      },
      {
        id: "2.6",
        parent: "1.2",
        name: "Caribbean",
        value: 43883319
      },
      {
        id: "3.59",
        parent: "2.6",
        name: "Cuba",
        value: 11484636
      },
      {
        id: "3.60",
        parent: "2.6",
        name: "Haiti",
        value: 10981229
      },
      {
        id: "3.61",
        parent: "2.6",
        name: "Dominican Republic",
        value: 10766998
      },
      {
        id: "3.62",
        parent: "2.6",
        name: "Puerto Rico",
        value: 3663131
      },
      {
        id: "3.63",
        parent: "2.6",
        name: "Jamaica",
        value: 2890299
      },
      {
        id: "3.64",
        parent: "2.6",
        name: "Trinidad and Tobago",
        value: 1369125
      },
      {
        id: "3.65",
        parent: "2.6",
        name: "Guadeloupe",
        value: 449568
      },
      {
        id: "3.66",
        parent: "2.6",
        name: "Bahamas",
        value: 395361
      },
      {
        id: "3.67",
        parent: "2.6",
        name: "Martinique",
        value: 384896
      },
      {
        id: "3.68",
        parent: "2.6",
        name: "Barbados",
        value: 285719
      },
      {
        id: "3.69",
        parent: "2.6",
        name: "Saint Lucia",
        value: 178844
      },
      {
        id: "3.70",
        parent: "2.6",
        name: "Curaçao",
        value: 160539
      },
      {
        id: "3.71",
        parent: "2.6",
        name: "Saint Vincent and the Grenadines",
        value: 109897
      },
      {
        id: "3.72",
        parent: "2.6",
        name: "Grenada",
        value: 107825
      },
      {
        id: "3.73",
        parent: "2.6",
        name: "Aruba",
        value: 105264
      },
      {
        id: "3.74",
        parent: "2.6",
        name: "United States Virgin Islands",
        value: 104901
      },
      {
        id: "3.75",
        parent: "2.6",
        name: "Antigua and Barbuda",
        value: 102012
      },
      {
        id: "3.76",
        parent: "2.6",
        name: "Dominica",
        value: 73925
      },
      {
        id: "3.77",
        parent: "2.6",
        name: "Cayman Islands",
        value: 61559
      },
      {
        id: "3.78",
        parent: "2.6",
        name: "Saint Kitts and Nevis",
        value: 55345
      },
      {
        id: "3.79",
        parent: "2.6",
        name: "Sint Maarten",
        value: 40120
      },
      {
        id: "3.80",
        parent: "2.6",
        name: "Turks and Caicos Islands",
        value: 35446
      },
      {
        id: "3.81",
        parent: "2.6",
        name: "British Virgin Islands",
        value: 31196
      },
      {
        id: "3.82",
        parent: "2.6",
        name: "Caribbean Netherlands",
        value: 25398
      },
      {
        id: "3.83",
        parent: "2.6",
        name: "Anguilla",
        value: 14909
      },
      {
        id: "3.84",
        parent: "2.6",
        name: "Montserrat",
        value: 5177
      },
      {
        id: "2.13",
        parent: "1.3",
        name: "Southern Asia",
        value: 1868984557
      },
      {
        id: "3.136",
        parent: "2.13",
        name: "India",
        value: 1339180127
      },
      {
        id: "3.137",
        parent: "2.13",
        name: "Pakistan",
        value: 197015955
      },
      {
        id: "3.138",
        parent: "2.13",
        name: "Bangladesh",
        value: 164669751
      },
      {
        id: "3.139",
        parent: "2.13",
        name: "Iran",
        value: 81162788
      },
      {
        id: "3.140",
        parent: "2.13",
        name: "Afghanistan",
        value: 35530081
      },
      {
        id: "3.141",
        parent: "2.13",
        name: "Nepal",
        value: 29304998
      },
      {
        id: "3.142",
        parent: "2.13",
        name: "Sri Lanka",
        value: 20876917
      },
      {
        id: "3.143",
        parent: "2.13",
        name: "Bhutan",
        value: 807610
      },
      {
        id: "3.144",
        parent: "2.13",
        name: "Maldives",
        value: 436330
      },
      {
        id: "2.11",
        parent: "1.3",
        name: "Eastern Asia",
        value: 1648164577
      },
      {
        id: "3.117",
        parent: "2.11",
        name: "China",
        value: 1409517397
      },
      {
        id: "3.118",
        parent: "2.11",
        name: "Japan",
        value: 127484450
      },
      {
        id: "3.119",
        parent: "2.11",
        name: "South Korea",
        value: 50982212
      },
      {
        id: "3.120",
        parent: "2.11",
        name: "North Korea",
        value: 25490965
      },
      {
        id: "3.121",
        parent: "2.11",
        name: "Taiwan",
        value: 23626456
      },
      {
        id: "3.122",
        parent: "2.11",
        name: "Hong Kong",
        value: 7364883
      },
      {
        id: "3.123",
        parent: "2.11",
        name: "Mongolia",
        value: 3075647
      },
      {
        id: "3.124",
        parent: "2.11",
        name: "Macau",
        value: 622567
      },
      {
        id: "2.12",
        parent: "1.3",
        name: "South-Eastern Asia",
        value: 648780040
      },
      {
        id: "3.125",
        parent: "2.12",
        name: "Indonesia",
        value: 263991379
      },
      {
        id: "3.126",
        parent: "2.12",
        name: "Philippines",
        value: 104918090
      },
      {
        id: "3.127",
        parent: "2.12",
        name: "Vietnam",
        value: 95540800
      },
      {
        id: "3.128",
        parent: "2.12",
        name: "Thailand",
        value: 69037513
      },
      {
        id: "3.129",
        parent: "2.12",
        name: "Myanmar",
        value: 53370609
      },
      {
        id: "3.130",
        parent: "2.12",
        name: "Malaysia",
        value: 31624264
      },
      {
        id: "3.131",
        parent: "2.12",
        name: "Cambodia",
        value: 16005373
      },
      {
        id: "3.132",
        parent: "2.12",
        name: "Laos",
        value: 6858160
      },
      {
        id: "3.133",
        parent: "2.12",
        name: "Singapore",
        value: 5708844
      },
      {
        id: "3.134",
        parent: "2.12",
        name: "Timor-Leste",
        value: 1296311
      },
      {
        id: "3.135",
        parent: "2.12",
        name: "Brunei",
        value: 428697
      },
      {
        id: "2.14",
        parent: "1.3",
        name: "Western Asia",
        value: 266479973
      },
      {
        id: "3.145",
        parent: "2.14",
        name: "Turkey",
        value: 80745020
      },
      {
        id: "3.146",
        parent: "2.14",
        name: "Iraq",
        value: 38274618
      },
      {
        id: "3.147",
        parent: "2.14",
        name: "Saudi Arabia",
        value: 32938213
      },
      {
        id: "3.148",
        parent: "2.14",
        name: "Yemen",
        value: 28250420
      },
      {
        id: "3.149",
        parent: "2.14",
        name: "Syria",
        value: 18269868
      },
      {
        id: "3.150",
        parent: "2.14",
        name: "Azerbaijan",
        value: 9827589
      },
      {
        id: "3.151",
        parent: "2.14",
        name: "Jordan",
        value: 9702353
      },
      {
        id: "3.152",
        parent: "2.14",
        name: "United Arab Emirates",
        value: 9400145
      },
      {
        id: "3.153",
        parent: "2.14",
        name: "Israel",
        value: 8321570
      },
      {
        id: "3.154",
        parent: "2.14",
        name: "Lebanon",
        value: 6082357
      },
      {
        id: "3.155",
        parent: "2.14",
        name: "Palestine",
        value: 4920724
      },
      {
        id: "3.156",
        parent: "2.14",
        name: "Oman",
        value: 4636262
      },
      {
        id: "3.157",
        parent: "2.14",
        name: "Kuwait",
        value: 4136528
      },
      {
        id: "3.158",
        parent: "2.14",
        name: "Georgia",
        value: 3912061
      },
      {
        id: "3.159",
        parent: "2.14",
        name: "Armenia",
        value: 2930450
      },
      {
        id: "3.160",
        parent: "2.14",
        name: "Qatar",
        value: 2639211
      },
      {
        id: "3.161",
        parent: "2.14",
        name: "Bahrain",
        value: 1492584
      },
      {
        id: "2.10",
        parent: "1.3",
        name: "Central Asia",
        value: 70839675
      },
      {
        id: "3.112",
        parent: "2.10",
        name: "Uzbekistan",
        value: 31910641
      },
      {
        id: "3.113",
        parent: "2.10",
        name: "Kazakhstan",
        value: 18204499
      },
      {
        id: "3.114",
        parent: "2.10",
        name: "Tajikistan",
        value: 8921343
      },
      {
        id: "3.115",
        parent: "2.10",
        name: "Kyrgyzstan",
        value: 6045117
      },
      {
        id: "3.116",
        parent: "2.10",
        name: "Turkmenistan",
        value: 5758075
      },
      {
        id: "2.15",
        parent: "1.4",
        name: "Eastern Europe",
        value: 293633915
      },
      {
        id: "3.162",
        parent: "2.15",
        name: "Russia",
        value: 143989754
      },
      {
        id: "3.163",
        parent: "2.15",
        name: "Ukraine",
        value: 44222947
      },
      {
        id: "3.164",
        parent: "2.15",
        name: "Poland",
        value: 38170712
      },
      {
        id: "3.165",
        parent: "2.15",
        name: "Romania",
        value: 19679306
      },
      {
        id: "3.166",
        parent: "2.15",
        name: "Czechia",
        value: 10618303
      },
      {
        id: "3.167",
        parent: "2.15",
        name: "Hungary",
        value: 9721559
      },
      {
        id: "3.168",
        parent: "2.15",
        name: "Belarus",
        value: 9468338
      },
      {
        id: "3.169",
        parent: "2.15",
        name: "Bulgaria",
        value: 7084571
      },
      {
        id: "3.170",
        parent: "2.15",
        name: "Slovakia",
        value: 5447662
      },
      {
        id: "3.171",
        parent: "2.15",
        name: "Moldova",
        value: 4051212
      },
      {
        id: "3.172",
        parent: "2.15",
        name: "Cyprus",
        value: 1179551
      },
      {
        id: "2.16",
        parent: "1.4",
        name: "Northern Europe",
        value: 104199623
      },
      {
        id: "3.173",
        parent: "2.16",
        name: "United Kingdom",
        value: 66181585
      },
      {
        id: "3.174",
        parent: "2.16",
        name: "Sweden",
        value: 9910701
      },
      {
        id: "3.175",
        parent: "2.16",
        name: "Denmark",
        value: 5733551
      },
      {
        id: "3.176",
        parent: "2.16",
        name: "Finland",
        value: 5523231
      },
      {
        id: "3.177",
        parent: "2.16",
        name: "Norway",
        value: 5305383
      },
      {
        id: "3.178",
        parent: "2.16",
        name: "Ireland",
        value: 4761657
      },
      {
        id: "3.179",
        parent: "2.16",
        name: "Lithuania",
        value: 2890297
      },
      {
        id: "3.180",
        parent: "2.16",
        name: "Latvia",
        value: 1949670
      },
      {
        id: "3.181",
        parent: "2.16",
        name: "Estonia",
        value: 1309632
      },
      {
        id: "3.182",
        parent: "2.16",
        name: "Iceland",
        value: 335025
      },
      {
        id: "3.183",
        parent: "2.16",
        name: "Guernsey and  Jersey",
        value: 165314
      },
      {
        id: "3.184",
        parent: "2.16",
        name: "Isle of Man",
        value: 84287
      },
      {
        id: "3.185",
        parent: "2.16",
        name: "Faroe Islands",
        value: 49290
      },
      {
        id: "2.17",
        parent: "1.4",
        name: "Southern Europe",
        value: 151989290
      },
      {
        id: "3.186",
        parent: "2.17",
        name: "Italy",
        value: 59359900
      },
      {
        id: "3.187",
        parent: "2.17",
        name: "Spain",
        value: 46354321
      },
      {
        id: "3.188",
        parent: "2.17",
        name: "Greece",
        value: 11159773
      },
      {
        id: "3.189",
        parent: "2.17",
        name: "Portugal",
        value: 10329506
      },
      {
        id: "3.190",
        parent: "2.17",
        name: "Serbia",
        value: 8790574
      },
      {
        id: "3.191",
        parent: "2.17",
        name: "Croatia",
        value: 4189353
      },
      {
        id: "3.192",
        parent: "2.17",
        name: "Bosnia and Herzegovina",
        value: 3507017
      },
      {
        id: "3.193",
        parent: "2.17",
        name: "Albania",
        value: 2930187
      },
      {
        id: "3.194",
        parent: "2.17",
        name: "Republic of Macedonia",
        value: 2083160
      },
      {
        id: "3.195",
        parent: "2.17",
        name: "Slovenia",
        value: 2079976
      },
      {
        id: "3.196",
        parent: "2.17",
        name: "Montenegro",
        value: 628960
      },
      {
        id: "3.197",
        parent: "2.17",
        name: "Malta",
        value: 430835
      },
      {
        id: "3.198",
        parent: "2.17",
        name: "Andorra",
        value: 76965
      },
      {
        id: "3.199",
        parent: "2.17",
        name: "Gibraltar",
        value: 34571
      },
      {
        id: "3.200",
        parent: "2.17",
        name: "San Marino",
        value: 33400
      },
      {
        id: "3.201",
        parent: "2.17",
        name: "Vatican City",
        value: 792
      },
      {
        id: "2.18",
        parent: "1.4",
        name: "Western Europe",
        value: 193430576
      },
      {
        id: "3.202",
        parent: "2.18",
        name: "Germany",
        value: 82114224
      },
      {
        id: "3.203",
        parent: "2.18",
        name: "France",
        value: 64979548
      },
      {
        id: "3.204",
        parent: "2.18",
        name: "Netherlands",
        value: 17035938
      },
      {
        id: "3.205",
        parent: "2.18",
        name: "Belgium",
        value: 11429336
      },
      {
        id: "3.206",
        parent: "2.18",
        name: "Austria",
        value: 8735453
      },
      {
        id: "3.207",
        parent: "2.18",
        name: "Switzerland",
        value: 8476005
      },
      {
        id: "3.208",
        parent: "2.18",
        name: "Luxembourg",
        value: 583455
      },
      {
        id: "3.209",
        parent: "2.18",
        name: "Monaco",
        value: 38695
      },
      {
        id: "3.210",
        parent: "2.18",
        name: "Liechtenstein",
        value: 37922
      },
      {
        id: "2.19",
        parent: "1.5",
        name: "Australia and New Zealand",
        value: 29156379
      },
      {
        id: "3.211",
        parent: "2.19",
        name: "Australia",
        value: 24450561
      },
      {
        id: "3.212",
        parent: "2.19",
        name: "New Zealand",
        value: 4705818
      },
      {
        id: "2.20",
        parent: "1.5",
        name: "Melanesia",
        value: 2070244
      },
      {
        id: "3.213",
        parent: "2.20",
        name: "Papua New Guinea",
        value: 900
      },
      {
        id: "3.214",
        parent: "2.20",
        name: "Fiji",
        value: 905502
      },
      {
        id: "3.215",
        parent: "2.20",
        name: "Solomon Islands",
        value: 611343
      },
      {
        id: "3.216",
        parent: "2.20",
        name: "New Caledonia",
        value: 276255
      },
      {
        id: "3.217",
        parent: "2.20",
        name: "Vanuatu",
        value: 276244
      },
      {
        id: "2.21",
        parent: "1.5",
        name: "Micronesia",
        value: 527530
      },
      {
        id: "3.218",
        parent: "2.21",
        name: "Guam",
        value: 164229
      },
      {
        id: "3.219",
        parent: "2.21",
        name: "Kiribati",
        value: 116398
      },
      {
        id: "3.220",
        parent: "2.21",
        name: "Federated States of Micronesia",
        value: 105544
      },
      {
        id: "3.221",
        parent: "2.21",
        name: "Northern Mariana Islands",
        value: 55144
      },
      {
        id: "3.222",
        parent: "2.21",
        name: "Marshall Islands",
        value: 53127
      },
      {
        id: "3.223",
        parent: "2.21",
        name: "Palau",
        value: 21729
      },
      {
        id: "3.224",
        parent: "2.21",
        name: "Nauru",
        value: 11359
      },
      {
        id: "2.22",
        parent: "1.5",
        name: "Polynesia",
        value: 686371
      },
      {
        id: "3.225",
        parent: "2.22",
        name: "French Polynesia",
        value: 283007
      },
      {
        id: "3.226",
        parent: "2.22",
        name: "Samoa",
        value: 196440
      },
      {
        id: "3.227",
        parent: "2.22",
        name: "Tonga",
        value: 108020
      },
      {
        id: "3.228",
        parent: "2.22",
        name: "American Samoa",
        value: 55641
      },
      {
        id: "3.229",
        parent: "2.22",
        name: "Cook Islands",
        value: 17380
      },
      {
        id: "3.230",
        parent: "2.22",
        name: "Wallis and Futuna",
        value: 11773
      },
      {
        id: "3.231",
        parent: "2.22",
        name: "Tuvalu",
        value: 11192
      },
      {
        id: "3.232",
        parent: "2.22",
        name: "Niue",
        value: 1618
      },
      {
        id: "3.233",
        parent: "2.22",
        name: "Tokelau",
        value: 1300
      }
    ],
    styles: {
      definition: [
        {
          name: "myHTMLFont",
          type: "font",
          ishtml: "1"
        }
      ],
      application: [
        {
          toobject: "TOOLTIP",
          styles: "myHTMLFont"
        }
      ]
    }
  };
  
  const treemapData = {
    data: [
      {
        label: "USA",
        value: "8635000",
        data: [
          {
            label: "Northern Region",
            value: "4140000",
            svalue: "33",
            data: [
              {
                label: "Carol Francis",
                value: "84000",
                svalue: "15"
              },
              {
                label: "Otis Newman",
                value: "60000",
                svalue: "10"
              },
              {
                label: "Darlene Alvarez",
                value: "50000",
                svalue: "11"
              },
              {
                label: "Lucas Cannon",
                value: "58000",
                svalue: "5"
              },
              {
                label: "Rosalie Huff",
                value: "36000",
                svalue: "-5"
              },
              {
                label: "Jerome Vargas",
                value: "72000",
                svalue: "14"
              },
              {
                label: "Becky Barton",
                value: "18000",
                svalue: "-10"
              },
              {
                label: "Ben Rios",
                value: "14000",
                svalue: "-5"
              },
              {
                label: "Donnie Patton",
                value: "37000",
                svalue: "2"
              },
              {
                label: "Dana Freeman",
                value: "41000",
                svalue: "5"
              },
              {
                label: "Darren Barrett",
                value: "54000",
                svalue: "7"
              },
              {
                label: "Steve Vaughn",
                value: "35000",
                svalue: "12"
              },
              {
                label: "Roosevelt Rhodes",
                value: "48000",
                svalue: "15"
              },
              {
                label: "Moses Sparks",
                value: "38000",
                svalue: "-4"
              },
              {
                label: "Hope Cox",
                value: "32000",
                svalue: "-10"
              },
              {
                label: "Hector Lowe",
                value: "66000",
                svalue: "15"
              },
              {
                label: "Lori Christensen",
                value: "47000",
                svalue: "10"
              },
              {
                label: "Roman Aguilar",
                value: "14000",
                svalue: "-15"
              },
              {
                label: "Brittany Chandler",
                value: "21000",
                svalue: "-12"
              },
              {
                label: "Tiffaney Battle",
                value: "60000",
                svalue: "10"
              },
              {
                label: "Elin Stamps",
                value: "54000",
                svalue: "5"
              },
              {
                label: "Donnetta Coley",
                value: "59000",
                svalue: "+14"
              },
              {
                label: "Emmaline Halcomb",
                value: "34000",
                svalue: "-5"
              },
              {
                label: "Natosha Hammett",
                value: "39000",
                svalue: "-7"
              },
              {
                label: "Kimi Stegall",
                value: "15000",
                svalue: "-19"
              },
              {
                label: "Norberto Kirk",
                value: "46000",
                svalue: "2"
              },
              {
                label: "Noma Martindale",
                value: "52000",
                svalue: "12"
              },
              {
                label: "Coreen Numbers",
                value: "30000",
                svalue: "-1"
              },
              {
                label: "Chas Irvin",
                value: "26000",
                svalue: "-17"
              },
              {
                label: "Carlo Tobin",
                value: "31000",
                svalue: "-14"
              },
              {
                label: "Ayanna Mclain",
                value: "29000",
                svalue: "-5"
              },
              {
                label: "Rolland Turney",
                value: "42000",
                svalue: "+5"
              },
              {
                label: "Ona Roden",
                value: "64000",
                svalue: "+20"
              },
              {
                label: "Drew Clarkson",
                value: "24000",
                svalue: "-20"
              },
              {
                label: "Samuel Adler",
                value: "29000",
                svalue: "-15"
              },
              {
                label: "Adrian Steen",
                value: "51000",
                svalue: "2"
              },
              {
                label: "Xiao Batson",
                value: "35000",
                svalue: "-2"
              },
              {
                label: "Britney Hammonds",
                value: "45000",
                svalue: "3"
              },
              {
                label: "Roslyn Wilhelm",
                value: "28000",
                svalue: "-5"
              },
              {
                label: "Alva Puente",
                value: "26000",
                svalue: "-8"
              },
              {
                label: "Daina Horvath",
                value: "49000",
                svalue: "9"
              },
              {
                label: "Louie Chaney",
                value: "54000",
                svalue: "15"
              },
              {
                label: "Olympia Mcmullen",
                value: "71000",
                svalue: "14"
              },
              {
                label: "Nichol Leclair",
                value: "38000",
                svalue: "-10"
              },
              {
                label: "Marylou Messenger",
                value: "41000",
                svalue: "5"
              },
              {
                label: "Christoper Crowley",
                value: "34000",
                svalue: "-4"
              },
              {
                label: "Neville Venable",
                value: "37000",
                svalue: "-10"
              },
              {
                label: "Brock Rowell",
                value: "35000",
                svalue: "-4"
              },
              {
                label: "Gisele Pelletier",
                value: "32000",
                svalue: "-5"
              },
              {
                label: "Thelma Caldwell",
                value: "35000",
                svalue: "5"
              },
              {
                label: "Shyla Plunkett",
                value: "84000",
                svalue: "15"
              },
              {
                label: "Joie Dickson",
                value: "60000",
                svalue: "10"
              },
              {
                label: "Shana Nabors",
                value: "50000",
                svalue: "11"
              },
              {
                label: "Catina Burris",
                value: "58000",
                svalue: "5"
              },
              {
                label: "Man Spearman",
                value: "36000",
                svalue: "-5"
              },
              {
                label: "Shaunna Hamby",
                value: "72000",
                svalue: "14"
              },
              {
                label: "Stormy Read",
                value: "18000",
                svalue: "-10"
              },
              {
                label: "Wen Coe",
                value: "14000",
                svalue: "-5"
              },
              {
                label: "Elizebeth Poston",
                value: "37000",
                svalue: "2"
              },
              {
                label: "Breanna Stringer",
                value: "41000",
                svalue: "5"
              },
              {
                label: "Allyn Holly",
                value: "54000",
                svalue: "7"
              },
              {
                label: "Lera Gaylord",
                value: "35000",
                svalue: "12"
              },
              {
                label: "Lashunda Dowd",
                value: "48000",
                svalue: "15"
              },
              {
                label: "Kiesha Tyner",
                value: "38000",
                svalue: "-4"
              },
              {
                label: "Lamont Allman",
                value: "32000",
                svalue: "-10"
              },
              {
                label: "Sun Switzer",
                value: "66000",
                svalue: "15"
              },
              {
                label: "Dorene Small",
                value: "47000",
                svalue: "10"
              },
              {
                label: "Cherlyn Bozeman",
                value: "14000",
                svalue: "-15"
              },
              {
                label: "Stephani Contreras",
                value: "21000",
                svalue: "-12"
              },
              {
                label: "Bebe Holcomb",
                value: "60000",
                svalue: "10"
              },
              {
                label: "Shenika Barham",
                value: "54000",
                svalue: "5"
              },
              {
                label: "Troy Hobbs",
                value: "59000",
                svalue: "+14"
              },
              {
                label: "Thomas Tom",
                value: "34000",
                svalue: "-5"
              },
              {
                label: "Sunshine Libby",
                value: "39000",
                svalue: "-7"
              },
              {
                label: "Tambra Patten",
                value: "15000",
                svalue: "-19"
              },
              {
                label: "Marlyn Cato",
                value: "46000",
                svalue: "2"
              },
              {
                label: "Jeanelle Ham",
                value: "52000",
                svalue: "12"
              },
              {
                label: "Armanda Kimble",
                value: "30000",
                svalue: "-1"
              },
              {
                label: "Danna Fitzpatrick",
                value: "26000",
                svalue: "-17"
              },
              {
                label: "Elmira Nagle",
                value: "31000",
                svalue: "-14"
              },
              {
                label: "Bella Marx",
                value: "29000",
                svalue: "-5"
              },
              {
                label: "Vania Meeks",
                value: "42000",
                svalue: "+5"
              },
              {
                label: "Florencio Heffner",
                value: "64000",
                svalue: "+20"
              },
              {
                label: "Amie Peoples",
                value: "24000",
                svalue: "-20"
              },
              {
                label: "Chrystal Downs",
                value: "29000",
                svalue: "-15"
              },
              {
                label: "Glennis Chisholm",
                value: "51000",
                svalue: "2"
              },
              {
                label: "Sydney Castaneda",
                value: "35000",
                svalue: "-2"
              },
              {
                label: "Gregory Drummond",
                value: "45000",
                svalue: "3"
              },
              {
                label: "Birdie Neely",
                value: "28000",
                svalue: "-5"
              },
              {
                label: "Ciera Mcafee",
                value: "26000",
                svalue: "-8"
              },
              {
                label: "Martin Larose",
                value: "49000",
                svalue: "9"
              },
              {
                label: "Bobette Dutton",
                value: "54000",
                svalue: "15"
              },
              {
                label: "Numbers Yarbrough",
                value: "71000",
                svalue: "14"
              },
              {
                label: "Sanjuanita Croteau",
                value: "38000",
                svalue: "-10"
              },
              {
                label: "Alysha Aguirre",
                value: "41000",
                svalue: "5"
              },
              {
                label: "Beau Welker",
                value: "34000",
                svalue: "-4"
              },
              {
                label: "Yuri Brannon",
                value: "37000",
                svalue: "-10"
              },
              {
                label: "Breana Marion",
                value: "35000",
                svalue: "-4"
              },
              {
                label: "Bernardina Fennell",
                value: "32000",
                svalue: "-5"
              },
              {
                label: "Bridgette Gould",
                value: "35000",
                svalue: "5"
              }
            ]
          },
          {
            label: "Eastern Region",
            value: "1110000",
            svalue: "9.5",
            data: [
              {
                label: "Lee Miles",
                value: "18000",
                svalue: "-5"
              },
              {
                label: "Eduardo Day",
                value: "21000",
                svalue: "5"
              },
              {
                label: "Darrell Schultz",
                value: "29500",
                svalue: "10"
              },
              {
                label: "Troy Patrick",
                value: "25500",
                svalue: "12"
              },
              {
                label: "Kerry Smith",
                value: "30000",
                svalue: "15"
              },
              {
                label: "Franklin Walker",
                value: "18500",
                svalue: "-5"
              },
              {
                label: "Toby Brady",
                value: "28500",
                svalue: "-2"
              },
              {
                label: "Kenneth Wilkerson",
                value: "25000",
                svalue: "5"
              },
              {
                label: "Ralph Goodman",
                value: "36000",
                svalue: "10"
              },
              {
                label: "Lela Glover",
                value: "15500",
                svalue: "-14"
              },
              {
                label: "Warren Gordon",
                value: "25500",
                svalue: "-10"
              },
              {
                label: "Gladys Ruiz",
                value: "33000",
                svalue: "15"
              },
              {
                label: "Mabel Norris",
                value: "14000",
                svalue: "-5"
              },
              {
                label: "Darrel Rodgers",
                value: "17500",
                svalue: "-15"
              },
              {
                label: "Barry Larson",
                value: "20000",
                svalue: "2"
              },
              {
                label: "Alma Houston",
                value: "31000",
                svalue: "-3"
              },
              {
                label: "Rochelle Burke",
                value: "12500",
                svalue: "5"
              },
              {
                label: "Orville Garza",
                value: "34500",
                svalue: "-7"
              },
              {
                label: "Rex Nichols",
                value: "14500",
                svalue: "-10"
              },
              {
                label: "Jenna Burton",
                value: "18500",
                svalue: "8"
              },
              {
                label: "Jordan Little",
                value: "21000",
                svalue: "3"
              },
              {
                label: "Rodolfo Dawson",
                value: "28500",
                svalue: "10"
              },
              {
                label: "Darryl Bowen",
                value: "15500",
                svalue: "-10"
              },
              {
                label: "Marsha Foster",
                value: "12500",
                svalue: "-18"
              },
              {
                label: "Sandra Curtis",
                value: "32000",
                svalue: "19"
              },
              {
                label: "Alexis Robinson",
                value: "19500",
                svalue: "-4"
              },
              {
                label: "Courtney Stokes",
                value: "27500",
                svalue: "10"
              },
              {
                label: "Kelli Miller",
                value: "34500",
                svalue: "14"
              },
              {
                label: "Cathy Davis",
                value: "14500",
                svalue: "-16"
              },
              {
                label: "Gaynell Mcafee",
                value: "14000",
                svalue: "-5"
              },
              {
                label: "Trinidad Iverson",
                value: "24500",
                svalue: "5"
              },
              {
                label: "Anjelica Kilpatrick",
                value: "27000",
                svalue: "15"
              },
              {
                label: "Cheryle Hearn",
                value: "17500",
                svalue: "-10"
              },
              {
                label: "Rosamond Gass",
                value: "21000",
                svalue: "5"
              },
              {
                label: "Katharine Perrin",
                value: "12500",
                svalue: "-20"
              },
              {
                label: "Heide Matteson",
                value: "32000",
                svalue: "20"
              },
              {
                label: "Amparo Fortin",
                value: "25500",
                svalue: "10"
              },
              {
                label: "Charlena Bills",
                value: "19500",
                svalue: "-2"
              },
              {
                label: "Ronna Irizarry",
                value: "30000",
                svalue: "15"
              },
              {
                label: "Fidelia Hummel",
                value: "28000",
                svalue: "5"
              },
              {
                label: "Darlena Maher",
                value: "14500",
                svalue: "-7"
              },
              {
                label: "Isa Browning",
                value: "17000",
                svalue: "-10"
              },
              {
                label: "Dalene Baron",
                value: "22500",
                svalue: "10"
              },
              {
                label: "Ghislaine Loy",
                value: "12000",
                svalue: "-18"
              },
              {
                label: "Alexander Eldridge",
                value: "18500",
                svalue: "-2"
              },
              {
                label: "Brett Clemmons",
                value: "13000",
                svalue: "-15"
              },
              {
                label: "Mellie Hackney",
                value: "13000",
                svalue: "-18"
              },
              {
                label: "Gerry Felder",
                value: "35500",
                svalue: "15"
              },
              {
                label: "Librada Creighton",
                value: "17500",
                svalue: "-7"
              },
              {
                label: "Florence Pierce",
                value: "21000",
                svalue: "5"
              }
            ]
          },
          {
            label: "Southern Region",
            value: "1555000",
            svalue: "11",
            data: [
              {
                label: "Derek Sandoval",
                value: "12000",
                svalue: "-15"
              },
              {
                label: "Bertha Bishop",
                value: "55000",
                svalue: "10"
              },
              {
                label: "Dominick Price",
                value: "24500",
                svalue: "10"
              },
              {
                label: "Sylvia Rodriquez",
                value: "15000",
                svalue: "-2"
              },
              {
                label: "Leland Jennings",
                value: "63000",
                svalue: "-5"
              },
              {
                label: "Dean Collins",
                value: "56000",
                svalue: "3"
              },
              {
                label: "Jamie Cohen",
                value: "19500",
                svalue: "4"
              },
              {
                label: "Elias Hammond",
                value: "29500",
                svalue: "12"
              },
              {
                label: "Kristy Stone",
                value: "24500",
                svalue: "5"
              },
              {
                label: "Jeanette Wood",
                value: "17500",
                svalue: "-10"
              },
              {
                label: "Salvador Colon",
                value: "75000",
                svalue: "18"
              },
              {
                label: "Victor Ferguson",
                value: "60000",
                svalue: "10"
              },
              {
                label: "Marion Hernandez",
                value: "14500",
                svalue: "-18"
              },
              {
                label: "Javier Erickson",
                value: "18000",
                svalue: "-19"
              },
              {
                label: "Stephanie Matthews",
                value: "16500",
                svalue: "5"
              },
              {
                label: "Deanna Russell",
                value: "25500",
                svalue: "1"
              },
              {
                label: "Nettie Holt",
                value: "32500",
                svalue: "-10"
              },
              {
                label: "Lynne Mack",
                value: "50000",
                svalue: "8"
              },
              {
                label: "Carrie Stevens",
                value: "47000",
                svalue: "14"
              },
              {
                label: "Janyce Hildebrand",
                value: "29000",
                svalue: "-5"
              },
              {
                label: "Emery Underhill",
                value: "67000",
                svalue: "20"
              },
              {
                label: "Priscila Coy",
                value: "72000",
                svalue: "15"
              },
              {
                label: "Dede Moffett",
                value: "12500",
                svalue: "-15"
              },
              {
                label: "Sydney Merchant",
                value: "65500",
                svalue: "10"
              },
              {
                label: "Daryl Farrar",
                value: "65000",
                svalue: "5"
              },
              {
                label: "Nella Nickerson",
                value: "27000",
                svalue: "14"
              },
              {
                label: "Octavia Mccorkle",
                value: "17500",
                svalue: "-2"
              },
              {
                label: "Lynsey Boren",
                value: "22500",
                svalue: "5"
              },
              {
                label: "Argentina Ireland",
                value: "15500",
                svalue: "-8"
              },
              {
                label: "Tonda Ricks",
                value: "14500",
                svalue: "-10"
              },
              {
                label: "Shira Laporte",
                value: "25500",
                svalue: "-5"
              },
              {
                label: "Reuben Upshaw",
                value: "12000",
                svalue: "-15"
              },
              {
                label: "Angelia Mcalister",
                value: "23500",
                svalue: "15"
              },
              {
                label: "Ludivina Teel",
                value: "19000",
                svalue: "-10"
              },
              {
                label: "Darcel Scarbrough",
                value: "13000",
                svalue: "-20"
              },
              {
                label: "Chantelle Carl",
                value: "14000",
                svalue: "2"
              },
              {
                label: "Young Chestnut",
                value: "14500",
                svalue: "-7"
              },
              {
                label: "Janetta Gilman",
                value: "17000",
                svalue: "-8"
              },
              {
                label: "Otto Pfeifer",
                value: "29500",
                svalue: "10"
              },
              {
                label: "Queen Trudeau",
                value: "70000",
                svalue: "15"
              },
              {
                label: "Candie Vang",
                value: "17000",
                svalue: "-12"
              },
              {
                label: "Tia Burgos",
                value: "21000",
                svalue: "12"
              },
              {
                label: "Teresita Sprague",
                value: "46500",
                svalue: "18"
              },
              {
                label: "Tomoko Shull",
                value: "17000",
                svalue: "-4"
              },
              {
                label: "Yahaira Snider",
                value: "24500",
                svalue: "8"
              },
              {
                label: "Zina Espinoza",
                value: "51000",
                svalue: "5"
              },
              {
                label: "Jamal Crespo",
                value: "12000",
                svalue: "-20"
              },
              {
                label: "Ariel Jorgensen",
                value: "16000",
                svalue: "5"
              },
              {
                label: "Fredda Tuttle",
                value: "14000",
                svalue: "-10"
              },
              {
                label: "Gerardo Carter",
                value: "34500",
                svalue: "-16"
              }
            ]
          },
          {
            label: "Western Region",
            value: "1830000",
            svalue: "13",
            data: [
              {
                label: "Sadie Wells",
                value: "30000",
                svalue: "-10"
              },
              {
                label: "Jacqueline Griffith",
                value: "45000",
                svalue: "2"
              },
              {
                label: "Malcolm Lee",
                value: "55000",
                svalue: "18"
              },
              {
                label: "Martin Hudson",
                value: "59000",
                svalue: "-15"
              },
              {
                label: "Carlos Hart",
                value: "64000",
                svalue: "18"
              },
              {
                label: "Alison Luna",
                value: "35000",
                svalue: "-20"
              },
              {
                label: "Pablo Paul",
                value: "72000",
                svalue: "20"
              },
              {
                label: "Arlene Fox",
                value: "33000",
                svalue: "-15"
              },
              {
                label: "Lillian Young",
                value: "39000",
                svalue: "-5"
              },
              {
                label: "Annie Ford",
                value: "66000",
                svalue: "10"
              },
              {
                label: "Manuel Delgado",
                value: "46000",
                svalue: "-5"
              },
              {
                label: "Arthur Pope",
                value: "28000",
                svalue: "-15"
              },
              {
                label: "Antonia Marshall",
                value: "24000",
                svalue: "-17"
              },
              {
                label: "Glen Alexander",
                value: "29000",
                svalue: "15"
              },
              {
                label: "Myrtle Bass",
                value: "40000",
                svalue: "10"
              },
              {
                label: "Garry Palmer",
                value: "27000",
                svalue: "-18"
              },
              {
                label: "Dianne Blair",
                value: "35000",
                svalue: "-1"
              },
              {
                label: "Melba Page",
                value: "36000",
                svalue: "5"
              },
              {
                label: "Darla Nelson",
                value: "60000",
                svalue: "14"
              },
              {
                label: "Winston Brewer",
                value: "43000",
                svalue: "17"
              },
              {
                label: "Drew Osborne",
                value: "21000",
                svalue: "-12"
              },
              {
                label: "Jesus Sullivan",
                value: "46000",
                svalue: "18"
              },
              {
                label: "Jeremiah Flowers",
                value: "15000",
                svalue: "-20"
              },
              {
                label: "Suzanne Richardson",
                value: "24000",
                svalue: "-15"
              },
              {
                label: "Nicholas Mathis",
                value: "71000",
                svalue: "20"
              },
              {
                label: "Della King",
                value: "28000",
                svalue: "-10"
              },
              {
                label: "Beth Boone",
                value: "40000",
                svalue: "15"
              },
              {
                label: "Ruben Powell",
                value: "35000",
                svalue: "6"
              },
              {
                label: "Marlon Harrington",
                value: "14000",
                svalue: "-7"
              },
              {
                label: "Sharice Kang",
                value: "25000",
                svalue: "-20"
              },
              {
                label: "Lizette Stout",
                value: "55000",
                svalue: "15"
              },
              {
                label: "Jimmy Cho",
                value: "41000",
                svalue: "10"
              },
              {
                label: "Weston Alcorn",
                value: "21000",
                svalue: "-5"
              },
              {
                label: "Omer Whitfield",
                value: "18000",
                svalue: "-10"
              },
              {
                label: "Delora Downs",
                value: "35000",
                svalue: "2"
              },
              {
                label: "Rea Booker",
                value: "22000",
                svalue: "12"
              },
              {
                label: "Jon Blue",
                value: "73000",
                svalue: "20"
              },
              {
                label: "Haley Cameron",
                value: "17000",
                svalue: "-15"
              },
              {
                label: "Jani Fortune",
                value: "23000",
                svalue: "-15"
              },
              {
                label: "Theressa Talbot",
                value: "26000",
                svalue: "8"
              },
              {
                label: "Tashia Crane",
                value: "38000",
                svalue: "-2"
              },
              {
                label: "Latonya Grey",
                value: "19000",
                svalue: "-20"
              },
              {
                label: "Lyndsey Song",
                value: "40000",
                svalue: "15"
              },
              {
                label: "Lan Bean",
                value: "48000",
                svalue: "5"
              },
              {
                label: "Ethelene Haas",
                value: "52000",
                svalue: "10"
              },
              {
                label: "Lauran Dunaway",
                value: "29000",
                svalue: "8"
              },
              {
                label: "Williams Hodge",
                value: "14000",
                svalue: "-18"
              },
              {
                label: "Elwanda Archuleta",
                value: "24000",
                svalue: "-5"
              },
              {
                label: "Florida Andersen",
                value: "30000",
                svalue: "5"
              },
              {
                label: "Scott Perry",
                value: "20000",
                svalue: "2"
              }
            ]
          }
        ]
      }
    ],
    colorrange: {
      mapbypercent: "1",
      gradient: "1",
      minvalue: "-25",
      code: "#F2726F",
      startlabel: "Decline",
      endlabel: "Rise",
      color: [
        {
          code: "#FFC533",
          maxvalue: "0",
          label: "Static"
        },
        {
          code: "#62B58F",
          maxvalue: "25",
          label: "AVERAGE"
        }
      ]
    },
    chart: {
      caption: "Trader Joe’s Sales Team Performance Analysis",
      subcaption: "Year Till Date",
      legendcaption: "YoY Sales Growth",
      plottooltext: "<b>$label</b><br>Sales: $$datavalue<br>Growth: $svalue%",
      algorithm: "squarified",
      theme: "fusion",
      exportEnabled: 1,
      toolbarButtonScale: 0
    }
  };
  
  const multilevelpieData = {
    chart: {
      caption: "Sales by Product Category",
      subcaption: "Last Quarter",
      showplotborder: "1",
      plotfillalpha: "60",
      hoverfillcolor: "#CCCCCC",
      numberprefix: "$",
      plottooltext:
        "Sales of <b>$label</b> was <b>$$valueK</b>, which was $percentValue of parent category",
      theme: "fusion",
      exportEnabled: 1,
      toolbarButtonScale: 0
    },
    category: [
      {
        label: "Products",
        tooltext: "Please hover over a sub-category to see details",
        color: "#ffffff",
        value: "150",
        category: [
          {
            label: "Food & Beverage",
            color: "#f8bd19",
            value: "55.5",
            category: [
              {
                label: "Breads",
                color: "#f8bd19",
                value: "11.1"
              },
              {
                label: "Juice",
                color: "#f8bd19",
                value: "27.75"
              },
              {
                label: "Noodles",
                color: "#f8bd19",
                value: "9.99"
              },
              {
                label: "Seafood",
                color: "#f8bd19",
                value: "6.66"
              }
            ]
          },
          {
            label: "Apparel",
            color: "#33ccff",
            value: "42",
            category: [
              {
                label: "Sun Glasses",
                color: "#33ccff",
                value: "10.08"
              },
              {
                label: "Clothing",
                color: "#33ccff",
                value: "18.9"
              },
              {
                label: "Handbags",
                color: "#33ccff",
                value: "6.3"
              },
              {
                label: "Shoes",
                color: "#33ccff",
                value: "6.72"
              }
            ]
          },
          {
            label: "Baby Products",
            color: "#ffcccc",
            value: "22.5",
            category: [
              {
                label: "Bath &{br}Grooming",
                color: "#ffcccc",
                value: "9.45"
              },
              {
                label: "Food",
                color: "#ffcccc",
                value: "6.3"
              },
              {
                label: "Diapers",
                color: "#ffcccc",
                value: "6.75"
              }
            ]
          },
          {
            label: "Electronics",
            color: "#ccff66",
            value: "30",
            category: [
              {
                label: "Laptops",
                color: "#ccff66",
                value: "8.1"
              },
              {
                label: "Televisions",
                color: "#ccff66",
                value: "10.5"
              },
              {
                label: "SmartPhones",
                color: "#ccff66",
                value: "11.4"
              }
            ]
          }
        ]
      }
    ]
  };
  
  FusionCharts.ready(function() {
    var myChart = new FusionCharts({
      type: "gantt",
      id: "demo-chart",
      renderAt: "chart-container",
      width: "100%",
      height: "100%",
      dataFormat: "json",
      dataSource: ganttData
    }).render();
  });
  
  function updateChart(ev) {
    let btns = document.getElementsByTagName("button");
    for (i = 0; i < btns.length; i++) {
      btns[i].classList.remove("active");
    }
  
    let chartData = eval(`${ev.name}Data`);
    FusionCharts.items["demo-chart"].chartType(ev.name);
    ev.classList.add("active");
    FusionCharts.items["demo-chart"].setJSONData(chartData);
  }
  
  document.getElementById("export-btn").addEventListener("click", function() {
    FusionCharts.items["demo-chart"].exportChart({
      exportFormat: "csv"
    });
  });
  