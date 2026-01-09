import { useState, useTransition } from "react";
import Contact from "./Contact";
import Post from "./Post";
import Service from "./Service";



function Home_file() {
  const [activeTab, setActiveTab] = useState("home");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (tab: any) => {
    startTransition(() => {
      setActiveTab(tab);
    });
  };

  const renderContent = () => {
    switch (activeTab) {
      case "contact":
        return <Contact />;
      case "post":
        return <Post />;
      case "service":
        return <Service />;
      default:
        return <Home_file />;
    }
  };
  return (
    <div>
      <button
        className="border-2 p-4 m-2"
        onClick={() => handleTabChange("home")}
      >
        Home
      </button>
      <button
        className="border-2 p-4 m-2"
        onClick={() => handleTabChange("contact")}
      >
        Contact
      </button>
      <button
        className="border-2 p-4 m-2"
        onClick={() => handleTabChange("post")}
      >
        Post
      </button>
      <button
        className="border-2 p-4 m-2"
        onClick={() => handleTabChange("service")}
      >
        Service
      </button>
      {isPending && <p>Loading...</p>}
      <div style={{ opacity: isPending ? 0.5 : 1 }}>
        {renderContent()}
      </div>
    </div>
  );
}

export default  Home_file;
