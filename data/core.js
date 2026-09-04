// Openings, finals, the meltdown interrupt, walk-out lines, and endings. Same option schema as topics.
// Endings: highest matching `min` wins; percent = points / (questions * 10).
const CORE = {
    "openings": [
        {
            "id": "open_trust",
            "prompt": "Mr. President, thank you for joining us live. Polls show most Americans no longer know what to believe -- about elections, the press, the government. Straight question: can the American people trust what you tell them?",
            "options": [
                {
                    "text": "I think I'm the most honest human being perhaps that God ever created.",
                    "source": "https://www.thelist.com/829709/donald-trump-just-described-himself-in-a-very-unexpected-way/",
                    "date": "2022-04-10",
                    "score": 4,
                    "cat": "truth",
                    "next": "NEXT_TOPIC"
                },
                {
                    "text": "Nobody knows the system better than me, which is why I alone can fix it.",
                    "source": "https://www.vox.com/2016/7/21/12253426/donald-trump-acceptance-speech-transcript-republican-nomination-transcript",
                    "date": "2016-07-21",
                    "score": 6,
                    "cat": "power",
                    "next": "NEXT_TOPIC"
                },
                {
                    "text": "I think I am actually humble. I think I'm much more humble than you would understand.",
                    "source": "https://www.youtube.com/watch?v=1R42mFx3_ss",
                    "date": "2016-07-17",
                    "score": 1,
                    "cat": "truth",
                    "next": "NEXT_TOPIC"
                },
                {
                    "text": "Truth isn't truth.",
                    "source": "https://www.cnn.com/videos/cnnmoney/2018/08/19/giuliani-truth-isnt-truth-nbc-rs-vpx.cnn",
                    "date": "2018-08-19",
                    "score": 8,
                    "cat": "truth",
                    "next": "NEXT_TOPIC",
                    "who": "Rudy Giuliani, Trump legal adviser"
                }
            ]
        },
        {
            "id": "open_term",
            "prompt": "Mr. President, welcome. Your second term has been busy: tariffs, troops in American cities, a Tesla showcase on the South Lawn. For the folks at home, in a sentence: how is it going, and how is it different from the first time?",
            "options": [
                {
                    "text": "The first time, I had two things to do -- run the country and survive. And the second time, I run the country and the world.",
                    "source": "https://www.theatlantic.com/magazine/archive/2025/06/trump-second-term-comeback/682573/",
                    "date": "2025-04-28",
                    "score": 7,
                    "cat": "power",
                    "next": "NEXT_TOPIC"
                },
                {
                    "text": "We have a PERFECT Administration, THE TALK OF THE WORLD.",
                    "source": "https://www.cnn.com/2025/07/12/politics/bondi-epstein-investigation-trump",
                    "date": "2025-07-12",
                    "score": 3,
                    "cat": "truth",
                    "next": "NEXT_TOPIC"
                },
                {
                    "text": "A lot of people are saying, 'Maybe we would like a dictator.' I don't like a dictator; I'm not a dictator. I'm a man with great common sense, and I'm a smart person.",
                    "source": "https://www.independent.co.uk/news/world/americas/us-politics/trump-dictator-crime-cities-b2813664.html",
                    "date": "2025-08-25",
                    "score": 5,
                    "cat": "power",
                    "next": "NEXT_TOPIC"
                },
                {
                    "text": "They all hated me in my first term, and now they're kissing my ass.",
                    "source": "https://apnews.com/article/trump-alabama-commencement-address-protests-6bcea5b4058c819c26a8135b41d73dd1",
                    "date": "2025-05-01",
                    "score": 6,
                    "cat": "power",
                    "next": "NEXT_TOPIC"
                }
            ]
        },
        {
            "id": "open_nonvoters",
            "prompt": "Mr. President, good evening. Roughly half the country voted against you, and a lot of them are watching right now. Speak to them directly: what is your message to the Americans who did not vote for you?",
            "options": [
                {
                    "text": "I ran as a proud Democrat. I will now be an American president. I will work as hard for those who didn't vote for me -- as those who did. Let this grim era of demonization in America begin to end -- here and now.",
                    "source": "https://www.npr.org/sections/live-updates-2020-election-results/2020/11/07/932104693/biden-to-make-victory-speech-as-president-elect-at-8-p-m-et",
                    "date": "2020-11-07",
                    "score": 0,
                    "cat": "power",
                    "next": "NEXT_TOPIC",
                    "who": "Joe Biden, President-elect"
                },
                {
                    "text": "To those who voted for someone else in either party, I will work hard to earn your support and I will work very hard to earn that support.",
                    "source": "http://time.com/4360872/donald-trump-new-jersey-victory-speech-transcript/",
                    "date": "2016-06-07",
                    "score": 1,
                    "cat": "power",
                    "next": "NEXT_TOPIC"
                },
                {
                    "text": "You've been hearing me say it's a rigged system, but now I don't say it anymore because I won. It's true. Now I don't care.",
                    "source": "http://www.washingtonexaminer.com/trump-gop-rigged-but-i-dont-care-because-i-won/article/2590545",
                    "date": "2016-05-05",
                    "score": 5,
                    "cat": "elections",
                    "next": "NEXT_TOPIC"
                },
                {
                    "text": "Happy Easter to ALL, including the Radical Left CRAZIES who rigged our Presidential Election, and want to destroy our Country!",
                    "source": "https://www.theguardian.com/us-news/2021/apr/04/trump-wishes-happy-easter-to-radical-left-crazies",
                    "date": "2021-04-04",
                    "score": 7,
                    "cat": "elections",
                    "next": "NEXT_TOPIC"
                }
            ]
        },
        {
            "id": "open_democracy",
            "prompt": "Mr. President, thank you for being here. Your critics -- including people who once served in your own cabinet -- call you a threat to democracy. Tonight, on live television, how do you answer them?",
            "options": [
                {
                    "text": "Government power has been the unavoidable constant in life. Government decrees and the people obey, but not here. We have no king or queen, we have no dictator, we the people constrain government.",
                    "source": "https://web.archive.org/web/2016/http://www.rollcall.com/news/politics/transcript-ted-cruz-convention-speech",
                    "date": "2016-07-20",
                    "score": 1,
                    "cat": "power",
                    "next": "NEXT_TOPIC",
                    "who": "Ted Cruz, Senator"
                },
                {
                    "text": "This election is a total sham and a travesty. We are not a democracy!",
                    "source": "https://www.washingtonpost.com/news/fact-checker/wp/2016/11/15/trumps-flip-flop-on-the-electoral-college-from-disaster-to-genius/",
                    "date": "2012-11-06",
                    "score": 7,
                    "cat": "elections",
                    "next": "NEXT_TOPIC"
                },
                {
                    "text": "The president is the sole head of the executive branch. So there's 15 communist crazy judges on the court that, each of them working together, can block and freeze each and every executive action?",
                    "source": "https://thehill.com/homenews/administration/5325765-stephen-miller-immigration-cnn/",
                    "date": "2025-05-30",
                    "score": 8,
                    "cat": "power",
                    "next": "NEXT_TOPIC",
                    "who": "Stephen Miller, Deputy Chief of Staff"
                },
                {
                    "text": "These monsters, all controlled and coordinated by the DOJ and Radical Left Lunatics, are Criminalizing Political Speech, a total SHUTDOWN OF DEMOCRACY!",
                    "source": "https://truthsocial.com/@realDonaldTrump/posts/110895990420845351",
                    "date": "2023-08-15",
                    "score": 7,
                    "cat": "truth",
                    "next": "NEXT_TOPIC"
                }
            ]
        },
        {
            "id": "open_history",
            "prompt": "Mr. President, welcome. Every president ends up thinking about the history books, so let's start there. When the historians write this chapter, how do you want your presidency to be remembered?",
            "options": [
                {
                    "text": "People can judge me for what I've done. And I think when somebody's out in the public eye, that's what they do. So I'm fully comfortable with who I am, what I stand for, and what I've always stood for.",
                    "source": "http://www.mediaite.com/tv/hillary-clinton-pushes-back-at-pbs-gwen-ifill-im-not-mitt-romney/",
                    "date": "2014-06-25",
                    "score": 1,
                    "cat": "truth",
                    "next": "NEXT_TOPIC",
                    "who": "Hillary Clinton, former Secretary of State"
                },
                {
                    "text": "THE MAN WHO SAVED AMERICA",
                    "source": "https://www.cnbctv18.com/photos/world/trump-floods-social-media-with-ai-images-targeting-rivals-and-promoting-trump-2028-19954469.htm",
                    "date": "2026-07-27",
                    "score": 5,
                    "cat": "strongman",
                    "next": "NEXT_TOPIC"
                },
                {
                    "text": "Wonderful to see Colin Powell, who made big mistakes on Iraq and famously, so-called weapons of mass destruction, be treated in death so beautifully by the Fake News Media. Hope that happens to me someday.",
                    "source": "https://www.cnn.com/2021/10/19/politics/donald-trump-colin-powell-death/index.html",
                    "date": "2021-10-19",
                    "score": 7,
                    "cat": "press",
                    "next": "NEXT_TOPIC"
                },
                {
                    "text": "Well, as somebody that's contributed something to the United States and to the City of New York, and to the various other places that I'm going, and somebody that's done a little bit better than other people at what he does.",
                    "source": "https://www.washingtonpost.com/wp-stat/graphics/politics/trump-archive/docs/rona-barrett-1980-interview-of-donald-trump.pdf",
                    "date": "1980",
                    "score": 2,
                    "cat": "truth",
                    "next": "NEXT_TOPIC"
                }
            ]
        }
    ],
    "finals": [
        {
            "id": "final_transfer",
            "prompt": "Last question, and it's the one that matters most. If you lose the next election -- or when your term ends -- will you accept the result and hand over power peacefully?",
            "options": [
                {
                    "text": "I have to see. No, I'm not going to just say yes. I'm not going to say no.",
                    "source": "https://www.forbes.com/sites/tommybeer/2020/09/24/heres-everything-trump-has-said-about-refusing-to-give-up-power/",
                    "date": "2020-07-19",
                    "score": 8,
                    "cat": "elections",
                    "next": "RESULTS"
                },
                {
                    "text": "In four years, you don't have to vote again, we'll have it fixed so good you're not going to have to vote.",
                    "source": "https://www.reuters.com/world/us/trump-tells-christians-they-wont-have-vote-after-this-election-2024-07-27/",
                    "date": "2024-07-27",
                    "score": 9,
                    "cat": "elections",
                    "next": "RESULTS"
                },
                {
                    "text": "No, no, no, other than day one. We're closing the border, and we're drilling, drilling, drilling. After that, I'm not a dictator.",
                    "source": "https://www.rollingstone.com/politics/politics-news/donald-trump-hannity-iowa-town-hall-1234917385/",
                    "date": "2023-12-05",
                    "score": 7,
                    "cat": "power",
                    "next": "RESULTS"
                },
                {
                    "text": "I don't like a dictator; I'm not a dictator. I'm a man with great common sense, and I'm a smart person.",
                    "source": "https://www.independent.co.uk/news/world/americas/us-politics/trump-dictator-crime-cities-b2813664.html",
                    "date": "2025-08-25",
                    "score": 3,
                    "cat": "power",
                    "next": "RESULTS"
                }
            ]
        },
        {
            "id": "final_constitution",
            "prompt": "Final question. You swore an oath to preserve, protect and defend the Constitution -- including the 22nd Amendment's two-term limit. Do you have to follow it, even when it gets in your way?",
            "options": [
                {
                    "text": "I don't know. I have to respond by saying, again, I have brilliant lawyers that work for me, and they are going to obviously follow what the Supreme Court said.",
                    "source": "https://www.npr.org/2025/05/04/g-s1-64239/does-a-president-need-to-uphold-the-constitution-trump-says-i-dont-know",
                    "date": "2025-05-04",
                    "score": 8,
                    "cat": "power",
                    "next": "RESULTS"
                },
                {
                    "text": "A Massive Fraud of this type and magnitude allows for the termination of all rules, regulations, and articles, even those found in the Constitution.",
                    "source": "https://edition.cnn.com/2022/12/03/politics/trump-constitution-truth-social/index.html",
                    "date": "2022-12-03",
                    "score": 10,
                    "cat": "power",
                    "next": "RESULTS"
                },
                {
                    "text": "A lot of people want me to do it. ... I'm not joking. But I'm not -- it is far too early to think about it.",
                    "source": "https://www.nbcnews.com/politics/donald-trump/trump-third-term-white-house-methods-rcna198752",
                    "date": "2025-03-30",
                    "score": 7,
                    "cat": "power",
                    "next": "RESULTS"
                },
                {
                    "text": "I'll stand up for Article Two, Article 12, you name it of the Constitution.",
                    "source": "https://talkingpointsmemo.com/dc/trump-changes-few-minds-with-meeting-on-the-hill",
                    "date": "2016-07-07",
                    "score": 2,
                    "cat": "truth",
                    "next": "RESULTS"
                }
            ]
        },
        {
            "id": "final_regret",
            "prompt": "Last question. You have spent this hour defending every decision you've made. So, simply: is there anything -- one thing -- you regret?",
            "options": [
                {
                    "text": "I apologize for my reference to Anne Frank, especially to families that suffered the Holocaust horrors. ... To the extent my remarks caused hurt, I am truly and deeply sorry.",
                    "source": "https://www.reuters.com/world/us/robert-kennedy-jr-apologizes-holocaust-remarks-anti-vaxxer-rally-2022-01-25/",
                    "date": "2022-01-25",
                    "score": 1,
                    "cat": "truth",
                    "next": "RESULTS",
                    "who": "Robert F. Kennedy Jr., Secretary of Health and Human Services"
                },
                {
                    "text": "I can never apologize for the truth. I don't mind apologizing for things but I can't apologize for the truth.",
                    "source": "https://finance.yahoo.com/news/trump-word-rape-sudden-everyone-172614480.html",
                    "date": "2015-07-02",
                    "score": 4,
                    "cat": "truth",
                    "next": "RESULTS"
                },
                {
                    "text": "I had nothing to do with that other than they asked me to make a speech. I showed up for a speech. ... And again, it wasn't done by me. It was done by others.",
                    "source": "https://abcnews.go.com/Politics/harris-trump-presidential-debate-transcript/story?id=113560542",
                    "date": "2024-09-10",
                    "score": 7,
                    "cat": "violence",
                    "next": "RESULTS"
                },
                {
                    "text": "I never said I'm a perfect person. Nor pretended to be someone that I'm not. I've said and done things I regret... I said it. I was wrong and I apologize.",
                    "source": "https://www.cbsnews.com/news/donald-trump-defends-lewd-2005-conversation-about-women-as-locker-room-banter/",
                    "date": "2016-10-08",
                    "score": 2,
                    "cat": "truth",
                    "next": "RESULTS"
                }
            ]
        },
        {
            "id": "final_resign",
            "prompt": "Final question. Presidents have resigned before, and others have been pushed. What -- if anything -- would make you leave this office before your term is up?",
            "options": [
                {
                    "text": "I have never been a quitter. To leave office before my term is completed is abhorrent to every instinct in my body. But as President, I must put the interest of America first.",
                    "source": "https://www.youtube.com/watch?v=IwQMpSxRPvc",
                    "date": "1974-08-08",
                    "score": 2,
                    "cat": "power",
                    "next": "RESULTS",
                    "who": "Richard Nixon, President"
                },
                {
                    "text": "They say I have the most loyal people -- did you ever see that? Where I could stand in the middle of 5th Avenue and shoot somebody, and I wouldn't lose any voters. It's like incredible.",
                    "source": "http://time.com/4191598/donald-trump-says-he-could-shoot-somebody-and-not-lose-voters/",
                    "date": "2016-01-23",
                    "score": 7,
                    "cat": "strongman",
                    "next": "RESULTS"
                },
                {
                    "text": "This is not something I'm looking to do. I'm looking to have four great years and turn it over to somebody... I'll be a two-term president.",
                    "source": "https://www.nbcnews.com/politics/trump-administration/read-full-transcript-president-donald-trump-interviewed-meet-press-mod-rcna203514",
                    "date": "2025-05-04",
                    "score": 2,
                    "cat": "elections",
                    "next": "RESULTS"
                },
                {
                    "text": "You got to win the midterms because if we don't win the midterms, it's just going to be -- I mean, they'll find a reason to impeach me. I'll get impeached.",
                    "source": "https://eu.delawareonline.com/story/news/2026/01/15/trump-impeachment-update-2026-is-trump-getting-impeached-midterm-elections-cancelled-predictions/88195759007/",
                    "date": "2026-01-15",
                    "score": 5,
                    "cat": "power",
                    "next": "RESULTS"
                }
            ]
        },
        {
            "id": "final_election",
            "prompt": "Last question, and I'd like a yes or no. Will there be a free and fair presidential election in 2028 -- and will you respect the result whether or not you like it?",
            "options": [
                {
                    "text": "The peaceful transfer of authority is rare in history, yet common in our country. With a simple oath, we affirm old traditions and make new beginnings.",
                    "source": "http://www.bartleby.com/124/pres66.html",
                    "date": "2001-01-20",
                    "score": 0,
                    "cat": "elections",
                    "next": "RESULTS",
                    "who": "George W. Bush, President"
                },
                {
                    "text": "We have to have good elections. Our elections are bad. And a lot of these illegal immigrants coming in, they're trying to get them to vote.",
                    "source": "https://abcnews.go.com/Politics/harris-trump-presidential-debate-transcript/story?id=113560542",
                    "date": "2024-09-10",
                    "score": 5,
                    "cat": "elections",
                    "next": "RESULTS"
                },
                {
                    "text": "This election was rigged. And the Supreme Court and other courts didn't want to do anything about it.",
                    "source": "https://edition.cnn.com/2021/03/01/politics/donald-trump-cpac-speech/index.html",
                    "date": "2021-02-28",
                    "score": 7,
                    "cat": "elections",
                    "next": "RESULTS"
                },
                {
                    "text": "I would like to promise and pledge to all of my voters and supporters and to all of the people of the United States that I will totally accept the results of this great and historic presidential election, if I win.",
                    "source": "https://edition.cnn.com/2016/10/20/politics/donald-trump-i-will-totally-accept-election-results-if-i-win/index.html",
                    "date": "2016-10-20",
                    "score": 8,
                    "cat": "elections",
                    "next": "RESULTS"
                }
            ]
        }
    ],
    "meltdown": {
        "id": "meltdown_interrupt",
        "prompt": "Mr. President -- sir -- I'm going to ask you to lower your voice. This is a live broadcast and there are children watching. Can we continue?",
        "options": [
            {
                "text": "Quiet. Quiet, piggy.",
                "source": "https://www.thedailybeast.com/testy-trump-lashes-out-at-female-reporter-asking-about-epstein-quiet-piggy/",
                "date": "2025-11-14",
                "score": 7,
                "cat": "press",
                "next": "NEXT_TOPIC"
            },
            {
                "text": "CNN should be ashamed of itself having you working for them. You are a rude, terrible person.",
                "source": "https://www.nbcnews.com/news/all/trump-unloads-cnn-journalist-jim-acosta-you-are-rude-terrible-n933571",
                "date": "2018-11-07",
                "score": 7,
                "cat": "press",
                "next": "NEXT_TOPIC"
            },
            {
                "text": "Don't ever say what you said. That's a nasty question.",
                "source": "https://www.cbsnews.com/news/trump-taco-trade-trump-always-chickens-out-what-it-means/",
                "date": "2025-05-28",
                "score": 5,
                "cat": "press",
                "next": "NEXT_TOPIC"
            },
            {
                "text": "I think I am actually humble. I think I'm much more humble than you would understand.",
                "source": "https://www.youtube.com/watch?v=1R42mFx3_ss",
                "date": "2016-07-17",
                "score": 2,
                "cat": "truth",
                "next": "NEXT_TOPIC"
            }
        ]
    },
    "walkouts": [
        {
            "text": "Quiet. Quiet, piggy.",
            "source": "https://www.thedailybeast.com/testy-trump-lashes-out-at-female-reporter-asking-about-epstein-quiet-piggy/",
            "date": "2025-11-14"
        },
        {
            "text": "CNN should be ashamed of itself having you working for them. You are a rude, terrible person.",
            "source": "https://www.nbcnews.com/news/all/trump-unloads-cnn-journalist-jim-acosta-you-are-rude-terrible-n933571",
            "date": "2018-11-07"
        },
        {
            "text": "Don't ever say what you said. That's a nasty question.",
            "source": "https://www.cbsnews.com/news/trump-taco-trade-trump-always-chickens-out-what-it-means/",
            "date": "2025-05-28"
        },
        {
            "text": "Your organization is terrible... Don't be rude. No, I'm not going to give you a question. You are fake news.",
            "source": "https://thehill.com/homenews/administration/313777-trump-berates-cnn-reporter-for-fake-news/",
            "date": "2017-01-11"
        }
    ],
    "endings": [
        {
            "min": 70,
            "signal": "📡",
            "title": "Authoritarian Collapse",
            "text": "The feed cuts to black. In the control room, nobody speaks. You attacked the press, denied reality, threatened opponents and treated the Constitution as a suggestion -- on live television, in your own words. Democracies rarely die in a night. They erode one 'just this once' at a time, and tonight you set a personal record."
        },
        {
            "min": 50,
            "signal": "⚠️",
            "title": "Strongman in Training",
            "text": "The anchor thanks you. Her face does not. Analysts are already using phrases like 'democratic backsliding' and 'authoritarian playbook.' You never quite said the quiet part out loud, but you said most of it, and you said it with sources."
        },
        {
            "min": 30,
            "signal": "📊",
            "title": "Democratic Backslider",
            "text": "A mixed night. You defended some norms and shredded others, sometimes in the same answer. Tomorrow's front pages will disagree about what happened, and both sides will have quotes to prove it. The drift is real, and it is yours to reverse."
        },
        {
            "min": 15,
            "signal": "🗳️",
            "title": "Norm Bender",
            "text": "You made it through. Nothing here ends a republic, but a few of these answers would have ended a career a generation ago. Mostly you deflected, boasted and changed the subject -- which, given the alternatives on the table, counts as restraint."
        },
        {
            "min": 0,
            "signal": "🗽",
            "title": "Constitutional Custodian",
            "text": "Remarkable. Handed a menu of the most inflammatory things ever said from behind the Resolute Desk, you consistently picked the humble brag, the non-answer and the malfunctioning car review. The press pool is stunned. Democracy, for one night, is boring again."
        }
    ]
};
