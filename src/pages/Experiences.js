import Navigation from "../content/Navigation";
import CardComponent from "../component/js/CardComponent";
import data from "../content/data";

const Experiences = () => {
	const experienceData = data.experiences;
	return (
		<>
			<main className="main-content grid grid-cols-1 gap-10 md:grid-cols-2">
				{experienceData.map((experience) => (
					<CardComponent
						key={experience.title}
						title={experience.title}
						imageSrc={experience.imgSrc}
						desc={experience.desc}
						src={experience.src}
						langs={experience.langs}
					/>
				))}
				<div className="figure-wrapper">
					<div className="text-center flex flex-row gap-x-1 justify-end m-2 pixel z-10">
						<p className="pixel block">
							These are all of my favorite experiences. Looking forward to
							adding to the list!
						</p>
					</div>
				</div>
				<div className="h-[50px]"></div>
			</main>
		</>
	);
};

export default Experiences;
