import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function Expenses() {


  const navigage = useNavigate()

  useEffect(() => {
    console.log('sssss')
  }, [])

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Expenses</h2>
      <button onClick={() => {
        navigage("/expenses?id=1", {replace: true})
      }}>
        gooooo
      </button>
    </main>
  );
}