$(function () {
    // Create the chart
    $('#websitesChart').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Total number of websites throughout the years'
        },
        subtitle: {
            text: 'Hover over the columns to view additional information.'
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'Total number of websites'
            }

        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: false,
                    //format: '{point.y:.1f}'
                }
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.f}</b> websites<br/>'
        },

        series: [{
            name: "Brands",
            colorByPoint: true,
            data: [{
                name: "1991-1999",
                y: 6988755,
                drilldown: "1991-1999"
            }, {
                name: "2000",
                y: 17087182,

            }, {
                name: "2001",
                y: 29254370,

            }, {
                name: "2002",
                y: 38760373,

            }, {
                name: "2003",
                y: 40912332,

            }, {
                name: "2004",
                y: 51611646,

            }, {
                name: "2005",
                y: 64780617,

            }, {
                name: "2006",
                y: 85507314,

            }, {
                name: "2007",
                y: 121892559,

            },{
                name: "2008",
                y: 172338726,

            }, {
                name: "2009",
                y: 238027855,

            }, {
                name: "2010",
                y: 206956723,

            }, {
                name: "2011",
                y: 346004403,

            },  {
                name: "2012",
                y: 697089489,

            }, {
                name: "2013",
                y: 672985183,

            }, {
                name: "2014",
                y: 968882453,

            }]
        }],
        drilldown: {
            series: [{
                name: "1991-1999",
                id: "1991-1999",
                data: [
                    [
                        "1991<br>(1 website)",
                        1
                    ],
                    [
                        "1992<br>(10 websites)",
                        10
                    ],
                    [
                        "1993<br>(130 websites)",
                        130
                    ],
                    [
                        "1994<br>(2.738 websites)",
                        2738
                    ],
                    [
                        "1995<br>(23.500 websites)",
                        23500
                    ],
                    [
                        "1996",
                        257601
                    ],
                    [
                        "1997",
                        1117255
                    ],
                    [
                        "1998",
                        2410067
                    ],
                    [
                        "1999",
                        3177453
                    ]
                ]
            }]
        }
    });
});