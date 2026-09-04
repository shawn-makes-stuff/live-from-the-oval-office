registerTopic({
  "id": "press",
  "title": "The Free Press",
  "entry": "press_intro",
  "nodes": [
    {
      "id": "press_intro",
      "prompt": "Mr. President, you have called journalists 'the enemy of the people.' Tonight you are on live television talking to one. Do you stand by that phrase?",
      "options": [
        {
          "text": "The FAKE NEWS media (failing @nytimes, @NBCNews, @ABC, @CBS, @CNN) is not my enemy, it is the enemy of the American People!",
          "source": "https://x.com/realDonaldTrump/status/832708293516632065",
          "date": "2017-02-17",
          "score": 8,
          "cat": "press",
          "next": "press_enemy"
        },
        {
          "text": "I love the First Amendment. Nobody loves it better than me.",
          "source": "https://trumpwhitehouse.archives.gov/briefings-statements/remarks-president-trump-conservative-political-action-conference/",
          "date": "2017-02-24",
          "score": 3,
          "cat": "press",
          "next": "press_first"
        },
        {
          "text": "Your organization is terrible... Don't be rude. No, I'm not going to give you a question. You are fake news.",
          "source": "https://thehill.com/homenews/administration/313777-trump-berates-cnn-reporter-for-fake-news/",
          "date": "2017-01-11",
          "score": 6,
          "cat": "press",
          "next": "press_fakenews"
        },
        {
          "text": "I'm going to open up our libel laws so when they write purposely negative and horrible and false articles, we can sue them and win lots of money.",
          "source": "https://money.cnn.com/2016/02/26/media/donald-trump-libel-laws/index.html",
          "date": "2016-02-26",
          "score": 7,
          "cat": "press",
          "next": "press_libel"
        },
        {
          "text": "It goes without saying that essential to that is a free press... It doesn't work if we don't have a well-informed citizenry, and you are the conduit through which they receive the information about what's taking place in the halls of power.",
          "who": "Barack Obama, 44th President",
          "source": "https://www.nytimes.com/2017/01/18/us/politics/obama-final-press-conference.html",
          "date": "2017-01-18",
          "score": 0,
          "cat": "press",
          "next": "press_first"
        }
      ]
    },
    {
      "id": "press_enemy",
      "prompt": "'Enemy of the people' -- Stalin's phrase. In February your White House barred the Associated Press from the Oval Office because its stylebook still says 'Gulf of Mexico,' and your FCC chairman Brendan Carr is now investigating networks over their coverage. Is punishing outlets you dislike official policy?",
      "options": [
        {
          "text": "We're going to keep them out until such time as they agree that it's the Gulf of America.",
          "source": "https://www.axios.com/2025/02/18/trump-gulf-of-mexico-associated-press",
          "date": "2025-02-18",
          "score": 7,
          "cat": "press",
          "next": "press_licenses"
        },
        {
          "text": "I think Brendan Carr is a great American patriot, so I disagree with Ted Cruz.",
          "source": "https://www.nbcnews.com/video/trump-defends-fcc-chair-following-jimmy-kimmel-suspension-247968325752",
          "date": "2025-09-19",
          "score": 5,
          "cat": "cronyism",
          "next": "press_licenses"
        },
        {
          "text": "Societies that repress journalists ultimately oppress people as well... if you want a society that is free and vibrant and successful, part of that formula is the free flow of information... and that requires a free press.",
          "who": "Barack Obama, 44th President",
          "source": "https://obamawhitehouse.archives.gov/the-press-office/2014/11/14/remarks-president-obama-and-daw-aung-san-suu-kyi-burma-joint-press-confe",
          "date": "2014-11-14",
          "score": 0,
          "cat": "press",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "The legacy media is pure propaganda.",
          "who": "Elon Musk (DOGE), DOGE adviser",
          "source": "https://www.washingtonpost.com/technology/2025/01/21/elon-musk-salute-trump-inauguration/",
          "date": "2025-01-21",
          "score": 6,
          "cat": "press",
          "next": "press_licenses"
        }
      ]
    },
    {
      "id": "press_first",
      "prompt": "You say you love the First Amendment. Yet in September your FCC chairman told ABC it could do things 'the easy way or the hard way,' and Jimmy Kimmel was off the air within hours. Is that love?",
      "options": [
        {
          "text": "Great News for America: The ratings challenged Jimmy Kimmel Show is CANCELLED. Congratulations to ABC for finally having the courage to do what had to be done.",
          "source": "https://variety.com/2025/tv/news/trump-celebrates-jimmy-kimmel-pulled-abc-1236522617/",
          "date": "2025-09-17",
          "score": 8,
          "cat": "press",
          "next": "press_licenses"
        },
        {
          "text": "And you ask a nasty question like that? It's called negotiation.",
          "source": "https://www.foxnews.com/media/trump-blasts-nasty-question-from-oval-office-reporter-whether-he-always-chickens-out-tariffs",
          "date": "2025-05-28",
          "score": 4,
          "cat": "press",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "The First Amendment gives all of us -- it gives it to me, it gives it to you, it gives all Americans -- the right to speak our minds freely. It gives you the right and me the right to criticize fake news, and criticize it strongly.",
          "source": "https://trumpwhitehouse.archives.gov/briefings-statements/remarks-president-trump-conservative-political-action-conference/",
          "date": "2017-02-24",
          "score": 3,
          "cat": "press",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "Why don't you go talk about Jewish space lasers. And really, why don't you fuck off? How about that?",
          "who": "Marjorie Taylor Greene, Congresswoman",
          "source": "https://www.thedailybeast.com/marjorie-taylor-greene-rages-at-uk-journos-jewish-space-laser-question-fck-off",
          "date": "2024-03-06",
          "score": 5,
          "cat": "press",
          "next": "NEXT_TOPIC"
        }
      ]
    },
    {
      "id": "press_fakenews",
      "prompt": "'You are fake news' -- you said that to a CNN reporter before you were even sworn in. Eight years later Paramount paid you $16 million to settle a suit over a '60 Minutes' edit, and two weeks after that CBS cancelled Stephen Colbert. Coincidence?",
      "options": [
        {
          "text": "I absolutely love that Colbert got fired. His talent was even less than his ratings.",
          "source": "https://www.hollywoodreporter.com/tv/tv-news/trump-stephen-colbert-cancellation-1236319578/",
          "date": "2025-07-18",
          "score": 7,
          "cat": "press",
          "next": "press_lawsuits"
        },
        {
          "text": "Congratulations to ABC for finally having the courage to do what had to be done... Do it NBC!!!",
          "source": "https://deadline.com/2025/09/trump-jimmy-kimmel-reaction-charlie-kirk-1236547516/",
          "date": "2025-09-17",
          "score": 8,
          "cat": "press",
          "next": "press_licenses"
        },
        {
          "text": "Everybody is saying that I was solely responsible for the firing of Stephen Colbert from CBS, 'Late Night.' That is not true!",
          "source": "https://globalnews.ca/news/11311011/donald-trump-denies-responsibility-cancellation-the-late-show-with-stephen-colbert/",
          "date": "2025-07-29",
          "score": 3,
          "cat": "truth",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "It's very easy to speak truth from this podium when you have a president who is implementing policies that are wildly popular... many of the lies that have been told to your faces in this very briefing room. I will not do that.",
          "who": "Karoline Leavitt, White House Press Secretary",
          "source": "https://www.whitehouse.gov/briefings-statements/2025/01/press-briefing-by-press-secretary-karoline-leavitt/",
          "date": "2025-01-29",
          "score": 4,
          "cat": "press",
          "next": "NEXT_TOPIC"
        }
      ]
    },
    {
      "id": "press_libel",
      "prompt": "'Open up our libel laws.' You have since sued the Wall Street Journal for $10 billion over its report on a birthday letter to Jeffrey Epstein, and the Pentagon now requires reporters to pledge not to gather unapproved information. Is this what you meant?",
      "options": [
        {
          "text": "We're going to open up libel laws, and we're going to have people sue you like you've never got sued before.",
          "source": "https://thehill.com/blogs/ballot-box/presidential-races/270956-trump-threatens-to-open-up-libel-laws-to-sue-newspapers/",
          "date": "2016-02-26",
          "score": 7,
          "cat": "press",
          "next": "press_lawsuits"
        },
        {
          "text": "I think he finds the press to be very disruptive in terms of world peace and maybe security for our nation.",
          "source": "https://www.washingtonexaminer.com/policy/defense/3850971/media-friendly-trump-endorses-hegseths-reporting-restrictions/",
          "date": "2025-10-14",
          "score": 6,
          "cat": "press",
          "next": "press_licenses"
        },
        {
          "text": "These are not my words, not the way I talk. Also, I don't draw pictures.",
          "source": "https://www.pbs.org/newshour/politics/trump-sues-wall-street-journal-and-rupert-murdoch-over-story-reporting-on-epstein-ties",
          "date": "2025-07-17",
          "score": 3,
          "cat": "truth",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "As usual, the fake news is delivering more fabricated, inflammatory, and derogatory reporting to discredit our incredible warriors fighting to protect the homeland.",
          "who": "Pete Hegseth, Defense Secretary",
          "source": "https://thehill.com/policy/defense/5626054-defense-secretary-defends-drug-strikes/",
          "date": "2025-11-28",
          "score": 6,
          "cat": "press",
          "next": "press_licenses"
        }
      ]
    },
    {
      "id": "press_licenses",
      "prompt": "The AP, Kimmel, the Pentagon press corps -- the pattern is access for friends, punishment for critics. Aboard Air Force One you went further and said networks that give you bad press should 'maybe' lose their licenses. The FCC is supposed to be independent. Were you serious?",
      "options": [
        {
          "text": "They give me only bad publicity or press. They're getting a license, I think maybe their license should be taken away. It's up to Brendan Carr.",
          "source": "https://www.pbs.org/newshour/politics/listen-trump-calls-for-licenses-of-tv-networks-that-give-him-bad-publicity-to-be-revoked",
          "date": "2025-09-18",
          "score": 9,
          "cat": "press",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "I hear Jimmy Kimmel is next. Has even less talent than Colbert!",
          "source": "https://www.hollywoodreporter.com/tv/tv-news/trump-stephen-colbert-cancellation-1236319578/",
          "date": "2025-07-18",
          "score": 7,
          "cat": "press",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "I love the First Amendment. Nobody loves it better than me.",
          "source": "https://trumpwhitehouse.archives.gov/briefings-statements/remarks-president-trump-conservative-political-action-conference/",
          "date": "2017-02-24",
          "score": 3,
          "cat": "press",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "We need a free press. We must have it. It's vital... That's how dictators get started. They get started by suppressing free press.",
          "who": "John McCain, Senator, Arizona",
          "source": "http://www.reuters.com/article/us-usa-trump-mccain-idUSKBN15Y07R",
          "date": "2017-02-19",
          "score": 0,
          "cat": "press",
          "next": "NEXT_TOPIC"
        }
      ]
    },
    {
      "id": "press_lawsuits",
      "prompt": "Suing your way to silence. ABC paid $15 million, Paramount $16 million, and in September you filed a $15 billion suit against the New York Times that a judge tossed as 'improper and impermissible' within days. Is litigation now a tool of the presidency?",
      "options": [
        {
          "text": "Today, I have the Great Honor of bringing a $15 Billion Dollar Defamation and Libel Lawsuit against The New York Times, one of the worst and most degenerate newspapers in the History of our Country.",
          "source": "https://www.cnn.com/2025/09/16/media/trump-lawsuit-new-york-times-hnk",
          "date": "2025-09-15",
          "score": 7,
          "cat": "press",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "And you ask a nasty question like that? It's called negotiation.",
          "source": "https://www.foxnews.com/media/trump-blasts-nasty-question-from-oval-office-reporter-whether-he-always-chickens-out-tariffs",
          "date": "2025-05-28",
          "score": 4,
          "cat": "press",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "Power can be very addictive. And it can be corrosive. And it's important for the media to call to account people who abuse their power.",
          "who": "George W. Bush, 43rd President",
          "source": "http://abcnews.go.com/Politics/president-george-bush-important-free-press-power-addictive/story?id=45781428",
          "date": "2017-02-27",
          "score": 0,
          "cat": "press",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "You don't tell me anything you washed up, loser lawyer!",
          "who": "Pam Bondi, Attorney General",
          "source": "https://thedailybs.com/2026/02/11/you-dont-tell-me-anything-you-washed-up-loser-lawyer-pam-bondi-in-shouting-match-with-dem-reps/",
          "date": "2026-02-11",
          "score": 5,
          "cat": "power",
          "next": "NEXT_TOPIC"
        }
      ]
    }
  ]
});
