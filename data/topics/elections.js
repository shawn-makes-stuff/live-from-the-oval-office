registerTopic({
  "id": "elections",
  "title": "The 2020 Election & January 6",
  "entry": "elections_intro",
  "nodes": [
    {
      "id": "elections_intro",
      "prompt": "Mr. President, you still say the 2020 election was stolen. More than sixty lawsuits failed, your own attorney general found no fraud that could have changed the result. So, on the record: was it stolen?",
      "options": [
        {
          "text": "This is a fraud on the American public. This is an embarrassment to our country. We were getting ready to win this election. Frankly, we did win this election.",
          "source": "https://www.rev.com/transcripts/donald-trump-2020-election-night-speech-transcript",
          "date": "2020-11-04",
          "score": 7,
          "cat": "truth",
          "next": "elections_fraud"
        },
        {
          "text": "If everything's honest, I'll gladly accept the results. I don't change on that.",
          "source": "https://www.cnn.com/2024/05/02/politics/donald-trump-accept-2024-election-results/index.html",
          "date": "2024-05-01",
          "score": 3,
          "cat": "elections",
          "next": "elections_accept"
        },
        {
          "text": "All I want to do is this. I just want to find 11,780 votes, which is one more than we have because we won the state.",
          "source": "https://www.cnn.com/2021/01/03/politics/trump-brad-raffensperger-phone-call-transcript",
          "date": "2021-01-02",
          "score": 8,
          "cat": "elections",
          "next": "elections_georgia"
        },
        {
          "text": "I am going to lead a movement to get rid of MAIL-IN BALLOTS, and also, while we're at it, Highly 'Inaccurate,' Very Expensive, and Seriously Controversial VOTING MACHINES.",
          "source": "https://www.npr.org/2025/08/18/nx-s1-5506137/trump-announces-on-truth-social-that-hell-ban-mail-in-voting-and-voting-machines",
          "date": "2025-08-18",
          "score": 7,
          "cat": "elections",
          "next": "elections_mail"
        },
        {
          "text": "The best way we could show respect for the voters who were upset is by telling them the truth. That's the burden, that's the duty of leadership. The truth is that President-elect Biden won the election, President Trump lost.",
          "who": "Mitt Romney, Senator, Utah",
          "source": "https://www.c-span.org/video/?507698-5/senate-rejects-objection-arizona-electoral-votes-93-6",
          "date": "2021-01-06",
          "score": 0,
          "cat": "elections",
          "next": "elections_accept"
        }
      ]
    },
    {
      "id": "elections_fraud",
      "prompt": "'Frankly, we did win.' You said that at 2 a.m. with millions of votes uncounted. Two months later a crowd you had summoned to Washington stormed the Capitol. What exactly did you tell them that morning?",
      "options": [
        {
          "text": "I know that everyone here will soon be marching over to the Capitol building to peacefully and patriotically make your voices heard.",
          "source": "https://www.washingtonpost.com/politics/interactive/2021/annotated-trump-speech-jan-6-capitol/",
          "date": "2021-01-06",
          "score": 3,
          "cat": "violence",
          "next": "elections_jan6"
        },
        {
          "text": "We fight like hell, and if you don't fight like hell you're not going to have a country anymore.",
          "source": "https://www.washingtonpost.com/politics/interactive/2021/annotated-trump-speech-jan-6-capitol/",
          "date": "2021-01-06",
          "score": 8,
          "cat": "violence",
          "next": "elections_jan6"
        },
        {
          "text": "The words of a president matter, no matter how good or bad that president is. At their best, the words of a president can inspire. At their worst, they can incite.",
          "who": "Joe Biden, 46th President",
          "source": "https://www.cnn.com/politics/live-news/congress-electoral-college-vote-count-2021/index.html",
          "date": "2021-01-06",
          "score": 0,
          "cat": "violence",
          "next": "elections_jan6"
        },
        {
          "text": "January 6 was just a riot at the Capitol and if you think about what our Declaration of Independence says, it says to overthrow tyrants.",
          "who": "Marjorie Taylor Greene, Congresswoman",
          "source": "https://www.cnn.com/2021/10/26/politics/marjorie-taylor-greene-january-6-riot/index.html",
          "date": "2021-10-27",
          "score": 8,
          "cat": "violence",
          "next": "elections_jan6"
        }
      ]
    },
    {
      "id": "elections_accept",
      "prompt": "'If everything's honest.' You said the same before 2020 and then called it rigged. Who decides what counts as honest -- and will you accept a 2028 result if your party loses?",
      "options": [
        {
          "text": "In four years, you don't have to vote again. We'll have it fixed so good you're not going to have to vote.",
          "source": "https://www.cbsnews.com/news/donald-trump-christian-voters-turning-point-action/",
          "date": "2024-07-26",
          "score": 9,
          "cat": "elections",
          "next": "elections_vote"
        },
        {
          "text": "If we don't win, you know, it depends. It always depends on the fairness of an election.",
          "source": "https://time.com/6972163/donald-trump-political-violence-interview-exclusive/",
          "date": "2024-04",
          "score": 5,
          "cat": "violence",
          "next": "elections_vote"
        },
        {
          "text": "We must choose leaders who believe in free and fair elections and who respect the peaceful transfer of power.",
          "who": "Nancy Pelosi, former Speaker of the House",
          "source": "https://www.cnbc.com/2024/08/21/nancy-pelosi-kamala-harris-dnc.html",
          "date": "2024-08-21",
          "score": 0,
          "cat": "elections",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "If I had been vice president, I would have told the states, like Pennsylvania, Georgia, and so many others, that we needed to have multiple slates of electors and I think the U.S. Congress should have fought over it from there.",
          "who": "JD Vance, Vice President",
          "source": "https://abcnews.go.com/Politics/jd-vance-defends-trump-claims-invoking-jean-carroll/story?id=106925954",
          "date": "2024-02-04",
          "score": 8,
          "cat": "elections",
          "next": "elections_vote"
        }
      ]
    },
    {
      "id": "elections_georgia",
      "prompt": "'Find 11,780 votes' -- one more than the margin. Georgia's Republican secretary of state recorded that call and told you the numbers were simply wrong. Four days later you tweeted at your own vice president while a mob hunted him. Were you asking officials to break the law?",
      "options": [
        {
          "text": "Mike Pence didn't have the courage to do what should have been done to protect our Country and our Constitution, giving States a chance to certify a corrected set of facts.",
          "source": "https://www.presidency.ucsb.edu/documents/tweets-january-6-2021",
          "date": "2021-01-06",
          "score": 8,
          "cat": "power",
          "next": "elections_jan6"
        },
        {
          "text": "We're going to have to see what happens.",
          "source": "https://www.cnn.com/2020/09/23/politics/trump-election-day-peaceful-transition/index.html",
          "date": "2020-09-23",
          "score": 5,
          "cat": "elections",
          "next": "elections_vote"
        },
        {
          "text": "President Trump is wrong -- I had no right to overturn the election. The presidency belongs to the American people, and the American people alone.",
          "who": "Mike Pence, former Vice President",
          "source": "https://www.cnn.com/videos/politics/2022/02/04/pence-speech-trump-wrong-nr-vpx.cnn",
          "date": "2022-02-04",
          "score": 0,
          "cat": "elections",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "If you have legit concerns about fraud present EVIDENCE and take it to court. STOP Spreading debunked misinformation... This is getting insane.",
          "who": "Adam Kinzinger, former Representative, Illinois",
          "source": "https://twitter.com/RepKinzinger/status/1324503564891414528",
          "date": "2020-11-06",
          "score": 0,
          "cat": "truth",
          "next": "NEXT_TOPIC"
        }
      ]
    },
    {
      "id": "elections_mail",
      "prompt": "A movement to get rid of mail-in ballots. The Constitution hands election rules to the states and Congress, and courts blocked key parts of your March 2025 election order. Millions of your own voters -- including you, in Florida -- vote by mail. What is the case?",
      "options": [
        {
          "text": "The cheating on mail-in voting is legendary. It's horrible what's going on.",
          "source": "https://www.pbs.org/newshour/politics/watch-trump-signs-executive-order-to-create-national-list-of-eligible-voters",
          "date": "2026-03-31",
          "score": 6,
          "cat": "truth",
          "next": "elections_vote"
        },
        {
          "text": "So we'll be going to the U.S. Supreme Court. We want all voting to stop. We don't want them to find any ballots at four o'clock in the morning and add them to the list.",
          "source": "https://www.rev.com/transcripts/donald-trump-2020-election-night-speech-transcript",
          "date": "2020-11-04",
          "score": 8,
          "cat": "elections",
          "next": "elections_vote"
        },
        {
          "text": "The 2020 presidential election was not stolen. Anyone who claims it was is spreading THE BIG LIE, turning their back on the rule of law, and poisoning our democratic system.",
          "who": "Liz Cheney, former Representative, Wyoming",
          "source": "https://www.cnn.com/2021/05/03/politics/liz-cheney-criticism-trump-big-lie/index.html",
          "date": "2021-05-03",
          "score": 0,
          "cat": "elections",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "When the president says the election was rigged, that's what he's talking about. The fix was in.",
          "who": "Mike Johnson, Speaker of the House",
          "source": "https://www.nytimes.com/2023/10/25/us/politics/mike-johnson-2020-election-overturn.html",
          "date": "2020-11-17",
          "score": 6,
          "cat": "elections",
          "next": "elections_vote"
        }
      ]
    },
    {
      "id": "elections_jan6",
      "prompt": "One 'peacefully,' twenty 'fights,' and a tweet attacking your vice president while he hid from the crowd. About 140 officers were injured that day and Ashli Babbitt was shot climbing through a broken window toward the House chamber. On your first day back you pardoned roughly 1,500 of the people who did it. Any regrets?",
      "options": [
        {
          "text": "That was a day of love from the standpoint of the millions. It's, like, hundreds of thousands. It could have been the largest group I've ever spoken before.",
          "source": "https://www.npr.org/2024/10/29/nx-s1-5159868/2024-election-trump-harris-capitol-riot",
          "date": "2024-10-16",
          "score": 7,
          "cat": "truth",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "These are the hostages. Approximately 1,500 for a pardon -- full pardon.",
          "source": "https://www.cnn.com/2025/01/20/politics/january-6-2021-capitol-riot-pardons-trump/index.html",
          "date": "2025-01-20",
          "score": 8,
          "cat": "power",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "Some of those people went down to the Capitol but I said peacefully and patriotically. Nothing done wrong at all.",
          "source": "https://abcnews.com/Politics/nov-5-nears-trump-steps-attempts-recast-jan/story?id=114895763",
          "date": "2024-10-16",
          "score": 3,
          "cat": "truth",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "This is how election results are disputed in a banana republic -- not our democratic republic.",
          "who": "George W. Bush, 43rd President",
          "source": "https://www.wusa9.com/article/news/nation-world/george-w-bush-statement-riot-capitol/507-0e5ef0b8-65a8-402f-9c23-88773d4bebde",
          "date": "2021-01-06",
          "score": 0,
          "cat": "elections",
          "next": "NEXT_TOPIC"
        }
      ]
    },
    {
      "id": "elections_vote",
      "prompt": "Stop the count. 'See what happens' on a peaceful transfer. 'Fixed so good' nobody has to vote. Legendary cheating that no court has ever found. Mr. President, a simple yes or no: do Americans get to keep choosing their president?",
      "options": [
        {
          "text": "Get rid of the ballots and you'll have a very peaceful -- there won't be a transfer, frankly. There'll be a continuation.",
          "source": "https://www.cnn.com/2020/09/23/politics/trump-election-day-peaceful-transition/index.html",
          "date": "2020-09-23",
          "score": 9,
          "cat": "power",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "We fight like hell, and if you don't fight like hell you're not going to have a country anymore.",
          "source": "https://www.washingtonpost.com/politics/interactive/2021/annotated-trump-speech-jan-6-capitol/",
          "date": "2021-01-06",
          "score": 8,
          "cat": "violence",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "We'll see what happens. Nobody really knows.",
          "source": "https://www.cnn.com/2020/02/27/politics/trump-coronavirus-disappear/index.html",
          "date": "2020-02-27",
          "score": 3,
          "cat": "elections",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "We're not afraid of free and fair elections, because true legitimacy can only come from one source -- and that is the people. We're not afraid of an independent judiciary, because no one is above the law.",
          "who": "Barack Obama, 44th President",
          "source": "https://obamawhitehouse.archives.gov/blog/2014/09/03/we-are-stronger-because-we-are-democracies-president-obama-addresses-people-estonia",
          "date": "2014-09-03",
          "score": 0,
          "cat": "elections",
          "next": "NEXT_TOPIC"
        }
      ]
    }
  ]
});
