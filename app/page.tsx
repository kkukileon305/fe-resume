import { createClient } from "@/app/utils/supabase/server";

const Page = async () => {
  const sb = await createClient();

  const { data: resume, error } = await sb
    .from("resumes")
    .select(
      "*, projects!resume_id(*), portfolios!resume_id(*), educations!resume_id(*)"
    )
    .eq("id", 1)
    .single<Resume>();

  console.log(error);

  if (!resume) {
    return <></>;
  }

  return (
    <>
      <section id="profile">
        <div className="max-w-4xl mx-auto p-2">
          <h2>{resume.name}</h2>

          <div className="flex gap-4 flex-wrap">
            <p>{resume.phone_number}</p>
            <p>{resume.email}</p>
          </div>

          <p className="whitespace-pre-wrap">{resume.introduce}</p>
        </div>
      </section>

      <section id="portfolios">
        <div className="max-w-4xl mx-auto p-2">
          <h3>포트폴리오</h3>

          <ul>
            {resume.portfolios.map((pf) => (
              <li key={pf.id}>
                <p>{pf.title}</p>

                <p>{pf.url}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="skils">
        <div className="max-w-4xl mx-auto p-2">
          <h3>기술 스택</h3>

          <ul className="flex gap-4 flex-wrap">
            {resume.stacks.map((stack) => (
              <li key={stack}>
                <p>{stack}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="projects">
        <div className="max-w-4xl mx-auto p-2">
          <h3>프로젝트</h3>

          <ul className="flex gap-4 flex-wrap">
            {resume.projects.map((project) => (
              <li key={project.id}>
                <div>
                  <p>{project.title}</p>
                  <p>{project.team_name}</p>
                  <p>{project.date}</p>
                </div>

                <div>
                  <p>한줄 소개</p>
                  <p>{project.introduce}</p>
                </div>

                <div>
                  <p>Deploy</p>
                  <p>{project.deploy_url}</p>
                  <p>GitHub</p>
                  <p>{project.github_url}</p>
                </div>

                <div>
                  <p>기술 스택</p>
                  {project.tech_stacks}
                </div>

                <div>
                  <p>구현 및 이슈 해결</p>
                  <p>{project.issues}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="educations">
        <div className="max-w-4xl mx-auto p-2">
          <h2>교육</h2>

          <ul>
            {resume.educations.map((edu) => (
              <li key={edu.id}>
                <p>{edu.title}</p>
                <p>{edu.desc}</p>
                <p>{edu.date}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export interface Resume {
  id: number;
  created_at: Date;
  name: string;
  phone_number: string;
  email: string;
  github: string;
  introduce: string;
  stacks: string[];
  image: null;
  introduce_detail: null;
  view_count: number;
  position: string;
  projects: Project[];
  portfolios: Portfolio[];
  educations: Education[];
}

export interface Education {
  id: number;
  date: string;
  desc: string;
  title: string;
  resume_id: number;
  created_at: Date;
}

export interface Portfolio {
  id: number;
  url: string;
  title: string;
  resume_id: number;
  created_at: Date;
}

export interface Project {
  id: number;
  date: string;
  title: string;
  issues: null;
  introduce: string;
  resume_id: number;
  team_name: string;
  created_at: Date;
  deploy_url: string;
  github_url: string;
  head_count: null;
  tech_stacks: string[] | null;
}

export default Page;
