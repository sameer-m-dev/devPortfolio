/* Change this file to get your personal Porfolio */

const theme = {
  primaryTheme: "#6C63FF",
  secondaryTheme: "#55198b",
  easing: "cubic-bezier(0.645, 0.045, 0.355, 1)"
};

const greeting = {
	/* Your Summary And Greeting Section */
	title: "Hi all 👋 I'm Sameer",
	nickname: "Data Scientist",
	subTitle:
		"An Engineer with a strong programming background and experience of using predictive modeling, data mining algorithms, neural networks to solve challenging problems. Expertise in deploying production-grade environments on AWS and GCP in a cost-effective, secure and highly available manner. ",
	resumeLink:
		"https://drive.google.com/file/d/13yrSn_vkDnB2Szcn_eLMasdjwhYwkfVN/view?usp=sharing"
};

const socialMediaLinks = {
	/* Your Social Media Link */
	github: "https://github.com/sameer-m-dev/",
	linkedin: "https://www.linkedin.com/in/sameer-dev/",
	gmail: "sameer.devv@gmail.com",
	gitlab: "https://gitlab.com/sameer_dev",
	facebook: "https://www.facebook.com/sameer.dev2/",
	instagram: "https://www.instagram.com/sameer__dev/"
};

const skills = {
  data: [
    {
      title: "Data Science & AI",
      imagePath: "data_science.svg",
      skills: [
        "⚡ Developing highly scalable production ready models for various Deep Learning and Statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
        "⚡ Using ML algorithms to solve various data related problems",
        "⚡ Dashboarding and Visualization of data using multiple tools and frameworks"
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent"
          }
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000"
          }
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent"
          }
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB"
          }
        }
      ]
    },
    {
      title: "Full Stack Development",
      imagePath: "fullstack.svg",
      skills: [
        "⚡ Building resposive website front end using React-Redux",
        "⚡ Creating application backend in Node, Express & Flask",
        "⚡ Containerization and deployment of applications on the cloud using best practices"
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26"
          }
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6"
          }
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E"
          }
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB"
          }
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933"
          }
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837"
          }
        }
      ]
    },
    {
      title: "Cloud Infra-Architecture",
      imagePath: "cloud_infrastructure.svg",
      skills: [
        "⚡ Deployment of production-grade, fault-tolerant and highly scalable environments on cloud",
        "⚡ Experience of working on multiple cloud platforms",
        "⚡ Deploying deep learning models on cloud with millisecond inrefence/response times",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
        "⚡ Creation of CI/CD Pipelines as well as containerization of applications"
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4"
          }
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900"
          }
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6"
          }
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28"
          }
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791"
          }
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248"
          }
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6"
          }
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5"
          }
        }
      ]
    }
  ]
};

const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866"
      },
      profileLink: "https://www.hackerrank.com/sameer_devv"
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754"
      },
      profileLink: "https://www.hackerearth.com/@sameer__dev"
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF"
      },
      profileLink: "https://www.kaggle.com/sameerdev7"
    }
  ]
}

const degrees = {
  degrees : [
    {
      title: "A. P. Shah Institute of Technology",
      subtitle: "B.E. in Information Technology",
      logo_path: "apshah.png",
      alt_name: "APSIT",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, COA, AI etc",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development",
        "⚡ Elected President of Department of Information Technology for AY 2019-2020"
      ],
      website_link: "https://www.apsit.edu.in/home"
    },
    {
      title: "N. L . Dalmia High School",
      subtitle: "ISC - Computer Science",
      logo_path: "nldhs.png",
      alt_name: "N. L . Dalmia High School",
      duration: "2014 - 2016",
      descriptions: [
        "⚡ Took up Computer Science as my elective",
        "⚡ Built a replica of Apple Store on Java using BlueJ"
      ],
      website_link: "http://nldalmia.co/"
    }
  ]
}

const certifications = {
	certifications: [
		{
			title: "Applied Data Science with Python",
			subtitle: "- University of Michigan",
			logo_path: "uom.jpg",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/specialization/RH8ZYS6SEYRQ",
			alt_name: "Stanford University",
			color_code: "#000080"
		},
		{
			title: "Deep Learning",
			subtitle: "- Andrew Ng",
			logo_path: "deeplearning_ai_logo.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/specialization/certificate/9DEG8JTM35G7",
			alt_name: "deeplearning.ai",
			color_code: "#00000099"
		},
		{
			title: "Machine Learning with TensorFlow on GCP",
			subtitle: "- Qwiklabs",
			logo_path: "gcp_logo.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/specialization/certificate/CCL9JQHST35Z",
			alt_name: "GCP",
			color_code: "#4285F499"
		},
		{
			title: "Data Engineering on Google Cloud Platform",
			subtitle: "- Qwiklabs",
			logo_path: "gcp_logo.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/specialization/certificate/QM7SK2FB5PD2",
			alt_name: "GCP",
			color_code: "#4285F499"
		},
		{
			title: "Big Data",
			subtitle: "- University of California",
			logo_path: "uocsd.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/specialization/certificate/6LJGTSUC6AJL",
			alt_name: "University of California",
			color_code: "#FFBB0099"
		},
		{
			title: "EMC Academic Associate, Data Science and Big Data Analytics",
			subtitle: "- Dell EMC",
			logo_path: "emc.png",
			certificate_link:
				"https://www.certmetrics.com/dell/public/verification.aspx",
			alt_name: "Dell EMC",
			color_code: "#efffa4"
		},
		{
			title: "Certified Blockchain Architect™",
			subtitle: "- Blockchain Council",
			logo_path: "bc.png",
			certificate_link:
				"https://www.credential.net/13905785",
			alt_name: "Blockchain Council",
			color_code: "#2A73CC"
    },
    {
			title: "Architecting with Google Compute Engine ",
			subtitle: "- Qwiklabs",
			logo_path: "gcp_logo.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/specialization/certificate/N9DNMDXGQ9RK",
			alt_name: "GCP",
			color_code: "#4285F499"
		},
		{
			title: "Certified Blockchain Developer",
			subtitle: "- Blockchain Council",
			logo_path: "bc.png",
			certificate_link:
				"https://www.credential.net/13962912",
			alt_name: "Blockchain Council",
			color_code: "#2A73CC"
		},
		{
			title: "Machine Learning A to Z",
			subtitle: "- Udemy",
			logo_path: "udemy.svg",
			certificate_link:
				"https://www.udemy.com/certificate/UC-RTK08ZMX/",
			alt_name: "Udemy",
			color_code: "lightgrey"
		},
		{
			title: "Accelerated Computing with Cuda Python",
			subtitle: "- NVIDIA",
			logo_path: "nvidia.png",
			certificate_link:
				"https://courses.nvidia.com/certificates/27ee583b775447ea861821a85fc946cb",
			alt_name: "NVIDIA",
			color_code: "#efffa4"
		},
		{
			title: "Image Recognition with Neural Networks",
			subtitle: "- Udemy",
			logo_path: "udemy.svg",
			certificate_link:
				"https://www.udemy.com/certificate/UC-YUN25OG8/",
			alt_name: "Udemy",
			color_code: "lightgrey"
		}
	]
};

const openSource = {
  /* Your Open Source Section to View Your Github Pinned Projects */
  /* To know how to get github key look at readme.md */

  githubConvertedToken: "",
  githubUserName: "sameer-m-dev"
};

const bigProjects = {
  /* Some Big Projects You have worked with your company */
  title: "Big Projects",
  subtitle: "Some Startups and Tech companies that I have helped",
  projects: [
    {
      image: "https://static1.squarespace.com/static/5c3388c87e3c3a852e63c1d6/t/5e6549eab6faeb732c18251a/1585291537549/?format=1500w",
      link: "https://deviecoach.com//"
    }
  ]
};

const contactInfo = {
  title: "Contact Me ☎️",
  subtitle: "Discuss a project or just want to say hi? My inbox is open for all",
  number: "+91-8779170960",
  email_address: "sameer.devv@gmail.com"
};

export {
	theme,
	greeting,
	socialMediaLinks,
	skills,
	competitiveSites,
	degrees,
	certifications,
	openSource,
	bigProjects,
	contactInfo
};
