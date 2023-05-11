function viewBlog(ele) {

    opened = window.open("","Blog");

    console.log(window.location.pathname);
    var img = ele.parentElement.previousElementSibling.getAttribute("src");
    var desc = ele.previousElementSibling.innerHTML;
    var doc = ("<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">"+
        "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><title>Blog</title><style> body {background-image: url(\"../IMAGES/whitebg.jpg\");}"+
        "h1 {color: rgb(247, 179, 57);text-align: center;margin-bottom: 3%;padding: 1%;padding-bottom: 2%;border-bottom: 1px solid rgb(247, 179, 57);}"+
        "h2 {font-weight: bold;margin-left: 2%;}.mblog {padding: 3%;text-align: center;}img {width: 50%;}</style></head><body>"+
        "<h1>BLOGs</h1><div class=\"mblog\"><h2>"+desc+"</h2><img src="+img+" alt=\"blog\"><p>In her Starting Out In Tech series, WorkingNation Associate Producer & Project Manager Jaimie Stevens shares her"+
        "insight on what it takes to succeed in learning computer programming skills.WorkingNation’s Jaimie Stevens. There are a lot of blogs about tech — so many, in fact, that I’ve decided to"+
         "break the blog recommendations down into increments. This article, in particular, is meant to help you shape your coding ability. What can you read that’s specifically meant to improve your coding skills as a beginner?"+
        "Here are a couple of my favorites for you, for a variety of languages. CodePen Blog This is the first blog I used in my very first introduction to coding class with General Assembly.CodePen is an online community for testing and showcasing user-created HTML, CSS and JavaScript code snippets. It works by letting you create “pens,” which are sets of HTML, CSS, and JavaScript. It serves as an online code"+
        "editor and an open-source learning environment. CodePen is one of the largest communities for web designers to show their coding skills. NSHipster The blog brings a sense of humor and personality to learning more about Objective-C, Swift, and Cocoa."+
        "They have a strong team of writers and have a couple of publications out if you like what you see online. They also put together their own “NSHipster quizzes” so you can challenge yourself if you want to. Ray Wenderlich This blog is a great place to improve your skills in iOS, MacOS, Unity, Swift, and Apple Game"+ 
        "Frameworks. The blog has podcasts, as well as an extensive video tutorial collection for each of the aforementioned languages. A large team of authors, editors, subject matter experts, app reviewers, etc. power the site and their priority is to make it the most challenging topics easy for everyone to learn. The Ray"+
        "Wenderlich blog has a massive library of coding tutorials.CSS-Tricks When it was founded back in 2007, CSS-Tricks was primarily all about CSS. Since then, the blog has become all about web design and development. It provides you with video screencasts about HTML, Flexbox,"+
        "building games with JavaScript and more. It contains a section with complete guides ranging from table elements to jQuery to CSS Gradients, as well as an almanac that lists CSS selectors and properties. There is also a forum for comments and questions and a page for job postings as well. RELATED STORY: Side projects that will enhance"+
        "your programming skills</p></div></body> </html>");
    opened.document.write(doc);




}