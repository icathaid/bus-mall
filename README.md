OK...

forgot to make sure that none of the images had been the previous 3 images, and trying to tack that logic onto the end of my turducken was a MESS so I started refactoring the code and figured out a MUCH better way to do it (Judah gave me the initial idea of using an array of 6)

using the array.includes combined with the array.pop inside a 3x for loop cleaned up the code a LOT and made it load faster (it performs the logic independent of loading images now).  It also made the click and vote counters a lot easier to manage.  Now it just generates 6 random, unique numbers and sticks them in the array, then chops off the first 3 and sticks 3 more on the back end.  all of the event targets point to the first three indexes of this array.

cleaned up the code, pushing final commits and resubmitting assignment, then on to charts!