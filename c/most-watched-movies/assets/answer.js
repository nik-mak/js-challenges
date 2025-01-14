let movies = [{
   "title": "The Shawshank Redemption",
   "duration": "PT142M",
   "actors": [ "Tim Robbins", "Morgan Freeman", "Bob Gunton" ],
   "ratings": [],
   "watchlist": [15291, 51417, 62289, 6146, 71389, 93707]
 },
 {
   "title": "The Godfather",
   "duration": "PT175M",
   "actors": [ "Marlon Brando", "Al Pacino", "James Caan" ],
   "ratings": [],
   "watchlist": [62289, 66380, 34139, 6146]
 },
 {
   "title": "The Dark Knight",
   "duration": "PT152M",
   "actors": [ "Christian Bale", "Heath Ledger", "Aaron Eckhart" ],
   "ratings": [],
   "watchlist": [51417, 62289, 6146, 71389, 7001]
 },
 {
   "title": "Pulp Fiction",
   "duration": "PT154M",
   "actors": [ "John Travolta", "Uma Thurman", "Samuel L. Jackson" ],
   "ratings": [],
   "watchlist": [7001, 9250, 34139, 6146]
 },
 {
   "title": "Schindler's List",
   "duration": "PT195M",
   "actors": ["Liam Neeson", "Ralph Fiennes", "Ben Kingsley"],
   "watchlist": [15291, 51417, 7001, 9250, 93707]
 }];

let users = [{
       "userId": 15291,
       "email": "Constantin_Kuhlman15@yahoo.com",
       "friends": [7001, 51417, 62289]
   },
   {
       "userId": 7001,
       "email": "Keven6@gmail.com",
       "friends": [15291, 51417, 62289, 66380]
   },
   {
       "userId": 51417,
       "email": "Margaretta82@gmail.com",
       "friends": [15291, 7001, 9250]
   },
   {
       "userId": 62289,
       "email": "Marquise.Borer@hotmail.com",
       "friends": [15291, 7001]
}];

/* 
**E.g.** topWatchlistedMoviesAmongFriends(62289), should return:

["Schindler's List", "Pulp Fiction", "The Dark Knight", "The Shawshank Redemption"]

In the example above, user with id 62289 has two friends: user with id=15291 and with id=7001. Schindler's List is watchlisted by both users, so it will be the most watchlisted.
*/

/* 
**E.g.** topWatchlistedMoviesAmongFriends(15291), should return:

["The Dark Knight", "Schindler's List", "The Shawshank Redemption", "Pulp Fiction"]

In the example above, user with id 15291 has three friends: users with id=7001, id=51417 and id=62289. The Dark Knight is the most watched. Schindler's and Shawshank have both been watched twice, so will be in alphabetical order. Pulp Fiction and The Godfather have both been watched once, but Pulp fiction comes earlier alphabetically ("P.." vs "T.."), so it makes the top 4.
*/

export const mostWatchedMovies = () => {
    // Your code here
};