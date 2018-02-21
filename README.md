OK...

forgot to make sure that none of the images had been the previous 3 images, and trying to tack that logic onto the end of my turducken was a MESS so I started refactoring the code and figured out a MUCH better way to do it (Judah gave me the initial idea of using an array of 6)

using the array.includes combined with the array.pop inside a 3x for loop cleaned up the code a LOT and made it load faster (it performs the logic independent of loading images now).  It also made the click and vote counters a lot easier to manage.  Now it just generates 6 random, unique numbers and sticks them in the array, then chops off the first 3 and sticks 3 more on the back end.  all of the event targets point to the first three indexes of this array.

cleaned up the code, pushing final commits and resubmitting assignment, then on to charts!


used this as guide for my initial constructor function
http://tobiasahlin.com/blog/chartjs-charts-to-get-you-started/

that didn't work, tried to build it off the songChart example in the class repo, THAT didn't work, so i copy/pasted it :/  now i have a working chart to build a new constructor function off of.  part of the problem i'm having is that i don't understand enough about the parameters to get different types of charts to render properly.

later i will need to change the dataset from number of votes to vote percentage.

find way to display top 5
    use logic to feed top 5 into separate array to render chart from?

        separate chart for bottom 3?

background colors not showing up
        spent ~30 minutes tracking down a capitalization error :/

got basic graph up and running, pushing commits, will flesh out web site later

