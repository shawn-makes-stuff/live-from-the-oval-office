registerTopic({
  "id": "troops",
  "title": "Boots on Main Street",
  "entry": "troops_intro",
  "nodes": [
    {
      "id": "troops_intro",
      "prompt": "Mr. President, you have put National Guard troops in Los Angeles and Washington, and now you are talking about Chicago, Baltimore and New York. When did American cities become a military problem?",
      "options": [
        {
          "text": "We're going in. I didn't say when.",
          "source": "https://time.com/7314045/trump-announcement-chicago-baltimore-national-guard/",
          "date": "2025-09-02",
          "score": 8,
          "cat": "strongman",
          "next": "troops_chicago"
        },
        {
          "text": "This is Liberation Day in DC, and we're gonna take our capital back.",
          "source": "https://rollcall.com/factbase/trump/transcript/donald-trump-press-conference-law-enforcement-washington-dc-august-11-2025/",
          "date": "2025-08-11",
          "score": 7,
          "cat": "power",
          "next": "troops_dc"
        },
        {
          "text": "We're not going to war. We're going to clean up our cities.",
          "source": "https://www.stlpr.org/npr/2025-09-07/trump-walks-back-chicago-war-threat-but-vows-to-clean-up-cities",
          "date": "2025-09-07",
          "score": 3,
          "cat": "power",
          "next": "troops_cleanup"
        },
        {
          "text": "If there's an insurrection, I would certainly invoke it. We'll see.",
          "source": "https://rollcall.com/2025/06/10/trump-mulls-rare-use-of-insurrection-act-over-los-angeles-protests/",
          "date": "2025-06-10",
          "score": 6,
          "cat": "power",
          "next": "troops_insurrection"
        }
      ]
    },
    {
      "id": "troops_chicago",
      "prompt": "'We're going in.' The governor of Illinois has said, in writing, that he does not want troops. Under what authority do you send soldiers into a state that has refused them?",
      "options": [
        {
          "text": "Now, we're going to do it anyway. We have the right to do it.",
          "source": "https://time.com/7314045/trump-announcement-chicago-baltimore-national-guard/",
          "date": "2025-09-02",
          "score": 8,
          "cat": "power",
          "next": "troops_quantico"
        },
        {
          "text": "If the governor of Illinois would call up, call me up, I would love to do it.",
          "source": "https://time.com/7314045/trump-announcement-chicago-baltimore-national-guard/",
          "date": "2025-09-02",
          "score": 3,
          "cat": "power",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "Chicago about to find out why it's called the Department of WAR.",
          "source": "https://www.upi.com/Top_News/US/2025/09/06/Ill-Donald-Trump-threatens-Chipocalypse-Now/7421757183982/",
          "date": "2025-09-06",
          "score": 9,
          "cat": "violence",
          "next": "troops_quantico"
        },
        {
          "text": "I'd do it if it was necessary. So far it hasn't been necessary. But we have an Insurrection Act for a reason.",
          "source": "https://www.nbcnews.com/politics/donald-trump/trump-floats-invoking-insurrection-act-rcna236030",
          "date": "2025-10-06",
          "score": 7,
          "cat": "violence",
          "next": "troops_quantico"
        }
      ]
    },
    {
      "id": "troops_quantico",
      "prompt": "You flew every general and admiral to Quantico and told them American cities should be 'training grounds' for the military. Are you describing law enforcement, or an occupation -- and what was that summit really for?",
      "options": [
        {
          "text": "We should use some of these dangerous cities as training grounds for our military.",
          "source": "https://millercenter.org/the-presidency/presidential-speeches/september-30-2025-remarks-military-leaders",
          "date": "2025-09-30",
          "score": 9,
          "cat": "strongman",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "We're under invasion from within. No different than a foreign enemy, but more difficult in many ways because they don't wear uniforms.",
          "source": "https://millercenter.org/the-presidency/presidential-speeches/september-30-2025-remarks-military-leaders",
          "date": "2025-09-30",
          "score": 9,
          "cat": "dehumanization",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "I don't know anything about it. You're telling me about it for the first time.",
          "source": "https://thehill.com/homenews/administration/5211142-trump-atlantic-journalist-war-plan-text/",
          "date": "2025-03-24",
          "score": 1,
          "cat": "truth",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "It's completely unacceptable to see fat generals and admirals in the halls of the Pentagon... It all starts with physical fitness and appearance. If the secretary of War can do regular, hard PT, so can every member of our joint force.",
          "who": "Pete Hegseth, Defense Secretary",
          "source": "https://thehill.com/policy/defense/5528556-hegseth-warrior-ethos-physical-fitness/",
          "date": "2025-09-30",
          "score": 5,
          "cat": "strongman",
          "next": "NEXT_TOPIC"
        }
      ]
    },
    {
      "id": "troops_dc",
      "prompt": "'Liberation Day.' Violent crime in Washington was at a thirty-year low when you seized its police department and sent in the Guard. Liberated from what, exactly -- and what do you say to the residents who never asked for this?",
      "options": [
        {
          "text": "Our capital city has been overtaken by violent gangs and bloodthirsty criminals, roving mobs of wild youth, drugged out maniacs and homeless people.",
          "source": "https://rollcall.com/factbase/trump/transcript/donald-trump-press-conference-law-enforcement-washington-dc-august-11-2025/",
          "date": "2025-08-11",
          "score": 7,
          "cat": "dehumanization",
          "next": "troops_template"
        },
        {
          "text": "They'll immediately begin massive enforcement operations targeting known gangs, drug dealers and criminal networks to get them the hell off the street.",
          "source": "https://rollcall.com/factbase/trump/transcript/donald-trump-press-conference-law-enforcement-washington-dc-august-11-2025/",
          "date": "2025-08-11",
          "score": 5,
          "cat": "power",
          "next": "troops_template"
        },
        {
          "text": "I am your president of law and order and an ally of all peaceful protesters.",
          "source": "https://www.rev.com/transcripts/donald-trump-speech-transcript-june-1-trump-may-deploy-us-military-to-cities",
          "date": "2020-06-01",
          "score": 3,
          "cat": "power",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "I have the right to do anything I want to do. I'm the president of the United States. If I think our country is in danger, and it is in danger in these cities, I can do it.",
          "source": "https://rollcall.com/2025/08/27/the-u-s-system-always-had-loopholes-trump-2-0-exploits-what-others-resisted/",
          "date": "2025-08-26",
          "score": 9,
          "cat": "power",
          "next": "troops_template"
        },
        {
          "text": "Anybody that thinks crime is going down is a serious brain problem.",
          "source": "https://www.scrippsnews.com/us-news/crime/murder-other-violent-crime-rates-dropped-across-us-last-year-new-fbi-data-shows",
          "date": "2024-09-23",
          "score": 6,
          "cat": "truth",
          "next": "troops_template"
        }
      ]
    },
    {
      "id": "troops_template",
      "prompt": "You have called Washington a 'template.' Templates get copied. Which city is next -- and does its mayor get a vote?",
      "options": [
        {
          "text": "I'm very proud of Washington. It serves as a template and we're going to do it elsewhere.",
          "source": "https://time.com/7314045/trump-announcement-chicago-baltimore-national-guard/",
          "date": "2025-09-02",
          "score": 6,
          "cat": "power",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "You look at Chicago how bad it is. You look at Los Angeles how bad it is... New York has a problem. And then you have, of course, Baltimore and Oakland.",
          "source": "https://rollcall.com/factbase/trump/transcript/donald-trump-press-conference-law-enforcement-washington-dc-august-11-2025/",
          "date": "2025-08-11",
          "score": 5,
          "cat": "power",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "We're going into Chicago very soon. That's a big city with an incompetent governor, stupid governor, stupid.",
          "source": "https://millercenter.org/the-presidency/presidential-speeches/september-30-2025-remarks-military-leaders",
          "date": "2025-09-30",
          "score": 7,
          "cat": "strongman",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "I'm not gonna tell you.",
          "source": "https://abcnews.com/US/full-transcript-trumps-exclusive-100-days-broadcast-interview/story?id=121291672",
          "date": "2025-04-29",
          "score": 3,
          "cat": "press",
          "next": "NEXT_TOPIC"
        }
      ]
    },
    {
      "id": "troops_cleanup",
      "prompt": "'Clean up.' The day before, you posted a picture of yourself in front of a burning Chicago captioned 'Chipocalypse Now' and said the city would find out why it's called the Department of War. Which is it -- sanitation or war?",
      "options": [
        {
          "text": "We're going to clean them up so they don't kill five people every weekend. That's not war, that's common sense.",
          "source": "https://www.stlpr.org/npr/2025-09-07/trump-walks-back-chicago-war-threat-but-vows-to-clean-up-cities",
          "date": "2025-09-07",
          "score": 4,
          "cat": "power",
          "next": "troops_la"
        },
        {
          "text": "I love the smell of deportations in the morning.",
          "source": "https://www.upi.com/Top_News/US/2025/09/06/Ill-Donald-Trump-threatens-Chipocalypse-Now/7421757183982/",
          "date": "2025-09-06",
          "score": 8,
          "cat": "dehumanization",
          "next": "troops_la"
        },
        {
          "text": "I have an obligation to protect this country, and that includes Baltimore.",
          "source": "https://time.com/7314045/trump-announcement-chicago-baltimore-national-guard/",
          "date": "2025-09-02",
          "score": 3,
          "cat": "power",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "Chicago is the worst and most dangerous city in the World, by far. Pritzker needs help badly, he just doesn't know it yet. I will solve the crime problem fast.",
          "source": "https://www.nbcnews.com/politics/donald-trump/donald-trump-threatens-chicago-deportations-department-war-crackdown-rcna229544",
          "date": "2025-09-06",
          "score": 6,
          "cat": "power",
          "next": "troops_la"
        }
      ]
    },
    {
      "id": "troops_la",
      "prompt": "Let's talk about Los Angeles. You federalized California's Guard over the governor's objection and sent 700 Marines against protesters. Your own former defense secretary says that in 2020 you asked whether protesters could simply be shot in the legs. Was any of this proportionate?",
      "options": [
        {
          "text": "Can't you just shoot them? Just shoot them in the legs or something?",
          "source": "https://thehill.com/policy/defense/3473642-esper-trump-asked-about-shooting-protesters-in-the-legs-or-something-after-george-floyd-death/",
          "date": "2020-06",
          "score": 10,
          "cat": "violence",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "This is a complete lie, and 10 witnesses can back it up.",
          "source": "https://www.militarytimes.com/news/pentagon-congress/2022/05/09/trump-denies-new-claims-he-wanted-us-military-to-attack-protesters/",
          "date": "2022-05-09",
          "score": 3,
          "cat": "truth",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "When you send Americans to war, their mandate should be to lethally dominate the battlefield. If that makes you uneasy, keep us at home.",
          "who": "Pete Hegseth, Defense Secretary",
          "source": "https://en.wikiquote.org/wiki/Pete_Hegseth",
          "date": "2024-06-04",
          "score": 7,
          "cat": "violence",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "Of course the president supports peaceful protests. What a stupid question.",
          "who": "Karoline Leavitt, White House Press Secretary",
          "source": "https://thehill.com/homenews/media/5345607-leavitt-slams-stupid-question-about-trumps-threat-to-protesters/",
          "date": "2025-06-11",
          "score": 5,
          "cat": "press",
          "next": "NEXT_TOPIC"
        }
      ]
    },
    {
      "id": "troops_insurrection",
      "prompt": "'If there's an insurrection.' Who decides what counts as one -- you? And once the troops are out, what stops a president from becoming a dictator with an army?",
      "options": [
        {
          "text": "I think it should be very easily handled by, if necessary, by National Guard, or if really necessary, by the military, because they can't let that happen.",
          "source": "https://www.cnn.com/2024/10/13/politics/trump-military-enemy-from-within-election-day",
          "date": "2024-10-13",
          "score": 9,
          "cat": "strongman",
          "next": "troops_enemy"
        },
        {
          "text": "No, no, no. Other than Day One. We're closing the border, and we're drilling, drilling, drilling. After that, I'm not a dictator.",
          "source": "https://www.rollingstone.com/politics/politics-news/donald-trump-hannity-iowa-town-hall-1234917385/",
          "date": "2023-12-06",
          "score": 3,
          "cat": "strongman",
          "next": "troops_enemy"
        },
        {
          "text": "I wouldn't let Congress leave town until we fix this. I would literally use the military to keep them in if I had to.",
          "who": "Lindsey Graham, Senator",
          "source": "https://web.archive.org/web/2015/http://benswann.com/graham-military-force-congress/",
          "date": "2015-03-07",
          "score": 6,
          "cat": "power",
          "next": "troops_enemy"
        },
        {
          "text": "...the real insurrection happened on November 3rd, the Presidential Election, not on January 6th -- which was a day of protesting the Fake Election results.",
          "source": "https://www.npr.org/2021/10/06/1043746455/trump-continues-to-lie-says-real-insurrection-happened-when-he-lost-election",
          "date": "2021-10-06",
          "score": 6,
          "cat": "elections",
          "next": "troops_enemy"
        }
      ]
    },
    {
      "id": "troops_enemy",
      "prompt": "You have talked about 'the enemy from within.' That phrase used to mean foreign spies; you have applied it to a sitting congressman and to protesters, and in 2020 you tweeted 'when the looting starts, the shooting starts.' Is any American who opposes you an enemy the military should handle?",
      "options": [
        {
          "text": "Then I will deploy the United States military and quickly solve the problem for them.",
          "source": "https://www.rev.com/transcripts/donald-trump-speech-transcript-june-1-trump-may-deploy-us-military-to-cities",
          "date": "2020-06-01",
          "score": 8,
          "cat": "strongman",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "When the looting starts, the shooting starts.",
          "source": "https://abcnews.go.com/Politics/history-phrase-looting-starts-shooting-starts-trump/story?id=70950935",
          "date": "2020-05-29",
          "score": 10,
          "cat": "violence",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "I don't want this to happen, and that's what the expression put out last night means.",
          "source": "https://www.lbc.co.uk/article/donald-trump-twitter-looters-shot-george-floyd-DWybGn_2/",
          "date": "2020-05-29",
          "score": 2,
          "cat": "truth",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "If you don't like what I'm saying, you can leave the room. Of course, there goes your rank, there goes your future.",
          "source": "https://millercenter.org/the-presidency/presidential-speeches/september-30-2025-remarks-military-leaders",
          "date": "2025-09-30",
          "score": 7,
          "cat": "strongman",
          "next": "NEXT_TOPIC"
        }
      ]
    }
  ]
});
