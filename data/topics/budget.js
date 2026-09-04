registerTopic({
  "id": "budget",
  "title": "The Big Beautiful Bill",
  "entry": "budget_intro",
  "nodes": [
    {
      "id": "budget_intro",
      "prompt": "Mr. President, on July 4th you signed the One Big Beautiful Bill Act. The Congressional Budget Office says it adds $2.4 trillion to the debt and leaves about ten million more Americans uninsured. How do you sell that to the country?",
      "options": [
        {
          "text": "It's the most popular bill ever signed in the history of our country, whether you're military or anybody else, this is the most single most popular bill ever signed.",
          "source": "https://edition.cnn.com/2025/07/04/politics/fact-check-trump-bill-unpopular",
          "date": "2025-07-04",
          "score": 4,
          "cat": "truth",
          "next": "budget_popular"
        },
        {
          "text": "This bill rescues over 2 billion family farms from the so-called estate tax or the death tax.",
          "source": "https://www.irishstar.com/news/us-news/trump-loses-it-claims-2-35498032",
          "date": "2025-07-03",
          "score": 4,
          "cat": "truth",
          "next": "budget_farms"
        },
        {
          "text": "Well, we are all going to die. For heaven's sakes, folks.",
          "source": "https://thehill.com/homenews/senate/5325678-joni-ernst-responds-medicaid-cuts-well-were-all-going-to-die/",
          "date": "2025-05-30",
          "score": 7,
          "cat": "dehumanization",
          "next": "budget_die",
          "who": "Joni Ernst, Senator (R-IA)"
        },
        {
          "text": "We made promises, and it's really promises made, promises kept, and we've kept them. There's a triumph of democracy on the birthday of democracy, and I have to say that the people are happy.",
          "source": "https://www.cnn.com/2025/07/04/politics/donald-trump-policy-bill-celebration",
          "date": "2025-07-04",
          "score": 2,
          "cat": "power",
          "next": "budget_promises"
        }
      ]
    },
    {
      "id": "budget_popular",
      "prompt": "'The most popular bill ever signed.' Every major poll had it underwater, and Hakeem Jeffries held the House floor for a record eight hours and forty-four minutes reading letters from people about to lose Medicaid. What's your answer to the polls -- and to him?",
      "options": [
        {
          "text": "I have poll numbers where I'm 71 percent. I have the best poll numbers.",
          "source": "https://www.mediaite.com/media/tv/trump-loses-it-on-cnbc-when-hosts-fact-check-insane-approval-rating-whopper-nbc-is-the-worst/",
          "date": "2025-08-05",
          "score": 5,
          "cat": "truth",
          "next": "budget_medicaid"
        },
        {
          "text": "This lunatic, Hakeem 'Low IQ' Jeffries, should be charged with INCITING VIOLENCE! The Radical Left Democrats actually want to Destroy our Country.",
          "source": "https://www.aol.com/articles/jeffries-trump-call-inciting-violence-201156891.html",
          "date": "2026-05-07",
          "score": 8,
          "cat": "violence",
          "next": "budget_medicaid"
        },
        {
          "text": "You can't win elections unless you have the support of the working class of this country.",
          "source": "https://www.theguardian.com/us-news/commentisfree/2022/oct/10/democrats-midterms-victory-economy-bernie-sanders",
          "date": "2022-10-10",
          "score": 0,
          "cat": "truth",
          "next": "budget_medicaid",
          "who": "Bernie Sanders, Senator (I-VT)"
        },
        {
          "text": "I don't know that they are saying that. I think polls are fake. We have the greatest economy we've ever had.",
          "source": "https://www.mediaite.com/media/tv/foxs-laura-ingraham-confronts-trump-on-50-year-mortgage-plan-is-that-really-a-good-idea/",
          "date": "2025-11-10",
          "score": 5,
          "cat": "truth",
          "next": "budget_medicaid"
        }
      ]
    },
    {
      "id": "budget_farms",
      "prompt": "'Two billion family farms.' There are fewer than two million farms in the entire country, and independent analyses call this the largest upward transfer of wealth in American history. Is this a bill for farmers, or for billionaires?",
      "options": [
        {
          "text": "TO THE MANY INVESTORS COMING INTO THE UNITED STATES AND INVESTING MASSIVE AMOUNTS OF MONEY, MY POLICIES WILL NEVER CHANGE. THIS IS A GREAT TIME TO GET RICH, RICHER THAN EVER BEFORE!!!",
          "source": "https://www.theguardian.com/us-news/2025/apr/04/trump-tariffs-truth-social",
          "date": "2025-04-04",
          "score": 7,
          "cat": "cronyism",
          "next": "budget_debt"
        },
        {
          "text": "Billionaires need the working class. The working class does not need billionaires.",
          "source": "https://twitter.com/AOC/status/1292155096923504640",
          "date": "2020-08-08",
          "score": 2,
          "cat": "truth",
          "next": "budget_medicaid",
          "who": "Alexandria Ocasio-Cortez, Representative (D-NY)"
        },
        {
          "text": "We have more income and wealth inequality than at any time in the modern history of this country, with three people owning more wealth than the bottom half of our nation. Is there one Republican prepared to raise taxes on billionaires...?",
          "source": "https://www.theguardian.com/us-news/commentisfree/2022/oct/10/democrats-midterms-victory-economy-bernie-sanders",
          "date": "2022-10-10",
          "score": 1,
          "cat": "truth",
          "next": "NEXT_TOPIC",
          "who": "Bernie Sanders, Senator (I-VT)"
        },
        {
          "text": "If you can't get rich dealing with politicians, there's something wrong with you.",
          "source": "http://www.motherjones.com/mojo/2015/07/donald-trump-campaign-speech-lindsey-graham",
          "date": "2015-07",
          "score": 8,
          "cat": "cronyism",
          "next": "budget_debt"
        }
      ]
    },
    {
      "id": "budget_die",
      "prompt": "'We are all going to die.' That line got groans at your Iowa town hall, and Chuck Schumer renamed the bill after it. Researchers project thousands of additional deaths a year from the Medicaid cuts. Do you stand by it -- and what do you say to the people about to lose coverage?",
      "options": [
        {
          "text": "I made an incorrect assumption that everyone in the auditorium understood that yes, we are all going to perish from this Earth.",
          "source": "https://www.rollingstone.com/politics/politics-news/joni-ernst-medicaid-die-non-apology-trump-cuts-1235352090/",
          "date": "2025-05-31",
          "score": 5,
          "cat": "truth",
          "next": "budget_medicaid",
          "who": "Joni Ernst, Senator (R-IA)"
        },
        {
          "text": "For those that would like to see eternal and everlasting life, I encourage you to embrace my lord and savior, Jesus Christ.",
          "source": "https://www.rollingstone.com/politics/politics-news/joni-ernst-medicaid-die-non-apology-trump-cuts-1235352090/",
          "date": "2025-05-31",
          "score": 6,
          "cat": "dehumanization",
          "next": "NEXT_TOPIC",
          "who": "Joni Ernst, Senator (R-IA)"
        },
        {
          "text": "...the easiest way to find the fraudster is to stop payments and listen.",
          "source": "https://thehill.com/homenews/administration/5208187-commerce-secretary-social-security-fraud/",
          "date": "2025-03",
          "score": 7,
          "cat": "dehumanization",
          "next": "budget_snap",
          "who": "Howard Lutnick, Commerce Secretary"
        },
        {
          "text": "We can't put the security of families at risk by taking away their health insurance, or unraveling the new rules on Wall Street...",
          "source": "https://obamawhitehouse.archives.gov/the-press-office/2015/01/20/remarks-president-state-union-address-january-20-2015",
          "date": "2015-01-20",
          "score": 0,
          "cat": "power",
          "next": "budget_medicaid",
          "who": "Barack Obama, 44th President"
        }
      ]
    },
    {
      "id": "budget_promises",
      "prompt": "'Promises kept.' You promised not to touch Medicaid; the bill cuts roughly a trillion dollars from it. Senator Thom Tillis said it would betray that promise, voted no, and announced his retirement the next day. Which promise did you keep -- and what was this bill really for?",
      "options": [
        {
          "text": "Again, I want the money to go directly to the people so you can buy your own health care. You'll get much better health care at a much lower price. The only losers will be insurance companies.",
          "source": "https://www.nytimes.com/2025/12/17/us/politics/trump-speech-transcript-economy.html",
          "date": "2025-12-17",
          "score": 3,
          "cat": "truth",
          "next": "budget_medicaid"
        },
        {
          "text": "We want the bureaucrats to be traumatically affected. When they wake up in the morning, we want them to not want to go to work because they are increasingly viewed as the villains... We want to put them in trauma.",
          "source": "https://www.propublica.org/article/video-donald-trump-russ-vought-center-renewing-america-maga",
          "date": "2024-10",
          "score": 8,
          "cat": "dehumanization",
          "next": "budget_shutdown",
          "who": "Russell Vought, OMB Director"
        },
        {
          "text": "It's not possible for us to take care of day care, Medicaid, Medicare, all these individual things. They can do it on a state basis. You can't do it on a federal. We have to take care of one thing: military protection.",
          "source": "https://www.nbcnews.com/politics/donald-trump/trump-says-not-possible-us-pay-medicaid-medicare-daycare-re-fighting-w-rcna266381",
          "date": "2026-04-02",
          "score": 7,
          "cat": "power",
          "next": "budget_shutdown"
        },
        {
          "text": "This bill does not add to the deficit. In fact, according to the Council of Economic Advisors, this bill will save $1.6 trillion... There's $1.6 trillion worth of savings in this bill.",
          "source": "https://www.politifact.com/factchecks/2025/may/21/karoline-leavitt/donald-trump-reconciliation-bill-deficit/",
          "date": "2025-05-21",
          "score": 2,
          "cat": "truth",
          "next": "budget_medicaid",
          "who": "Karoline Leavitt, White House Press Secretary"
        }
      ]
    },
    {
      "id": "budget_medicaid",
      "prompt": "Let's stay on the safety net. The bill's work requirements and paperwork checks are projected to push about ten million people off Medicaid and cut $186 billion from food stamps -- and most of the people affected already work. What do you say to them?",
      "options": [
        {
          "text": "This wasn't meant for that. It was meant for people that had real problems... It wasn't for people who could do whatever they want, the people that say, Well, I don't think I'll work. I'll just, you know, collect this money.",
          "source": "https://www.yahoo.com/news/articles/trump-goes-rant-staying-very-134934000.html",
          "date": "2025-11-07",
          "score": 7,
          "cat": "dehumanization",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "The current unaffordable care act was created to make insurance companies rich... you see that now in the steep increase in premiums being demanded by the Democrats. And they are demanding those increases and it's their fault.",
          "source": "https://www.nytimes.com/2025/12/17/us/politics/trump-speech-transcript-economy.html",
          "date": "2025-12-17",
          "score": 5,
          "cat": "truth",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "One of the things they're going to be talking about pretty soon are the tremendous drop in drug prices. You know, we've cut drug prices by 1,200, 1,300, 1,400, 1,500 percent. I don't mean 50 percent. I mean 14-, 1,500 percent.",
          "source": "https://www.newsweek.com/donald-trump-doubles-down-impossible-drug-price-cuts-2108365",
          "date": "2025-08-04",
          "score": 5,
          "cat": "truth",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "...we move the workforce towards automation and 100 percent American participation. With 34 million people, able-bodied adults on Medicaid, we should be able to do that fairly quickly.",
          "source": "https://www.politico.com/live-updates/2025/07/08/congress/rollins-says-able-bodied-medicaid-recipients-should-replace-immigrant-farm-workforce-00442065",
          "date": "2025-07-08",
          "score": 6,
          "cat": "power",
          "next": "NEXT_TOPIC",
          "who": "Brooke Rollins, Agriculture Secretary"
        },
        {
          "text": "If Congress cuts funding for Medicaid benefits, Missouri workers and their children will lose their health care. And hospitals will close. It's that simple.",
          "source": "https://www.nytimes.com/2025/05/12/opinion/josh-hawley-dont-cut-medicaid.html",
          "date": "2025-05-12",
          "score": 0,
          "cat": "truth",
          "next": "NEXT_TOPIC",
          "who": "Josh Hawley, Senator (R-MO)"
        }
      ]
    },
    {
      "id": "budget_debt",
      "prompt": "The debt. The bill raises the ceiling by five trillion dollars -- the biggest increase ever -- and Elon Musk, your own DOGE chief, called it a disgusting abomination and walked out on you over it. Are you the fiscal conservative you campaigned as -- and where does the cutting actually land?",
      "options": [
        {
          "text": "...We are bringing back jobs and businesses like never before. Already, more than FIVE TRILLION DOLLARS OF INVESTMENT, and rising fast! THIS IS AN ECONOMIC REVOLUTION, AND WE WILL WIN. HANG TOUGH, it won't be easy...",
          "source": "https://truthsocial.com/@realDonaldTrump/posts/114285375813275308",
          "date": "2025-04-05",
          "score": 4,
          "cat": "truth",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "...if you look at our national debt, which is insanely high, the interest payments exceed the [Pentagon] budget and they keep rising... If AI and robots don't solve our national debt, we're toast.",
          "source": "https://thehill.com/policy/technology/5495867-elon-musk-federal-government-broken/",
          "date": "2025-09-10",
          "score": 3,
          "cat": "truth",
          "next": "NEXT_TOPIC",
          "who": "Elon Musk (DOGE)"
        },
        {
          "text": "We'd be laying off a lot of people that are going to be very affected, they're going to be Democrats.",
          "source": "https://www.washingtonpost.com/entertainment/2025/10/01/national-council-on-the-humanities-fired-white-house/",
          "date": "2025-09-30",
          "score": 8,
          "cat": "power",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "The latest Senate draft bill will destroy millions of jobs in America and cause immense strategic harm to our country. Utterly insane and destructive.",
          "source": "https://time.com/7298552/trump-big-beautiful-bill-senate-advance-musk-criticism-opposition/",
          "date": "2025-06-29",
          "score": 3,
          "cat": "truth",
          "next": "NEXT_TOPIC",
          "who": "Elon Musk (DOGE)"
        },
        {
          "text": "This immense level of overspending will drive America into debt slavery!",
          "source": "https://www.foxnews.com/politics/elon-musk-warns-excessive-spending-plunge-us-into-debt-slavery",
          "date": "2025-06-04",
          "score": 3,
          "cat": "truth",
          "next": "NEXT_TOPIC",
          "who": "Elon Musk (DOGE)"
        }
      ]
    },
    {
      "id": "budget_shutdown",
      "prompt": "Then came October. The government shut down for 43 days -- the longest ever -- over the ACA subsidies Democrats wanted extended. You called it an 'unprecedented opportunity,' and Speaker Johnson kept the House out of session for weeks, leaving Arizona's newly elected congresswoman unsworn. Crisis, or opportunity?",
      "options": [
        {
          "text": "...with Russ Vought, he of Project 2025 Fame, to determine which of the many Democrat Agencies, most of which are a political SCAM, he recommends to be cut.",
          "source": "https://truthsocial.com/@realDonaldTrump/posts/115304455138824245",
          "date": "2025-10-01",
          "score": 7,
          "cat": "power",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "The appropriations process has to be less bipartisan.",
          "source": "https://www.politico.com/live-updates/2025/07/17/congress/russ-vought-appropriations-process-has-to-be-less-bipartisan-00459479",
          "date": "2025-07-17",
          "score": 5,
          "cat": "power",
          "next": "NEXT_TOPIC",
          "who": "Russell Vought, OMB Director"
        },
        {
          "text": "Standard practice... schedule a swearing in for the Representative-elect when the House returns to session.",
          "source": "https://popular.info/p/speaker-johnsons-unprecedented-democracy",
          "date": "2025-10",
          "score": 5,
          "cat": "power",
          "next": "NEXT_TOPIC",
          "who": "Mike Johnson, Speaker of the House"
        },
        {
          "text": "What is needed now is a long-term solution so we don't go through this drama every few months.",
          "source": "https://ca.movies.yahoo.com/republicans-begrudgingly-vote-debt-limit-004442191.html",
          "date": "2021-10-07",
          "score": 0,
          "cat": "power",
          "next": "NEXT_TOPIC",
          "who": "Chuck Schumer, Senate Minority Leader"
        }
      ]
    },
    {
      "id": "budget_snap",
      "prompt": "During the shutdown, November food-stamp benefits lapsed for 42 million people. Two federal judges ordered you to pay them; you posted that benefits would come only when Democrats reopened the government. Why did people go hungry -- and what do you say to the families who missed a month of food?",
      "options": [
        {
          "text": "SNAP BENEFITS, which increased by Billions and Billions of Dollars (MANY FOLD!) during Crooked Joe Biden's disastrous term in office, will be given only when the Radical Left Democrats open up government.",
          "source": "https://www.axios.com/2025/11/04/trump-snap-after-shutdown-ends",
          "date": "2025-11-04",
          "score": 8,
          "cat": "power",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "If we are given the appropriate legal direction by the Court, it will BE MY HONOR to provide the funding, just like I did with Military and Law Enforcement Pay.",
          "source": "https://truthsocial.com/@realDonaldTrump/posts/115471065919157533",
          "date": "2025-10-31",
          "score": 2,
          "cat": "power",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "...our country has to remain very liquid because problems, catastrophes, wars, could be anything. We have to remain liquid. We can't give everything away based on a number.",
          "source": "https://www.yahoo.com/news/articles/trump-goes-rant-staying-very-134934000.html",
          "date": "2025-11-07",
          "score": 5,
          "cat": "truth",
          "next": "NEXT_TOPIC"
        },
        {
          "text": "Middle-class economics works. Expanding opportunity works... We can't slow down businesses or put our economy at risk with government shutdowns or fiscal showdowns.",
          "source": "https://obamawhitehouse.archives.gov/the-press-office/2015/01/20/remarks-president-state-union-address-january-20-2015",
          "date": "2015-01-20",
          "score": 0,
          "cat": "power",
          "next": "NEXT_TOPIC",
          "who": "Barack Obama, 44th President"
        }
      ]
    }
  ]
});
