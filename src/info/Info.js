import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import { FaFileDownload } from "react-icons/fa";
/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Akshay",
    lastName: "Jerath",
    initials: "AJ", // the example uses first and last, but feel free to use three or more if you like.
    position: "a want to be a Cybersecurity Analyst",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'Fueled by Tea'
        },
        {
            emoji: '🌎',
            text: 'based in the India'
        },
        {
            emoji: "📖",
            text: "Student at Vellore Institute of Technology,Bhopal"
        },
        {
            emoji: "📧",
            text: "akshayjerath02@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.facebook.com/profile.php?id=100004751234904",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://www.instagram.com/akshay.jerath/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/MrFYA",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/akshay-jerath-236b85214/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com/JerathAkshay",
            icon: "fa fa-twitter",
            label: 'twitter'
        },
        {
            link: "https://drive.google.com/file/d/1zzokTApjCTtCqMnpfaKWWzzKBT8cdhwS/view?usp=share_link",
            icon: FaFileDownload,
            label: 'Resume'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Akshay. I'm a student at Vellore Institute Of Technology(Bhopal), currently learning B.Tech.Computer Science and Engineering with (Specialization in Cyber security and Digital Forensics).Fully committed to my degree trying to learn from various experience I have had my time in the college. Trying to make the best of what Ican learn in college years.You should hire me!",
    skills:
        {
            proficientWith: ['Python', 'Java', 'C++', 'github','Computer Networking'],
            exposedTo: ['bash', 'Golang', 'Ethical Hacking']
        }
    ,
    hobbies: [
        {
            label: 'Reading Books',
            emoji: '📖'
        },
        {
            label: 'Lawn Tennis',
            emoji: '🎾'
        },
        {
            label: 'Finance',
            emoji: '🎥'
        },
        {
            label: 'Cooking',
            emoji: '🌶'
        },
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "2 Factor Authentication",
            source: "https://github.com/MrFYA/2-Factor-Authentication", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Biometric Attendance Management System",
            source: "https://github.com/flamekiller22/Biometric-Attendance-Management-System",
            image: mock2
        },
    ]
}