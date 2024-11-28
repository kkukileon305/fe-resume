import LogInOut from "@/app/components/LogInOut";
import { createClient } from "@/app/utils/supabase/server";

const Header = async () => {
  const sb = await createClient();

  const {
    data: { user },
  } = await sb.auth.getUser();

  return (
    <header className="bg-white shadow sticky top-0">
      <div className="max-w-4xl mx-auto flex justify-between p-2">
        <h1>Resume</h1>
        <LogInOut user={user} />
      </div>
    </header>
  );
};

export default Header;
