import { useState, useEffect } from "react";
import ExampleComp from "./components/ExampleComp";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://api.coincap.io/v2/assets")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  if (!data) return <p>calma lá ne amigão</p>;


  return (
    
    <div>
      {Object.keys(data.data).map((key) => {
        return <ExampleComp key={key}  variant={data.data[key]} />;
      })}
    </div>
  );
}
