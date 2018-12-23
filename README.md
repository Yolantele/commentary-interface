Live Commentary


```
As an enthusiast fan
I want to see clearly the live commentary timeline
So that I can effectively follow the game
```

```
As an enthusiast fan
I want to look up any key game moments
So that I know what actually happened at that moment
```

0. considered user stories
1. Designed Commentary Items data structure
2. Created User Interface for displaying the commentary items
3. Followed the wireframe layout
4. Considered user interaction AND responsive design

a day of on-and-off (inbetween Christmass prep :) )  work

Comentary Item dummy-objects: 

```
[
  {
    "id": 1,
    "comment": "Dier goes into the book in what is the first yellow card of the game"
    "time": "20",
    "type": "yellow card" 
  }
]
```

Features: 
- UI is responsive to browser dimensions changes
- UI responds to Users interaction with key moments by  highlighting the corresponding commentary


![screenshot 2018-12-23 at 01 31 11](https://user-images.githubusercontent.com/30931242/50380004-b9744300-0652-11e9-9f7d-2a1fe1e55b6c.png)


![screenshot 2018-12-23 at 01 31 53](https://user-images.githubusercontent.com/30931242/50380017-0821dd00-0653-11e9-8895-9b78731925a3.png)


To run the project:

1. clone this repo to your computer via terminal: 

```
 git clone https://github.com/Yolantele/commentary-interface-kata.git
```

2. Make sure to go to 'commentary-ui' folder - as this is where you will need to install and run project.

3. locally from 'commentary-ui' folder run these commands:

```
 npm i
```

once everything is installed run this commant, it should open browser with the main page ready, 

``` 
npm run start
```

Next Steps would be:

some key steps:
- test key componets using jest

-set up linter to ensure formatting is uniformal 

feature steps:

- Improve some formatting responsiveness, specifically - newsfeeds scrollability, height and the taking into account how many coments are displayed

- extract reusable component , specifically the comments/moments renderers to follow more of the declarative component style

- Improve user interaction with onHover functions, loading icons etc.

- introduce 'timeline' graphics and moment-type icons to further illustrate the timeline of moments

- and so much more !