import Image from "next/dist/client/image";
import classes from ".././util-css.module.css";
import Link from "next/link";
import Projbox from "../../components/projbox";

export default function Portfolio() {
  return (
    <>
      <div className="container">
        <div className="row mt-5 mx-3">
          <div className="col-9 d-flex  justify-content-center flex-column">
            <h1 className={`${classes.textrighteous} `}>
              These Projects where build from the ground up.
            </h1>
            <h4 className={`${classes.textdosis} `}>
              I must confess, It’s a work in progress... with juggling school
              work and family responsibilities, I have not had enough time to
              work on my portfolio.
            </h4>
          </div>

          <div className="col-3 d-flex align-items-center justify-content-end">
            <Image
              src="/dev_portfolio.png"
              alt="photo of michael tran in a hexigon"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
      <div className="container">
        <Projbox
          imagesrc="/thumbnail/mikesenh_thumbnail.png"
          imagealt="mikesenh mikes first project"
          codestack="HTML / CSS / JavaScript / React / Next / Boostrap"
          projectname="Personal Website: Mikesenh"
          date="3/29/2022 - 4/28/2022"
          summary="This is my first portfolio on the internet, using everything I know so far I created this near the end of my senior year of college. It has a mixture of react and next which was not taught in school as well as some experimentation of animation on some pages."
          figmalink="https://www.figma.com/file/GHFG6gClo9piNUAW6bRL6g/Project-JS%3A-Mikesenh?node-id=0%3A1"
          githublink="https://github.com/Tewinsky/mike-dev-project-done"
          sitelink=""
        />
        <Projbox
          imagesrc="/thumbnail/rpc_game_thumbnail.png"
          imagealt="rock paper scissors game!"
          codestack="HTML / CSS / TailwindCSS / Next / React / Figma / Make Confetti!"
          projectname="Rock > Paper > Scissors"
          date="5/12/2022 - 5/14/2022"
          summary="It's a simple game that I made before, but the purpose was to practice using TailwindCSS as well as learn conditional rendering with React and basic logic from JS! As practice makes perfect!"
          figmalink="https://www.figma.com/file/7DaAYx2OIuusLaChU2r3h1/RPS-Game?node-id=0%3A1"
          githublink="https://github.com/Tewinsky/rockpaperscissors-rps-game"
          sitelink="https://rockpaperscissors-rps-game.vercel.app/"
        />
        <Projbox
          imagesrc="/thumbnail/janadhi_thumbnail.png"
          imagealt="Janadhi & Company was a Company I worked for!"
          codestack="HTML / CSS / JavaScript / Bootstrap"
          projectname="Website: Janadhi & Company"
          date="1/29/2021 - 3/28/2021"
          summary="I had a school assignment to update an old company website, It was a mixture of contacting the owner of the site and doing good free work! it was a whole lot of design and after that a whole lot of coding."
          figmalink="https://www.figma.com/file/h82egEsVmUnZLWjlcVmKCg/Janadhi-%26-Company-Design?node-id=0%3A1"
          githublink=""
          sitelink="https://janadhi.com/V9/index.html"
        />

        <Projbox
          imagesrc="/thumbnail/pokedex_thumbnail.png"
          imagealt="pokedex"
          codestack="HTML / CSS / JS / TailwindCSS / Next / React / Pokedex API"
          projectname="Pokemon Pokedex"
          date="5/16/2022 - 5/17/2022"
          summary="More practice with TailwindCSS. I also learn how to properly fetch things from API and create a page for each Pokemon!"
          figmalink=""
          githublink=""
          sitelink="https://pokedex-api-calling-1gs767015-tewinsky.vercel.app/"
        />

        <Projbox
          imagesrc="/thumbnail/3Dpizza_thumbnail.png"
          imagealt="3d pizza project"
          codestack="Spline / 3D Model"
          projectname="3D Pizza Project"
          date="5/16/2022 - 5/17/2022"
          summary="I'd just learned how to 3D model, here it is! (these 3D models can be deploy on websites)"
          figmalink=""
          githublink=""
          sitelink="https://app.spline.design/file/a3b31d2a-4d91-4c5e-82b0-798f37de221c"
        />

        <Projbox
          imagesrc="/thumbnail/corestrength_thumbnail.png"
          imagealt="UX UI of Core Strength"
          codestack="Figma / Only Design / UX / UI"
          projectname="UX Assignment: CoreStrength"
          date="1/29/2021 - 3/28/2021"
          summary="Core Strength was a final assignment for one of my UX classes where they simulated a client and I as the UX Designer made a finished prototype from the wireframe stage to the finished product."
          figmalink="https://www.figma.com/file/sVCFmKHJGZwEnHjeQlPmYK/Final-Prototype-Done?node-id=302%3A5"
          githublink=""
          sitelink=""
        />
        <Projbox
          imagesrc="/thumbnail/starway_thumbnail.png"
          imagealt="starway a fictional design I had on the fly"
          codestack="Figma / Only Design / UX / UI"
          projectname="Just Web Designing: Starway"
          date="4/26/2022 - 4/28/2022"
          summary="Starway was something fun I was in the middle of designing, there is no client, I'm not making this for anyone. It is just a fun little design moment for me!"
          figmalink="https://www.figma.com/file/ezHQDY7Kiqn19O5Stv2sUy/Project-JS%3A-StarWay?node-id=6%3A2"
          githublink=""
          sitelink=""
        />

        <Projbox
          imagesrc="/thumbnail/shepherd_thumbnail.png"
          imagealt="probate shepherd member probate attorneys"
          codestack="Figma / Only Design / UX / UI / Contract"
          projectname="Client Design: Probate Shepherd"
          date="2/29/2022 - 4/01/2022"
          summary="I was paid to design a website, and work with a client to get the perfect prototype! That's one of my real-world experiences so far."
          figmalink="https://www.figma.com/file/uCbOoFhwCsL49kquaXZCAM/Untitled?node-id=0%3A1"
          githublink=""
          sitelink=""
        />
      </div>
    </>
  );
}
