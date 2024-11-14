export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Writings", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Social App (Threads)",
    description: "Inside The Hub",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Threads - A social app",
    des: "Threads is a full-stack social app to posts yours best writings and follow your friends !",
    img: "/threads-mockup.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/next.svg"],
    link: "https://threadsblog.netlify.app/",
  },
  {
    id: 2,
    title: "Kerdos - A colloborative docs app",
    des: "Create your documents with realtime colloborative features.",
    img: "/thekerdosdocs-mockup.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://kerdoslivedocs.vercel.app/",
  },
  {
    id: 3,
    title: "College Website",
    des: "A live website I made for my college, all details included with sleek design.",
    img: "/collegewebsite-mockup.png",
    iconLists: ["/re.svg", "/tail.svg"],
    link: "https://loyolahighschoolpune.com/",
  },
  {
    id: 4,
    title: "Brainwave - An AI saas website",
    des: "A modern UX design showcasing the premium ai saas features",
    img: "/brainwave-mockup.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://brainwave-livid-three.vercel.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Having too many options can quietly undermine your potential by creating decision paralysis and distraction. When overwhelmed with choices, we often hesitate, fearing we'll miss out on something better, which dilutes our focus and limits progress. By committing to fewer paths, we invest more time, effort, and attention, leading to deeper skill development and greater satisfaction. This 'less is more' approach forces us to prioritize quality over quantity, allowing us to excel in areas that truly matter. Embracing fewer choices means saying no to distractions, staying focused on clear goals, and giving ourselves a real chance to grow.",
    name: "Arin Gawande",
    title: "Less is more",
  },
  {
    quote:
      "“Networking, Not Pitching”: true networking is about building authentic connections, not pushing a sales pitch. When you focus on getting to know people, understanding their goals, and sharing genuine interests, you create trust and rapport that outlasts any quick pitch. Unlike a pitch, which often feels forced and self-serving, networking allows for mutual growth and exchange. People remember authentic interactions and are more likely to support someone they know and respect. So, approach networking with curiosity and openness, and let the relationship develop naturally—it’s the long game that brings lasting connections and unexpected opportunities.",
    name: "Arin Gawande",
    title: "Networking ! Not Pitching",
  },
  {
    quote:
      "Effective communication is about clarity, listening, and empathy. Start by organizing your thoughts and being concise—get to the point without overwhelming details. Practice active listening by focusing fully on the speaker and responding thoughtfully. Use open body language and maintain eye contact to show engagement. Empathy is key: understand the other person's perspective, and tailor your message to address their needs or concerns. Avoid jargon or complicated terms, and ask questions to confirm understanding. Effective communication isn’t just about speaking well; it’s about making others feel heard, respected, and open to the message you’re sharing.",
    name: "Arin Gawande",
    title: "Better Communication",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Web Intern",
    desc: "Assisted in the development of a website React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Web-Dev Freelancer",
    desc: "Developing websites for clients that actually work.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Building an agency",
    desc: "Growing my AI Automations agency, helping businesses automate workflows.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Content Writer",
    desc: "I write about my learnings, productivity tips and start-up case-studies on Linkedin.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Arin7712"
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://www.instagram.com/arin.gawande/"
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/arin-gawande-134182316/"
  },
];
