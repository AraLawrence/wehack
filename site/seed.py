from pipelines import QuoteTable

quotes = ["Yes, the universe had a beginning. Yes, the universe continues to evolve. And yes, every one of our body's atoms is traceable to the big bang and to the thermonuclear furnace within high-mass stars. We are not simply in the universe, we are part of it. We are born from it. One might even say we have been empowered by the universe to figure itself out — and we have only just begun.",
          "No matter who you are, engaging in the quest to discover where and how things began tends to induce emotional fervor—as if knowing the beginning bestows upon you some form of fellowship with, or perhaps governance over, all that comes later. So what is true for life itself is no less true for the universe: knowing where you came from is no less important than knowing where you are going.",
          "Cosmologists have plenty of ego — how can a person not be ego-driven when it's your job to deduce what brought the universe into existence? But without data, their explanations were just tall tales. In this modern era of cosmology, each new observation, each morsel of data wields a two-edged sword: it enables cosmology to thrive on the kind of foundation that so much of the rest of science enjoys, but it also constrains theories that people thought up when there wasn't enough data to say whether they were wrong or not. No science achieves maturity without it. Let there be cosmology.",
          "I don't want students who could make the next major breakthrough in renewable energy sources or space travel to have been taught that anything they don't understand, and that nobody yet understands, is divinely constructed and therefore beyond their intellectual capacity. The day that happens, Americans will just sit in awe of what we don't understand, while we watch the rest of the world boldly go where no mortal has gone before.",
          "I know that the molecules in my body are traceable to phenomena in the cosmos.",
          "People cited violation of the First Amendment when a New Jersey schoolteacher asserted that evolution and the Big Bang are not scientific and that Noah's ark carried dinosaurs. This case is not about the need to separate church and state; it's about the need to separate ignorant, scientifically illiterate people from the ranks of teachers.",
          "During our brief stay on planet Earth, we owe ourselves and our descendants the opportunity to explore—in part because it's fun to do. But there's a far nobler reason. The day our knowledge of the cosmos ceases to expand, we risk regressing to the childish view that the universe figuratively and literally revolves around us. In that bleak world, arms-bearing, resource-hungry people and nations would be prone to act on their 'low contracted prejudices.'' And that would be the last gasp of human enlightenment—until the rise of a visionary new culture that could once again embrace the cosmic perspective.",
          "George Bush, within a week of this [the 9/11 attacks], gave us a speech, attempting to distinguish 'we' from 'they' … and how does he do it?.... He says 'Our god' — of course it’s actually the same God — but that's a detail, lets hold that minor fact aside for the moment. Allah of the muslims is the same God as the God of the Old Testament so he says … 'Our God is the God who named the stars' … Here's the problem with his comment … The problem is: two-thirds of all stars that have names, have Arabic names. I don't think he knew this. That would confound the point that he was making.",
          "Do parallel universes exist? We don't know, uhm parallel universes are losing favor to the multiverse we have some cogent theoretical expectations that our universe might be just one of many spawned from this, sort of, this hyper-dimensional medium which we'll call the multiverse there's no data to support it but we have good theoretical premise to think that it's there and we have philosophical precedent we used to think Earth was special and unique. It wasn't, we got 8 .. 9 .. 8 planet we thought the Sun was special it's one of a hundred billion suns, the galaxy's special, no there's a hundred billion galaxies we have one universeor do we? The track record said why should there only be one? be open to the possibility that you don't live in the majoritylooking? universe that's out there Would a separate universe .. when you say 'different universe slightly different laws of physics which (that's what I'm asking) oh this is the fun part because if you find, if you manage to get a portal to another universe don't be the first one to volunteer to go through because your atoms are working in this universe if a slightly different law of physics.. you could implode, explode come out with three heads who knows?",
          "You don't take a dead cat to the vet. I mean you might, but why?",
          "Does it mean, if you don’t understand something, and the community of physicists don’t understand it, that means God did it? Is that how you want to play this game? Because if it is, here’s a list of things in the past that the physicists at the time didn’t understand [and now we do understand] [...]. If that’s how you want to invoke your evidence for God, then God is an ever-receding pocket of scientific ignorance that’s getting smaller and smaller and smaller as time moves on - so just be ready for that to happen, if that’s how you want to come at the problem.",
          "I'm optimistic. I see no longer people accepting fuzzy thinking in the world. The change is not that people aren't still saying under-informed things. The change is that if you're in power and you say something under-informed, there are people out there with a voice who will take you to task for having done so.",
          "The good thing about science is that it’s true whether or not you believe in it.",
          "Kids are never the problem. They are born scientists. The problem is always the adults. They beat the curiosity out of the kids. They out-number kids. They vote. They wield resources. That's why my public focus is primarily adults.",
          "My view is that if your philosophy is not unsettled daily then you are blind to all the universe has to offer.",
          "Some of the greatest poetry is revealing to the reader the beauty in something that was so simple you had taken it for granted.",
          "I am trying to convince people--not only the public, but lawmakers and people in power--that investing in the frontier of science, however remote it may seem in its relevance to what you're doing today, is a way of stockpiling the seed corns of future harvests of this nation... Advancing a frontier--history has shown--has advanced a culture ever since the industrial revolution got underway.",
          "Words that make questions may not be questions at all.",
          "If you start wielding a hammer, then all your problems look like nails. And maybe they’re not. Maybe it's more subtle than that. And so your toolkit has to be able to morph into what is necessary for what it is that you confront at that moment.",
          "I could just tell you it's all bunk; but then you wouldn't be empowered to understand why. Other than to quote, 'Oh, Doctor Tyson said...' And I never want you to quote me citing my authority as a scientist for your knowing something. If that's what you have to resort to I have failed as an educator. As an educator, it's my duty to empower you to think. So that you can go forth and think accurate thoughts about how the world is put together. Inoculating you against the [people] out there who will exploit your ignorance on anything they possibly can.",
          "Within one linear centimeter of your lower colon there lives and works more bacteria (about 100 billion) than all humans who have ever been born. Yet many people continue to assert that it is we who are in charge of the world.",
          "The problem, often not discovered until late in life, is that when you look for things like love, meaning, motivation, it implies they are sitting behind a tree or under a rock. The most successful people recognize, that in life they create their own love, they manufacture their own meaning, they generate their own motivation. For me, I am driven by two main philosophies, know more today about the world than I knew yesterday. And along the way, lessen the suffering of others. You'd be surprised how far that gets you.",
          "There are street artists. Street musicians. Street actors. But there are no street physicists. A little known secret is that a physicist is one of the most employable people in the marketplace - a physicist is a trained problem solver. How many times have you heard a person in a workplace say, 'I wasn't trained for this!' That's an impossible reaction from a physicist, who would say, instead, 'Cool. A problem I've never seen before. Let's see how I can figure out how to solve it!' Oh, and, have fun along the way.",
          "Life is too short for me to worry about something I have no control over that I don’t even know will happen. People ask ‘if Earth is going to be swallowed by a black hole or if there is some disturbance in the spacetime continuum should we worry about it?’. My answer is ‘no’ because you won’t know about it until it crosses your... your place in space-time. Your beats come to you when nature decides it’s the right time... be it the speed of sound, the speed of light, the speed of electrical impulses we will forever be victims of the time delay between information around us and our capacity to receive it.",
          "If you want to assert a truth, first make sure it's not just an opinion that you desperately want to be true.",
          "Knowing how things work is important, but I think that's an incomplete view of what science literacy is or, at least, should be. Science literacy is an outlook. It's more of a lens through which you observe what goes on around you.",
          "Creativity is seeing what everyone else sees, but then thinking a new thought that has never been thought before and expressing it somehow. It could be with art, a sculpture, music or even in science. The difference, however, between scientific creativity and any other kind of creativity, is that no matter how long you wait, no one else will ever compose 'Beethoven's Ninth Symphony' except for Beethoven. No matter what you do, no one else will paint Van Gogh's 'Starry Night.' Only Van Gogh could do that because it came from his creativity. Whereas in science, you can't just make stuff up and presume that it is a proper account of nature. At the end of the day, you have to answer to nature. Since everyone has nature to answer to, your creativity is simply discovering something about the natural world that somebody else would have eventually discovered exactly the same way. They might have come through a different path, but they would have landed in the same place. Even though we name theorems and equations after the people who discover them — Newton's laws of gravity, Kepler's laws of planetary motion — somebody else would have discovered them afterward. It's that simple. Your creativity is not a boundless creativity.",
          "Some of the most productive times in the histories of nations have been when they were badly stressed — economically, politically, culturally or socially. It's possible to be stressed to a point that more creativity is stimulated than would otherwise be the case. I think it is true that necessity is the mother of invention.",
          "If you ask adults how many teachers — out of the scores in elementary, middle school, high school, college and graduate school — made a singular impression on who and what they are, it's never more than three or four teachers. Everybody else is a distant second to this set. When we finally create a cloning machine, we should clone those teachers. Maybe that's 100 years from now, but that's at the top of my list. Until that happens, the educational system has not fully understood the causes and effects of achievement and success in life. There remains a culture that equates high grades with success in school and correlates success in school with success in life. That mentality is so deep within us that it may be inextricable from our behavior.",
          "After your first job, is anyone asking you what your GPA was? No, they don't care. They ask you: Are you a good leader? Do people follow you? Do you have integrity? Are you innovative? Do you solve problems? Somebody's got to do that homework and redesign the educational system so that it can actually train people to be successful in life. I think the greatest teachers are not the ones that are best trained at educational tactics. I don't know a person who's ever said, 'Boy, that teacher is so good! The teacher gives such good exams. That teacher gives such good homework sets!' No one has said that about a great teacher. That's not what people remember about the great teachers they've had.",
          "The best educators are the ones that inspire their students. That inspiration comes from a passion that teachers have for the subject they're teaching. Most commonly, that person spent their lives studying that subject, and they bring an infectious enthusiasm to the audience. I think many people have that enthusiasm, but they are prevented from being teachers because they didn't go through the teacher mill. Now you have teachers who have been through the teacher mill, yet they have no capacity to inspire anyone at all. It's the inspired student that continues to learn on their own. That's what separates the real achievers in the world from those who pedal along, finishing assignments.",
          "The great tragedy is that they're removing art completely, not because they're putting more science in, but because they can't afford the art teachers or because somebody thinks it's not useful. An enlightened society has all of this going on within it. It's part of what distinguishes what it is to be human from other life forms on Earth — that we have culture.",
          "Science is a cooperative enterprise, spanning the generations. It's the passing of a torch from teacher, to student, to teacher. A community of minds reaching back to antiquity and forward to the stars",
          "The Theory of Evolution, like the Theory of Gravity, is a scientific fact. Evolution really happened. Accepting our kinship with all life on earth is not only solid science, in my view, it's also a soaring spiritual experience.",
          "Halley shattered their monopoly, beating them at their own game. A game that no scientist had ever played before: Prophecy.",
          "Ibn al-Haytham was the first person ever to set down the rules of science.",
          "Once upon a time, people identified the god Neptune as the source of storms at sea. Today we call these storms hurricanes.... The only people who still call hurricanes acts of God are the people who write insurance forms.",
          "On Friday the 13th, April 2029, an asteroid large enough to fill the Rose Bowl as though it were an egg cup will fly so close to Earth that it will dip below the altitude of our communication satellites. We did not name this asteroid Bambi. Instead, we named it Apophis, after the Egyptian god of darkness and death.",
          "[L]et us not fool ourselves into thinking we went to the Moon because we are pioneers, or discoverers, or adventurers. We went to the Moon because it was the militaristically expedient thing to do.",
          "There's no greater sign of the failure of the American educational system than the extent to which Americans are distracted by the possibility that Earth might end on December 21, 2012. It's a profound absence of awareness of the laws of physics and how nature works. So they're missing some science classes in their training in high school or in college that would empower [them] to understand and to judge when someone else is basically just full of it. Science is like an inoculation against charlatans who would have you believe whatever it is they tell you.",
          "During our brief stay on planet Earth, we owe ourselves and our descendants the opportunity to explore — in part because it's fun to do. But there's a far nobler reason. The day our knowledge of the cosmos ceases to expand, we risk regressing to the childish view that the universe figuratively and literally revolves around us.",
          "I don't want students who could make the next major breakthrough in renewable energy sources or space travel to have been taught that anything they don't understand, and that nobody yet understands, is divinely constructed and therefore beyond their intellectual capacity. The day that happens, Americans will just sit in awe of what we don't understand, while we watch the rest of the world boldly go where no mortal has gone before.",
          "I am trying to convince people — not only the public, but lawmakers and people in power — that investing in the frontier of science, however remote it may seem in its relevance to what you're doing today, is a way of stockpiling the seed corns of future harvests of this nation.",
          "As an educator, it's my duty to empower you to think. So that you can go forth and think accurate thoughts about how the world is put together.",
          "Within one linear centimeter of your lower colon there lives and works more bacteria (about 100 billion) than all humans who have ever been born. Yet many people continue to assert that it is we who are in charge of the world.",
          "Does it mean, if you don’t understand something, and the community of physicists don’t understand it, that means God did it?... If that’s how you want to invoke your evidence for God, then God is an ever-receding pocket of scientific ignorance that’s getting smaller and smaller and smaller as time moves on.",
          "It's the inspired student that continues to learn on their own. That's what separates the real achievers in the world from those who pedal along, finishing assignments.",
          "Creativity is seeing what everyone else sees, but then thinking a new thought that has never been thought before and expressing it somehow.",
          "The universe is bigger than you are.",
          "Do not forget that Earth is really good at killing you… Ninety-seven percent of all the species on Earth that ever existed are now extinct… It’s our ingenuity, in spite of that fact, that prevents it.",
          "We live in a world where not everyone has the urge to help others… It is OK to encourage others to pull themselves up by the bootstraps, but if you do, just remember that some people have no boots.",
          "Not enough of us reflect on how modern civilization pivots on the discoveries of just a few intellectually restless people.",
          "You can neither cajole nor charm the laws of physics into agreeing with you if your ideas aren't based in objective realities",
          "Not that anybody asked, but the International Space Station travels four miles in 4/5 of a second.",
          "Good education is not what fills your head with facts but what stimulates curiosity. You then learn for the rest of your life.",
          "Merry Christmas to all. A Pagan holiday (BC) becomes a Religious holiday (AD). Which then becomes a Shopping holiday (USA).",
          "Whenever people have used religious documents to make accurate predictions about our base knowledge of the physical world, they have been famously wrong.",
          "Science is a philosophy of discovery. Intelligent design is a philosophy of ignorance.",
          "When your reasons for believing something are justified ad hoc, you are left susceptible to further discoveries undermining the rationale for that belief.",
          "Where ignorance lurks, so too do the frontiers of discovery and imagination.",
          "A scientist is just a kid who never grew up.",
          "Science literacy is how much do you still wonder about the world around you. What is your state of curiosity?",
          "You can’t just choose what is true and what isn’t.",
          "There’s so much to be impressed with in the universe. I don’t want you to be distracted by things in the universe that are not.",
          "I would encourage you to not become attached to the number of things. There’s no physics in the number of things.",
          "The missing skepticism is the problem.",
          "To make this journey, we’ll need imagination, but imagination alone is not enough, because the reality of nature is far more wondrous than anything we can imagine.",
          "There are many millions of living species of animals and plants, most of them still unknown to science. Think of that — we have yet to make contact with most of the forms of terrestrial life.",
          "Stars die and reborn […] They get so hot that the nuclei of the atoms fuse together deep within them to make the oxygen we breathe, the carbon in our muscles, the calcium in our bones, the iron in our blood. All was cooked in the fiery hearts of long vanished stars. … The cosmos is also within us. We’re made of star stuff. We are a way for the cosmos to know itself."]

q = QuoteTable()
for item in quotes:
    q.add_quote(item)
