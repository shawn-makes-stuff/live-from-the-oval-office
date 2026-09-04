registerTopic({
  "id": "wars",
  "title": "Peacemaker",
  "entry": "wars_intro",
  "nodes": [
    {
      "id": "wars_intro",
      "prompt": "Mr. President, you call yourself a peacemaker who ended seven wars. You have also bombed Iran, blown up boats off Venezuela and renamed the Pentagon the Department of War. Which is it?",
      "options": [
        {
          "text": "I stopped seven wars and wiped out a nuclear war that would have happened with Iran.",
          "source": "https://www.newsweek.com/trump-denies-craving-nobel-peace-prize-2123037",
          "date": "2025-09-02",
          "score": 3,
          "cat": "truth",
          "next": "wars_seven"
        },
        {
          "text": "Iran's key nuclear enrichment facilities have been completely and totally obliterated.",
          "source": "https://www.timesofisrael.com/full-text-of-trumps-speech-following-us-strikes-on-iranian-nuclear-facilities/",
          "date": "2025-06-21",
          "score": 6,
          "cat": "strongman",
          "next": "wars_iran"
        },
        {
          "text": "We won World War I, we won World War II, we won everything before that and in between, and then we decided to go woke, and we changed the name to DoD.",
          "source": "https://www.npr.org/2025/09/04/nx-s1-5529420/trump-department-of-war-department-of-defense",
          "date": "2025-09-05",
          "score": 7,
          "cat": "strongman",
          "next": "wars_deptwar"
        },
        {
          "text": "We just, over the last few minutes, literally shot out a boat, a drug-carrying boat, a lot of drugs in that boat.",
          "source": "https://www.cbsnews.com/news/trump-boat-tren-de-aragua-gang-venezuela/",
          "date": "2025-09-02",
          "score": 8,
          "cat": "violence",
          "next": "wars_venezuela"
        }
      ]
    },
    {
      "id": "wars_seven",
      "prompt": "Fact-checkers cannot find seven wars. India says its ceasefire with Pakistan was worked out directly, without you, and Ukraine is still burning. Name one war you actually ended -- and what happened to '24 hours'?",
      "options": [
        {
          "text": "I can say this, nobody's done in history what I've done. I stopped seven wars, and they were, they're big ones too, India-Pakistan.",
          "source": "https://www.newsweek.com/trump-denies-craving-nobel-peace-prize-2123037",
          "date": "2025-09-02",
          "score": 4,
          "cat": "truth",
          "next": "wars_nobel"
        },
        {
          "text": "Well, I was being a little bit sarcastic when I said that. What I really mean is I'd like to get it settled, and I think I'll be successful.",
          "source": "https://thehill.com/homenews/administration/5197961-trump-says-he-was-being-a-little-bit-sarcastic-when-he-promised-to-end-ukraine-war-in-24-hours/",
          "date": "2025-03-16",
          "score": 2,
          "cat": "truth",
          "next": "wars_ukraine"
        },
        {
          "text": "You're gambling with the lives of millions of people. You're gambling with World War III!",
          "source": "https://www.haaretz.com/us-news/2025-02-28/ty-article/youre-gambling-with-world-war-iii-zelenskyy-trump-clash-in-oval-office-shouting-match/00000195-4de3-d46a-a19f-fde377050000",
          "date": "2025-02-28",
          "score": 7,
          "cat": "strongman",
          "next": "wars_ukraine"
        }
      ]
    },
    {
      "id": "wars_iran",
      "prompt": "'Obliterated' -- yet the leaked intelligence assessment said months of delay, not years, and three days later you were cursing on the White House lawn about both sides violating your ceasefire. Was the strike a success, and what happens next?",
      "options": [
        {
          "text": "We basically have two countries that have been fighting so long and so hard, that they don't know what the f--- they're doing. Do you understand that?",
          "source": "https://www.nbcnews.com/video/trump-slams-israel-and-iran-over-accusations-of-ceasefire-violations-242160197890",
          "date": "2025-06-24",
          "score": 5,
          "cat": "strongman",
          "next": "wars_fbomb"
        },
        {
          "text": "Yes, I may do it. I may not do it. I mean, nobody knows what I'm going to do.",
          "source": "https://www.france24.com/en/live-news/20250618-trump-on-iran-strikes-i-may-do-it-i-may-not-do-it",
          "date": "2025-06-18",
          "score": 3,
          "cat": "power",
          "next": "wars_fbomb"
        },
        {
          "text": "I would bomb the shit out of 'em.",
          "source": "https://www.realclearpolitics.com/video/2015/11/13/trumps_updated_isis_plan_bomb_the_shit_out_of_them_send_exxon_in_to_rebuild.html",
          "date": "2015-11-12",
          "score": 8,
          "cat": "violence",
          "next": "wars_fbomb"
        }
      ]
    },
    {
      "id": "wars_deptwar",
      "prompt": "Congress named it the Department of Defense in 1949 and only Congress can rename it. Why does a self-described peacemaker want 'War' on the letterhead -- and who, exactly, is the enemy?",
      "options": [
        {
          "text": "I'd just bomb those suckers. I'd blow up the pipes, I'd blow up the refineries, I'd blow up every single inch -- there would be nothing left.",
          "source": "https://www.realclearpolitics.com/video/2015/11/13/trumps_updated_isis_plan_bomb_the_shit_out_of_them_send_exxon_in_to_rebuild.html",
          "date": "2015-11-12",
          "score": 8,
          "cat": "violence",
          "next": "wars_greenland"
        },
        {
          "text": "China is operating the Panama Canal, and we didn't give it to China. We gave it to Panama, and we're taking it back.",
          "source": "https://www.factcheck.org/2025/01/factchecking-trumps-inaugural-address/",
          "date": "2025-01-20",
          "score": 7,
          "cat": "strongman",
          "next": "wars_greenland"
        },
        {
          "text": "Dealing with Congress is a matter of give and take. The president doesn't get everything he wants, the Congress doesn't get everything they want. A dictatorship would be a heck of a lot easier, there's no question about it.",
          "who": "George W. Bush, 43rd President",
          "source": "http://seattlepi.nwsource.com/national/32902_bush27.shtml",
          "date": "2001-07-26",
          "score": 3,
          "cat": "power",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "We're going to go on offense, not just on defense, maximum lethality, not tepid legality, violent effect, not politically correct.",
          "who": "Pete Hegseth, Defense Secretary",
          "source": "https://www.the-independent.com/news/world/americas/us-politics/trump-order-department-of-war-b2821240.html",
          "date": "2025-09-05",
          "score": 8,
          "cat": "violence",
          "next": "wars_greenland"
        }
      ]
    },
    {
      "id": "wars_venezuela",
      "prompt": "Eleven people were killed on that boat with no charges, no trial and no evidence made public. Under what law does the US Navy execute suspected smugglers at sea?",
      "options": [
        {
          "text": "I don't need international law.",
          "source": "https://en.wikipedia.org/wiki/Greenland_crisis",
          "date": "2026-01-07",
          "score": 9,
          "cat": "power",
          "next": "wars_greenland"
        },
        {
          "text": "Yeah, there is one thing. My own morality. My own mind. It's the only thing that can stop me.",
          "source": "https://en.wikipedia.org/wiki/Greenland_crisis",
          "date": "2026-01-07",
          "score": 9,
          "cat": "strongman",
          "next": "wars_greenland"
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
          "text": "Should we follow the Geneva Conventions? What if we treated the enemy the way they treated us? ... Hey, Al Qaeda: If you surrender, we might spare your life. If you do not, we will rip your arms off and feed them to hogs.",
          "who": "Pete Hegseth, Defense Secretary",
          "source": "https://en.wikiquote.org/wiki/Pete_Hegseth",
          "date": "2024-06-04",
          "score": 9,
          "cat": "violence",
          "next": "wars_greenland"
        }
      ]
    },
    {
      "id": "wars_nobel",
      "prompt": "Pakistan nominated you for the Nobel Peace Prize for a ceasefire India says you had nothing to do with. Do you crave the prize -- and is the Gaza 'Riviera' plan part of the pitch?",
      "options": [
        {
          "text": "No. I just want, I want to be treated fairly. But the word crave, and even if I did, I couldn't answer that question, because it would sound terrible.",
          "source": "https://www.newsweek.com/trump-denies-craving-nobel-peace-prize-2123037",
          "date": "2025-09-02",
          "score": 2,
          "cat": "truth",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "If I say that, it sounds so bad, so I don't want to say any of that stuff, because it sounds so bad. But look, I stopped seven wars.",
          "source": "https://www.newsweek.com/trump-denies-craving-nobel-peace-prize-2123037",
          "date": "2025-09-02",
          "score": 4,
          "cat": "truth",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "The US will take over the Gaza Strip, and we will do a job with it too. We'll own it.",
          "source": "https://www.aljazeera.com/news/2025/2/5/trump-says-us-will-take-over-and-own-gaza-in-redevelopment-plan",
          "date": "2025-02-04",
          "score": 7,
          "cat": "strongman",
          "next": "wars_gaza"
        }
      ]
    },
    {
      "id": "wars_ukraine",
      "prompt": "You told Zelensky in the Oval Office that he 'doesn't have the cards' and promised to end his war in 24 hours. It is still going. What happened?",
      "options": [
        {
          "text": "You don't have the cards right now.",
          "source": "https://www.pbs.org/newshour/politics/what-trump-and-zelenskyy-said-during-their-heated-argument-in-the-oval-office",
          "date": "2025-02-28",
          "score": 7,
          "cat": "strongman",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "If it's not solved, I will have it solved in 24 hours with Zelensky and with Putin.",
          "source": "https://thehill.com/homenews/administration/5197961-trump-says-he-was-being-a-little-bit-sarcastic-when-he-promised-to-end-ukraine-war-in-24-hours/",
          "date": "2023-03",
          "score": 4,
          "cat": "truth",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "I hope it gets done... we're going to save a lot of people from being killed... we'll see.",
          "source": "https://www.nbcnews.com/politics/trump-administration/read-full-transcript-president-donald-trump-interviewed-meet-press-mod-rcna203514",
          "date": "2025-05-04",
          "score": 1,
          "cat": "strongman",
          "next": "NEXT_TOPIC"
        }
      ]
    },
    {
      "id": "wars_fbomb",
      "prompt": "That was an f-bomb on live television about a ceasefire you brokered. Is that how a commander-in-chief talks about war and peace?",
      "options": [
        {
          "text": "I don't know anything about it.",
          "source": "https://www.salon.com/2025/12/22/trumps-favorite-excuse-in-2025-i-dont-know/",
          "date": "2025-03",
          "score": 1,
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
          "text": "North Korea best not make any more threats to the United States. They will be met with fire and fury like the world has never seen.",
          "source": "https://www.npr.org/sections/thetwo-way/2017/08/08/542299360/trump-says-u-s-will-meet-north-korean-threats-with-fire-and-fury",
          "date": "2017-08-08",
          "score": 8,
          "cat": "violence",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "The members are reminded to abide by decorum of the House.",
          "who": "Marjorie Taylor Greene, Congresswoman",
          "source": "https://thehill.com/homenews/house/4019823-democrats-erupt-in-laughter-after-greene-calls-for-decorum-in-house/",
          "date": "2023-05-24",
          "score": 1,
          "cat": "power",
          "next": "NEXT_TOPIC"
        }
      ]
    },
    {
      "id": "wars_greenland",
      "prompt": "Greenland, Panama, Canada -- these are allies. Will you rule out using military force to take any of them?",
      "options": [
        {
          "text": "I can't assure you -- you're talking about Panama and Greenland -- no, I can't assure you on either of those two.",
          "source": "https://www.politico.eu/article/donald-trump-military-force-greenland-panama-canal/",
          "date": "2025-01-07",
          "score": 8,
          "cat": "strongman",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "I don't want to use force. I won't use force.",
          "source": "https://www.npr.org/2026/01/21/nx-s1-5684015/in-davos-speech-trump-ruled-out-using-military-force-to-acquire-greenland",
          "date": "2026-01-21",
          "score": 3,
          "cat": "power",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "If you look at a map, they drew an artificial line right through it between Canada and the U.S., just a straight artificial line.",
          "source": "https://www.foxnews.com/politics/trump-downplays-canadas-liberal-lean-from-oval-office-calls-border-artificial-line",
          "date": "2025-03",
          "score": 6,
          "cat": "strongman",
          "next": "NEXT_TOPIC"
        }
      ]
    },
    {
      "id": "wars_gaza",
      "prompt": "'Own' Gaza? Two million people live there. Where do they go -- and what was that AI video with the golden statue of you on the beach?",
      "options": [
        {
          "text": "We'll own it and be responsible for dismantling all of the dangerous unexploded bombs and other weapons on the site.",
          "source": "https://www.aljazeera.com/news/2025/2/5/trump-says-us-will-take-over-and-own-gaza-in-redevelopment-plan",
          "date": "2025-02-04",
          "score": 7,
          "cat": "strongman",
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
          "text": "[The United States] stands ready to lead and Make Gaza Beautiful Again.",
          "who": "Marco Rubio, Secretary of State",
          "source": "https://thehill.com/homenews/administration/5128301-rubio-trump-make-gaza-strip-beautiful-again/",
          "date": "2025-02-06",
          "score": 4,
          "cat": "power",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "Give Israel what they need to fight the war they can't afford to lose. This is Hiroshima and Nagasaki on steroids.",
          "who": "Lindsey Graham, Senator",
          "source": "https://www.yahoo.com/news/hiroshima-nagasaki-steroids-lindsey-graham-131426865.html",
          "date": "2024-05-08",
          "score": 8,
          "cat": "violence",
          "next": "NEXT_TOPIC"
        }
      ]
    }
  ]
});
