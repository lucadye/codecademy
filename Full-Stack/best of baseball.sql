-- # The Best of Baseball Awards
-- __A Codecademy Project__

-- ## Heaviest Hitters
-- This award goes to the team with
-- the highest average weight of
-- its batters on a given year.
SELECT
  teams.name AS "team",
  batting.yearid AS "year",
  AVG(people.weight) AS "weight"
FROM batting
JOIN people
	ON batting.playerid = people.playerid
JOIN teams
	ON batting.teamid = teams.teamid
GROUP BY 1, 2
ORDER BY 3 DESC;

-- ## Shortest Sluggers
-- This award goes to the team with
-- the smallest average height of
-- its batters on a given year.
SELECT
  teams.name AS "team",
  batting.yearid AS "year",
  AVG(people.height) AS "height"
FROM batting
JOIN people
	ON batting.playerid = people.playerid
JOIN teams
	ON batting.teamid = teams.teamid
GROUP BY 1, 2
ORDER BY 3 ASC;

-- ## Biggest Spenders
-- This award goes to the team with
-- the largest total salary of all
-- players in a given year.
SELECT
  teams.name AS "team",
  salaries.yearid AS "year",
  SUM(salaries.salary) AS "sum of all salaries"
FROM salaries
JOIN teams
	ON salaries.teamid = teams.teamid
GROUP BY 1, 2
ORDER BY 3 DESC;

-- ## Most Bang For Their Buck In 2010
-- This award goes to the team that had
-- the smallest “cost per win” in 2010.
-- Cost per win is determined by the
-- total salary of the team divided
-- by the number of wins in a given year.
SELECT
  teams.name AS "team",
  salaries.yearid,
  SUM(teams.w) AS "wins",
  SUM(salaries.salary) AS "sum of all salaries",
  ROUND(SUM(salaries.salary) / SUM(teams.w)) AS "cost per win"
FROM salaries
JOIN teams
	ON salaries.teamid = teams.teamid
WHERE salaries.yearid = 2010
GROUP BY 1, 2
ORDER BY 5 DESC;

-- ## Priciest Starter
-- This award goes to the pitcher who,
-- in a given year, cost the most money per
-- game in which they were the starting pitcher.
SELECT
	concat(people.namelast, ', ', people.namefirst) AS "name",
	salaries.yearid AS "year",
	SUM(pitching.gs) AS "games started",
	SUM(salaries.salary),
  ROUND(SUM(salaries.salary) / SUM(pitching.gs)) AS "cost per start"
FROM salaries
JOIN pitching
	ON  salaries.playerid = pitching.playerid
  AND salaries.yearid   = pitching.yearid
  AND salaries.teamid   = pitching.teamid
JOIN people
	ON salaries.playerid = people.playerid
WHERE pitching.gs >= 10
GROUP BY 1, 2
ORDER BY 5 DESC;

-- ## Turncoat
-- This award goes to the player who
-- changed teams the most during their carrer.
SELECT
	concat(people.namelast, ', ', people.namefirst) AS "Name",
  COUNT(*) AS "Team Count"
FROM (
  SELECT
  	playerid,
  	teamid
  FROM batting
  UNION
  SELECT
  	playerid,
  	teamid
  FROM pitching
) AS "players"
JOIN people
	ON people.playerid = players.playerid
GROUP BY 1
ORDER BY 2 DESC;
