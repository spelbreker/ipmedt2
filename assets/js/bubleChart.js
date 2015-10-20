/**
 * Created by Patrick on 29-9-2015.
 */
function loadWebsiteBuble() {

    $('#websitesBubble').highcharts({

        chart: {
            type: 'bubble',
            plotBorderWidth: 2,
            //zoomType: 'xy'
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
                {x: 1998, y: 16.185, z: 9, name: 'Google', text:"Google was founded by Larry Page and Sergey Brin. <br>They were PhD students at Stanford University and <br>thought they could change the way search engines work. <br><br>While other engines rank the search results by how<br> many search terms appeared on the page, Page and <br>Brin tried to make their system analyze the relationships<br> between websites. This way they thought the search <br>results would be better ranked. <br><br>Originally they called their website BackRub, which was<br> a reference to the way they set up their search engine.<br><br> Later on they changed the name to Google, based<br> on the number 'googol', which is a number with a 1 <br>followed by a hundred 0's."},
                {x: 2004, y: 20.5, z: 10, name: 'Facebook', text:"Facebook has been founded by Mark Zuckerberg <br>with a couple of his Harvard roommates. Only<br> Harvard students could register in the beginning,<br>but as the website became more popular, the <br>restrictions to who could register changed too. <br><br>In a blink of an eye Facebook started spreading<br>worldwide, and is one of the most popular<br> websites at this moment. Facebook has so many<br> data centers to manage all the trafic on their<br>website that they use 2% of the entire world's<br> energy usage every day!"},
                {x: 1994, y: 1.096, z: 5, name: 'Amazon', text:"Amazon was founded by Jeff Bezos, a former<br> vice-president of D.E. Shaw & Co., a Wall Street<br>firm. He left because he felt that the Internet <br>business boom during his vice-presidency<br> could offer him even more oppurtunities than<br> staying at his firm.<br>He then moved to Seattle to work on a <br>business plan, which would later develop into <br>Amazon.com. He first incorporated the company<br> under the name of 'Cadabra', but soon after he <br>changed the name to Amazon.  The company <br>started out as a online bookstore, but soon <br>started selling many other products too. <br>Funny enough, it was only back in 2001 <br>7 years after it's foundation) that Amazon<br> started making a profit! Can you imagine that<br> it is now the most valuable retailer in the United States?"},
                {x: 1995, y: 0.552, z: 4, name: 'Ebay', text:"Ebay was founded by Pierre Omidyar, a French-born<br> Iranian-American. The website immediately started<br> out as an online auction, purely meant as a side<br> hobby of Omidyar. One of the first items sold on<br> Ebay was a broken laser pointer, which was<br> (against all odds) sold for $14.83. Omidyar contacted <br>the winning bidder to make sure he knew the pointer<br> was broken, but the buyer turned out to be a broken<br> laser pointer collector. Soon his website was being <br>visited so frequently, that Omidyar's Internet service<br> provider forced him to change his regular subscription<br> to a business one. Because of that his side hobby<br> became so expensive that he had to charge the people<br> using his auction for a small fee. This is where the<br> entire of concept of Ebay started."},
                {x: 2003, y: 0.00915, z: 2, name: 'MySpace', text:"Myspace was founded after several employees <br>of eUniverse with Friendster accounts thought<br> they could bundle it's good features into an <br>even better sovial networking feature. Soon<br> after their first concept was launched, they<br>held a contest where employees of eUniverse<br> had to try and invite as many people as possible<br> to join Myspace. eUniverse, whilst having around <br>20 million customers at that time, used their <br>customers to give Myspace the initiation it needed. <br>Unfortunately, with more social media starting to <br>get more popular, Myspace is starting to lose a<br> big amount of their members."},
                {x: 2005, y: 15.845, z: 8, name: 'Youtube', text:"There are a couple of stories which tell how YouTube<br> came to be. According to the founders, they were <br>inspired after they noticed how it was quite hard<br> to find video clips online. At first the idea was <br> to create a video dating site, but soon the developers <br> came to understand it had much more potential."},
                {x: 2001, y: 2.451, z: 6, name: 'Wikipedia', text:"Wikipedia started out as a side project for Nupedia,<br> a free online encyclopedia whose articles were<br> written by professionals and experts. These articles<br> were reviewed under a formal process to make sure<br> the information they provided would be of good <br>quality and without mistakes.<br><br>Nupedia was founded under the ownership of Bomis,<br> a web portal company. CEO of this company, <br>Jimmy Wales, and editor-in-chief for Nupedia, <br>Larry Sanger, started their own project called Wikipedia.<br> The reason behind this new project was to create an<br> online encyclopedia, which would offer the regular web<br> users with information they could edit theirselves too. <br>This way information would be easier accessible for <br>everyone."},
                {x: 1994, y: 6.525, z: 7, name: 'Yahoo', text:"Yahoo was founded by Jerry Yang and David Filo. <br>They created a website called 'Jerry and David's<br> guide to the World Wide Web'. The site was a <br>directory of websites, organized in a hierarchy.<br> Later in 1994 they changed the name of the <br>website to 'Yahoo!'. Yahoo is a so called <br>backronym for the words <br>'Yet Another Hierarchical Officious Oracle'.<br> Yahoo grew really fast, and by 1998 they were <br>the most popular homepage for internet users.<br> Soon it turned out to be that Google was <br>getting more and more popular. Yahoo then <br>started using Google for their searching until 2004,<br> when they developed their own search technologies."},
                {x: 1999, y: 0.3385, z: 3, name: 'PayPal', text:"PayPal was first introduced to the world <br>through 'Confinity', a company that <br>developed security software. They launched a<br> money transfer service, which wasn't publicly <br>available yet. In March 2000, Confinity merched<br> with X.com, an online banking company. <br>The founder of X.com, Elon Musk, had good<br> hopes for the transfer service. Musk was actually <br>so optimistic about the service that he would <br>end up terminating X.com's banking operations,<br>and started focussing on Confinity's transfer<br> service. In 2001 X.com was renamed PayPal.com,<br> and finally went public in 2002. It was actually <br>so successful that Ebay.com bought PayPal.com <br>for $1.5 billion!"},

            ]
        }]

    });
}