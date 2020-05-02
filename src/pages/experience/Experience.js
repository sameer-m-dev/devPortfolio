import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ExperienceAccordion from '../../containers/experienceAccordion/ExperienceAccordion.js';
import "./Experience.css";
import { Fade } from "react-reveal";

const experience = {
	title: "Past Experiences",
	subtitle: "",
	description:
		"I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
	header_image_path: "experience.svg",
	sections: [
		{
			title: "Work",
			experiences: [
				{
					title: "Data Scientist",
					company: "Headstrait",
					company_url: "https://www.linkedin.com/company/headstrait/",
					logo_path: "hs_logo.png",
					duration: "April 2019 - Present",
					location: "Mumbai, Maharashtra",
					description:
						"Working on projects that span from Supervised & Unsupervised learning to NLP & Deep Learning. Data Wrangling/Munging, Data Exploration, Data Transformation, Feature Extraction, Feature Selection, Web Scraping. Predictive Analysis using Python and R Created a PoC for a Voice Banking Application capable of performing banking transactions based on only voice commands. Model Maintenance and Hyper-parameter Tuning. Build Supervised and Unsupervised ML models on Spark via PySpark. Use Elastic Stack for Log Analysis and Nagios for Infrastructure. Monitoring Developed REST API Endpoints using Flask for querying data in MongoDB and Postgres. Created and Deployed production grade, fault tolerant, redundantapplications on the Cloud (AWS, GCP, Heroku) Build fully automated CI/CD Pipelines on the cloud. Tools and frameworks used: Keras, Tensorflow, Python, ReactJS, NodeJS, ELK, Nagios, Docker, Jenkins, Jira, SonarQube, MongoDB, Postgres, Spark, Hadoop",
					color: "#9b1578"
				},
				{
					title: "Machine Learning Intern",
					company: "Olcademy",
					company_url: "https://www.linkedin.com/company/the-olcademy/",
					logo_path: "olcademy.png",
					duration: "Feb 2019 - May 2019",
					location: "Mumbai, Maharashtra",
					description:
						"Constructed a Toxic Sentence Analyzer that was able to achieve 97.4% accuracy and a Sentiment Analysis Model using Deep Learning for the company's website. Work on PHP and SQL to improve the back-end of the company's website. Curating databases and well as re-structuring them Research on various topics such as Neural Networks, NLP, Recommender Systems",
					color: "#fc1f20"
				},
				{
					title: "SEO Intern",
					company: "SkyBless Pvt. Ltd.",
					company_url: "https://www.linkedin.com/company/skybless/",
					logo_path: "skybless.png",
					duration: "July 2018 - Aug 2018",
					location: "Mumbai, Maharashtra",
					description:
						"Use Google Analytics and similar tools to curate the content of the website in order to increase its rank on Google Search. Help the organization achieve its SEO goals",
					color: "#9b1578"
				}
			]
		}
	]
};

class Experience extends Component {
	render() {
		return (
			<div className="experience-main">
				<Header />
				<div className="basic-experience">
					<Fade bottom duration={1000} distance="40px">
						<div className="experience-heading-div">
							<div className="experience-heading-img-div">
								<img
									src={require(`../../assests/images/${experience["header_image_path"]}`)}
								    alt=""
								/>
							</div>
							<div className="experience-heading-text-div">
								<h1 className="experience-heading-text">{experience.title}</h1>
								<h3 className="experience-heading-sub-text">
									{experience["subtitle"]}
								</h3>
								<p className="experience-header-detail-text subTitle">
									{experience["description"]}
								</p>
							</div>
						</div>
					</Fade>
				</div>
				<ExperienceAccordion sections={experience["sections"]} />
				<Footer />
			</div>
		);
	}
}

export default Experience;
