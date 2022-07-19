import { Link } from "remix";
import { useLoaderData } from "remix";
import styles from "~/styles/resume.css";
import { datoQuerySubscription } from "~/lib/datocms";
import { Image, useQuerySubscription } from "react-datocms";
import { responsiveImageFragment } from "~/lib/fragments";
import { Avatar, links as avatarLinks } from "~/components/Avatar";
import { Navbar } from "../components/Navbar";
import React from "react";
import Scrollbar from "../components/Scrollbar/Scrollbar";
import Contact from "../components/Contact/Contact";
import { json } from "remix";

export function links() {
	return [...avatarLinks(), { rel: "stylesheet", href: styles }];
}

export const loader = async ({ request }) => {
	datoQuery = await datoQuerySubscription({
		request,
		query: `
		{
			aboutMe {
				shortIntroduction
				about
				profilePicture {
					url
					alt
					title
				}
                email
                phone
			}
			experiences: allExperiences(orderBy: startDate_DESC) {
				job
				jobDescription
				jobEndDate
				startDate
				stillEmployedHere
				company
			}
			creativeSkills: allSkills(filter: {skillType: {eq: "creative"}}) {
				skillName
				skillLevel
				skillType
				skillLink
				skillTag
			}
			programmingSkills: allSkills(filter: {skillType: {eq: "technologies"}}) {
				skillName
				skillLevel
				skillType
				skillLink
				skillTag
			}
			languageSkills: allSkills(filter: {skillType: {eq: "languages"}}) {
				skillName
				skillLevel
				skillType
				skillLink
				skillTag
			}
			education: allEducations(orderBy: start_DESC) {
				school
                gpa
                start
                end
                additional
			}
            activity: allActivities(orderBy: start_DESC) {
				activity
                description
                start
                end
			}
		}
		`,
	});
	return json({
		ENV: {
			SERVICE_ID: process.env.SERVICE_ID,
			TEMPLATE_ID: process.env.TEMPLATE_ID,
			USER_ID: process.env.USER_ID,
		},
		datoQuery: datoQuery,
	});
};

export default function Index() {
	const {
		ENV: { SERVICE_ID: SERVICE_ID, TEMPLATE_ID: TEMPLATE_ID, USER_ID: USER_ID },
		datoQuery: datoQuery,
	} = useLoaderData();

	const datoQuerySubscription = datoQuery.datoQuerySubscription;
	const [filter, setFilter] = React.useState("programming");

	const {
		data: {
			aboutMe: { shortIntroduction, about, profilePicture, email, phone },
			experiences: [...jobs],
			creativeSkills: [...creativeSkills],
			programmingSkills: [...programmingSkills],
			languageSkills: [...languageSkills],
			education: [...education],
			activity: [...activities],
		},
	} = useQuerySubscription(datoQuerySubscription);

	function formatDate(date) {
		const month = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December",
		];

		const today = new Date(date);
		const dd = String(today.getDate()).padStart(2, "0");
		const mm = month[today.getMonth()];
		const yyyy = today.getFullYear();

		return mm + " " + dd + ", " + yyyy;
	}

	function skillMap() {
		switch (filter) {
			case "programming":
				return programmingSkills;
			case "creative":
				return creativeSkills;
			case "languages":
				return languageSkills;
			default:
				return programmingSkills;
		}
	}

	return (
		<div className="container" contenteditable="true">
			<div className="instructions p-5 my-2 w-full bg-neutral rounded">
				<Link to="/">
					<button class="btn mr-5 bg-primary hover:bg-primary-focus ">
						Go Back
					</button>
				</Link>
				<p className="inline"> Print this page: </p>
				<kbd class="kbd kbd-md">CTRL</kbd> + <kbd class="kbd kbd-md">P</kbd>
			</div>
			<div className="text-center my-4">
				<h1 className="text-xl font-bold">Catherine Laserna</h1>
				<p>Email: {email}</p>
				<p>
					Portfolio:{" "}
					<a href="https://cjlaserna.vercel.app"> clasernaj.vercel.app</a>
				</p>
			</div>
			<div class="avatar w-full">
				<p>{shortIntroduction}</p>
			</div>
			<div>
				<h2 className="text-lg font-bold text-center">Education</h2>
				{education.map((edu, index) => {
					return (
						<div className="my-3 page-break-after">
							<p className="text-md font-bold">
								{edu.school} {edu.gpa ? `- GPA: ${edu.gpa}` : ""}
							</p>
							<time className="mb-1 text-sm font-normal leading-none text-secondary-content">
								{formatDate(edu.start)}
								{edu.end ? ` - ${formatDate(edu.end)}` : ""}
							</time>
							{edu.additional ? <p>{edu.additional}</p> : ""}
						</div>
					);
				})}
			</div>
			<div>
				<h2 className="text-lg font-bold text-center">Job Experiences</h2>
				{jobs.map((job, index) => {
					return (
						<div className="my-3 page-break-after">
							<p className="text-md font-bold">
								{job.company} - {job.job}
							</p>
							<time className="mb-1 text-sm font-normal leading-none text-secondary-content">
								{formatDate(job.startDate)}
								{job.jobEndDate
									? ` - ${formatDate(job.jobEndDate)}`
									: job.stillEmployedHere
									? " - Present"
									: ""}
							</time>
							<p>{job.jobDescription}</p>
						</div>
					);
				})}
			</div>
			<div>
				<h2 className="text-lg font-bold text-center">Activities</h2>
				{activities.map((activity, index) => {
					return (
						<div className="my-3 page-break-after">
							<p className="text-md font-bold">{activity.activity} </p>
							<time className="mb-1 text-sm font-normal leading-none text-secondary-content">
								{formatDate(activity.start)}
								{activity.end ? ` - ${formatDate(activity.end)}` : ""}
							</time>
							{activity.description ? <p>{activity.description}</p> : ""}
						</div>
					);
				})}
			</div>
			<div className="page-break-after">
				<h2 className="text-lg font-bold text-center">Skills</h2>
				<div className="w-full">
					<div>
						{programmingSkills.map((skill, index) => {
							return (
								<>
									{skill.skillLevel !== "beginner" ? (
										<div className="my-1 inline float-left mx-1 badge ">
											<p className="m-0">{skill.skillName}</p>
										</div>
									) : (
										" "
									)}
								</>
							);
						})}
					</div>
					<div>
						{creativeSkills.map((skill, index) => {
							return (
								<>
									{skill.skillLevel !== "beginner" ? (
										<div className="my-1 inline float-left mx-1 badge ">
											<p className="m-0">{skill.skillName}</p>
										</div>
									) : (
										" "
									)}
								</>
							);
						})}
					</div>
					<div>
						{languageSkills.map((skill, index) => {
							return (
								<>
									{skill.skillLevel !== "beginner" ? (
										<div className="my-1 inline float-left mx-1 badge ">
											<p className="m-0">{skill.skillName}</p>
										</div>
									) : (
										" "
									)}
								</>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
