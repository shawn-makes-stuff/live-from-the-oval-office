registerTopic({
  "id": "immigration",
  "title": "The Border",
  "entry": "immigration_intro",
  "nodes": [
    {
      "id": "immigration_intro",
      "prompt": "Mr. President, you launched your political career calling Mexican migrants rapists, and you closed a presidential debate with the pets of Springfield, Ohio. Ten years on -- are immigrants people to you?",
      "options": [
        {
          "text": "When Mexico sends its people, they're not sending their best... They're bringing drugs. They're bringing crime. They're rapists. And some, I assume, are good people.",
          "source": "https://time.com/3923128/donald-trump-announcement-speech/",
          "date": "2015-06-16",
          "score": 7,
          "cat": "dehumanization",
          "next": "immigration_rhetoric"
        },
        {
          "text": "In Springfield, they're eating the dogs, the people that came in, they're eating the cats. They're eating the pets of the people that live there, and this is what's happening in our country, and it's a shame.",
          "source": "https://www.nbcnews.com/politics/2024-election/trump-pushes-baseless-claim-immigrants-eating-pets-rcna170537",
          "date": "2024-09-10",
          "score": 7,
          "cat": "truth",
          "next": "immigration_springfield"
        },
        {
          "text": "They're poisoning the blood of our country. That's what they've done. They poison mental institutions and prisons all over the world... They're coming into our country from Africa, from Asia, all over the world.",
          "source": "https://www.nbcnews.com/politics/2024-election/trump-says-immigrants-are-poisoning-blood-country-biden-campaign-liken-rcna130141",
          "date": "2023-12-16",
          "score": 9,
          "cat": "dehumanization",
          "next": "immigration_blood"
        },
        {
          "text": "I'm referring, and you know I'm referring, to the MS-13 gangs that are coming in.",
          "source": "https://money.cnn.com/2018/05/17/media/media-trump-animals-immigrants/index.html",
          "date": "2018-05-17",
          "score": 3,
          "cat": "truth",
          "next": "immigration_ms13"
        },
        {
          "text": "We are and always will be a nation of immigrants. We were strangers once, too.",
          "who": "Barack Obama, 44th President",
          "source": "https://obamawhitehouse.archives.gov/the-press-office/2014/11/20/remarks-president-address-nation-immigration",
          "date": "2014-11-20",
          "score": 0,
          "cat": "dehumanization",
          "next": "immigration_ms13"
        }
      ]
    },
    {
      "id": "immigration_rhetoric",
      "prompt": "'Some, I assume, are good people.' A decade later you are calling them animals and flying them to a Salvadoran mega-prison without a hearing. Do you still assume some are good people?",
      "options": [
        {
          "text": "You wouldn't believe how bad these people are. These aren't people. These are animals.",
          "source": "https://www.thedailybeast.com/trump-on-some-deported-immigrants-these-arent-people-these-are-animals/",
          "date": "2018-05-16",
          "score": 8,
          "cat": "dehumanization",
          "next": "immigration_cecot"
        },
        {
          "text": "I'm talking about really bad people.",
          "source": "https://www.foxnews.com/politics/bukele-says-trump-has-350-million-americans-liberate-ending-crime-terrorism",
          "date": "2025-04-14",
          "score": 3,
          "cat": "dehumanization",
          "next": "immigration_cecot"
        },
        {
          "text": "We've seen nationalism distorted into nativism -- forgotten the dynamism that immigration has always brought to America.",
          "who": "George W. Bush, 43rd President",
          "source": "http://www.politico.com/story/2017/10/19/full-text-george-w-bush-speech-trump-243947",
          "date": "2017-10-19",
          "score": 0,
          "cat": "dehumanization",
          "next": "immigration_cecot"
        },
        {
          "text": "We want to send you some of the most despicable human beings to your countries. Will you do that as a favor to us? And the further away the better, so they can't come back across the border.",
          "who": "Marco Rubio, Secretary of State",
          "source": "https://eu.usatoday.com/story/news/politics/2025/04/30/trump-deportation-rubio-el-salvador/83368930007/",
          "date": "2025-04-30",
          "score": 7,
          "cat": "dehumanization",
          "next": "immigration_cecot"
        }
      ]
    },
    {
      "id": "immigration_cecot",
      "prompt": "In March 2025 you flew more than 200 men to CECOT under the Alien Enemies Act -- a wartime law -- while a judge was ordering the planes turned around. Human Rights Watch documents beatings and torture there. Do you care what happens to them?",
      "options": [
        {
          "text": "I said, 'Can you build some more of them, please?' As many as we can get out of our country that were allowed in here by incompetent Joe Biden through open borders.",
          "source": "https://www.rev.com/transcripts/trump-meets-with-the-president-of-el-salvador",
          "date": "2025-04-14",
          "score": 7,
          "cat": "dehumanization",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "I don't know when it was signed, because I didn't sign it. Other people handled it, but Marco Rubio has done a great job and he wanted them out and we go along with that.",
          "source": "https://en.wikipedia.org/wiki/J.G.G._v._Trump",
          "date": "2025-03-21",
          "score": 3,
          "cat": "truth",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "What's happening to families at the border right now is a humanitarian crisis. Every parent who has ever held a child in their arms, every human being with a sense of compassion and decency, should be outraged.",
          "who": "Hillary Clinton, former Secretary of State",
          "source": "https://twitter.com/HillaryClinton/status/1008806858176585730",
          "date": "2018-06-18",
          "score": 0,
          "cat": "dehumanization",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "We will not waterboard; we will not torture... It doesn't work, my friends. It doesn't work. If you inflict enough pain on somebody long enough, they're going to tell you whatever they think you want to hear.",
          "who": "John McCain, Senator, Arizona",
          "source": "https://www.facebook.com/Channel4News/videos/10154266695396939/",
          "date": "2016-11-21",
          "score": 0,
          "cat": "violence",
          "next": "NEXT_TOPIC"
        }
      ]
    },
    {
      "id": "immigration_springfield",
      "prompt": "Springfield's police chief and its Republican mayor said no pets were eaten, and the town got bomb threats for weeks. Since then you have ordered ICE to flood Democratic cities. Was the pet story a pretext for the raids?",
      "options": [
        {
          "text": "ICE must expand efforts to detain and deport Illegal Aliens in America's largest Cities, such as Los Angeles, Chicago, and New York, where Millions upon Millions of Illegal Aliens reside.",
          "source": "https://www.cbsnews.com/news/trump-directs-ice-deportations-democratic-run-cities/",
          "date": "2025-06-15",
          "score": 6,
          "cat": "power",
          "next": "immigration_raids"
        },
        {
          "text": "These, and other such Cities, are the core of the Democrat Power Center, where they use Illegal Aliens to expand their Voter Base, cheat in Elections, and grow the Welfare State.",
          "source": "https://www.cbsnews.com/news/trump-directs-ice-deportations-democratic-run-cities/",
          "date": "2025-06-15",
          "score": 8,
          "cat": "elections",
          "next": "immigration_raids"
        },
        {
          "text": "That's what you say.",
          "source": "https://abcnews.com/US/full-transcript-trumps-exclusive-100-days-broadcast-interview/story?id=121291672",
          "date": "2025-04-29",
          "score": 3,
          "cat": "press",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "If I have to create stories so that the American media actually pays attention to the suffering of the American people, then that's what I'm going to do.",
          "source": "https://www.theguardian.com/us-news/2024/sep/15/jd-vance-lies-haitian-immigrants",
          "date": "2024-09-15",
          "score": 6,
          "cat": "truth",
          "next": "immigration_raids",
          "who": "JD Vance, Vice President"
        }
      ]
    },
    {
      "id": "immigration_raids",
      "prompt": "Your post also said Democrats use these people to 'cheat in elections' -- there is no evidence of that. Meanwhile masked agents without warrants have detained US citizens in Los Angeles, you sent in the Marines, and you have floated the Insurrection Act. Why do federal officers need to hide their faces, and how far does this go?",
      "options": [
        {
          "text": "I am a BIG proponent of ICE wearing masks as they search for, and are forced to deal with, hardened criminals.",
          "source": "https://time.com/article/2026/03/23/trump-ice-airports-masks-tsa-dhs-shutdown/",
          "date": "2026-03-24",
          "score": 5,
          "cat": "power",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "I would greatly appreciate, however, NO MASKS, when helping our Country out of the Democrat caused MESS at the airports, etc.",
          "source": "https://time.com/article/2026/03/23/trump-ice-airports-masks-tsa-dhs-shutdown/",
          "date": "2026-03-24",
          "score": 2,
          "cat": "power",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "If there's an insurrection, I would certainly invoke it. We'll see.",
          "source": "https://www.newsweek.com/donald-trump-gives-update-invoking-insurrection-act-2083570",
          "date": "2025-06-10",
          "score": 7,
          "cat": "violence",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "[She] attacked [ICE] and those surrounding them and attempted to run them over and ram them with her vehicle. An officer of ours acted quickly and defensively shot to protect himself and the people around him.",
          "who": "Kristi Noem, Homeland Security Secretary",
          "source": "https://abcnews.com/Politics/week-transcript-1-11-26-sen-tina-smith/story?id=129088973",
          "date": "2026-01-11",
          "score": 8,
          "cat": "violence",
          "next": "NEXT_TOPIC"
        }
      ]
    },
    {
      "id": "immigration_blood",
      "prompt": "'Poisoning the blood of our country' is a phrase from Mein Kampf. Since then: a day-one order stripping citizenship from babies born on American soil, and a detention camp in the Everglades you crack jokes about. Is this about blood, Mr. President?",
      "options": [
        {
          "text": "We are the only country in the world that does this with the birthright, as you know, and it's just absolutely ridiculous.",
          "source": "https://www.politifact.com/factchecks/2025/jan/21/donald-trump/donald-trumps-false-claim-that-the-us-is-the-only/",
          "date": "2025-01-20",
          "score": 5,
          "cat": "truth",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "We're going to teach them how to run away from an alligator, OK, if they escape from prison. Don't run in a straight line. Run like this.",
          "source": "https://www.washingtontimes.com/news/2025/jul/1/trump-offers-advice-alligator-alcatraz-migrants-dont-run-straight/",
          "date": "2025-07-01",
          "score": 7,
          "cat": "dehumanization",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "I don't know. I'm not a lawyer. I don't know.",
          "source": "https://www.nbcnews.com/politics/trump-administration/read-full-transcript-president-donald-trump-interviewed-meet-press-mod-rcna203514",
          "date": "2025-05-04",
          "score": 3,
          "cat": "power",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "We live in a land made of ideals, not blood and soil.",
          "who": "John McCain, Senator, Arizona",
          "source": "http://www.cnn.com/2017/10/16/politics/john-mccain-joe-biden-liberty-medal/index.html",
          "date": "2017-10-16",
          "score": 0,
          "cat": "dehumanization",
          "next": "NEXT_TOPIC"
        }
      ]
    },
    {
      "id": "immigration_ms13",
      "prompt": "You say you mean MS-13 -- and that is also what you called Kilmar Abrego Garcia, a Maryland father your own government admitted it deported by mistake. The Supreme Court told you to facilitate his return. Why didn't you?",
      "options": [
        {
          "text": "He had MS-13 on his knuckles.",
          "source": "https://abcnews.com/US/full-transcript-trumps-exclusive-100-days-broadcast-interview/story?id=121291672",
          "date": "2025-04-29",
          "score": 5,
          "cat": "truth",
          "next": "immigration_abrego"
        },
        {
          "text": "I could. And if he were the gentleman that you say he is, I would do that.",
          "source": "https://abcnews.com/US/full-transcript-trumps-exclusive-100-days-broadcast-interview/story?id=121291672",
          "date": "2025-04-29",
          "score": 7,
          "cat": "power",
          "next": "immigration_abrego"
        },
        {
          "text": "I'm not the one making this decision. We have lawyers that don't want to do this, Terry.",
          "source": "https://abcnews.com/US/full-transcript-trumps-exclusive-100-days-broadcast-interview/story?id=121291672",
          "date": "2025-04-29",
          "score": 3,
          "cat": "power",
          "next": "immigration_abrego"
        },
        {
          "text": "This individual is a citizen of El Salvador. He was illegally in the United States and was returned to his country.",
          "who": "Marco Rubio, Secretary of State",
          "source": "https://www.politifact.com/article/2025/apr/14/fact-checking-nayib-bukele-and-trump-officials-on/",
          "date": "2025-04-14",
          "score": 6,
          "cat": "power",
          "next": "immigration_abrego"
        },
        {
          "text": "He did not argue... He shouldn't have taken the case. He shouldn't have argued it, if that's what he was going to do... You have to vigorously argue on behalf of your client.",
          "who": "Pam Bondi, Attorney General",
          "source": "https://www.cbsnews.com/news/justice-department-prosecutor-erez-reuveni-put-on-leave-maryland-mistaken-deportation-case-el-salvador/",
          "date": "2025-04-05",
          "score": 6,
          "cat": "power",
          "next": "immigration_abrego"
        }
      ]
    },
    {
      "id": "immigration_abrego",
      "prompt": "The tattoo photo your team showed was digitally labeled, and a unanimous Supreme Court is not a suggestion. Does every person on American soil get due process before you deport them?",
      "options": [
        {
          "text": "We cannot give everyone a trial, because to do so would take, without exaggeration, 200 years. We would need hundreds of thousands of trials for the hundreds of thousands of Illegals we are sending out of the Country.",
          "source": "https://www.rollingstone.com/politics/politics-news/trump-supreme-court-immigrants-trial-due-process-1235322264/",
          "date": "2025-04-21",
          "score": 9,
          "cat": "power",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "I'd like to include them in the group of people to get them out of the country, but you'll have to be looking at the laws on that, Steve. Okay?... But no, if it's a homegrown criminal, I have no problem.",
          "source": "https://www.rev.com/transcripts/trump-meets-with-the-president-of-el-salvador",
          "date": "2025-04-14",
          "score": 8,
          "cat": "power",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "I'll have to ask the lawyers about that.",
          "source": "https://abcnews.com/US/full-transcript-trumps-exclusive-100-days-broadcast-interview/story?id=121291672",
          "date": "2025-04-29",
          "score": 2,
          "cat": "power",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "Habeas corpus is a constitutional right that the president has to be able to remove people from this country.",
          "who": "Kristi Noem, Homeland Security Secretary",
          "source": "https://www.npr.org/2025/05/20/nx-s1-5405144/habeas-corpus-noem-dhs-senate",
          "date": "2025-05-20",
          "score": 7,
          "cat": "power",
          "next": "NEXT_TOPIC"
        }
      ]
    }
  ]
});
