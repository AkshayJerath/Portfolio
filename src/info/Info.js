import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import { FaFileDownload } from "react-icons/fa";

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
    firstName: "Akshay",
    lastName: "Jerath",
    initials: "AJ", 
    position: "a want to be a Cybersecurity Analyst",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
    miniBio: [
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

    portfolio: [ 
        {
            title: "2 Factor Authentication",
            source: "https://github.com/MrFYA/2-Factor-Authentication",
            image: mock1
        },
        {
            title: "Biometric Attendance Management System",
            source: "https://github.com/flamekiller22/Biometric-Attendance-Management-System",
            image: mock2
        },
    ]
}
