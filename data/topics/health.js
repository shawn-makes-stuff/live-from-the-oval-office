registerTopic({
  "id": "health",
  "title": "Fitness for Office",
  "entry": "health_intro",
  "nodes": [
    {
      "id": "health_intro",
      "prompt": "Mr. President, you are 79. This month's photos show you dozing in an Oval Office meeting; before that it was the bruised hands and the swollen ankles. Are you healthy enough for this job?",
      "options": [
        {
          "text": "NEVER FELT BETTER IN MY LIFE",
          "source": "https://www.the-independent.com/news/world/americas/us-politics/trump-health-rumors-response-truth-social-b2817486.html",
          "date": "2025-09-01",
          "score": 3,
          "cat": "truth",
          "next": "health_never"
        },
        {
          "text": "I had an MRI. The doctor said it was the best result he has ever seen as a doctor.",
          "source": "https://www.independent.co.uk/news/world/americas/us-politics/trump-mri-walter-reed-doctor-b2865809.html",
          "date": "2025-11-15",
          "score": 4,
          "cat": "truth",
          "next": "health_mri"
        },
        {
          "text": "If Joe Biden is not fit to run for president, he is not fit to serve as President. He must resign the office immediately.",
          "source": "https://www.nbcnews.com/politics/2024-election/president-joe-biden-drops-2024-presidential-race-rcna159867",
          "date": "2024-07-21",
          "score": 7,
          "cat": "power",
          "next": "health_biden",
          "who": "Mike Johnson, Speaker of the House"
        },
        {
          "text": "At the end of another term, I'd be in my mid-eighties. Frankly, it's time for a new generation of leaders. They're the ones that need to make the decisions that will shape the world they will be living in.",
          "source": "https://abcnews.go.com/Politics/mitt-romney-seeking-reelection-senate/story?id=103160588",
          "date": "2023-09-13",
          "score": 0,
          "cat": "power",
          "next": "health_test",
          "who": "Mitt Romney, Senator (R-UT)"
        }
      ]
    },
    {
      "id": "health_never",
      "prompt": "'Never felt better' - yet your own physician diagnosed chronic venous insufficiency in July, the hand bruises keep reappearing under the makeup, and you were filmed nodding off in the Oval Office. Level with us: what is going on -- and why should you get a pass you never gave Joe Biden?",
      "options": [
        {
          "text": "You'll never see me sleeping in front of a camera.",
          "source": "https://www.express.co.uk/showbiz/tv-radio/2142156/sleepy-donald-trump-humiliated",
          "date": "2025-12-04",
          "score": 4,
          "cat": "truth",
          "next": "health_sleep"
        },
        {
          "text": "Very good. Because I won. It's good to win. You heard I won, right? Did you hear I won? I like to win.",
          "source": "https://www.palmbeachpost.com/story/news/trump/2025/07/14/trump-golf-championship-new-jersey-bedminster/85190196007/",
          "date": "2025-07-14",
          "score": 3,
          "cat": "truth",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "I think that Crooked Joe Biden is not only dumb and incompetent, I believe he has gone MAD, a stark raving Lunatic... HE IS A MENTAL CATASTROPHE THAT IS LEADING OUR COUNTRY TO HELL!",
          "source": "https://truthsocial.com/@realDonaldTrump/posts/110865224814637476",
          "date": "2023-08",
          "score": 7,
          "cat": "dehumanization",
          "next": "health_biden"
        },
        {
          "text": "I just feel like a young man. I'm so young. I can't believe it. I'm the youngest person. I am a young, vibrant man. I look at Joe - I don't know about him. I don't know. I would never say anyone is too old.",
          "source": "https://trumpwhitehouse.archives.gov/briefings-statements/remarks-president-trump-marine-one-departure-40/",
          "date": "2019-04-26",
          "score": 3,
          "cat": "truth",
          "next": "health_biden"
        }
      ]
    },
    {
      "id": "health_mri",
      "prompt": "'The best result he has ever seen.' Presidents do not get MRIs at routine checkups, and the White House still will not say what was scanned or why. Will you release the full report -- or is the answer, as usual, going to be about Joe Biden?",
      "options": [
        {
          "text": "They say, 'Nobody gets it in order.' It's actually not that easy, but for me it was easy.",
          "source": "https://www.cbsnews.com/news/trump-cognitive-test-difficulty-claim/",
          "date": "2020-07",
          "score": 4,
          "cat": "truth",
          "next": "health_test"
        },
        {
          "text": "I'm cognitively very strong.",
          "source": "https://au.news.yahoo.com/trump-teased-over-rambling-word-120404261.html",
          "date": "2024-09-24",
          "score": 3,
          "cat": "truth",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "I'm not gonna tell you.",
          "source": "https://abcnews.com/US/full-transcript-trumps-exclusive-100-days-broadcast-interview/story?id=121291672",
          "date": "2025-04-29",
          "score": 3,
          "cat": "press",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "You are the most obnoxious reporter in the whole place. Let me just tell you, you are an obnoxious -- actually, a terrible reporter, and it's always the same with you.",
          "source": "https://newrepublic.com/post/204152/donald-trump-pulls-180-releasing-boat-strike-video",
          "date": "2025-12-08",
          "score": 8,
          "cat": "press",
          "next": "NEXT_TOPIC"
        }
      ]
    },
    {
      "id": "health_biden",
      "prompt": "You and your allies said Joe Biden was unfit to serve at 81 and should resign on the spot. You are 79 now. Why does age disqualify him and not you -- and was pushing him out the right call?",
      "options": [
        {
          "text": "Crooked Joe Biden, the WORST President in the history of the U.S., whose Presidency was Unconstitutionally STOLEN from him by Kamabla, Barrack HUSSEIN Obama, Crazy Nancy Pelosi... tries to take back the Nomination...",
          "source": "https://www.newsweek.com/donald-trump-suggests-biden-may-try-take-back-nomination-1935550",
          "date": "2024-08-06",
          "score": 7,
          "cat": "elections",
          "next": "health_debate"
        },
        {
          "text": "Well, he's right. He did beat Medicare. He beat it to death.",
          "source": "https://www.cnn.com/2024/06/28/politics/key-lines-cnn-debate-what-matters",
          "date": "2024-06-27",
          "score": 5,
          "cat": "truth",
          "next": "health_debate"
        },
        {
          "text": "Bad debate nights happen. Trust me, I know. But this election is still a choice between someone who has fought for ordinary folks his entire life and someone who only cares about himself.",
          "source": "https://www.nbcnewyork.com/decision-2024/barack-obama-joe-biden-presidential-debate-reaction/5551290/",
          "date": "2024-06-28",
          "score": 1,
          "cat": "elections",
          "next": "health_debate",
          "who": "Barack Obama, 44th President"
        },
        {
          "text": "...was not fit to run for President, and is certainly not fit to serve.",
          "source": "https://abcnews.go.com/Politics/donald-trump-reacts-president-joe-biden-dropping-2024/story?id=112143944",
          "date": "2024-07-21",
          "score": 5,
          "cat": "truth",
          "next": "health_25th"
        },
        {
          "text": "They threw him out of a campaign like a dog.",
          "source": "https://abcnews.go.com/Politics/harris-trump-presidential-debate-transcript/story?id=113560542",
          "date": "2024-09-10",
          "score": 7,
          "cat": "dehumanization",
          "next": "health_debate"
        }
      ]
    },
    {
      "id": "health_test",
      "prompt": "Senator Romney says it is time for a new generation; Nikki Haley wanted mandatory competency tests for anyone over 75. You bragged about acing one in 2018. Would you take a new cognitive test on camera this year - and should Joe Biden have taken one?",
      "options": [
        {
          "text": "Could you repeat that? So, I said, yeah - person, woman, man, camera, TV.",
          "source": "https://www.cbsnews.com/news/trump-cognitive-test-difficulty-claim/",
          "date": "2020-07",
          "score": 4,
          "cat": "truth",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "...mandatory mental competence tests for politicians over 75 years old.",
          "source": "https://www.businessinsider.com/nikki-haley-mental-competency-tests-75-over-2024-campaign-2023-2",
          "date": "2023-02",
          "score": 1,
          "cat": "power",
          "next": "NEXT_TOPIC",
          "who": "Nikki Haley, former UN Ambassador"
        },
        {
          "text": "Honestly, he should take the test. In a way, he has an obligation to because you have to be able to show this country that the person that we're picking as leader is sharp.",
          "source": "https://www.cbsnews.com/news/trump-cognitive-test-difficulty-claim/",
          "date": "2020-07",
          "score": 4,
          "cat": "truth",
          "next": "health_debate"
        },
        {
          "text": "Which would you rather be, a dumb person or a dictator? Perhaps a dictator would be better. I don't want to be a dumb person.",
          "source": "https://www.businessinsider.com/trump-rather-be-a-dictator-than-a-dumb-person-video-2022-4",
          "date": "2022-04-22",
          "score": 8,
          "cat": "strongman",
          "next": "NEXT_TOPIC"
        }
      ]
    },
    {
      "id": "health_debate",
      "prompt": "Let's talk about that debate. Biden said 'we finally beat Medicare' and his own party pushed him out within weeks. If you had a night like that, would you step aside -- and who do you think was actually running the country after his?",
      "options": [
        {
          "text": "The Lord Almighty's not coming down.",
          "source": "https://bbc.com/news/articles/cl5y8n5d09qo",
          "date": "2024-07-05",
          "score": 2,
          "cat": "power",
          "next": "NEXT_TOPIC",
          "who": "Joe Biden, 46th President"
        },
        {
          "text": "I want him to do whatever he decides to do.",
          "source": "https://www.nbcnews.com/politics/2024-election/nancy-pelosi-stops-short-saying-biden-stay-race-says-time-running-shor-rcna161097",
          "date": "2024-07",
          "score": 1,
          "cat": "elections",
          "next": "NEXT_TOPIC",
          "who": "Nancy Pelosi, former Speaker"
        },
        {
          "text": "Any and all Documents, Proclamations, Executive Orders, Memorandums, or Contracts, signed by Order of the now infamous and unauthorized 'AUTOPEN,' within the Administration of Joseph R. Biden Jr., are hereby null, void...",
          "source": "https://www.newsweek.com/trump-says-biden-autopen-pardons-invalid-11145591",
          "date": "2025-12-02",
          "score": 8,
          "cat": "power",
          "next": "health_25th"
        },
        {
          "text": "I have never been a quitter. To leave office before my term is completed is abhorrent to every instinct in my body. But as President, I must put the interest of America first.",
          "source": "https://www.youtube.com/watch?v=IwQMpSxRPvc",
          "date": "1974-08-08",
          "score": 2,
          "cat": "power",
          "next": "NEXT_TOPIC",
          "who": "Richard Nixon, President"
        }
      ]
    },
    {
      "id": "health_sleep",
      "prompt": "The video shows your eyes closed for minutes while your own Cabinet talked around you. Joe Biden was branded 'Sleepy Joe' for far less. Were you asleep -- and is your mind as sharp as you keep telling us?",
      "options": [
        {
          "text": "...one of the great memories of all time.",
          "source": "https://www.businessinsider.nl/trump-gold-star-great-memory-2017-10/?international=true&r=US",
          "date": "2017-10",
          "score": 4,
          "cat": "truth",
          "next": "health_test"
        },
        {
          "text": "There is no #JoeBiden - executed in 2020. #Biden clones doubles & robotic engineered soulless mindless entities are what you see. Democrats dont know the difference.",
          "source": "https://www.thedailybeast.com/donald-trump-shares-bonkers-conspiracy-theory-about-joe-biden-being-replaced-by-clones/",
          "date": "2025-05-31",
          "score": 8,
          "cat": "truth",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "I think that would qualify as not smart, but genius....and a very stable genius at that!",
          "source": "https://www.cnn.com/2018/01/06/politics/donald-trump-white-house-fitness-very-stable-genius",
          "date": "2018-01-06",
          "score": 5,
          "cat": "truth",
          "next": "health_test"
        },
        {
          "text": "Not at all -- and I want you to know that also I will not make age an issue of this campaign. I am not going to exploit, for political purposes, my opponent's youth and inexperience.",
          "source": "https://www.debates.org/voter-education/debate-transcripts/october-21-1984-debate-transcript/",
          "date": "1984-10-21",
          "score": 1,
          "cat": "truth",
          "next": "NEXT_TOPIC",
          "who": "Ronald Reagan, 40th President"
        }
      ]
    },
    {
      "id": "health_25th",
      "prompt": "More than fifty House Democrats have now signed on to invoking the 25th Amendment against you - the very remedy your side demanded for Joe Biden. Does the 25th apply to you -- or should it have applied to him?",
      "options": [
        {
          "text": "What Crooked Joe Biden, who can't string two sentences together, has done to our once great Country through his Open Borders CATASTROPHE, may go down as the greatest and most damaging mistake ever made in USA HISTORY.",
          "source": "https://truthsocial.com/@realDonaldTrump/posts/110865185229848140",
          "date": "2023-08",
          "score": 7,
          "cat": "dehumanization",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "I don't want the president of the United States to have a cognitive deficiency.",
          "source": "https://www.independent.co.uk/news/world/americas/us-politics/newsom-trump-cognitive-ability-2028-election-b2936871.html",
          "date": "2026-03-12",
          "score": 3,
          "cat": "truth",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "...a cognitive test every single day.",
          "source": "https://www.nytimes.com/2024/07/05/us/politics/biden-cognitive-test-abc-interview.html",
          "date": "2024-07-05",
          "score": 2,
          "cat": "truth",
          "next": "NEXT_TOPIC",
          "who": "Joe Biden, 46th President"
        },
        {
          "text": "I can't say what we're going to do because if I did, I wouldn't be sitting here for long. They'd probably -- what is it called? The 25th Amendment? ... They institute the 25th Amendment, which they didn't do with Biden, which is shocking.",
          "source": "https://www.yahoo.com/news/articles/donald-trump-jokes-cabinet-25th-103104867.html",
          "date": "2026-03-26",
          "score": 5,
          "cat": "power",
          "next": "NEXT_TOPIC"
        }
      ]
    }
  ]
});
