import Navigation from "../content/Navigation";
import pfp from "../component/pfp.jpg";
import data from "../content/data";

const Profile = () => {
  const { user, characterDescription } = data;
  return (
    <>
      <header className="header"></header>
      <main className="main-content flex flex-col items-center justify-center md:justify-items-stretch gap-y-2 mt-0 md:flex-row md:gap-x-2 ">
        <div className="!m-0 !p-0 flex flex-col items-center justify-center h-full md:items-end md:justify-end">
          <div class="s_box41 !m-0 h-full overflow-auto">
            <p className="text-center alagard">{user.name}</p>
            <div class="box-inner">
              <div className="avatar">
                <div className="mask mask-squircle">
                  <img src={pfp} alt="Profile" />
                </div>
              </div>
            </div>
            <div className="p-3">
              <p className="alagard text-md">Industry Skills</p>
              {data.skills.map((skill) => (
                <div>
                  <div
                    key={skill}
                    className="badge badge-neutral pixel inline float-left mr-1 mb-1"
                  >
                    {skill}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div class="s_box41 text-lg pixel overflow-scroll h-full !m-0">
          <p className="alagard ml-3">Character Information</p>
          <div class="box-inner" />
          <div className="p-3">
            <div className="text-[1rem] pixel leading-none grid grid-cols-2 py-1">
              <p>
                <b>Affiliation:</b> {user.affiliation}
              </p>
              <p>
                <b>Expected Grad. Year:</b> {user.expectedGradYear}
              </p>
              <p>
                <b>Discipline:</b> {user.discipline}
              </p>
              <p>
                <b>Minor Discipline:</b> {user.minor}
              </p>
            </div>
            <p>{characterDescription.replace(/\n/g, `\n\n`)}</p>
            <a
              href="https://docs.google.com/document/d/1VK5QTNg_zJnfUjKXHFQKk6ayrq7-5vH_f9s3N3AujAo/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="badge badge-lg badge-primary text-white float-right hover:underline"
            >
              View My Resume
            </a>
          </div>

          <div class="box-inner"></div>
          <div className="p-3 flex flex-col gap-y-2 pixel">
            <div>
              <p className="alagard">Completed Classes</p>
              <div className="grid grid-cols-2 gap-1 md:flex">
                {data.courses.past.map((course) => (
                  <div key={course} className="badge badge-neutral">
                    {course}
                  </div>
                ))}
              </div>
              <p className="alagard">Classes in Progress</p>
              <div className="grid grid-cols-2 gap-1 md:flex">
                {data.courses.current.map((course) => (
                  <div key={course} className="badge badge-neutral">
                    {course}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Profile;
