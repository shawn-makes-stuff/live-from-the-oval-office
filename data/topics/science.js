registerTopic({
  "id": "science",
  "title": "Science & Weather",
  "entry": "science_intro",
  "nodes": [
    {
      "id": "science_intro",
      "prompt": "Mr. President, at the UN you spent ten minutes on climate. Do you stand by calling it 'the greatest con job ever perpetrated on the world'?",
      "options": [
        {
          "text": "Climate change is the greatest con job ever perpetrated on the world.",
          "source": "https://time.com/7319744/trump-un-speech-climate-change/",
          "date": "2025-09-23",
          "score": 7,
          "cat": "truth",
          "next": "science_conjob"
        },
        {
          "text": "I'm not denying climate change, but it could very well go back.",
          "source": "https://www.newsweek.com/donald-trump-60-minutes-climate-change-1168976",
          "date": "2018-10-14",
          "score": 3,
          "cat": "truth",
          "next": "science_goback"
        },
        {
          "text": "The ocean is going to rise one-eighth of an inch within the next 250 years.",
          "source": "https://www.politifact.com/factchecks/2022/nov/17/donald-trump/trump-vastly-understates-how-much-experts-expect-s/",
          "date": "2019-12",
          "score": 6,
          "cat": "truth",
          "next": "science_ocean"
        },
        {
          "text": "I want crystal clean water and air.",
          "source": "https://thehill.com/opinion/energy-environment/521589-crystal-clean-water-not-if-trump-can-help-it/",
          "date": "2020-09-29",
          "score": 1,
          "cat": "truth",
          "next": "science_clean"
        },
        {
          "text": "Without bolder action, our children won't have time to debate the existence of climate change. They'll be busy dealing with its effects: more environmental disasters, more economic disruptions, waves of climate refugees...",
          "who": "Barack Obama, 44th President",
          "source": "https://obamawhitehouse.archives.gov/farewell",
          "date": "2017-01-10",
          "score": 0,
          "cat": "truth",
          "next": "science_clean"
        }
      ]
    },
    {
      "id": "science_conjob",
      "prompt": "A con job pulled off by whom? NASA, NOAA and every national academy of science say the warming is real and human-caused. Are they all in on it?",
      "options": [
        {
          "text": "All of these predictions made by the United Nations and many others, often for bad reasons, were wrong... made by stupid people.",
          "source": "https://www.cnn.com/2025/09/23/politics/fact-check-un-speech-claims-trump",
          "date": "2025-09-23",
          "score": 7,
          "cat": "truth",
          "next": "science_wind"
        },
        {
          "text": "My uncle was a great professor at MIT for many years... I have a natural instinct for science, and I will say that you have scientists on both sides of the picture.",
          "source": "https://thehill.com/homenews/administration/411885-trump-claims-to-have-natural-instinct-for-science-when-it-comes-to/",
          "date": "2018-10-16",
          "score": 5,
          "cat": "truth",
          "next": "science_wind"
        },
        {
          "text": "Climate has become a crisis like Covid that the Davos groups and other totalitarian elements in our society have used as a pretext for clamping down totalitarian controls.",
          "who": "Robert F. Kennedy Jr., Health Secretary",
          "source": "https://www.theguardian.com/commentisfree/2023/jun/14/ignoring-robert-f-kennedy-jr-not-an-option",
          "date": "2023-05-25",
          "score": 4,
          "cat": "truth",
          "next": "science_wind"
        },
        {
          "text": "Today, the global warming alarmists are the equivalent of the flat-Earthers. It used to be accepted scientific wisdom the Earth is flat, and this heretic named Galileo was branded a denier.",
          "who": "Ted Cruz, Senator",
          "source": "https://www.washingtonpost.com/news/the-fix/wp/2015/03/25/ted-cruz-compares-climate-change-activists-to-flat-earthers-where-to-begin/",
          "date": "2015-03-24",
          "score": 3,
          "cat": "truth",
          "next": "science_wind"
        }
      ]
    },
    {
      "id": "science_goback",
      "prompt": "'Go back' how? Nine of the last ten years set global temperature records. What is the mechanism that reverses that?",
      "options": [
        {
          "text": "It'll start getting cooler. You just watch.",
          "source": "https://www.cnbc.com/2020/09/14/trump-challenged-on-climate-change-during-wildfire-briefing.html",
          "date": "2020-09-14",
          "score": 7,
          "cat": "truth",
          "next": "science_knows"
        },
        {
          "text": "I think something's happening, something's changing and it'll change back again.",
          "source": "https://edition.cnn.com/2018/10/15/politics/trump-climate-change-60-minutes/index.html",
          "date": "2018-10-14",
          "score": 4,
          "cat": "truth",
          "next": "science_knows"
        },
        {
          "text": "The government can't change the weather... America is a country, it's not a planet. So we can pass a bunch of laws or executive orders that will do nothing to change the climate or the weather but will devastate our economy.",
          "who": "Marco Rubio, Secretary of State",
          "source": "http://thinkprogress.org/climate/2013/02/13/1588411/gop-savior-marco-rubio-mocks-climate-change/",
          "date": "2013-02-13",
          "score": 3,
          "cat": "truth",
          "next": "science_knows"
        },
        {
          "text": "Maybe perhaps we live on a ball that rotates around the sun, that flies through the universe, and maybe our climate just changes.",
          "who": "Marjorie Taylor Greene, Congresswoman",
          "source": "https://www.independent.co.uk/news/world/americas/us-politics/mtg-aoc-climate-town-hall-b1823660.html",
          "date": "2021-03-24",
          "score": 3,
          "cat": "truth",
          "next": "science_knows"
        }
      ]
    },
    {
      "id": "science_ocean",
      "prompt": "NASA measured a third of an inch of sea-level rise between 2022 and 2023 alone -- more in one year than your figure for 250. Do you stand by that number? And what do you tell the coastal towns already flooding?",
      "options": [
        {
          "text": "You'll have more oceanfront property.",
          "source": "https://www.snopes.com/fact-check/trump-more-oceanfront-property/",
          "date": "2024-06",
          "score": 7,
          "cat": "truth",
          "next": "science_hurricane"
        },
        {
          "text": "They say the ocean will rise one-eighth of an inch over the next 200 to 300 years.",
          "source": "https://www.politifact.com/factchecks/2022/nov/17/donald-trump/trump-vastly-understates-how-much-experts-expect-s/",
          "date": "2022-11-15",
          "score": 5,
          "cat": "truth",
          "next": "science_hurricane"
        },
        {
          "text": "If you've heard it from the president of the United States, obviously it's true.",
          "who": "Karoline Leavitt, White House Press Secretary",
          "source": "https://www.huffpost.com/entry/karoline-leavitt-donald-trump-claim_n_69c4d935e4b081f8eb14f2bc/amp",
          "date": "2026-03-26",
          "score": 4,
          "cat": "truth",
          "next": "science_hurricane"
        },
        {
          "text": "Over the past century, the world sea level rose by about eight inches. That was in the last century; by the end of this century, it's projected to rise another one to four feet.",
          "source": "https://obamawhitehouse.archives.gov/the-press-office/2015/05/20/remarks-president-united-states-coast-guard-academy-commencement",
          "date": "2015-05-20",
          "score": 0,
          "cat": "truth",
          "next": "NEXT_TOPIC",
          "who": "Barack Obama, 44th President"
        }
      ]
    },
    {
      "id": "science_clean",
      "prompt": "Fine words. Your first orders revived 'beautiful, clean coal,' declared an energy emergency to drill, and, for some reason, deregulated showerheads. What does clean actually mean to you?",
      "options": [
        {
          "text": "If you don't get away from this green scam, your country is going to fail.",
          "source": "https://time.com/7319744/trump-un-speech-climate-change/",
          "date": "2025-09-23",
          "score": 7,
          "cat": "truth",
          "next": "science_coal"
        },
        {
          "text": "The inflation crisis was caused by massive overspending and escalating energy prices, and that is why today I will also declare a national energy emergency. We will drill, baby, drill.",
          "source": "https://www.whitehouse.gov/remarks/2025/01/the-inaugural-address/",
          "date": "2025-01-20",
          "score": 4,
          "cat": "power",
          "next": "science_coal"
        },
        {
          "text": "Beautiful, clean coal.",
          "source": "https://www.cbsnews.com/news/trump-executive-order-coal/",
          "date": "2025-04-08",
          "score": 4,
          "cat": "cronyism",
          "next": "science_coal"
        },
        {
          "text": "I like to take a nice shower to take care of my beautiful hair.",
          "source": "https://www.aljazeera.com/news/2025/4/10/make-showers-great-again-why-trumps-fighting-bathroom-water-pressure",
          "date": "2025-04-09",
          "score": 2,
          "cat": "truth",
          "next": "science_shower"
        }
      ]
    },
    {
      "id": "science_wind",
      "prompt": "So the science is in dispute. You have also said wind turbines cause cancer and drive whales crazy. Is there any evidence for either?",
      "options": [
        {
          "text": "If you have a windmill anywhere near your house, congratulations, your house just went down 75% in value. And they say the noise causes cancer.",
          "source": "https://thehill.com/homenews/administration/437096-trump-claims-noise-from-windmills-causes-cancer/",
          "date": "2019-04-02",
          "score": 7,
          "cat": "truth",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "The windmills are driving the whales crazy, obviously.",
          "source": "https://web.archive.org/web/2/https://www.boston.com/news/local-news/2025/01/12/are-wind-farms-are-driving-the-whales-crazy/",
          "date": "2025-01-07",
          "score": 5,
          "cat": "truth",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "I know windmills very much, I have studied it better than anybody.",
          "source": "https://thehill.com/homenews/administration/475701-trump-rails-against-windmills-i-never-understood-wind/",
          "date": "2019-12-21",
          "score": 6,
          "cat": "truth",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "I don't know anything about it.",
          "source": "https://www.salon.com/2025/12/22/trumps-favorite-excuse-in-2025-i-dont-know/",
          "date": "2025-03",
          "score": 1,
          "cat": "truth",
          "next": "NEXT_TOPIC"
        }
      ]
    },
    {
      "id": "science_knows",
      "prompt": "When California's natural resources secretary told you science disagreed, you said it would start getting cooler. Does science know -- or do you know better than the scientists?",
      "options": [
        {
          "text": "OK, well, I don't think science knows, actually.",
          "source": "https://www.cnbc.com/2020/09/14/trump-challenged-on-climate-change-during-wildfire-briefing.html",
          "date": "2020-09-14",
          "score": 7,
          "cat": "truth",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "I think that would qualify as not smart, but genius....and a very stable genius at that!",
          "source": "https://www.cnn.com/2018/01/06/politics/donald-trump-white-house-fitness-very-stable-genius",
          "date": "2018-01-06",
          "score": 5,
          "cat": "truth",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "That's a nasty question.",
          "source": "https://www.fox9.com/news/trump-taco-tariff-question",
          "date": "2025-05-28",
          "score": 3,
          "cat": "press",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "Trusting the experts is not a feature of either a science or democracy.",
          "who": "Robert F. Kennedy Jr., Health Secretary",
          "source": "https://www.splinter.com/rfk-jr-learns-he-is-not-also-denmarks-hhs-secretary",
          "date": "2025-08-12",
          "score": 5,
          "cat": "truth",
          "next": "NEXT_TOPIC"
        }
      ]
    },
    {
      "id": "science_hurricane",
      "prompt": "Speaking of coasts: in 2019 you showed a NOAA hurricane map with Alabama added in black Sharpie, and Axios reported you asked about nuking hurricanes. Who drew on the map -- and did you ask about the nukes?",
      "options": [
        {
          "text": "I don't know. I don't know. I don't know.",
          "source": "https://www.cnn.com/2019/09/06/politics/trump-sharpie-hurricane-dorian-alabama",
          "date": "2019-09-04",
          "score": 2,
          "cat": "truth",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "What I said was accurate! All Fake News in order to demean!",
          "source": "https://www.factcheck.org/2019/09/trump-doubles-down-on-inaccurate-hurricane-forecast",
          "date": "2019-09-05",
          "score": 7,
          "cat": "press",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "The story by Axios that President Trump wanted to blow up large hurricanes with nuclear weapons prior to reaching shore is ridiculous. I never said this.",
          "source": "https://time.com/5661380/trump-hurricanes-nukes-nuclear-bombs/",
          "date": "2019-08-26",
          "score": 4,
          "cat": "truth",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "I got it. I got it. Why don't we nuke them?",
          "source": "https://www.axios.com/2019/08/25/trump-nuclear-bombs-hurricanes",
          "date": "2019-08-25",
          "score": 9,
          "cat": "truth",
          "next": "NEXT_TOPIC"
        }
      ]
    },
    {
      "id": "science_coal",
      "prompt": "US oil output was already at record highs when you declared that 'emergency.' Meanwhile you plan to phase out FEMA before a hurricane season NOAA calls unusually intense. Who picks up the pieces?",
      "options": [
        {
          "text": "A governor should be able to handle it, and frankly, if they can't handle it, the aftermath, then maybe they shouldn't be governor.",
          "source": "https://www.cnn.com/2025/06/11/politics/fema-hurricane-season-phase-out-trump",
          "date": "2025-06-10",
          "score": 7,
          "cat": "power",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "We want to wean off of FEMA, and we want to bring it down to the state level.",
          "source": "https://www.cnn.com/2025/06/11/politics/fema-hurricane-season-phase-out-trump",
          "date": "2025-06-10",
          "score": 5,
          "cat": "power",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "We'll see what happens.",
          "source": "https://www.voanews.com/a/trump-catchphrase-for-any-circumstance-we-will-see/4019006.html",
          "date": "2017-09",
          "score": 1,
          "cat": "truth",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "I do not believe it is in the best interest of the American people to eliminate the Federal Emergency Management Agency.",
          "source": "https://en.wikipedia.org/wiki/Federal_Emergency_Management_Agency",
          "date": "2025-05-07",
          "score": 0,
          "cat": "power",
          "next": "NEXT_TOPIC",
          "who": "Cameron Hamilton, acting FEMA Administrator"
        }
      ]
    },
    {
      "id": "science_shower",
      "prompt": "You signed an executive order about showerheads. Is water pressure really a presidential priority while your health secretary is telling pregnant women that Tylenol causes autism?",
      "options": [
        {
          "text": "I stand under the shower for 15 minutes until it gets wet. It comes out drip, drip, drip. It's ridiculous.",
          "source": "https://www.aljazeera.com/news/2025/4/10/make-showers-great-again-why-trumps-fighting-bathroom-water-pressure",
          "date": "2025-04-09",
          "score": 2,
          "cat": "truth",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "I want to say it like it is: Don't take Tylenol. Don't take it. Fight like hell not to take it.",
          "source": "https://www.nbcnews.com/health/health-news/trump-acetaminophen-fda-pregnancy-autism-cause-rcna232909",
          "date": "2025-09-22",
          "score": 7,
          "cat": "truth",
          "next": "science_tylenol"
        },
        {
          "text": "I'm going to let him go wild on health. I'm going to let him go wild on the food. I'm going to let him go wild on the medicines.",
          "source": "https://www.washingtonpost.com/video/politics/trump-promises-to-let-rfk-jr-go-wild-on-health/2024/10/27/e8f26734-38d0-44a1-b231-91bd3a3c66b3_video.html",
          "date": "2024-10-27",
          "score": 6,
          "cat": "cronyism",
          "next": "science_tylenol"
        },
        {
          "text": "So showerheads -- you take a shower, the water doesn't come out... So what do you do? You just stand there longer or you take a shower longer? Because my hair -- I don't know about you, but it has to be perfect. Perfect.",
          "source": "https://www.thesun.co.uk/news/12369436/donald-trump-latest-news-live-updates/",
          "date": "2020-08-12",
          "score": 3,
          "cat": "truth",
          "next": "NEXT_TOPIC"
        }
      ]
    },
    {
      "id": "science_tylenol",
      "prompt": "Every major obstetrics body says acetaminophen is the safest option in pregnancy and that untreated fever is the real danger. What should a pregnant woman with a 103-degree fever do tonight -- and why should she take your word over her doctor's?",
      "options": [
        {
          "text": "If you can't tough it out, if you can't do it, that's what you're gonna have to do. You'll take a Tylenol, but it'll be very sparingly.",
          "source": "https://www.newsweek.com/trump-autism-avoid-tylenol-pregnant-women-rfk-jr-2133970",
          "date": "2025-09-22",
          "score": 7,
          "cat": "truth",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "I have a natural instinct for science.",
          "source": "https://thehill.com/homenews/administration/411885-trump-claims-to-have-natural-instinct-for-science-when-it-comes-to/",
          "date": "2018-10-16",
          "score": 5,
          "cat": "truth",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "I'm just making these statements from me, I'm not making them from these doctors.",
          "source": "https://www.cbsnews.com/news/trump-autism-tylenol-medical-experts/",
          "date": "2025-09-22",
          "score": 3,
          "cat": "truth",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "But with Tylenol, don't take it. Don't take it. And if you can't live, if your fever is so bad, you have to take one because there's no alternative to that. Sadly... there's not an alternative to that.",
          "source": "https://singjupost.com/transcript-trump-rfk-jr-and-dr-oz-on-autism-rates-and-tylenol/",
          "date": "2025-09-22",
          "score": 8,
          "cat": "truth",
          "next": "NEXT_TOPIC"
        }
      ]
    }
  ]
});
