registerTopic({
  "id": "covid",
  "title": "The Pandemic",
  "entry": "covid_intro",
  "nodes": [
    {
      "id": "covid_intro",
      "prompt": "Mr. President, more than a million Americans died of COVID-19. In January 2020 you told CNBC it was 'one person coming in from China.' Looking back, do you stand by that -- and what, if anything, did you get right?",
      "options": [
        {
          "text": "We have it totally under control. It's one person coming in from China, and we have it under control. It's going to be just fine.",
          "source": "https://www.cnbc.com/2020/01/22/cnbc-transcript-president-donald-trump-sits-down-with-cnbcs-joe-kernen-at-the-world-economic-forum-in-davos-switzerland.html",
          "date": "2020-01-22",
          "score": 5,
          "cat": "truth",
          "next": "covid_control"
        },
        {
          "text": "I wanted to always play it down. I still like playing it down, because I don't want to create a panic.",
          "source": "https://www.rev.com/transcripts/donald-trump-bob-woodward-conversation-transcript-trump-playing-down-coronavirus",
          "date": "2020-03-19",
          "score": 6,
          "cat": "truth",
          "next": "covid_playdown"
        },
        {
          "text": "Yeah, no, I don't take responsibility at all, because we were given a set of circumstances and we were given rules, regulations, and specifications from a different time.",
          "source": "https://www.cnbc.com/2020/03/13/coronavirus-trump-says-i-dont-take-responsibility-at-all-for-lack-of-tests.html",
          "date": "2020-03-13",
          "score": 7,
          "cat": "power",
          "next": "covid_blame"
        },
        {
          "text": "I'm all for masks. I think masks are good.",
          "source": "https://thehill.com/homenews/administration/505478-trump-says-hes-all-for-masks/",
          "date": "2020-07-01",
          "score": 0,
          "cat": "truth",
          "next": "covid_masks"
        }
      ]
    },
    {
      "id": "covid_control",
      "prompt": "'Totally under control.' Five weeks later you said it would disappear 'like a miracle.' By June cases were surging and you told a rally in Tulsa you had asked your people to slow down testing. Your staff said you were joking. Were you -- and was that your real approach to the pandemic?",
      "options": [
        {
          "text": "So I said to my people, slow the testing down, please.",
          "source": "https://www.cnn.com/2020/06/20/politics/tulsa-rally-trump/index.html",
          "date": "2020-06-20",
          "score": 8,
          "cat": "truth",
          "next": "covid_testing"
        },
        {
          "text": "If we stop testing right now, we'd have very few cases, if any.",
          "source": "https://thehill.com/policy/healthcare/502819-trump-on-coronavirus-if-we-stop-testing-right-now-wed-have-very-few-cases/",
          "date": "2020-06-15",
          "score": 7,
          "cat": "truth",
          "next": "covid_testing"
        },
        {
          "text": "I don't want to create havoc and shock and everything else... I'm a cheerleader for this country.",
          "source": "https://trumpwhitehouse.archives.gov/briefings-statements/remarks-president-trump-vice-president-pence-members-coronavirus-task-force-press-briefing-april-7-2020/",
          "date": "2020-04-07",
          "score": 3,
          "cat": "truth",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "None of us have ever been told to slow down on testing. That just is a fact.",
          "source": "https://www.npr.org/2020/06/23/881674932/watch-live-fauci-redfield-to-testify-on-trump-administrations-covid-19-response",
          "date": "2020-06-23",
          "score": 0,
          "cat": "truth",
          "next": "NEXT_TOPIC",
          "who": "Anthony Fauci, NIAID Director"
        }
      ]
    },
    {
      "id": "covid_playdown",
      "prompt": "You told Bob Woodward on tape you wanted to 'play it down' while privately calling the virus deadly. Then at an April briefing, on live television, you wondered aloud about disinfectant inside the body. Was that playing it down -- what exactly were you suggesting?",
      "options": [
        {
          "text": "And is there a way we can do something like that by injection inside or almost a cleaning? Because you see it gets in the lungs and it does a tremendous number on the lungs.",
          "source": "https://www.rev.com/transcripts/donald-trump-coronavirus-press-conference-transcript-april-23",
          "date": "2020-04-23",
          "score": 7,
          "cat": "truth",
          "next": "covid_cures"
        },
        {
          "text": "No, I was asking a question sarcastically to reporters like you just to see what would happen.",
          "source": "https://www.rev.com/transcripts/transcript-donald-trump-signs-relief-bill-says-comments-on-injecting-disinfectant-were-sarcastic",
          "date": "2020-04-24",
          "score": 5,
          "cat": "truth",
          "next": "covid_cures"
        },
        {
          "text": "It wouldn't be through injection. We're talking about through almost a cleaning, sterilization of an area.",
          "source": "https://www.rev.com/transcripts/donald-trump-coronavirus-press-conference-transcript-april-23",
          "date": "2020-04-23",
          "score": 3,
          "cat": "truth",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "Maybe you can. Maybe you can't. I'm not a doctor. I'm, like, a person who has a good you-know-what.",
          "source": "https://www.nbcnews.com/politics/donald-trump/it-s-irresponsible-it-s-dangerous-experts-rip-trump-s-n1191246",
          "date": "2020-04-24",
          "score": 6,
          "cat": "truth",
          "next": "covid_cures"
        }
      ]
    },
    {
      "id": "covid_blame",
      "prompt": "'I don't take responsibility at all.' Then who does? Dr. Fauci, whom you later called a disaster? The governors? A thousand Americans a day were dying when Axios put that number to you. Or do you only take credit for the good parts?",
      "options": [
        {
          "text": "They are dying, that's true, and you -- it is what it is, but that doesn't mean we aren't doing everything we can.",
          "source": "https://www.axios.com/2020/08/04/trump-coronavirus-under-control",
          "date": "2020-08-03",
          "score": 7,
          "cat": "truth",
          "next": "covid_fauci"
        },
        {
          "text": "People are tired of hearing Fauci and all these idiots.",
          "source": "https://www.cnn.com/2020/10/19/politics/donald-trump-anthony-fauci-coronavirus",
          "date": "2020-10-19",
          "score": 7,
          "cat": "truth",
          "next": "covid_fauci"
        },
        {
          "text": "The vaccine is one of the greatest achievements of mankind.",
          "source": "https://www.nbcnews.com/politics/donald-trump/trump-renews-praise-covid-vaccines-one-greatest-achievements-mankind-n1286551",
          "date": "2021-12-22",
          "score": 1,
          "cat": "truth",
          "next": "covid_vaccine"
        },
        {
          "text": "The buck stops with everybody.",
          "source": "https://theweek.com/speedreads/816895/president-trump-buck-stops-everybody",
          "date": "2019-01-10",
          "score": 5,
          "cat": "truth",
          "next": "covid_fauci"
        }
      ]
    },
    {
      "id": "covid_masks",
      "prompt": "'All for masks' -- yet you mocked reporters for wearing them and held packed indoor rallies. And in 2025 your health secretary, Robert F. Kennedy Jr., is rewriting the childhood vaccine schedule. Do you trust the science or not?",
      "options": [
        {
          "text": "Oh no, the vaccines work, but some people aren't the ones. The ones who get very sick and go to the hospital are the ones that don't take the vaccine.",
          "source": "https://www.newsweek.com/donald-trump-candace-owens-covid-vaccines-mandates-1662996",
          "date": "2021-12-22",
          "score": 1,
          "cat": "truth",
          "next": "covid_vaccine"
        },
        {
          "text": "They pump so much stuff into those beautiful little babies, it's a disgrace.",
          "source": "https://kffhealthnews.org/news/article/trump-autism-announcement-rfk-tylenol-pregnancy-vaccines/",
          "date": "2025-09-22",
          "score": 7,
          "cat": "truth",
          "next": "covid_vaccine"
        },
        {
          "text": "I inoculate myself. Germs are not a real thing. I can't see them, therefore they're not real.",
          "who": "Pete Hegseth, Defense Secretary",
          "source": "https://www.theguardian.com/media/2019/feb/11/germs-are-not-real-fox-news-host-pete-hegseth",
          "date": "2019-02-10",
          "score": 3,
          "cat": "truth",
          "next": "covid_vaccine"
        },
        {
          "text": "There have been four measles outbreaks this year. In this country last year there were 16. So it's not unusual. We have measles outbreaks every year.",
          "who": "Robert F. Kennedy Jr., Health Secretary",
          "source": "https://www.nbcnews.com/health/health-news/person-dies-measles-west-texas-outbreak-rcna193812",
          "date": "2025-02-26",
          "score": 4,
          "cat": "truth",
          "next": "covid_vaccine"
        }
      ]
    },
    {
      "id": "covid_testing",
      "prompt": "Slow the testing down. Stop testing and the cases vanish. Mr. President, the virus does not read the test reports. Fewer tests just meant more Americans dying without a diagnosis. Do you understand that -- and what, honestly, has your administration done to save lives?",
      "options": [
        {
          "text": "It's under control as much as you can control it.",
          "source": "https://www.axios.com/2020/08/04/trump-coronavirus-under-control",
          "date": "2020-08-03",
          "score": 4,
          "cat": "truth",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "Since you have been in office President Trump, your DOJ agencies have seized more than 22 million fentanyl pills, 3,400 kilos of fentanyl... Which saved -- are you ready for this, media? -- 258 million lives.",
          "who": "Pam Bondi, Attorney General",
          "source": "https://www.yahoo.com/news/pam-bondi-makes-head-spinning-221414313.html",
          "date": "2025-05-01",
          "score": 3,
          "cat": "truth",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "Even before we knew it was a coronavirus, I said it certainly sounds like a coronavirus-SARS type thing. As soon as it was identified, I called a meeting of top-level people and said, 'Let's start working on a vaccine right now.'",
          "source": "https://www.nytimes.com/2020/03/08/health/fauci-coronavirus.html",
          "date": "2020-03-08",
          "score": 0,
          "cat": "truth",
          "next": "NEXT_TOPIC",
          "who": "Anthony Fauci, NIAID Director"
        },
        {
          "text": "The 15 within a couple of days is going to be down to close to zero -- that's a pretty good job we've done.",
          "source": "https://www.washingtonpost.com/politics/2020/04/28/yet-again-trump-pledges-that-coronavirus-will-simply-go-away/",
          "date": "2020-02-26",
          "score": 6,
          "cat": "truth",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "We've tested more than every other country in the world even put together.",
          "source": "https://www.vox.com/2020/4/21/21230400/trump-coronavirus-briefing-testing-other-countries-combined",
          "date": "2020-04-21",
          "score": 8,
          "cat": "truth",
          "next": "NEXT_TOPIC"
        }
      ]
    },
    {
      "id": "covid_cures",
      "prompt": "Disinfectant. Ultraviolet light inside the body. Hydroxychloroquine, which the FDA later warned against. Poison-control calls spiked after that briefing. Doctor, what is your prescription tonight?",
      "options": [
        {
          "text": "What do you have to lose? Take it. I really think they should take it. But it's their choice.",
          "source": "https://www.commondreams.org/news/2020/04/05/president-has-blood-his-hands-trump-again-urges-public-take-anti-malaria-drug",
          "date": "2020-04-04",
          "score": 6,
          "cat": "truth",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "Don't take Tylenol. Don't take it... Fight like hell not to take it.",
          "source": "https://www.factcheck.org/2025/09/trump-administrations-problematic-claims-on-tylenol-and-autism/",
          "date": "2025-09-22",
          "score": 7,
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
          "text": "I was at the bottom of my class, I started doing heroin, I went to the top of my class. Suddenly I could sit still and read.",
          "who": "Robert F. Kennedy Jr., Health Secretary",
          "source": "https://www.newsweek.com/fact-check-rfk-jr-says-heroin-helped-him-reach-top-his-class-1991956",
          "date": "2024-11-26",
          "score": 3,
          "cat": "truth",
          "next": "NEXT_TOPIC"
        }
      ]
    },
    {
      "id": "covid_fauci",
      "prompt": "'It is what it is.' 'Idiots.' Dr. Fauci served six presidents, and in 2025 your administration pulled his security detail. Meanwhile you take credit for the vaccine he helped deliver. Which is it -- hero or disaster?",
      "options": [
        {
          "text": "Fauci is a disaster. If I listened to him, we'd have 500,000 deaths.",
          "source": "https://www.cnbc.com/2020/10/19/coronavirus-trump-calls-fauci-a-disaster-says-people-are-tired-of-covid.html",
          "date": "2020-10-19",
          "score": 7,
          "cat": "truth",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "I hope everyone remembers when they're getting the COVID-19 Vaccine, that if I wasn't President, you wouldn't be getting that beautiful 'shot' for 5 years, at best.",
          "source": "https://www.foxnews.com/politics/trump-takes-credit-vaccine",
          "date": "2021-03-10",
          "score": 4,
          "cat": "truth",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "Second term kicks off with firing Wray, firing Fauci... I'd actually like to go back to the old times of Tudor England, I'd put the heads on pikes... at the two corners of the White House as a warning to federal bureaucrats.",
          "source": "https://www.newsweek.com/bannon-calls-fauci-beheading-1545287",
          "date": "2020-11-05",
          "score": 9,
          "cat": "violence",
          "next": "NEXT_TOPIC",
          "who": "Steve Bannon, former White House chief strategist"
        },
        {
          "text": "Tony, Tony Fauci, he's a nice guy. He said it is not a threat, it is not a problem. Then he said do not wear a mask... under any circumstances. But he's a nice guy so I keep him around.",
          "source": "https://www.youtube.com/watch?v=yiDzC3xFork",
          "date": "2020-10-15",
          "score": 3,
          "cat": "truth",
          "next": "NEXT_TOPIC"
        }
      ]
    },
    {
      "id": "covid_vaccine",
      "prompt": "You have called the vaccine 'one of the greatest achievements of mankind,' yet you stood beside Secretary Kennedy as he cut it from the childhood schedule, and told pregnant women to 'tough it out' rather than take Tylenol. Who is the doctor here?",
      "options": [
        {
          "text": "Taking Tylenol is not good, alright? I'll say it. It's not good.",
          "source": "https://www.cbsnews.com/news/trump-autism-tylenol-medical-experts/",
          "date": "2025-09-22",
          "score": 6,
          "cat": "truth",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "Trusting the experts is not a feature of either a science or democracy.",
          "source": "https://www.splinter.com/rfk-jr-learns-he-is-not-also-denmarks-hhs-secretary",
          "date": "2025-08-12",
          "score": 5,
          "cat": "truth",
          "next": "NEXT_TOPIC",
          "who": "Robert F. Kennedy Jr., Health Secretary"
        },
        {
          "text": "I really get it. People are surprised that I understand it. Every one of these doctors said, 'How do you know so much about this?' Maybe I have a natural ability. Maybe I should have done that instead of running for President.",
          "source": "https://www.washingtonpost.com/politics/maybe-i-have-a-natural-ability-trump-plays-medical-expert-on-coronavirus-by-second-guessing-the-professionals/2020/03/06/3ee0574c-5ffb-11ea-9055-5fa12981bbbf_story.html",
          "date": "2020-03-06",
          "score": 8,
          "cat": "truth",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "I recommend: take the vaccines. I did it. It's good. Take the vaccines.",
          "source": "https://www.cnbc.com/2021/08/22/trump-booed-at-alabama-rally-after-telling-supporters-to-get-vaccinated.html",
          "date": "2021-08-22",
          "score": 1,
          "cat": "truth",
          "next": "NEXT_TOPIC"
        }
      ]
    }
  ]
});
