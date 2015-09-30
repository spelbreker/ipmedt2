/**
 * Created by Patrick on 29-9-2015.
 */

$(function () {
    $('#websitesBubble').highcharts({

        chart: {
            type: 'bubble',
            plotBorderWidth: 2,
            zoomType: 'xy'
        },

        legend: {
            enabled: false
        },

        title: {
            text: 'Comparison of big websites'
        },

        xAxis: {
            gridLineWidth: 1,
            title: {
                text: 'Year of founding'
            },
            labels: {
                format: '{value}'
            }
        },

        yAxis: {
            startOnTick: false,
            endOnTick: false,
            title: {
                text: 'Monthly visitors. August, 2015 (in billions)'
            },
            labels: {
                format: '{value}'
            },
            maxPadding: 0.2
        },

        tooltip: {
            useHTML: true,
            headerFormat: '<table>',
            pointFormat: '<tr><th colspan="2"><h3>{point.name}</h3></th></tr>' +
            '<tr><th></th><td>{point.text}</td></tr>',
            footerFormat: '</table>',
            followPointer: true
        },

        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }
        },

        series: [{
            data: [
                {x: 1997, y: 16.185, z: 9, name: 'Google', text:"Since it was founded in 1997, Google has grown into<br> one of the biggest companies in the world."},
                {x: 2004, y: 20.5, z: 10, name: 'Facebook', text:"Facebook has been founded in 2004, and too a little <br>while to grow. Once it started growing though, it's <br>amount of users has skyrocketed."},
                {x: 1995, y: 1.096, z: 5, name: 'Amazon', text:"Amazon has been founded in 1995 and has grown in size<br> and amount of clients since then."},
                {x: 1994, y: 0.552, z: 4, name: 'Ebay', text:"Ebay has, just like Amazon, grown since it has been founded <br>in 1994. Despite Amazon, Ebay does a great job of <br>taking over Europe too."},
                {x: 2003, y: 0.00915, z: 2, name: 'MySpace', text:"MySpace has had a tremendous of users over the years <br>since it first aired. At the moment it has been losing <br>members because of other social media like Facebook."},
                {x: 2005, y: 15.845, z: 8, name: 'Youtube', text:"Having the third amount of visitors on a monthly basis,<br> Youtube is one of the few big websites being visited on<br> a daily basis by it's users."},
                {x: 2001, y: 2.451, z: 6, name: 'Wikipedia', text:"Being a follow up on Nupedia, Wikipedia is the<br> biggest online encyclopedia on the internet as of now."},
                {x: 1995, y: 6.525, z: 7, name: 'Yahoo', text:"Just like Google, Yahoo is one of the big search engines. <br>Though smaller is amount of visitors, Yahoo is running <br>second place next to Google."},
                {x: 1998, y: 0.3385, z: 3, name: 'PayPal', text:"Ever since shopping started making an entrance on the <br>internet, PayPal has been one of the bigger companies to <br>actually make this possible for the average internet user."},

            ]
        }]

    });
});