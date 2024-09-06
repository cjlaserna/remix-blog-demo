import data from "../content/data";

const SideQuests = () => {
  const { sidequests } = data;
  return (
    <>
      <main className="main-content flex flex-col items-center justify-center md:justify-items-stretch gap-y-2 mt-0 md:gap-x-2 ">
        <div className="s_box41 w-full !p-5">
          <p className="alagard animate-bounce rainbow rainbow_text_animated text-[2rem]">
            {sidequests.usernames} - Personal Side Quests
          </p>
          <p className="font-bold text-md pixel">
            Currently Playing: Palia, Overwatch 2, Cooking Simulator
          </p>
          <p className="font-bold text-md pixel">
            Owned Titles:
            {sidequests.titles.map((title) => (
              <>
                <span className="px-2 mx-1 bg-secondary">{title}</span>
              </>
            ))}
          </p>
          <p className="font-bold text-md pixel">Achievements:</p>
          {sidequests.achievements.map((achievement) => (
            <>
              <p className="px-2 my-2 bg-success text-white pixel">
                {achievement} <span className="float-right">&#9733;</span>
              </p>
            </>
          ))}
        </div>
      </main>
    </>
  );
};

export default SideQuests;
