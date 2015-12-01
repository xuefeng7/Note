#CSC210 Proposal for Web App - Xnote

**Team Member**

1. Xuefeng Peng
2. Yuntao Zhou
3. Yiping Liang

[Xnote] http://xnote.parseapp.com

**Target audience**

1. Students who wants to sale their high quality notes for pocket money and reputation. 
2. Students who wants to get access to high quality notes for various courses and Ace those courses.  

**The issue Xnote intends to solve**

It is acknowledged that follow what professor is talking about interactively is one of the most important processes of acquiring knowledge efficiently. And it is not easy for us to both follow the step of the professor as well as take a neat and well organized note at the meantime. Many students are complaining that on one side if they just focus on interacting with the professor without taking a detailed note, it would be very struggling for them to do the review for exams later; however, on the other side, they can easily miss some important points from professor while taking notes. 
Imaging how sweet if there is a solution that allows students to 100 percent absolutely follow the professors in the classes and worrying nothing about notes. And after classes, students can always have perfect notes that contains the points that they want right in front of them. And Xnote is here for offering such solution. 

Xnote not only helps the students who demands for beautiful notes, but also takes care of those students who are willing to share their notes and earn monetary rewards at the same time. Students always throw away the notes after taking final of the course; and thus, the note resources that can be well employed to make extra benefits are wasted. With Xnote, students can share their new/old note at a push of the button. Once the note that meets high quality standard of Xnote, the note owner will have the bonuses in his/her pockets. 

**Details about what the Web offers**

Our web application is a platform for students who desire to sale notes for specific courses and students who demands great academic notes. For those who wants to sale their notes to our platform, they have to upload their notes for review before actually being released. The right of pricing those notes is fulfilled by Xnote. For those users who wants to buy notes, they have to sign up with email and courses they are taking for the current semester.  

All users, regardless using Xnote for the purpose of selling or buying notes, have to sign up with their emails. After signing in, each user can access to the course pages and read the preview version of notes uploaded by others. To view the full version of the notes, the users need to buy the privilege. Also, registered users can upload notes to the courses they are taking and earn the contracted price after the notes get approved.  

**How Xnote meet the minimum requirements**

1. allow users to create accounts and add new persistent data 
  * Each users will be required to sign in and update personal information like profile name,email address, password and currently taking courses.  

2. read data from the server and present it on a webpage 
  * From accessing the main course page to preview the note to purchase the note into repository, all these processes reach this goal. 

3. allow users to update their existing data 
  * Of course, Xnote will allow the users to change their profiles at any time. 

4. allow users to delete their own data and accounts 
  * Each purchased note could be removed to the trash can at any time.  

5. do all of the above without reloading the webpage (Ajax) 
  * Each step that involves the interaction with the server will update the information in a particular web page that a user is facing by JavaScript code. And the asynchronous process of talking with server will be invoked at the same time; thereby, even if the user does not reload anything, he/she will see the latest information he/she just has manipulated. 

**Why Xnote is unique and creative beyond simply meeting the minimum requirements**

Allow users to create account and manipulate their profile is just a small corner of our web application. The main part that involves high frequency and huge amount of data creating, updating and deleting. The experiences of using our web application can be mirrored as follow: 

![image of diagram]
(https://raw.githubusercontent.com/xuefeng7/Xnote/master/diagram.png)

After the user log in, the main page will display navigation of each selected courses and relative notes. Also,there will be a comment section under every notes, where users who purchase the notes can rate and make comments.  
For users who want to sell their notes, they first upload their note for review. Once their notes get approved, the money will be issued to their account. Also each user will have a selling repository which holds users' selling history. 

For web3.0 featured design, we have a thought to have a instantly changing best-sell note highlight for each course section. Since comments function has been designed for each note sold, we can combine the selling amount with the comments to evaluate each note’s value and popularity, to rank all the available notes of each course. The top three notes for each course will be elected to the frontpage for each course, represented in a rolling highlights or in some other ways.
Such highlight part could be refreshed by the server side automatically for every 3 minutes. The update will be handled by python code(or other program language) without getting any manipulations from browsers or users. The server side do all the calculations and evaluation of the records in our database for each note rank them for potential highlight.
The continuous changing highlight notes in the frontpage for each section may offer a more interactive element to the website we design.


