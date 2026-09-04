registerTopic({
  "id": "identity",
  "title": "Us and Them",
  "entry": "identity_intro",
  "nodes": [
    {
      "id": "identity_intro",
      "prompt": "Mr. President, within hours of Charlie Kirk's killing you blamed 'the radical left.' In a debate you told seventy million viewers that immigrants eat pets. You govern a country of 340 million people. Does a president speak for all of them, or only for some?",
      "options": [
        {
          "text": "We have radical left lunatics out there and we just have to beat them.",
          "source": "https://en.wikipedia.org/wiki/Assassination_of_Charlie_Kirk",
          "date": "2025-09-12",
          "score": 7,
          "cat": "dehumanization",
          "next": "identity_kirk"
        },
        {
          "text": "I'm the least racist person in this room.",
          "source": "https://en.wikipedia.org/wiki/2020_United_States_presidential_debates",
          "date": "2020-10-22",
          "score": 3,
          "cat": "truth",
          "next": "identity_race"
        },
        {
          "text": "In Springfield, they're eating the dogs, the people that came in, they're eating the cats. They're eating the pets of the people that live there.",
          "source": "https://en.wikipedia.org/wiki/Springfield_pet-eating_hoax",
          "date": "2024-09-10",
          "score": 8,
          "cat": "dehumanization",
          "next": "identity_springfield"
        },
        {
          "text": "As of today, it will henceforth be the official policy of the United States government that there are only two genders: male and female.",
          "source": "https://www.whitehouse.gov/remarks/2025/01/the-inaugural-address/",
          "date": "2025-01-20",
          "score": 6,
          "cat": "power",
          "next": "identity_dei"
        },
        {
          "text": "Violence of any kind is unacceptable in our society and I condemn this action in the strongest possible terms.",
          "who": "Bernie Sanders, Senator, Vermont",
          "source": "https://www.youtube.com/watch?v=GcH2i7um5sw",
          "date": "2017-06-14",
          "score": 0,
          "cat": "violence",
          "next": "identity_race"
        }
      ]
    },
    {
      "id": "identity_kirk",
      "prompt": "'Beat them.' At his memorial, with his widow preaching forgiveness, you said something very different about your opponents. Do you stand by it?",
      "options": [
        {
          "text": "I hate my opponent, and I don't want the best for them. That's where I disagreed with Charlie.",
          "source": "https://en.wikipedia.org/wiki/Assassination_of_Charlie_Kirk",
          "date": "2025-09-21",
          "score": 8,
          "cat": "dehumanization",
          "next": "identity_enemies"
        },
        {
          "text": "That's a nasty question.",
          "source": "https://www.fox9.com/news/trump-taco-tariff-question",
          "date": "2025-05-28",
          "score": 3,
          "cat": "press",
          "next": "identity_enemies"
        },
        {
          "text": "When someone is cruel or acts like a bully, you don't stoop to their level. No, our motto is, when they go low, we go high.",
          "who": "Michelle Obama, former First Lady",
          "source": "http://time.com/4421538/democratic-convention-michelle-obama-transcript/",
          "date": "2016-07-25",
          "score": 0,
          "cat": "violence",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "We will absolutely target you, go after you, if you are targeting anyone with hate speech.",
          "who": "Pam Bondi, Attorney General",
          "source": "https://www.independent.co.uk/news/world/americas/us-politics/tucker-carlson-trump-charlie-kirk-free-speech-b2829584.html",
          "date": "2025-09-15",
          "score": 7,
          "cat": "press",
          "next": "identity_enemies"
        }
      ]
    },
    {
      "id": "identity_enemies",
      "prompt": "Your opponents. You have called your last two of them mentally impaired. Are Democrats your opponents, Mr. President, or your enemies?",
      "options": [
        {
          "text": "Joe Biden became mentally impaired. Kamala was born that way.",
          "source": "https://www.axios.com/2024/09/29/trump-harris-mentally-disabled-wisconsin-rally",
          "date": "2024-09-28",
          "score": 7,
          "cat": "dehumanization",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "Empathy won't destroy civilization; indeed, it just might save it. We can debate policies. We can debate theology. But if we give up on empathy, we give up on any real chance of coming together to solve our problems.",
          "who": "Hillary Clinton, former Secretary of State",
          "source": "https://www.theatlantic.com/ideas/2026/01/war-empathy-hillary-clinton/685809/",
          "date": "2026-01-29",
          "score": 0,
          "cat": "dehumanization",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "And no one is even trying to assassinate Biden/Kamala",
          "who": "Elon Musk (DOGE), DOGE adviser",
          "source": "https://www.forbes.com/sites/siladityaray/2024/09/16/musk-posts-then-deletes-no-one-is-even-trying-to-assassinate-bidenkamala/",
          "date": "2024-09-15",
          "score": 8,
          "cat": "violence",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "[The country is run by] a bunch of childless cat ladies who are miserable at their own lives and the choices that they've made, and so they wanna make the rest of the country miserable.",
          "source": "https://www.usatoday.com/story/news/politics/elections/2024/07/23/jd-vance-cat-lady-kamala-harris/74513245007/",
          "date": "2021-07-29",
          "score": 4,
          "cat": "dehumanization",
          "next": "NEXT_TOPIC",
          "who": "JD Vance, Vice President"
        }
      ]
    },
    {
      "id": "identity_race",
      "prompt": "You condemn violence and call yourself the least racist person in the room. Yet you said there were 'very fine people on both sides' of a torch-lit neo-Nazi march, and you called African nations 'shithole countries.' Explain.",
      "options": [
        {
          "text": "You also had people that were very fine people, on both sides.",
          "source": "https://www.politifact.com/article/2019/apr/26/context-trumps-very-fine-people-both-sides-remarks/",
          "date": "2017-08-15",
          "score": 7,
          "cat": "dehumanization",
          "next": "identity_charlottesville"
        },
        {
          "text": "Why are we having all these people from shithole countries come here?",
          "source": "https://www.theguardian.com/us-news/2018/jan/11/trump-pans-immigration-proposal-as-bringing-people-from-shithole-countries",
          "date": "2018-01-11",
          "score": 9,
          "cat": "dehumanization",
          "next": "identity_shithole"
        },
        {
          "text": "Appealing to tribe, appealing to fear, pitting one group against another, telling people that order and security will be restored if it weren't for those who don't look like us or don't sound like us... that's an old playbook.",
          "who": "Barack Obama, 44th President",
          "source": "https://www.theguardian.com/commentisfree/2018/sep/08/barack-obama-you-need-to-vote-because-our-democracy-depends-on-it",
          "date": "2018-09-07",
          "score": 0,
          "cat": "dehumanization",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "I think I've done more for the black community than any other President and let's take a pass on Abraham Lincoln because he did good but although it's always questionable, you know in other words the end result.",
          "source": "https://slate.com/news-and-politics/2020/06/what-was-trump-trying-to-say-about-abraham-lincoln.html",
          "date": "2020-06-12",
          "score": 5,
          "cat": "truth",
          "next": "identity_charlottesville"
        }
      ]
    },
    {
      "id": "identity_charlottesville",
      "prompt": "The 'fine people' marched with men chanting 'Jews will not replace us,' and one of them killed Heather Heyer. Which of them were fine? And while we are on respect: you used 'Pocahontas' as a slur at a ceremony honoring Navajo code talkers. Do you regret either?",
      "options": [
        {
          "text": "I'm not talking about the neo-Nazis and the white nationalists -- because they should be condemned totally.",
          "source": "https://www.politifact.com/article/2019/apr/26/context-trumps-very-fine-people-both-sides-remarks/",
          "date": "2017-08-15",
          "score": 3,
          "cat": "truth",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "You were here long before any of us were here, although we have a representative in Congress who, they say, was here a long time ago. They call her Pocahontas.",
          "source": "https://trumpwhitehouse.archives.gov/briefings-statements/remarks-president-trump-event-honoring-native-american-code-talkers/",
          "date": "2017-11-27",
          "score": 7,
          "cat": "dehumanization",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "Americans recoiled from the repugnant spectacle of white supremacists marching in Charlottesville to promote their un-American 'blood and soil' ideology.",
          "who": "John McCain, Senator, Arizona",
          "source": "https://www.washingtonpost.com/opinions/john-mccain-its-time-congress-returns-to-regular-order/2017/08/31/f62a3e0c-8cfb-11e7-8df5-c2e5cf46c1e2_story.html",
          "date": "2017-08-31",
          "score": 0,
          "cat": "dehumanization",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "...answered that question, and if you look at what I said, you will see that question was answered perfectly... talking about people that went because they felt very strongly about the monument to Robert E. Lee, a great general.",
          "source": "https://www.politico.com/story/2019/04/26/trump-charlottesville-comments-1290724",
          "date": "2019-04-26",
          "score": 6,
          "cat": "dehumanization",
          "next": "NEXT_TOPIC"
        }
      ]
    },
    {
      "id": "identity_shithole",
      "prompt": "Haiti, El Salvador, Africa -- and you said you would rather have people from Norway. What separates a Norwegian from a Haitian in your mind -- and does that go for Puerto Ricans, American citizens, too?",
      "options": [
        {
          "text": "We should have more people from places like Norway.",
          "source": "https://www.businessinsider.com/trump-shithole-immigration-haiti-african-countries-2018-1",
          "date": "2018-01-11",
          "score": 7,
          "cat": "dehumanization",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "Puerto Rico is important to me, and Puerto Rico -- the people are fantastic people... these are great people, and we have to help them.",
          "source": "https://en.wikipedia.org/wiki/Effects_of_Hurricane_Maria_in_Puerto_Rico",
          "date": "2017-10-03",
          "score": 2,
          "cat": "truth",
          "next": "identity_puertorico"
        },
        {
          "text": "America has never been united by blood or birth or soil. We are bound by ideals that move us beyond our backgrounds, lift us above our interests and teach us what it means to be citizens.",
          "who": "George W. Bush, 43rd President",
          "source": "http://www.bartleby.com/124/pres66.html",
          "date": "2001-01-20",
          "score": 0,
          "cat": "dehumanization",
          "next": "identity_puertorico"
        },
        {
          "text": "Why do we need more Haitians? Take them out.",
          "source": "https://www.cbsnews.com/news/donald-trump-shthole-countries-response-from-haiti-africa-el-salvador/",
          "date": "2018-01-11",
          "score": 9,
          "cat": "dehumanization",
          "next": "NEXT_TOPIC"
        }
      ]
    },
    {
      "id": "identity_puertorico",
      "prompt": "Fine words. In San Juan you told hurricane survivors they had thrown your budget out of whack, then tossed paper towels into the crowd. Nearly 3,000 people died. Was it fun -- and do you owe them anything?",
      "options": [
        {
          "text": "I was having fun, they were having fun. They said, 'Throw 'em to me!'",
          "source": "https://nymag.com/intelligencer/2017/10/trump-defends-throwing-paper-towels-to-puerto-ricans.html",
          "date": "2017-10-08",
          "score": 5,
          "cat": "dehumanization",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "They had these beautiful, soft towels. Very good towels.",
          "source": "https://www.glamour.com/story/donald-trump-twitter-puerto-rico-response-appreciation",
          "date": "2017-10-08",
          "score": 3,
          "cat": "dehumanization",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "I hate to tell you, Puerto Rico, but you've thrown our budget a little out of whack.",
          "source": "https://en.wikipedia.org/wiki/Hurricane_Maria",
          "date": "2017-10-03",
          "score": 7,
          "cat": "dehumanization",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "3000 people did not die in the two hurricanes that hit Puerto Rico. When I left the Island, AFTER the storm had hit, they had anywhere from 6 to 18 deaths. As time went by it did not go up by much.",
          "source": "https://www.bbc.com/news/world-us-canada-45511865",
          "date": "2018-09-13",
          "score": 8,
          "cat": "truth",
          "next": "NEXT_TOPIC"
        }
      ]
    },
    {
      "id": "identity_springfield",
      "prompt": "Springfield's city manager and Ohio's Republican governor said there were no credible reports of anyone eating pets. Bomb threats closed the schools. Do you retract it?",
      "options": [
        {
          "text": "We will do large deportations in Springfield, Ohio.",
          "source": "https://en.wikipedia.org/wiki/Remigration",
          "date": "2024-09-13",
          "score": 8,
          "cat": "dehumanization",
          "next": "identity_haitians"
        },
        {
          "text": "They're poisoning the blood of our country.",
          "source": "https://en.wikipedia.org/wiki/Racial_views_of_Donald_Trump",
          "date": "2023-12-16",
          "score": 8,
          "cat": "dehumanization",
          "next": "identity_haitians"
        },
        {
          "text": "If I have to create stories so that the American media actually pays attention to the suffering of the American people, then that's what I'm going to do.",
          "who": "JD Vance, Vice President",
          "source": "https://www.theguardian.com/us-news/2024/sep/15/jd-vance-lies-haitian-immigrants",
          "date": "2024-09-15",
          "score": 6,
          "cat": "truth",
          "next": "identity_haitians"
        },
        {
          "text": "That's what you say.",
          "source": "https://abcnews.com/US/full-transcript-trumps-exclusive-100-days-broadcast-interview/story?id=121291672",
          "date": "2025-04-29",
          "score": 3,
          "cat": "press",
          "next": "identity_haitians"
        }
      ]
    },
    {
      "id": "identity_haitians",
      "prompt": "Most of Springfield's Haitians are here legally under Temporary Protected Status, and you have said migrants are 'poisoning the blood' of the country -- a phrase historians trace to the 1930s. Who exactly is the poison, Mr. President -- and what do you say to those who hear the 1930s in it?",
      "options": [
        {
          "text": "Why don't they go back and help fix the totally broken and crime-infested places from which they came.",
          "source": "https://en.wikipedia.org/wiki/Racial_views_of_Donald_Trump",
          "date": "2019-07-14",
          "score": 8,
          "cat": "dehumanization",
          "next": "identity_goback"
        },
        {
          "text": "Coming from the border are millions and millions of people that happen to be taking Black jobs.",
          "source": "https://en.wikipedia.org/wiki/Black_jobs",
          "date": "2024-07-31",
          "score": 6,
          "cat": "dehumanization",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "They said Hitler said that... It's true. They're destroying the blood of the country, they're destroying the fabric of our country, and we're going to have to get them out.",
          "source": "https://abcnews.go.com/Politics/donald-trumps-history-adolf-hitler-nazi-writings-analysis/story?id=105810745",
          "date": "2023-12-21",
          "score": 9,
          "cat": "dehumanization",
          "next": "identity_goback"
        },
        {
          "text": "We live in a land made of ideals, not blood and soil.",
          "source": "https://www.cnn.com/2017/10/16/politics/john-mccain-joe-biden-liberty-medal/index.html",
          "date": "2017-10-16",
          "score": 0,
          "cat": "dehumanization",
          "next": "NEXT_TOPIC",
          "who": "John McCain, Senator, Arizona"
        }
      ]
    },
    {
      "id": "identity_goback",
      "prompt": "You tweeted that at four congresswomen, three of whom were born in the United States. Go back where? You spent years questioning where a president was born, and you have questioned whether Kamala Harris is Black. Do you decide who counts as American?",
      "options": [
        {
          "text": "President Barack Obama was born in the United States. Period.",
          "source": "https://en.wikipedia.org/wiki/Barack_Obama_citizenship_conspiracy_theories",
          "date": "2016-09-16",
          "score": 3,
          "cat": "truth",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "I didn't know she was Black until a number of years ago, when she happened to turn Black.",
          "source": "https://en.wikipedia.org/wiki/Black_jobs",
          "date": "2024-07-31",
          "score": 8,
          "cat": "dehumanization",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "I don't know anything about it.",
          "source": "https://www.salon.com/2025/12/22/trumps-favorite-excuse-in-2025-i-dont-know/",
          "date": "2025-03",
          "score": 1,
          "cat": "truth",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "Because if you're not born in the United States, you cannot be president. And, there is a real question... I'm starting to wonder myself whether or not he was born in this country.",
          "source": "http://mediamatters.org/mmtv/201103280006",
          "date": "2011-03-28",
          "score": 7,
          "cat": "truth",
          "next": "NEXT_TOPIC"
        }
      ]
    },
    {
      "id": "identity_dei",
      "prompt": "Ten days after that speech, 67 people died over the Potomac and you blamed diversity hiring before the bodies were recovered. How could you know that?",
      "options": [
        {
          "text": "Because I have common sense. OK? And unfortunately, a lot of people don't.",
          "source": "https://apnews.com/article/plane-crash-washington-dc-trump-dei-claims-3ac5486ec594d81e919e8ebbd9733869",
          "date": "2025-01-30",
          "score": 7,
          "cat": "truth",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "They actually came out with a directive, too White.",
          "source": "https://en.wikipedia.org/wiki/2025_Potomac_River_mid-air_collision",
          "date": "2025-01-30",
          "score": 6,
          "cat": "truth",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "When you don't have the best standards in who you're hiring, it means on the one hand, you're not getting the best people in government. But on the other hand, it puts stresses on the people who are already there.",
          "who": "JD Vance, Vice President",
          "source": "https://www.politico.com/newsletters/playbook-pm/2025/01/30/trump-lashes-out-in-dca-crash-presser-00132333",
          "date": "2025-01-30",
          "score": 4,
          "cat": "dehumanization",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "Despicable... We put safety first, drove down close calls, grew Air Traffic Control, and had zero commercial airline crash fatalities out of millions of flights on our watch.",
          "source": "https://www.axios.com/2025/01/30/pete-buttigieg-trump-plane-crash",
          "date": "2025-01-30",
          "score": 0,
          "cat": "truth",
          "next": "NEXT_TOPIC",
          "who": "Pete Buttigieg, former Transportation Secretary"
        }
      ]
    }
  ]
});
