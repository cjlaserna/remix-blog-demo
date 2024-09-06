import Navigation from "../content/Navigation";
import CardComponent from "../component/js/CardComponent";
import data from "../content/data";

const Projects = () => {
  const projectData = data.projects;
  return (
    <>
      <main className="main-content grid grid-cols-1 gap-10 md:grid-cols-2 h-full">
        {projectData.map((project) => (
          <CardComponent
            key={project.title}
            title={project.title}
            imageSrc={project.imgSrc}
            desc={project.desc}
            src={project.src}
            langs={project.langs}
          />
        ))}
        <div className="figure-wrapper">
          <div className="text-center flex flex-row gap-x-1 justify-end m-2 pixel z-10">
            <p className="pixel block">That's it for now!</p>
          </div>
        </div>
        <div className="h-[50px]"></div>
      </main>
    </>
  );
};

export default Projects;
