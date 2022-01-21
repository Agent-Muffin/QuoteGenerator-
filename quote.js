function nonono(){
    var quoteArray = ["Love For All, Hatred For None.<br/> – Khalifatul Masih III",
    "Change the world by being yourself.<br/> – Amy Poehler",
   " Every moment is a fresh beginning.<br/> – T.S Eliot",
    "Never regret anything that made you smile.<br/> – Mark Twain",
    "Die with memories, not dreams.<br/> – Unknown",
    "Aspire to inspire before we expire.<br/> – Unknown",
    "Everything you can imagine is real. <br/>– Pablo Picasso",
   " Simplicity is the ultimate sophistication.<br/> – Leonardo da Vinci",
   " Whatever you do, do it well.<br/> – Walt Disney",
   " What we think, we become.<br/> – Buddha",
    "All limitations are self-imposed.<br/> – Oliver Wendell Holmes",
    "Tough times never last but tough people do.<br/> – Robert H. Schiuller",
    "Problems are not stop signs, they are guidelines.<br/> – Robert H. Schiuller",
    "One day the people that don’t even believe in you will tell everyone how they met you. <br/>– Johnny Depp",
    "If I’m gonna tell a real story, I’m gonna start with my name.<br/> – Kendrick Lamar",
    " If you tell the truth you don’t have to remember anything<br/> – Mark Twain",
    "Have enough courage to start and enough heart to finish.<br/> – Jessica N. S. Yourko",
    " Hate comes from intimidation, love comes from appreciation.<br/> – Tyga",
    " I could agree with you but then we’d both be wrong.<br/> – Harvey Specter",
    " Oh, the things you can find, if you don’t stay behind.<br/> – Dr. Seuss"   
    ]
    var randomIndex = Math.floor(Math.random()*20);
    document.querySelector('.text').innerHTML = quoteArray[randomIndex];
}