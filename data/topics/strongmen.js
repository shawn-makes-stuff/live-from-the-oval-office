registerTopic({
  "id": "strongmen",
  "title": "Friends in High Places",
  "entry": "strongmen_intro",
  "nodes": [
    {
      "id": "strongmen_intro",
      "prompt": "Mr. President, you rolled out a red carpet for Vladimir Putin in Alaska, traded love letters with Kim Jong Un, and hosted Erdogan in the Oval Office. Why do the world's strongmen get such warm treatment from you?",
      "options": [
        {
          "text": "The meeting was a 10 in the sense that we got along great... it's good when, you know, two big powers get along, especially when they're nuclear powers.",
          "source": "https://rollcall.com/factbase/trump/transcript/donald-trump-interview-sean-hannity-fox-news-august-15-2025/",
          "date": "2025-08-15",
          "score": 5,
          "cat": "strongman",
          "next": "strongmen_putin"
        },
        {
          "text": "I was really being tough, and so was he, and we would go back and forth -- and then we fell in love, OK? He wrote me beautiful letters, and they're great letters. We fell in love.",
          "source": "https://www.cnbc.com/2018/09/30/trump-on-kim-tough-talk--and-then-we-fell-in-love.html",
          "date": "2018-09-29",
          "score": 6,
          "cat": "strongman",
          "next": "strongmen_kim"
        },
        {
          "text": "We've been friends for a long time, actually, even for four years when I was in exile, unfairly, as it turns out -- rigged election. You know, he knows about rigged elections better than anybody.",
          "source": "https://www.newsweek.com/trump-says-erdogan-knows-about-rigged-elections-better-than-anybody-10786973",
          "date": "2025-09-25",
          "score": 8,
          "cat": "elections",
          "next": "strongmen_erdogan"
        },
        {
          "text": "I'm not aligned with Putin. I'm not aligned with anybody. I'm aligned with the United States of America, and for the good of the world.",
          "source": "https://www.rev.com/transcripts/trump-and-zelenskyy-in-the-oval-office",
          "date": "2025-02-28",
          "score": 2,
          "cat": "strongman",
          "next": "strongmen_ukraine"
        }
      ]
    },
    {
      "id": "strongmen_putin",
      "prompt": "A ten out of ten -- for a summit that produced no ceasefire and no deal. In Helsinki you stood next to Putin and took his word over your own intelligence agencies. Do you believe Vladimir Putin -- and what is your message to him today?",
      "options": [
        {
          "text": "I have great confidence in my intelligence people, but I will tell you that President Putin was extremely strong and powerful in his denial today.",
          "source": "https://www.irishtimes.com/news/world/europe/trump-putin-meeting-edited-transcript-of-helsinki-press-conference-1.3567158",
          "date": "2018-07-16",
          "score": 7,
          "cat": "truth",
          "next": "strongmen_putin_deep"
        },
        {
          "text": "I am not happy with the Russian strikes on KYIV. Not necessary, and very bad timing. Vladimir, STOP! 5000 soldiers a week are dying. Lets get the Peace Deal DONE!",
          "source": "https://www.cnbc.com/2025/04/24/trump-putin-russia-ukraine-kyiv.html",
          "date": "2025-04-24",
          "score": 3,
          "cat": "strongman",
          "next": "strongmen_putin_deep"
        },
        {
          "text": "Putin went through a hell of a lot with me. He went through a phony witch hunt.",
          "source": "https://www.pbs.org/newshour/politics/what-trump-and-zelenskyy-said-during-their-heated-argument-in-the-oval-office",
          "date": "2025-02-28",
          "score": 7,
          "cat": "truth",
          "next": "strongmen_putin_deep"
        },
        {
          "text": "There is no room in this party for apologists for Putin. There is only room for champions of freedom.",
          "who": "Mike Pence, former Vice President",
          "source": "https://www.independent.co.uk/news/world/americas/us-politics/pence-trump-2020-election-putin-b2029069.html",
          "date": "2022-03-05",
          "score": 0,
          "cat": "strongman",
          "next": "strongmen_putin_deep"
        },
        {
          "text": "The United States remains committed to supporting the Russian people... We also take this opportunity to reaffirm the United States' desire for constructive engagement with the Russian Federation.",
          "who": "Marco Rubio, Secretary of State",
          "source": "https://www.state.gov/releases/2025/06/russia-national-day/",
          "date": "2025-06-12",
          "score": 4,
          "cat": "strongman",
          "next": "strongmen_putin_deep"
        }
      ]
    },
    {
      "id": "strongmen_putin_deep",
      "prompt": "Every US intelligence agency concluded Russia attacked the 2016 election, and Russia has bombed Ukrainian cities for three years. Was it Russia -- and which side is the President of the United States on?",
      "options": [
        {
          "text": "I will say this: I don't see any reason why it would be.",
          "source": "https://www.npr.org/2018/07/16/629588470/in-helsinki-trump-appeared-to-side-with-russia-over-u-s-intelligence-community",
          "date": "2018-07-16",
          "score": 7,
          "cat": "truth",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "I hold both countries responsible. I think that the United States has been foolish. I think we've all been foolish.",
          "source": "https://www.irishtimes.com/news/world/europe/trump-putin-meeting-edited-transcript-of-helsinki-press-conference-1.3567158",
          "date": "2018-07-16",
          "score": 5,
          "cat": "strongman",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "It's up to President Zelenskyy to get it done.",
          "source": "https://rollcall.com/factbase/trump/transcript/donald-trump-interview-sean-hannity-fox-news-august-15-2025/",
          "date": "2025-08-15",
          "score": 3,
          "cat": "strongman",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "Should this conflict come to an acceptable end, the incredible opportunities that exist to partner with the Russians geopolitically on issues of common interest and frankly, economically...",
          "who": "Marco Rubio, Secretary of State",
          "source": "https://apnews.com/article/russia-ukraine-war-riyadh-talks-trump-putin-rubio-0c3beebfef5839e9d509ff58239a6bc5",
          "date": "2025-02-18",
          "score": 5,
          "cat": "strongman",
          "next": "NEXT_TOPIC"
        }
      ]
    },
    {
      "id": "strongmen_kim",
      "prompt": "You 'fell in love' with a man who runs prison camps and executes his own officials. Kim never faces an election. Neither does Xi Jinping. Is that the kind of leader you admire -- or is it just about the deals?",
      "options": [
        {
          "text": "He's now president for life. President for life. No, he's great. And look, he was able to do that. I think it's great. Maybe we'll have to give that a shot some day.",
          "source": "https://www.cnn.com/2018/03/03/politics/trump-maralago-remarks/index.html",
          "date": "2018-03-03",
          "score": 8,
          "cat": "power",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "Viktor Orban, one of the most respected men, they call him a strong man. He's a tough person. Smart.",
          "source": "https://www.npr.org/2024/09/10/nx-s1-5107967/viktor-orban-hungary-donald-trump-presidential-debate",
          "date": "2024-09-10",
          "score": 6,
          "cat": "strongman",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "They want to make a deal very badly. We'll see how that all turns out, but it's got to be a fair deal.",
          "source": "https://www.nbcnews.com/politics/trump-administration/read-full-transcript-president-donald-trump-interviewed-meet-press-mod-rcna203514",
          "date": "2025-05-04",
          "score": 2,
          "cat": "strongman",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "Dealing with Congress is a matter of give and take. The president doesn't get everything he wants, the Congress doesn't get everything they want. A dictatorship would be a heck of a lot easier, there's no question about it.",
          "source": "http://seattlepi.nwsource.com/national/32902_bush27.shtml",
          "date": "2001-07-26",
          "score": 3,
          "cat": "power",
          "next": "NEXT_TOPIC",
          "who": "George W. Bush, 43rd President"
        }
      ]
    },
    {
      "id": "strongmen_erdogan",
      "prompt": "'He knows about rigged elections better than anybody' -- Erdogan jailed his main rival and thousands of journalists. Netanyahu is under an ICC arrest warrant, and he just handed you a Nobel nomination letter across the Oval Office desk. Is any ally's record disqualifying for you -- and what did you say when he handed you that letter?",
      "options": [
        {
          "text": "This is a tough man. This is a guy who's highly opinionated. Usually, I don't like opinionated people, but I always like this one.",
          "source": "https://rollcall.com/factbase/trump/transcript/donald-trump-remarks-bilat-recep-tayyip-erdogan-turkey-september-25-2025",
          "date": "2025-09-25",
          "score": 5,
          "cat": "strongman",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "This I didn't know. Wow. Coming from you in particular, this is very meaningful.",
          "source": "https://www.timesofisrael.com/netanyahu-surprises-trump-with-nobel-recommendation-as-leaders-stress-coordination/",
          "date": "2025-07-07",
          "score": 3,
          "cat": "cronyism",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "There are a lot of killers. You think our country's so innocent?",
          "source": "https://www.cnn.com/2017/02/04/politics/donald-trump-vladimir-putin",
          "date": "2017-02-05",
          "score": 7,
          "cat": "strongman",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "We like getting along with everybody. One of the reasons that I'm so successful, I get along with everybody.",
          "source": "https://time.com/article/2026/09/01/trump-defends-hosting-russia-g20-european-disapproval-ukraine-war/",
          "date": "2026-09-01",
          "score": 3,
          "cat": "cronyism",
          "next": "NEXT_TOPIC"
        }
      ]
    },
    {
      "id": "strongmen_ukraine",
      "prompt": "'Aligned with nobody' -- yet you blamed Ukraine for being invaded and branded its elected president a dictator while Putin got a red carpet. Who started this war, Mr. President -- and do you stand by 'dictator'?",
      "options": [
        {
          "text": "You've been there for three years. You should have ended it three years -- you should have never started it, you could have made a deal.",
          "source": "https://www.nbcnews.com/politics/donald-trump/trump-says-ukraine-should-never-have-started-it-remarks-war-russia-rcna192710",
          "date": "2025-02-18",
          "score": 7,
          "cat": "truth",
          "next": "strongmen_ukraine_deep"
        },
        {
          "text": "A Dictator without Elections, Zelenskyy better move fast or he is not going to have a Country left.",
          "source": "https://www.cbsnews.com/news/trump-zelenskyy-dictator-russia-ukraine-war/",
          "date": "2025-02-19",
          "score": 7,
          "cat": "truth",
          "next": "strongmen_ukraine_deep"
        },
        {
          "text": "Russia is the aggressor. No if, ands, or buts about it. Russia is the aggressor. And the world must and will hold Russia accountable.",
          "who": "Joe Biden, 46th President",
          "source": "https://bidenwhitehouse.archives.gov/briefing-room/speeches-remarks/2022/04/28/remarks-by-president-biden-on-the-request-to-congress-for-additional-funding-to-support-ukraine/",
          "date": "2022-04-28",
          "score": 0,
          "cat": "strongman",
          "next": "strongmen_ukraine_deep"
        },
        {
          "text": "I'm sure that Ukraine thought they were going to win, you're going to beat someone that's 15 times your size ... you don't go into a war that's 15 times your size.",
          "source": "https://uk.news.yahoo.com/trump-repeats-favourite-kremlin-talking-113114361.html",
          "date": "2025-08-27",
          "score": 7,
          "cat": "truth",
          "next": "strongmen_ukraine_deep"
        }
      ]
    },
    {
      "id": "strongmen_ukraine_deep",
      "prompt": "Ukraine's constitution bars elections under martial law, and it was Russian tanks that crossed the border. On February 28 you threw President Zelensky out of the Oval Office on live television. What did you tell him -- and what did it achieve?",
      "options": [
        {
          "text": "You don't have the cards right now. With us, you start having cards.",
          "source": "https://www.pbs.org/newshour/politics/what-trump-and-zelenskyy-said-during-their-heated-argument-in-the-oval-office",
          "date": "2025-02-28",
          "score": 7,
          "cat": "strongman",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "You're gambling with World War III.",
          "source": "https://www.pbs.org/newshour/politics/what-trump-and-zelenskyy-said-during-their-heated-argument-in-the-oval-office",
          "date": "2025-02-28",
          "score": 7,
          "cat": "strongman",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "I hope it gets done... we're going to save a lot of people from being killed... we'll see.",
          "source": "https://www.nbcnews.com/politics/trump-administration/read-full-transcript-president-donald-trump-interviewed-meet-press-mod-rcna203514",
          "date": "2025-05-04",
          "score": 1,
          "cat": "strongman",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "I think it's disrespectful for you to come to the Oval Office and try to litigate this in front of the American media... you should be thanking the president for trying to bring an end to this conflict.",
          "who": "JD Vance, Vice President",
          "source": "https://apnews.com/article/trump-zelenskyy-vance-transcript-oval-office-80685f5727628c64065da81525f8f0cf",
          "date": "2025-02-28",
          "score": 5,
          "cat": "strongman",
          "next": "NEXT_TOPIC"
        }
      ]
    }
  ]
});
