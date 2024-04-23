import ReactLoading from "react-loading";

export default function Loading() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <ReactLoading type="balls" color="#DC143C" height={800} width={800} />
      <ReactLoading type="spin" color="#DC143C" height={800} width={800} />
      <ReactLoading type="balls" color="#DC143C" height={800} width={800} />
    </div>
  );
}
