(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{81:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return h})),a.d(t,"default",(function(){return d}));var n=a(2),o=a(6),i=(a(0),a(94)),r={slug:"its a brand new world",title:"Its A Brand New World",author:"Banzi Kubheka",author_title:"Junior Software Development",author_url:"https://github.com/kubzie17",author_image_url:"https://avatars1.githubusercontent.com/u/2055384?v=4",tags:["hola","docusaurus"]},s={permalink:"/blog/its a brand new world",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/blog/2020-10-24-Its a brand new world.md",source:"@site/blog\\2020-10-24-Its a brand new world.md",description:"Having joined Glasswall in September, I have found it to be quite a relaxed environment, even with the pressure of the IQT November deadline. Before joining Glasswall, I was working in the railway industry as a Project Engineer for four and a half years, so goes without saying that I had no software experience although I have had exposure to a couple of the programming languages. I was quite nervous but excited during my first couple of weeks. It is one thing playing around in my spare time with Arduino and VS at home, but it's another working with software as a profession. I was introduced to TFS and using the branching strategy to create my branch safely and correctly.",date:"2020-10-24T00:00:00.000Z",tags:[{label:"hola",permalink:"/blog/tags/hola"},{label:"docusaurus",permalink:"/blog/tags/docusaurus"}],title:"Its A Brand New World",readingTime:4.54,truncated:!0,nextItem:{title:"New Boy in Town",permalink:"/blog/new boy in town"}},h=[],l={rightToc:h};function d(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Having joined Glasswall in September, I have found it to be quite a relaxed environment, even with the pressure of the IQT November deadline. Before joining Glasswall, I was working in the railway industry as a Project Engineer for four and a half years, so goes without saying that I had no software experience although I have had exposure to a couple of the programming languages. I was quite nervous but excited during my first couple of weeks. It is one thing playing around in my spare time with Arduino and VS at home, but it's another working with software as a profession. I was introduced to TFS and using the branching strategy to create my branch safely and correctly."),Object(i.b)("p",null,"Following on from that, I learned about the BDDL's, what they are, what they do and eventually create one of my own BDD files and run it. Once I got the hang of it I progressed to code generation and creating a camera, during which I got to learn about batch files and create one. Until then, I had never even heard of the batch file, so to me, this was fascinating, given what you can do or what you can get the batch file to do generally, not just for the filetype processor.\nThe biggest early challenge I faced was then adding that camera to the code. With guidance from several team members, however, I managed to gather all the files I would have to edit in order to create entry points include the new file type processor. During this period, the company had a massive looming deadline which inevitably required all hands on deck. It was at this point I feel my progress and development picked up.\nI was brought in and tasked with creating two SDK wrappers, one C#, and one python wrapper. Given my experience and background, to me, this was like being chucked in the deep end. It was a challenge I relished and felt I could learn and develop quicker this way to become a productive and contributory member of the team. Again, I had no previous software experience, so the first thing I did was look into what wrappers are, which didn't take long to find out. But to make sure I grasped the idea of it, I started creating small wrapper test scripts. For a guideline, I used the classic wrapper codes, but those familiar with the Classic and Core2, will be aware of the vast difference between the two products, specifically the new API calls in core 2. As mentioned, I relished the challenge, so I was too eager to get stuck in, which turned out to be a hindrance.\nThe first set of API calls I had made really showed a lack of understanding as they actually did nothing, they weren't returning anything. That's when the skills of the previous role kicked in, to research and understand the goal, then work backward sort of creating a map. I looked at the API documentation to understand exactly what each API call does, what parameters it takes and what it returns. Dealing with memory API calls was particularly challenging on python. What I found was that the output files from the memory API calls were producing corrupt files, although they looked fine i.e the file size was consistent with the output of the files produced by the other wrappers for the same API calls. Long story short, after some extensive investigation into it and help from fellow junior, we found the cause of the problem to be using c_char_p instead of c_void_p as the arg type for the memory buffers. Both the wrappers were tested on Linux as well and they functioned as expected.\nThe next task after the wrappers was to create two installers, one for Windows and one for Linux. Honestly speaking, the one for windows was not challenging, using NSIS made it simple. However, the same cannot be said about the Linux installer. Linux uses the RPM package manager which again, I had never heard of so I was not familiar with it. Fortunately, I had the installer used for classic to use as a guideline which helped immensely, although it did take me a few tries, i.e.; installing, checking if it installed correctly, then un-installing until I got it right.\nIn the short span of two months being here, I have learned quite a bit, especially given the fact there was no previous experience at all. I found that being thrown in and given tasks that were beneficial to the company (wrappers and installers all needed for the final release), also benefited me in terms of my personal development and gradually getting my head around and understanding the product. But this is just the tip of the iceberg, I still have a lot of learning and developing to do and learning the correct terminologies. I feel I'm in the right company with the right people for that, as some have already helped me immensely by asking me questions which will lead me to the answer and help me understand rather than just giving me the answer which, in terms of progress and understanding, would be counter-productive. The switch from Project engineering to Software development has been a big switch with a total change of pace, but it is a switch I do not regret as, despite challenges and all, I do enjoy what I'm doing."))}d.isMDXComponent=!0}}]);