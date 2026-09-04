registerTopic({
  "id": "doge",
  "title": "The Chainsaw",
  "entry": "doge_intro",
  "nodes": [
    {
      "id": "doge_intro",
      "prompt": "Mr. President, Elon Musk stood on a stage waving a chainsaw while his DOGE team fired tens of thousands of federal workers. Who was actually running the government this spring -- you or him?",
      "options": [
        {
          "text": "Elon can't do and won't do anything without our approval.",
          "source": "https://thehill.com/policy/technology/5123525-president-trump-elon-musk-access-treasury/",
          "date": "2025-02-03",
          "score": 3,
          "cat": "power",
          "next": "doge_approval"
        },
        {
          "text": "ELON IS DOING A GREAT JOB, BUT I WOULD LIKE TO SEE HIM GET MORE AGGRESSIVE. REMEMBER, WE HAVE A COUNTRY TO SAVE.",
          "source": "https://www.foxbusiness.com/politics/trump-says-elon-musk-should-more-aggressive-doge-cuts",
          "date": "2025-02-22",
          "score": 7,
          "cat": "cronyism",
          "next": "doge_aggressive"
        },
        {
          "text": "I thought it was great, because we have people that don't show up to work, and nobody even knows that they work for the government.",
          "source": "https://thehill.com/homenews/administration/5161429-trump-musk-genius-email/",
          "date": "2025-02-24",
          "score": 5,
          "cat": "power",
          "next": "doge_email"
        },
        {
          "text": "DOGE is the monster that might have to go back and eat Elon. Wouldn't that be terrible?",
          "source": "https://www.nbcnews.com/politics/donald-trump/trump-threatens-re-examine-government-support-elon-musks-companies-tra-rcna216156",
          "date": "2025-07-01",
          "score": 6,
          "cat": "cronyism",
          "next": "doge_feud"
        }
      ]
    },
    {
      "id": "doge_approval",
      "prompt": "'Without our approval.' You approved giving the world's richest man -- a federal contractor with billions in SpaceX and Tesla deals -- access to the Treasury payment system. How is that not a conflict of interest -- and what was he sent in there to find?",
      "options": [
        {
          "text": "If there's conflict, then we won't let him get near it.",
          "source": "https://thehill.com/policy/technology/5123525-president-trump-elon-musk-access-treasury/",
          "date": "2025-02-03",
          "score": 3,
          "cat": "cronyism",
          "next": "doge_tesla"
        },
        {
          "text": "I'm going to buy a brand new Tesla tomorrow morning as a show of confidence and support for Elon Musk, a truly great American.",
          "source": "https://abcnews.com/Politics/trump-checks-teslas-white-house-musks-auto-company/story?id=119683027",
          "date": "2025-03-11",
          "score": 8,
          "cat": "cronyism",
          "next": "doge_tesla"
        },
        {
          "text": "It's been run by a bunch of radical lunatics, and we're getting them out.",
          "source": "https://www.realclearpolitics.com/video/2025/02/02/trump_usaid_has_been_run_by_radical_lunatics_were_getting_them_out.html",
          "date": "2025-02-02",
          "score": 7,
          "cat": "dehumanization",
          "next": "doge_usaid"
        },
        {
          "text": "One of the major, untold stories of our time is the rapid movement toward global oligarchy, in which just a handful of billionaires now own and control a significant part of the world economy.",
          "who": "Bernie Sanders, Senator, Vermont",
          "source": "https://www.cnn.com/2017/11/13/opinions/oligarchy-paradise-papers-bernie-sanders-opinion/index.html",
          "date": "2017-11-13",
          "score": 0,
          "cat": "cronyism",
          "next": "doge_tesla"
        }
      ]
    },
    {
      "id": "doge_tesla",
      "prompt": "You turned the South Lawn into a Tesla showroom and bought an eighty-thousand-dollar car to prop up your adviser's stock price. Is that what the presidency is for?",
      "options": [
        {
          "text": "This is a different panel than I've ever -- everything's computer!",
          "source": "https://www.fastcompany.com/91299089/everythings-computer-how-trumps-tesla-bit-sparked-a-meme-frenzy",
          "date": "2025-03-11",
          "score": 3,
          "cat": "cronyism",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "He's one of the greatest business leaders and innovators the world has ever produced.",
          "source": "https://www.techpolicy.press/transcript-elon-musks-doge-farewell-press-conference-with-president-trump/",
          "date": "2025-05-30",
          "score": 4,
          "cat": "cronyism",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "We might have to put DOGE on Elon... if DOGE looks at Musk, we're going to save a fortune.",
          "source": "https://www.nbcnews.com/politics/donald-trump/trump-threatens-re-examine-government-support-elon-musks-companies-tra-rcna216156",
          "date": "2025-07-01",
          "score": 7,
          "cat": "cronyism",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "I just want people to know that you can't be penalized for being a patriot.",
          "source": "https://abcnews.com/Politics/trump-checks-teslas-white-house-musks-auto-company/story?id=119683027",
          "date": "2025-03-11",
          "score": 6,
          "cat": "cronyism",
          "next": "NEXT_TOPIC"
        }
      ]
    },
    {
      "id": "doge_usaid",
      "prompt": "'Radical lunatics.' USAID ran famine relief and HIV treatment in over a hundred countries, and researchers estimate the shutdown will cost hundreds of thousands of lives. Those are the lunatics? What did DOGE actually find?",
      "options": [
        {
          "text": "We're getting them out, and then we'll make a decision.",
          "source": "https://www.realclearpolitics.com/video/2025/02/02/trump_usaid_has_been_run_by_radical_lunatics_were_getting_them_out.html",
          "date": "2025-02-02",
          "score": 3,
          "cat": "power",
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
          "text": "Believe it or not, government databases list 4.7 million Social Security members from people aged 100 to 109 years old.",
          "source": "https://www.cbsnews.com/news/trump-speech-transcript-2025-joint-address-congress/",
          "date": "2025-03-04",
          "score": 7,
          "cat": "truth",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "The fundamental weakness of Western civilization is empathy, the empathy exploit. There it's they're exploiting a bug in Western civilization, which is the empathy response.",
          "who": "Elon Musk (DOGE), DOGE adviser",
          "source": "https://edition.cnn.com/2025/03/05/politics/elon-musk-rogan-interview-empathy-doge/index.html",
          "date": "2025-02-28",
          "score": 7,
          "cat": "dehumanization",
          "next": "NEXT_TOPIC"
        }
      ]
    },
    {
      "id": "doge_aggressive",
      "prompt": "'More aggressive.' By then he had already frozen USAID and fired probationary workers by the thousand. What did 'more aggressive' look like in your mind -- and where were the limits?",
      "options": [
        {
          "text": "One person is listed at 360 years of age -- more than 100 years older than our country.",
          "source": "https://www.cbsnews.com/news/trump-speech-transcript-2025-joint-address-congress/",
          "date": "2025-03-04",
          "score": 7,
          "cat": "truth",
          "next": "doge_ss"
        },
        {
          "text": "We're going to find out where that money is going, and it's not going to be pretty.",
          "source": "https://www.cbsnews.com/news/trump-speech-transcript-2025-joint-address-congress/",
          "date": "2025-03-04",
          "score": 5,
          "cat": "power",
          "next": "doge_ss"
        },
        {
          "text": "We'll give him the approval when appropriate, where not appropriate, we won't.",
          "source": "https://thehill.com/policy/technology/5123525-president-trump-elon-musk-access-treasury/",
          "date": "2025-02-03",
          "score": 3,
          "cat": "power",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "One of the things I learned PayPal was that... you know who complains the loudest and the most amount of fake righteous indignation? The fraudsters.",
          "who": "Elon Musk (DOGE), DOGE adviser",
          "source": "https://www.nbcnews.com/politics/doge/elon-musks-doge-tries-put-new-faces-reclusive-federal-office-rcna198491",
          "date": "2025-03-27",
          "score": 5,
          "cat": "truth",
          "next": "doge_ss"
        }
      ]
    },
    {
      "id": "doge_ss",
      "prompt": "You told a joint session of Congress that millions of 140-year-olds are on Social Security. The Social Security Administration says that is a database quirk -- almost none of them are being paid a cent. Do you stand by the number -- and what happens to Social Security, and to Elon, next?",
      "options": [
        {
          "text": "3.47 million people from ages 120 to 129, 3.9 million people from ages 130 to 139, 3.5 million people from ages 140 to 149.",
          "source": "https://www.cbsnews.com/news/trump-speech-transcript-2025-joint-address-congress/",
          "date": "2025-03-04",
          "score": 7,
          "cat": "truth",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "I don't know what that was all about.",
          "source": "https://www.techpolicy.press/transcript-elon-musks-doge-farewell-press-conference-with-president-trump/",
          "date": "2025-05-30",
          "score": 1,
          "cat": "truth",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "Elon's really not leaving. He's going to be back and forth.",
          "source": "https://www.techpolicy.press/transcript-elon-musks-doge-farewell-press-conference-with-president-trump/",
          "date": "2025-05-30",
          "score": 3,
          "cat": "cronyism",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "We should privatize anything that can reasonably be privatized.",
          "who": "Elon Musk (DOGE), DOGE adviser",
          "source": "https://www.reuters.com/world/us/elon-musk-says-post-office-amtrak-should-be-privatized-2025-03-05/",
          "date": "2025-03-05",
          "score": 4,
          "cat": "cronyism",
          "next": "NEXT_TOPIC"
        }
      ]
    },
    {
      "id": "doge_email",
      "prompt": "'Nobody knows they work for the government.' The 'five things you did this week' email went to two million people, and your own Pentagon and FBI told their staff to ignore it. Was that genius, or chaos -- and did anyone actually read two million replies?",
      "options": [
        {
          "text": "There was a lot of genius in sending it.",
          "source": "https://thehill.com/homenews/administration/5161429-trump-musk-genius-email/",
          "date": "2025-02-24",
          "score": 4,
          "cat": "power",
          "next": "doge_shutdown"
        },
        {
          "text": "If you don't answer, you're sort of semi fired or you're fired.",
          "source": "https://thehill.com/homenews/administration/5161429-trump-musk-genius-email/",
          "date": "2025-02-24",
          "score": 7,
          "cat": "power",
          "next": "doge_shutdown"
        },
        {
          "text": "I hope so.",
          "source": "https://www.techpolicy.press/transcript-elon-musks-doge-farewell-press-conference-with-president-trump/",
          "date": "2025-05-30",
          "score": 1,
          "cat": "truth",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "The email request was utterly trivial, as the standard for passing the test was to type some words and press send!",
          "source": "https://www.nbcnews.com/politics/doge/hhs-warns-responses-elon-musks-email-may-read-malign-foreign-actors-rcna193553",
          "date": "2025-02-24",
          "score": 6,
          "cat": "truth",
          "next": "doge_shutdown",
          "who": "Elon Musk, DOGE adviser"
        }
      ]
    },
    {
      "id": "doge_shutdown",
      "prompt": "'Semi-fired.' Fast-forward to October: during the shutdown your administration laid off roughly four thousand federal workers outright, and you said they would be Democrats. Are civil servants being punished for their politics?",
      "options": [
        {
          "text": "So, we'd be laying off a lot of people that are going to be very affected. And they're gonna be Democrats.",
          "source": "https://www.ms.now/opinion/msnbc-opinion/trump-democrats-republicans-shutdown-federal-worker-layoffs-rcna234974",
          "date": "2025-09-30",
          "score": 8,
          "cat": "power",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "We can do things during a shutdown that are irreversible... like cutting vast numbers of people out, cutting things that they like, cutting programs that they like.",
          "source": "https://www.ms.now/opinion/msnbc-opinion/trump-democrats-republicans-shutdown-federal-worker-layoffs-rcna234974",
          "date": "2025-09-30",
          "score": 8,
          "cat": "power",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "If this keeps going on, it'll be substantial. And a lot of those jobs will never come back.",
          "source": "https://www.foxnews.com/politics/trump-says-substantial-number-jobs-will-be-permanently-lost-shutdown-persists-dems-have-no-leader",
          "date": "2025-10-07",
          "score": 5,
          "cat": "power",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "When you shut it down, you have to do layoffs.",
          "source": "https://www.ms.now/opinion/msnbc-opinion/trump-democrats-republicans-shutdown-federal-worker-layoffs-rcna234974",
          "date": "2025-09-30",
          "score": 3,
          "cat": "truth",
          "next": "NEXT_TOPIC"
        }
      ]
    },
    {
      "id": "doge_feud",
      "prompt": "'Eat Elon.' In March he was your 'truly great American.' In June he called your bill a disgusting abomination and you threatened his contracts within hours. Is federal contracting now a function of your personal grudges?",
      "options": [
        {
          "text": "The easiest way to save money in our Budget, Billions and Billions of Dollars, is to terminate Elon's Governmental Subsidies and Contracts.",
          "source": "https://www.cnbc.com/2025/06/05/trump-musk-crazy-government-contracts.html",
          "date": "2025-06-05",
          "score": 8,
          "cat": "cronyism",
          "next": "doge_lostmind"
        },
        {
          "text": "Elon was 'wearing thin,' I asked him to leave, I took away his EV Mandate that forced everyone to buy Electric Cars that nobody else wanted... and he just went CRAZY!",
          "source": "https://www.cnbc.com/2025/06/05/trump-musk-crazy-government-contracts.html",
          "date": "2025-06-05",
          "score": 6,
          "cat": "truth",
          "next": "doge_lostmind"
        },
        {
          "text": "I just want to thank Elon for his time as a special government employee.",
          "source": "https://www.techpolicy.press/transcript-elon-musks-doge-farewell-press-conference-with-president-trump/",
          "date": "2025-05-30",
          "score": 2,
          "cat": "cronyism",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "He's going to be building a very big plant in the United States. He has to. Because we help him, so he has to help us.",
          "source": "https://www.youtube.com/watch?v=gxEwTFJG1DQ",
          "date": "2020-01-22",
          "score": 6,
          "cat": "cronyism",
          "next": "doge_lostmind"
        }
      ]
    },
    {
      "id": "doge_lostmind",
      "prompt": "You told ABC he is 'the man who has lost his mind.' This is the person you handed the federal payment system, two million personnel files and a chainsaw. Was that a mistake?",
      "options": [
        {
          "text": "Elon may get more subsidy than any human being in history, by far, and without subsidies, Elon would probably have to close up shop and head back home to South Africa.",
          "source": "https://www.nbcnews.com/politics/donald-trump/trump-threatens-re-examine-government-support-elon-musks-companies-tra-rcna216156",
          "date": "2025-07-01",
          "score": 7,
          "cat": "cronyism",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "But you know, he could lose a lot more than that, I can tell you, right?",
          "source": "https://www.nbcnews.com/politics/donald-trump/trump-threatens-re-examine-government-support-elon-musks-companies-tra-rcna216156",
          "date": "2025-07-01",
          "score": 6,
          "cat": "strongman",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "Thank you, Elon, you're working very hard.",
          "source": "https://www.cbsnews.com/news/trump-speech-transcript-2025-joint-address-congress/",
          "date": "2025-03-04",
          "score": 3,
          "cat": "cronyism",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "If American democracy can survive ten years of Greta Thunberg's scolding you guys can survive a few months of Elon Musk.",
          "source": "https://www.spectator.co.uk/article/jd-vance-what-i-worry-about-is-the-threat-from-within/",
          "date": "2025-02-14",
          "score": 3,
          "cat": "truth",
          "next": "NEXT_TOPIC",
          "who": "JD Vance, Vice President"
        }
      ]
    }
  ]
});
